(ns portal.views.edit-bar
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljsjs.moment]
            [portal.views.tutorial-wrapper :refer [wrapper]]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as str]))

(defn- edit-icon
  [title desc tag fa]
  [:li.action-icon {:class tag}
    [:div {:title desc}
      [:i.fa {:class (str "fa-" fa)}]
      [:div title]]])

(defn edit-bar
  []
  [:div.edit-bar
    [:ul.edit-bar 
       [wrapper :edit-icon/save-action [edit-icon "Save" "Save Changes" "save" "floppy-o"]]
       [wrapper :edit-icon/mark-complete [edit-icon "Mark Complete" "Flag item as not needing more changes" "complete" "circle"]]
       [wrapper :edit-icon/mark-incomplete [edit-icon "Mark Incomplete" "Unflag item from not needing review flag" "in-complete" "circle-o"]]
       [wrapper :edit-icon/forget-changes [edit-icon "Forget Changes" "Remove all changes you made to item" "remove-changes" "trash"]]
       [wrapper :edit-icon/release [edit-icon "Release" "Release lock on item so others can edit" "release" "unlink"]]]])

