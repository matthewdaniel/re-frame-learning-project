(ns portal.views.tutorial-wrapper
    (:require [reagent.core :as reagent]
              [portal.helpers.misc :refer [<sub <sub-to pub>]]
              [re-frame.core :as rf]))

              
(defn wrapper
    [step children]
    [:div {:class (str
                    (name step)
                    (if (<sub :tutorial-active) " in-tutorial")
                    (if (<sub-to [:tutorial-i-am-active step]) " tutorial-active"))}
        [:div.spotlight
            {:class (<sub :tutorial/step-spotlight-class)}
            [:div.stop-interacting {:on-click empty}]
            children]])
            
