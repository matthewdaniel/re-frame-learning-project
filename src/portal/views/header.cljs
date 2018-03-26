(ns portal.views
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [portal.views.tutorial-wrapper :refer [wrapper]]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

(def now (js/moment))
              
(defn expiry-element
    [{expires :tokenExpires}]
    (if expires
        (let [ 
                ; pre calc
                hours-full (.diff expires now "hours")
                minutes-full (.diff expires now "minutes")

                days (.diff expires now "days")
                minutes (- minutes-full  (* hours-full  60))
                hours (- hours-full  (* days  24))]

            (if expires 
                [:div 
                    [:span (if days (str days "D "))]
                    [:span (if hours (str hours "H "))]
                    [:span (if minutes (str minutes "M"))]]))))



(defn header
    []
    [:div.header-bar
        [:div.batch-title-bar
            [wrapper :first-time [:div.blains "Vendor Portal Inc"]]
            [:div.title {:on-click #(rf/dispatch [:tutorial/start])} (-> @(rf/subscribe [:batch-overview])
                                                                         (:title))]
            [:div.countdown
                (-> @(rf/subscribe [:batch-overview])
                    (expiry-element))]]
                
        [wrapper :progress-bar [:div.progress-bar
                                [:div.background
                                    [:div.progress.viewed {:style {:width "10%"}}]
                                    [:div.progress.edited {:style {:width "20%"}}]
                                    [:div.progress.finalized {:style {:width "30%"}}]]]]])

     
     
