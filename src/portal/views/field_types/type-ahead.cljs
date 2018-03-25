(ns portal.views.field-types.type-ahead
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :refer [includes? lower-case]]
            [re-com.core :refer [typeahead]]
            [cljsjs.moment]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as str]))

(defn filtered-vals
  [possible]
  (fn [term]
      (pprint "filtering")
    (filter #(includes? (lower-case (:selection-value %)) term) possible)))

(defn field
      [{:keys [value id possible-values]}]
      [typeahead
        :suggestion-to-string #(:selection-value %)
        :change-on-blur? true
        :model value
        :data-source (filtered-vals possible-values)
        :render-suggestion #(:selection-value %)
        :on-change #(pprint %)])



