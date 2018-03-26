(ns portal.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [portal.views]
            [portal.views.batch-items :refer [batch-items-container]]
            [portal.views.edit-bar :refer [edit-bar]]
            [portal.views.tutorial-player :refer [tutorial-player]]
            [portal.views.fields :refer [fields-container]]
            [portal.events]
            [portal.events :as ev]))

(rf/reg-sub
  :batch-overview
  (fn [db _]
    (:batch-overview db)))

(rf/reg-sub
  :initial-load-finished
  (fn [{:keys [sess-id]} _]
    (js/console.log "sess-id" sess-id)
    (not (not sess-id))))

(defn- main-window
  []
  (-> @(rf/subscribe [:initial-load-finished])
      ((fn [is-subbed]
         (if-not is-subbed
           [:div.connecting
             [:span "Connecting..."]
             [:i.fa.fa-spin.fa-spinner]]
           [:div.main-inner
             [batch-items-container]
             [edit-bar]
             [fields-container]
             [:div.tutorial-overlay 
              {:class (if @(rf/subscribe [:tutorial-active]) "active")}]
             [tutorial-player]])))))
                        

(defn ^:export run
  []
  (rf/dispatch [:get-batch-details])
  (reagent/render [:div.main 
                    [portal.views/header]
                    [main-window]]
    (js/document.getElementById "app")))

                  
(defonce yo (portal.events/connect-batch))
