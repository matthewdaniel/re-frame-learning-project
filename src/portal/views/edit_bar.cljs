(ns portal.views.edit-bar
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljsjs.moment]
            [portal.helpers.misc :refer [<sub <sub-to pub>]]
            [portal.views.tutorial-wrapper :refer [wrapper]]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as str]))

(defn- edit-icon
  [title desc tag fa action]
  [:li.action-icon {:class tag :on-click action}
   [:div {:title desc}
      [:i.fa {:class (str "fa-" fa)}]
      [:div.subtitle title]]])

(defn edit-bar
  []
  [:ul.edit-bar
    {:class 
      (str
        (if-not (<sub :is-editing-item) " closed ")
        (if (<sub :batch-items/bar-hidden) " minimized"))}
    
    [wrapper :edit-icon/save-action [edit-icon "Save" "Save Changes" "save" "floppy-o" #(pub> [:show-demo-disabled-modal])]]
    [wrapper :edit-icon/mark-complete [edit-icon "Mark Complete" "Flag item as not needing more changes" "complete" "circle" #(pub> [:show-demo-disabled-modal])]]
    [wrapper :edit-icon/mark-incomplete [edit-icon "Mark Incomplete" "Unflag item from not needing review flag" "in-complete" "circle-o" #(pub> [:show-demo-disabled-modal])]]
    [wrapper :edit-icon/forget-changes [edit-icon "Forget Changes" "Remove all changes you made to item" "remove-changes" "trash" #(pub> [:forget-all-dirty-vals])]]
    [wrapper :edit-icon/release [edit-icon "Release" "Release lock on item so others can edit" "release" "unlink" #(js/window.batchWsApi.server.uncheckoutItems)]]])

