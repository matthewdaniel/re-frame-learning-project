(ns portal.views
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [portal.views.tutorial-wrapper :refer [wrapper]]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

(defn expiry-element
    [{expires :tokenExpires}]
    [:div.expiry
       (-> @(rf/subscribe [:batch-expires])
           ((fn [{:keys [days hours minutes]}]
              (if (or days hours minutes)
                [:div
                 [:span (if days (str days "D "))]
                 [:span (if hours (str hours "H "))]
                 [:span (if minutes (str minutes "M"))]]))))])


(defn header
    []
    [:div.header-bar
        [:div.batch-title-bar
            [wrapper :first-time [:div.blains "Vendor Portal Inc"]]
            [:div.title {:on-click #(rf/dispatch [:tutorial/start])} (-> @(rf/subscribe [:batch-overview])
                                                                         (:title))]
            [:div.countdown
                (-> @(rf/subscribe [:batch-overview])
                    (#(when % [wrapper :batch-expires [expiry-element %]])))]]
                
        [wrapper :progress-bar [:div.progress-bar
                                [:div.background
                                    [:div.progress.viewed {:style {:width "10%"}}]
                                    [:div.progress.edited {:style {:width "20%"}}]
                                    [:div.progress.finalized {:style {:width "30%"}}]]]]])

     
     
