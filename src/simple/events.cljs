(ns simple.events
    (:require 
        [day8.re-frame.async-flow-fx]
        [cljsjs.moment]
        [camel-snake-kebab.core :refer [->kebab-case]]
        [goog.string :refer [toSelectorCase toCamelCase]]
        [cljs.pprint :refer [pprint]]
        [day8.re-frame.http-fx]
        [clojure.string :as s]
        [ajax.core :as ajax]
        [re-frame.core :as rf]
        [cljs.core.async :refer [<!]] [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn make-moment [val] 
    (if val (js/moment val) val))
(defn momentify
    [params]
    (let [params (set params)]
        #(->> %
            (map (fn [[param val]]
                    [param (if (contains? params param)
                            (make-moment val)
                            val)]))
            (into {}))))
(def formatter (ajax/json-response-format {:keywords? true}))
(defn transform-ajax
    [& formatters]
    (assoc formatter :read #(-> %
                                ((:read formatter))
                                ((momentify '[:tokenExpires])))))


; (def boot-flow 
;     {:first-dispatch [:get-batch-details :connect-batch]
;      :rules [
;              {:when :seen? :events :success-details-fetched :dispatch [:do-load-details]}
;              {:when :seen? :events}]})

(defn can-descend [val]
      (or (seq? val) (map? val) (vector? val)))

; (defn descender [val] (if (or (seq? val) (map? val)) (snake-kebab-it val) val))

(defn snake-kebab-it
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

(defn connect-batch
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
                        (def sess-id (aget con "id"))
                        (rf/dispatch [:sess-id sess-id])

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
    :set-items-filter
    (fn [db [_ txt]]
        (assoc db :item-filter txt)))

(rf/reg-sub
    :item-filter
    (fn [db _]
     (:item-filter db)))

(rf/reg-event-db
    :sess-id
    (fn [db [_ sess-id]]
        (assoc db :sess-id sess-id)))

(rf/reg-sub
    :sess-id
    (fn [db _]
        (:sess-id db)))

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
                            (map (set-checkedout sess-id) v))
               mine (first (filter #(:is-mine %) transformed))]
            (rf/dispatch [:editing-field (:id mine)])
            (assoc db 
                    :batch-list transformed)))) 


(rf/reg-event-db
    :set-fields
    (fn [db [_ fields]]
      (assoc db :edit-fields (snake-kebab-it fields) :loading-fields false)))

(rf/reg-sub
    :loading-fields
    (fn [db _]
     (:loading-fields db)))

(rf/reg-sub
    :edit-fields
    (fn [db _]
        (:edit-fields db)))

(rf/reg-sub
    :field-dirty-val
    (fn [db [_ field-id]]
        (get-in db [:field-changes field-id])))



(rf/reg-event-fx
    :editing-field
    (fn [{:keys [db]} [_ item-id]]
        (if (not item-id) 
            {:db (assoc db :loading-fields false :edit-fields [])}
            {:db (assoc db :loading-fields true)
             :http-xhrio {
                            :method :get
                            :uri (str "http://portal.blainsupply.com/apis/v1/edit-lists/81294b8a-adfb-4687-8b4d-5f12540d3d59/items/"item-id"/fields")
                            :response-format formatter
                            :on-success [:set-fields]
                            :on-failure [:bork-it-up-fields]}})))
; (rf/reg-sub
;     :editing-field
;     (fn [db _]
;         (:editing-field db)))
        
(rf/reg-event-db
    :bork-it-up-fields
    (fn [db _]
        (pprint :borked-fields)
        (pprint _)
      db))

(rf/reg-sub
    :batch-list
    (fn [db _]
        (sort-by #(:id %) (:batch-list db))))

(defn- item-matches
    [kw item]
    (s/includes? (s/lower-case (:description item)) (s/lower-case (or kw "")) ))

(rf/reg-sub
    :filtered-batch-items
    :<- [:batch-list]
    :<- [:item-filter]
    (fn [[list key-word] _]
        (let [filtered (filter (partial item-matches key-word) list)]
            filtered)))

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
                        :response-format (transform-ajax [:tokenExpires] formatter)
                        :on-success [:set-batch-data]
                        :on-failure [:bork-it-up]}}))

         

    
; (rf/reg-event-fx
;     :boot
;     (fn [_ _]
;         {:async-flow boot-flow}))
          

    
; (rf/reg-event-fx
;     :build-options(fn [_ _])
;         {:db (-> {}
;                 (fn [db, _] (assoc db :loading true)))
;          :async-flow (boot-flow)})

         


(rf/reg-event-db              ;; sets up initial application state
    :initialize                 ;; usage:  (dispatch [:initialize])
    (fn [_ _]                   ;; the two parameters are not important here, so use _
        {:time (js/Date.)}         ;; What it returns becomes the new application state
        :time-color "#f88"))    ;; so the application state will initially be a map with two keys
          

        

        
(rf/reg-event-db
    :update-field-val
    (fn [db [_ {:keys [field-id new-value]}]]
        (assoc-in db [:field-changes field-id] new-value)))

(rf/reg-sub
    :field-changes
    (fn [db [_ [field-id real-val]]]
        (get-in db [:field-changes field-id] real-val)))

        
(rf/reg-event-db
    :clear-field-value
    (fn [db [_ field-id]]
        (update-in db [:field-changes] dissoc field-id)))
        
