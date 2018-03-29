(ns portal.subs
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

(rf/reg-sub
  :tutorial-i-am-active
  :<- [:tutorial-step]
  (fn [step [_ check-step]]
      (= step check-step)))

(rf/reg-sub
  :tutorial/renderer
  :<- [:tutorial-step]
  #(get-in tutorial-steps [% :instructions]))

(rf/reg-sub
  :tutorial/step-spotlight-class
  :<- [:tutorial-step]
  #(str (if (get-in tutorial-steps [% :transparent]) "transparent")
        (if (get-in tutorial-steps [% :invert-color]) " inverted")))

(rf/reg-sub
  :batch-expires
  :<- [:batch-overview]
  :<- [:tutorial-i-am-active :batch-expires]
  (fn [[{:keys [tokenExpires] :as all} in-tutorial] _]
    (let [expiry (or tokenExpires h/fake-expiry)
          hours-full (.diff expiry h/now "hours")
          minutes-full (.diff expiry h/now "minutes")

          days (.diff expiry h/now "days")
          minutes (- minutes-full  (* hours-full  60))
          hours (- hours-full  (* days  24))]

         (when (or tokenExpires in-tutorial)
               {:days days :minutes minutes :hours hours}))))

(rf/reg-sub
  :tutorial/on-first
  :<- [:tutorial-step]
  (fn [step _]
      (= step (first h/ordered-tutorial))))

(rf/reg-sub
  :tutorial/count
  :<- [:tutorial-step]
  #(get-in tutorial-steps [% :order]))

(rf/reg-sub
  :tutorial/on-last
  :<- [:tutorial-step]
  (fn [step _]
      (= step (last h/ordered-tutorial))))

(rf/reg-sub
  :batch-items/hide-bar
  (fn [db _]
      (:batch-items/hide-bar db)))

(rf/reg-sub
  :batch-items/bar-hidden
  :<- [:batch-items/hide-bar]
  :<- [:tutorial-i-am-active :minimize-side-bar]
  :<- [:tutorial-i-am-active :maximize-side-bar]
  (fn [[bar-hidden in-minimize-tutorial in-maximized-tutorial] _]
      (and (not in-maximized-tutorial) (or bar-hidden in-minimize-tutorial))))

(rf/reg-sub
    :loading-fields
    (fn [db _]
     (:loading-fields db)))
(rf/reg-sub
    :batch-list
    (fn [{:keys [batch-list]} _]
        (sort-by #(:id %) batch-list)))
(rf/reg-sub
    :field-changes
    (fn [db [_ [field-id real-val]]]
        (get-in db [:field-changes field-id] real-val)))
        
(rf/reg-event-db
    :set-tutorial-step
    (fn [db [_ step]]
        (assoc db :tutorial-step step)))

(rf/reg-sub
    :tutorial-step
    (fn [{:keys [tutorial-step]} _]
        tutorial-step))

(rf/reg-sub
  :tutorial-active
  :<- [:tutorial-step]
  (fn [step _]
    (not (not step))))
  
(rf/reg-sub
    :modal
    (fn [{:keys [modal]}]
      modal))


(rf/reg-sub 
    :show-items-legend
    (fn [{:keys [show-items-legend]}]
        show-items-legend))

(rf/reg-sub
    :items-legend-vis
    :<- [:show-items-legend]
    :<- [:tutorial-i-am-active :item-icon-legend]
    (fn [[show tutorial-active] _]
        (or show tutorial-active)))
(rf/reg-sub
    :item-filter
    (fn [db _]
     (:item-filter db)))

(rf/reg-sub
    :is-editing-item
    :<- [:edit-fields]
    (fn [[fields]]
        (> (count fields) 0)))

(defn- item-matches-filter
    [kw item]
    (s/includes? (s/lower-case (:description item)) (s/lower-case (or kw ""))))

(rf/reg-sub
    :filtered-batch-items
    :<- [:batch-list]
    :<- [:item-filter]
    (fn [[list key-word] _]
        (if-not key-word list (filter (partial item-matches-filter key-word) list))))

(rf/reg-sub
    :edit-fields
    (fn [db _]
        (:edit-fields db)))

(rf/reg-sub
    :field-dirty-val
    (fn [db [_ field-id]]
        (get-in db [:field-changes field-id])))

(rf/reg-sub
  :bar-minimized-class
  (fn [_ _]
      (rf/subscribe [:batch-items/bar-hidden]))
  (fn [hidden _]
      (if hidden "minimized" "")))

(defn- get-percent
       [items field]
       (let [total (count items)
             field-total (count (filter #(get % field) items))]
            (str (* (/ field-total total) 100) "%")))

(rf/reg-sub
  :progress
  :<- [:batch-list]
  :<- [:tutorial-i-am-active :progress-bar]
  (fn [[items showing-tutorial] _]
      (let [total-count (count items)
            percenter (partial get-percent items)]
         (if showing-tutorial
             {:finalized "10%" :edited "30%" :viewed "70%"}
             {:finalized (percenter :finalized)
              :edited (percenter :edited)
              :viewed (percenter :viewed)}))))
