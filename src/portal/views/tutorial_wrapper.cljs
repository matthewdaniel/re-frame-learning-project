(ns portal.views.tutorial-wrapper
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]))

              
(defn wrapper
    [step children]
    [:div {:class (str
                    (name step)
                    (if @(rf/subscribe [:tutorial-active]) " in-tutorial")
                    (if @(rf/subscribe [:tutorial-i-am-active step]) " tutorial-active"))}
        [:div.spotlight
            {:class @(rf/subscribe [:tutorial/step-spotlight-class])}
            [:div.stop-interacting {:on-click empty}]
            children]])
            
