(ns portal.views.tutorial-player
    (:require [reagent.core :as reagent]
              [cljs.pprint :refer [pprint]]
              [portal.helpers.misc :refer [<sub <sub-to pub> ordered-tutorial]]
              [re-frame.core :as rf]))


(defn- back-btn []
    [:button.btn.btn-sm.btn-warning
        {:disabled (<sub :tutorial/on-first)
            :on-click #(pub> [:tutorial/prev])}
        [:i.fa.fa-backward] 
        [:span "Previous"]])

(defn- next-btn []
    [:button.btn.btn-sm.btn-success
        {:disabled (<sub :tutorial/on-last)
            :on-click #(pub> [:tutorial/next])}
        "Next" 
        [:i.fa.fa-forward]])
(defn- stop-btn []
    [:button.btn.btn-sm.btn-danger.cancel-tutorial 
        {:on-click #(pub> [:tutorial/stop])}
        "End Tutorial" [:i.fa.fa-stop]])
              
(defn tutorial-player
    []
    [:div.tutorial-player
        (if (<sub :tutorial-active)
          [:div.tutorial-player
            [:div.tutorial-content
                [:div.text-center 
                    (str "Tutorial " (<sub :tutorial/count) " of " (count ordered-tutorial))]
                [:div.help-section
                    (<sub :tutorial/renderer)]
                [:div.tutorial-controls.text-center
                    [back-btn] [stop-btn] [next-btn]]]])])
