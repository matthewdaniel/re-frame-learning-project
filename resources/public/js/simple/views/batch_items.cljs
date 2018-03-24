(ns simple.views.batch-items
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [cljsjs.moment]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

(defn locked? 
    [sess-id])
(rf/reg-event-db 
    :batch-items/hide-bar
    (fn [db [_ hide]]
        (assoc db :batch-items/hide-bar hide)))

(rf/reg-sub
    :batch-items/bar-hidden
    (fn [db _]
        (if (:batch-items/hide-bar db) true false)))

(rf/reg-sub
    :bar-minimized-class
    (fn [_ _]
        (rf/subscribe [:batch-items/bar-hidden]))
    (fn [hidden _]
        (if hidden "minimized" "")))

(defn batch-item
    [{{:keys [name editing is-mine is-someone-elses finalized edited id]} :item}]
    [:li.item.single-item-container
        {
            :on-click #(rf/dispatch [:checkout-item id])
            :class (str 
                    (if is-mine " active")
                    (if is-someone-elses " checked-out"))}
        [:div.inner
            [:a {:href "javascript:void(0)"}
                [:span.name id]
                [:span.icon-group 
                    (if is-someone-elses [:i.list-item-status.notediting.fa.fa-lock])
                    (if finalized [:i.list-item-status.finalized.fa.fa-circle])
                    (if edited [:i.list-item-status.viewed.fa.fa-check])]]]])


(defn batch-items-container
    []
    [:div.list-box
        {:class (-> @(rf/subscribe [:bar-minimized-class]))}
        [:div.wrapper
            [:div.toggler
                (-> @(rf/subscribe [:batch-items/bar-hidden])
                    ((fn 
                        [hidden]
                        [:i.fa.fa-bars
                            {:on-click #(rf/dispatch [:batch-items/hide-bar (not hidden)])}])))]
            [:div.legend "yo legend here"]
            [:div.filter [:span (-> @(rf/subscribe [:bar-minimized-class]))]]
            [:div.action-items
                [:i.fa.fa-long-arrow-down]
                [:span "Action Items"]
                [:i.fa.fa-long-arrow-down]]
            [:div.list-wrapper
                [:ul
                    (->> @(rf/subscribe [:batch-list])
                         (map (fn [item sess-id] [batch-item {:key (:id item) :item item}])))]]]])

    

                
                            
              

