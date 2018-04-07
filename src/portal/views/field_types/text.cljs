(ns portal.views.field-types.text
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [portal.helpers.misc :refer [<sub <sub-to pub>]]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))


(defn field
    [{:keys [value id type field-type]}]
    [:input.form-control.field-type-text 
        {:type type
         :class field-type
         :on-change #(pub> [:update-field-val {:field-id id :new-value (-> % .-target .-value)}])
         :value (<sub-to [:field-changes [id value]])}])
        
    
    
