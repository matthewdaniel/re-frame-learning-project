(ns portal.views.field-types.html
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))
(defn field
    [{:keys [value]}]
    [:div.html {:dangerouslySetInnerHTML {:__html value}}])
