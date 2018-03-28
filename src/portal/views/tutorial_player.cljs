(ns portal.views.tutorial-player
    (:require [reagent.core :as reagent]
              [cljs.pprint :refer [pprint]]
              [portal.helpers.misc :refer [ordered-tutorial]]
              [re-frame.core :as rf]))


(defn- back-btn []
    [:button.btn.btn-sm.btn-warning
        {:disabled @(rf/subscribe [:tutorial/on-first])
            :on-click #(rf/dispatch [:tutorial/prev])}
        [:i.fa.fa-backward] 
        [:span "Previous"]])

(defn- next-btn []
    [:button.btn.btn-sm.btn-success
        {:disabled @(rf/subscribe [:tutorial/on-last])
            :on-click #(rf/dispatch [:tutorial/next])}
        "Next" 
        [:i.fa.fa-forward]])
(defn- stop-btn []
    [:button.btn.btn-sm.btn-danger.cancel-tutorial 
        {:on-click #(rf/dispatch [:tutorial/stop])}
        "End Tutorial" [:i.fa.fa-stop]])
              
(defn tutorial-player
    []
    [:div.tutorial-player
        (if @(rf/subscribe [:tutorial-active])
          [:div.tutorial-player
            [:div.tutorial-content
                [:div.text-center 
                    (str "Tutorial " @(rf/subscribe [:tutorial/count]) " of " (count ordered-tutorial))]
                [:div.help-section
                    (-> @(rf/subscribe [:tutorial/renderer]))]
                [:div.tutorial-controls.text-center
                    [back-btn] [stop-btn] [next-btn]]]])])
