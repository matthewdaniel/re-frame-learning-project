(ns portal.views.field-types.upc
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [portal.helpers.misc :refer [<sub <sub-to pub> browser-copy]]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

;TODO: use reagent atom or something
(rf/reg-event-db
    :upc-click
    (fn [db [_ upc]] 
        (assoc db :upc-click upc)))

(rf/reg-sub
    :upc-highlighted
    (fn [db _]
        (let [upc-click (:upc-click db)]
            upc-click)))

        
(rf/reg-sub
    :highlight-class
    (fn [_ _]
        (rf/subscribe [:upc-highlighted]))
    (fn [upc-highlighted [_ upc]]
        (if (= upc-highlighted upc) "highlight")))
        

(defn handle-copy-click
    [upc]
    (browser-copy upc)
    (pub> [:upc-click upc])
    (js/setTimeout #(pub> [:upc-click false]) 100))

(defn upc-field
    [upc]
    [:li.copy {:key upc
                :on-click #(handle-copy-click upc) 
                :class (<sub-to [:highlight-class upc])}
        [:span upc]
        [:svg {:width "14px"
                :height "16px"
                :view-box "0 0 14 16"
                :version "1.1"
                :xmlns "http://www.w3.org/2000/svg"}
         [:title "clippy"]
         [:desc "Created with Sketch."]
         [:defs ""]
         [:g#Octicons {
                        :stroke "none"
                        :stroke-width "1"
                        :fill "none"
                        :fill-rule "evenodd"}
            [:g#clippy {:fill "#000000"}
                [:path#Shape {:d "M2,13 L6,13 L6,14 L2,14 L2,13 L2,13 Z M7,7 L2,7 L2,8 L7,8 L7,7 L7,7 Z M9,10 L9,8 L6,11 L9,14 L9,12 L14,12 L14,10 L9,10 L9,10 Z M4.5,9 L2,9 L2,10 L4.5,10 L4.5,9 L4.5,9 Z M2,12 L4.5,12 L4.5,11 L2,11 L2,12 L2,12 Z M11,13 L12,13 L12,15 C11.98,15.28 11.89,15.52 11.7,15.7 C11.51,15.88 11.28,15.98 11,16 L1,16 C0.45,16 0,15.55 0,15 L0,4 C0,3.45 0.45,3 1,3 L4,3 C4,1.89 4.89,1 6,1 C7.11,1 8,1.89 8,3 L11,3 C11.55,3 12,3.45 12,4 L12,9 L11,9 L11,6 L1,6 L1,15 L11,15 L11,13 L11,13 Z M2,5 L10,5 C10,4.45 9.55,4 9,4 L8,4 C7.45,4 7,3.55 7,3 C7,2.45 6.55,2 6,2 C5.45,2 5,2.45 5,3 C5,3.55 4.55,4 4,4 L3,4 C2.45,4 2,4.45 2,5 L2,5 Z"}]]]]])
      
(defn field
    [{:keys [value]}]
    (let [upcs (js->clj (js/JSON.parse value))]
        [:div
            [:div.upcs
                [:ul
                    (map (fn [upc] [:span {:key upc} [upc-field upc]]) upcs)]]]))
