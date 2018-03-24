(ns simple.views.fields
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [simple.views.field-types.html :refer [field] :rename {field html-field}]
              [simple.views.field-types.text :refer [field] :rename {field text-field}]
              [simple.views.field-types.upc :refer [field] :rename {field upc-field}]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

(def field-types 
    {
        0 :text 
        1 :number 
        2 :text-row 
        3 :type-ahead 
        4 :color-images 
        5 :html 
        6 :upcs 
        7 :text-area})


(defn field-label
    [label-value field-id]
    [:label.control-label
        {:on-click #(rf/dispatch [:clear-field-value field-id])}
        label-value])

(defn single-field
    [{:keys [id name field-type value] :as field}]
    [:div.field-container {:key id}
        [:div.field-label-value {:key id} 
            [field-label name id]
            (case (get field-types field-type)
                :html [html-field field]
                :upcs [upc-field field]
                :text-row [text-field field]
                :number [text-field field]
                :text [text-field field]
                :type-ahead [:div.type-ahead "type-ahead"]
                :color-images [:div.color-images "color images"]
                :text-area [:div.text-area "text area"]
                [:div.unmatched (str "unknown field type" field-type)])]])

(defn fields-container
    []
    [:div.fields-container
        (-> @(rf/subscribe [:loading-fields])
            ((fn [loading?]
                (if loading? [:div.loading "Loading..."]))))
        (->> @(rf/subscribe [:edit-fields])
             (map single-field))])
                 
                    
                
