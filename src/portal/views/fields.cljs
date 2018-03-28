(ns portal.views.fields
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [portal.views.field-types.html :refer [field] :rename {field html-field}]
              [portal.views.field-types.text :refer [field] :rename {field text-field}]
              [portal.views.field-types.upc :refer [field] :rename {field upc-field}]
              [portal.views.field-types.text-area :refer [field] :rename {field text-area-field}]
              [portal.views.field-types.type-ahead :refer [field] :rename {field type-ahead-field}]
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
    [:label.control-label.field-label
        {:on-click #(rf/dispatch [:clear-field-value field-id])}
        [:label [:span label-value]
           (-> @(rf/subscribe [:field-dirty-val field-id])
               (#(if % [:i.dirty-icon.fa.fa-trash
                          {:title (str "This value has changed but not been saved. Previous value: " %)}])))]])

(defn- full? [{:keys [field-type]}]
    (let [type (get field-types field-type)]
        (or (= type :text-row) (= type :upcs) (= type :html) (= type :text-area))))

(defn single-field
    [{:keys [id name field-type value] :as field}]
    [:div.field-container {:key id :class (if (full? field) "full")}
        [:div.field-label-value {:key id} 
            [field-label name id]
            (case (get field-types field-type)
                :html [html-field field]
                :upcs [upc-field field]
                :text-row [text-field field "text"]
                :number [text-field field "number"]
                :text [text-field field "text"]
                :type-ahead [type-ahead-field field]
                :color-images [:div.color-images "color images"]
                :text-area [text-area-field field]
                [:div.unmatched (str "unknown field type" field-type)])]])

(defn fields-container
    []
    [:div.fields-container
        (-> @(rf/subscribe [:loading-fields])
            (#(if % [:div.loading "Loading..."])))
        (->> @(rf/subscribe [:edit-fields])
             (map single-field))])
                 
                    
                
