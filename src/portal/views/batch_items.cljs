(ns portal.views.batch-items
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
    [{{:keys [name description editing is-mine is-someone-elses finalized edited id]} :item}]
    [:li.item.single-item-container
        {
            :on-click #(rf/dispatch [:checkout-item id])
            :class (str 
                    (if is-mine " active")
                    (if is-someone-elses " checked-out"))}
        [:div.inner
            [:a {:href "javascript:void(0)"}
                [:span.name name]
                [:span.icon-group 
                    (if is-someone-elses [:i.list-item-status.notediting.fa.fa-lock])
                    (if finalized [:i.list-item-status.finalized.fa.fa-circle])
                    (if edited [:i.list-item-status.viewed.fa.fa-check])]]]])

(rf/reg-event-db
    :toggle-items-legend
    (fn [db _]
        (assoc db :show-items-legend (not (:show-items-legend db)))))

(rf/reg-sub
    :items-legend-vis
    (fn [{:keys [show-items-legend]}]
      (not (not show-items-legend))))

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
            [:div.legend-toggle
                [:a {:href "javascript:void(0)" :on-click #(rf/dispatch [:toggle-items-legend])} "Legend"]]
            [:div.legend
                [:div.inner {:style {:height (-> @(rf/subscribe [:items-legend-vis]) (#(if % "80px" "0px")))}}
                    [:div [:i.fa.fa-lock] " : Someone else is editing"]
                    [:div [:i.fa.fa-check] " : Item has changes saved"]
                    [:div [:i.fa.fa-circle] " : Item was marked complete"]]]
                
                ; (as-> @(rf/subscribe [:items-legend-vis]) vis
                ;             (#(if vis 
                ;                 )))]]

            [:div.filter 
                [:input {:placeholder "Filter..." 
                         :on-change #(rf/dispatch [:set-items-filter (-> % .-target .-value)])
                         :value @(rf/subscribe [:item-filter])}]]
            [:div.action-items
                [:i.fa.fa-long-arrow-down]
                [:span "Action Items"]
                [:i.fa.fa-long-arrow-down]]
            [:div.list-wrapper
                [:ul
                    (->> @(rf/subscribe [:filtered-batch-items])
                         (map (fn [item sess-id] [batch-item {:key (:id item) :item item}])))]]]])

    

                
                            
              

