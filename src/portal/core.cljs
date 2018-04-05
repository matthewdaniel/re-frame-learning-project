(ns portal.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [re-com.core        :refer [modal-panel]]
            [portal.views]
            [portal.helpers.misc :refer [<sub pub>]]
            [portal.views.batch-items :refer [batch-items-container]]
            [portal.views.edit-bar :refer [edit-bar]]
            [portal.views.welcome :refer [welcome]]
            [portal.views.tutorial-player :refer [tutorial-player]]
            [portal.views.fields :refer [fields-container]]
            [portal.events]
            [portal.subs]))
(enable-console-print!)

;(rf/defn-traced test [db _] db)
(rf/reg-sub
  :batch-overview
  (fn [db _]
    (:batch-overview db)))


(rf/reg-sub
  :initial-load-finished
  (fn [{:keys [sess-id]} _]
    (js/console.log "sess-id" sess-id)
    (not (not sess-id))))

(defn content-window
  []
  [:div 
    (-> @(rf/subscribe [:is-editing-item])
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
      {:class (if @(rf/subscribe [:tutorial-active]) "active")}
      [tutorial-player]
      (-> @(rf/subscribe [:modal])
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
  (rf/dispatch [:get-batch-details])
  (reagent/render [:div.main 
                    [portal.views/header]
                    [tutorial]
                    [main-window]]

    (js/document.getElementById "app")))

(defonce yo (portal.events/connect-batch))
