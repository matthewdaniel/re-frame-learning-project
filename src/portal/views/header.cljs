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
                 [:span [:i.fa.fa-clock-o {:style {:margin-right 10}}]]
                 [:span (if days (str days "D "))]
                 [:span (if hours (str hours "H "))]
                 [:span (if minutes (str minutes "M"))]]))))])


(defn header
    []
    [:header.header-bar
        [:div.batch-title-bar
            [wrapper :first-time [:div.blains "Vendor Portal Inc"]]
            [:div.title (-> @(rf/subscribe [:batch-overview])
                                                                         (:title))]
            
            (-> @(rf/subscribe [:batch-overview])
                (#(when % [wrapper :batch-expires [expiry-element %]])))]
                
        [wrapper :progress-bar [:div.progress-bar
                                  (-> @(rf/subscribe [:progress])
                                      ((fn [{:keys [viewed edited finalized]}]
                                         [:div.background
                                            [:div.progress.viewed {:style {:z-index 1 :width viewed}}]
                                            [:div.progress.edited {:style {:z-index 2 :width edited}}]
                                            [:div.progress.finalized {:style {:z-index 3 :width finalized}}]])))]]])

     
     
