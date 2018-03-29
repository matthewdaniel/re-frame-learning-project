(ns portal.events
    (:require
        [day8.re-frame.async-flow-fx]
        [cljsjs.moment]
        [camel-snake-kebab.core :refer [->kebab-case]]
        [goog.string :refer [toSelectorCase toCamelCase]]
        [cljs.pprint :refer [pprint]]
        [day8.re-frame.http-fx]
        [portal.tutorials :refer [tutorial-steps]]
        [portal.helpers.misc :as h]
        [clojure.string :as s]
        [ajax.core :as ajax]
        [re-frame.core :as rf]
        [cljs.core.async :refer [<!]] [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn can-descend [val]
      (or (seq? val) (map? val) (vector? val)))

(defn snake-kebab-it
    "Recursively snake the keys of a vector / map"
    [obj]
    (if-not (map? obj)
        ; descend
        (let [test 1]
            (map snake-kebab-it obj))
        ; kebob the keys
        (let [obj2 (seq obj)]
            (->> obj2
                (map (fn [[param val]]
                      [(-> param (->kebab-case)) (if (can-descend val) (snake-kebab-it val) val)]))
                (into {})))))

(defn transform-ajax
    [& formatters]
    (assoc h/formatter :read #(-> %
                                ((:read h/formatter))
                                ((h/momentify '[:tokenExpires])))))




(defn connect-batch
    "Connect to the websocket and pipe through events"
    []
    (js/console.log "connecting")
    (let [con (aget js/window "hubConnection")
          batchWsApi (aget js/window "batchWsApi")
          server (aget batchWsApi "server")]
        (.on batchWsApi "listUpdate" #(rf/dispatch [:list-updated %]))
        (.on batchWsApi "notifyError" #(rf/dispatch [:list-update-error %]))

        (js/console.log "START!")
        (-> (js/window.hubConnection.start)
            (#(.done %
                    (fn [_]
                        ; store the connection sess-id
                        (rf/dispatch [:sess-id (aget con "id")])

                        ; tell the backend which batch we are subscribed to
                        (js/window.batch-subscribe "81294b8a-adfb-4687-8b4d-5f12540d3d59")

                        ; register ws actions
                        (rf/reg-event-db
                            :checkout-item
                            (fn [db [_ item-id]]
                                (js/window.batch-checkout "81294b8a-adfb-4687-8b4d-5f12540d3d59" item-id)
                                db))))))
        batchWsApi
        nil))
(rf/reg-event-db
    :toggle-items-legend
    (fn [db _]
        (assoc db :show-items-legend (not (:show-items-legend db)))))

(rf/reg-event-db
    :show-finalize-modal
    (fn [db _]
      (assoc db :modal {:header "Confirm Batch Finalize"
                         :ok #(rf/dispatch [:show-demo-disabled-modal])
                         :cancel #(rf/dispatch [:close-finalize-modal])
                         :body [:div
                                    [:p "By finalizing this batch you will loose access to it in the future."]
                                    [:p "Are you certain you would like to proceed?"]]})))

(rf/reg-event-db
    :show-demo-disabled-modal
    (fn [db _]
        (assoc db :modal {:header "Demo Disabled Feature"
                          :ok #(rf/dispatch [:close-modal])
                          :cancel #(rf/dispatch [:close-modal])
                          :body [:div
                                    [:h5 "Action disabled"]
                                    [:p "A few actions are being prevented during the demonstation modal."]]})))

(rf/reg-event-db
    :close-modal
    (fn [db _] (dissoc db :modal)))

      


(rf/reg-event-db
    :set-items-filter
    (fn [db [_ txt]]
        (assoc db :item-filter txt)))


(rf/reg-event-db
    :sess-id
    (fn [db [_ sess-id]]
        (assoc db :sess-id sess-id)))



(defn mine? [sess-id item]
    (= sess-id (:editing item)))


(defn someone-elses? [sess-id item]
    (and (not (mine? sess-id item)) (:editing item)))

(defn set-checkedout
    [sess-id]
    (fn
        [item]
        (assoc item :is-mine (mine? sess-id item) :is-someone-elses (someone-elses? sess-id item))))



(rf/reg-event-db
    :list-updated
    (fn [db [_ new-list]]
        (let [transformed (as-> new-list v
                            (js->clj v :keywordize-keys true)
                            (snake-kebab-it v)
                            (map (set-checkedout (:sess-id db)) v))
               mine (first (filter #(:is-mine %) transformed))]
            (rf/dispatch [:editing-fields (:id mine)])
            (assoc db
                    :batch-list transformed))))


(rf/reg-event-db
    :set-fields
    (fn [db [_ fields]]
      (assoc db :edit-fields (snake-kebab-it fields) :loading-fields false)))


(rf/reg-event-fx
    :forget-all-dirty-vals
    (fn [db _]
        (dissoc db :field-changes)))

(rf/reg-event-fx
    :editing-fields
    (fn [{:keys [db]} [_ item-id]]
        (if (not item-id)
            {:db (assoc db :loading-fields false :edit-fields [])}
            {:db (assoc db :loading-fields true)
             :http-xhrio {
                            :method :get
                            :uri (str "http://portal.blainsupply.com/apis/v1/edit-lists/81294b8a-adfb-4687-8b4d-5f12540d3d59/items/"item-id"/fields")
                            :response-format h/formatter
                            :on-success [:set-fields]
                            :on-failure [:bork-it-up-fields]}})))
(rf/reg-event-db
    :bork-it-up-fields
    (fn [db _]
        (pprint :borked-fields)
        (pprint _)
      db))




(rf/reg-event-db
    :set-batch-data
    (fn [db [_ result]]
        (assoc db :batch-overview result)))

(rf/reg-event-db
    :bork-it-up
    (fn [db [_ resultset-seq]]
        (assoc db :failed true)))


(rf/reg-event-fx
    :get-batch-details
    (fn [{:keys [db]}]
        {:db (assoc db :loading true)
         :http-xhrio {
                        :method :get
                        :uri "http://portal.blainsupply.com/apis/v1/edit-lists/81294b8a-adfb-4687-8b4d-5f12540d3d59"
                        :response-format (transform-ajax [:tokenExpires] h/formatter)
                        :on-success [:set-batch-data]
                        :on-failure [:bork-it-up]}}))

(rf/reg-event-db
    :update-field-val
    (fn [db [_ {:keys [field-id new-value]}]]
        (assoc-in db [:field-changes field-id] new-value)))


(rf/reg-event-db
    :clear-field-value
    (fn [db [_ field-id]]
        (update-in db [:field-changes] dissoc field-id)))
        



(rf/reg-event-db
    :tutorial/start
    (fn [db _]
        (assoc db :tutorial-step (first h/ordered-tutorial))))

(rf/reg-event-db
    :tutorial/next
    (fn [{:keys [tutorial-step] :as db} _]
        (assoc db :tutorial-step (h/tutorial-next tutorial-step))))

(rf/reg-event-db
    :tutorial/prev
    (fn [{:keys [tutorial-step] :as db}]
        (assoc db :tutorial-step (h/tutorial-prev tutorial-step))))
(rf/reg-event-db
    :tutorial/stop
    (fn [db _]
        (dissoc db :tutorial-step)))
        

        

        
(rf/reg-event-db 
    :batch-items/hide-bar
    (fn [db [_ hide]]
        (assoc db :batch-items/hide-bar hide)))


(rf/reg-event-db
    :finalize-batch
    (fn [db _]
     (assoc db :finalize-batch true)))

(rf/reg-event-db
    :cancel-finalize-batch
    (fn [db _]
     (dissoc db :finalize-batch)))

