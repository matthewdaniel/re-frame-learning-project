(ns portal.views.welcome
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [portal.views.tutorial-wrapper :refer [wrapper]]
              [portal.helpers.misc :refer [pub>]]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

(defn welcome
    []
    [:div.tutorial
        [:h1 "Portal app"]
        [:div.section
            [:h3 "Welcome"]
            [:p "This portal is designed to facilitate easy transfor of non-secure vendor information with us and you the vendor."]]
        [:div.section
            [:h3 "Tutorial"]
            [:p "We have prepared a guided walthrough to help you see how to use the system. Click 'Begin Tutorial' below to start."]
            [:button.btn.btn-success 
                {:on-click #(pub> [:tutorial/start])}
                "Begin Tutorial"]]])