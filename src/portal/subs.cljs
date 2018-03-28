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
