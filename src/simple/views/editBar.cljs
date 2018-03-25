(ns simple.views.editBar
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljsjs.moment]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as str]))

(defn- edit-icon
  [title desc tag fa]
  [:li {:class tag}
    [:div {:title desc}
      [:i.fa {:class (str "fa-" fa)}]
      [:div title]]])

(defn edit-bar
  []
  [:div.edit-bar
    [:ul.edit-bar
       [edit-icon "Save" "Save Changes" "save" "floppy-o"]
       [edit-icon "Mark Complete" "Flag item as not needing more changes" "complete" "circle"]
       [edit-icon "Mark Incomplete" "Unflag item from not needing review flag" "in-complete" "circle-o"]
       [edit-icon "Forget Changes" "Remove all changes you made to item" "remove-changes" "trash"]
       [edit-icon "Release" "Release lock on item so others can edit" "release" "unlink"]]])

