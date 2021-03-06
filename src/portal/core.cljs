(ns portal.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [re-com.core        :refer [modal-panel]]
            [portal.views]
            [portal.helpers.misc :refer [<sub <sub-to pub>]]
            [portal.views.batch-items :refer [batch-items-container]]
            [portal.views.edit-bar :refer [edit-bar]]
            [portal.views.welcome :refer [welcome]]
            [portal.views.tutorial-player :refer [tutorial-player]]
            [portal.views.fields :refer [fields-container]]
            [portal.events]
            [portal.subs]))
(enable-console-print!)

;(rf/defn-traced test [db _] db)

(defn content-window
  []
  [:div 
    (-> (<sub :is-editing-item)
        ((fn [is]
          (pprint {:is is})
          (if is
            [fields-container]
            [welcome]))))])

(defn- main-window
  []
  (-> (<sub :initial-load-finished)
      ((fn [is-subbed]
         (if-not is-subbed
           [:div.connecting
             [:span "Connecting..."]
             [:i.fa.fa-spin.fa-spinner]]
           [:div.main-inner
             [batch-items-container]
             [edit-bar]
             [content-window]])))))
             
                        
(defn- tutorial 
  []
  [:div
    [:div.tutorial-overlay
      {:class (if (<sub :tutorial-active) "active")}
      [tutorial-player]
      (-> (<sub :modal)
        ((fn [{:keys [cancel ok header body] :as rest}]
          (when body
            [modal-panel
                :backdrop-color   "grey"
                :backdrop-opacity 0.4
                :style            {:font-family "Consolas"}
                :child            [:div.my-modal
                                    [:div.modal-header [:h4.modal-title header]]
                                    [:div.modal-body body]
                                    [:div.modal-footer
                                      [:button.btn.btn-warning {:on-click cancel} "Cancel"]
                                      [:button.btn.btn-primary {:on-click ok} "Confirm"]]]]))))]])

(defn ^:export run
  []
  (pub> [:get-batch-details])
  (reagent/render [:div.main 
                    [portal.views/header]
                    [tutorial]
                    [main-window]]

    (js/document.getElementById "app")))

(defonce yo (portal.events/connect-batch))
