(ns simple.views.field-types.text-area
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljsjs.moment]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as str]))


(defn field
      [{:keys [value id type field-type]}]
      [:textarea.form-control
         {:rows 6
          :on-change #(rf/dispatch [:update-field-val {:field-id id :new-value (-> % .-target .-value)}])
          :value @(rf/subscribe [:field-changes [id value]])}])



