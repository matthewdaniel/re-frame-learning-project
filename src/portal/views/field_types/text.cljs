(ns portal.views.field-types.text
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))


(defn field
    [{:keys [value id type field-type]}]
    [:input.form-control.field-type-text 
        {:type type
         :class field-type
         :on-change #(rf/dispatch [:update-field-val {:field-id id :new-value (-> % .-target .-value)}])
         :value @(rf/subscribe [:field-changes [id value]])}])
        
    
    
