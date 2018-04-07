(ns portal.views.batch-items
    (:require [reagent.core :as reagent]
              [re-frame.core :as rf]
              [cljsjs.moment]
              [portal.views.tutorial-wrapper :refer [wrapper]]
              [portal.helpers.misc :refer [<sub <sub-to pub>]]
              [cljs.pprint :refer [pprint]]
              [clojure.string :as str]))

(defn batch-item
    [{{:keys [name description editing is-mine is-someone-elses finalized edited id]} :item}]
    [:li.item.single-item-container
        {
            :on-click #(pub> [:checkout-item id])
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

; used during tutorial
(def fake-item
  {
   :id "abc-123-fake"
   :edit-list-id 12345678900
   :name "Your Example Item"
   :edited true
   :finalized true
   :viewed true})


(defn batch-items-container
    []
    [:div.list-box
        {:class (<sub :bar-minimized-class)}
        [:div.wrapper
            [:div.toggler
                (-> (<sub :batch-items/bar-hidden)
                    ((fn 
                        [hidden]
                        [wrapper :maximize-side-bar 
                            [wrapper :minimize-side-bar
                                [:i.fa.fa-bars
                                    {:on-click 
                                        #(pub> [:batch-items/hide-bar (not hidden)])}]]])))]
            [wrapper :item-icon-legend
                [:div 
                    [:div.legend-toggle
                        [:a {:href "javascript:void(0)" :on-click #(pub> [:toggle-items-legend])} "Legend"]]
                    [:div.legend
                        [:div.inner {:style {:height (if (<sub :items-legend-vis) "80px" "0px")}}
                            [:div [:i.fa.fa-lock] " : Someone else is editing"]
                            [:div [:i.fa.fa-check] " : Item has changes saved"]
                            [:div [:i.fa.fa-circle] " : Item was marked complete"]]]]]
            [:div.filter
                [wrapper :item-filter
                    [:input {:placeholder "Filter..." 
                             :on-change #(pub> [:set-items-filter (-> % .-target .-value)])
                             :value (<sub :item-filter)}]]]
            [:div.action-items
                [:i.fa.fa-long-arrow-down]
                [:span "Action Items"]
                [:i.fa.fa-long-arrow-down]]
            [:div.list-wrapper
                [wrapper :batch-items 
                    [:ul
                        (->> (<sub-to [:tutorial-i-am-active :single-item-edit])
                             (#(if % [wrapper :single-item-edit [batch-item {:item fake-item}]])))
                        (->> (<sub :filtered-batch-items)
                            (map (fn [item sess-id] [batch-item {:key (:id item) :item item}])))]]]]
        [:div.finalize-btn.text-center
           [wrapper :finalize-batch
            [:button.btn.btn-primary.btn-sm {:on-click #(pub> [:show-finalize-modal])}
                "Finalize"]]]])
