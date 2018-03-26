(ns portal.helpers.misc
    (:require 
        [cljs.pprint :refer [pprint]]
        [portal.tutorials :refer [tutorial-steps]]
        [ajax.core :as ajax]))

(defn browser-copy
    [txt]
    (let [el (.createElement js/document "input")]
        (.setAttribute el "value" txt)
        (.appendChild js/document.body el)
        (.select el)
        (.execCommand js/document "copy")
        (.removeChild js/document.body el)))

(defn watch-pipe [val] (pprint {:watch val}) val)

(defn- make-moment [val]
    (if val (js/moment val) val))

(defn momentify
    [params]
    (let [params (set params)]
        #(->> %
            (map (fn [[param val]]
                    [param (if (contains? params param)
                            (make-moment val)
                            val)]))
            (into {}))))

(def formatter (ajax/json-response-format {:keywords? true}))



(def ordered-tutorial (map first (sort-by #(:order (last %)) (seq tutorial-steps))))

(defn tutorial-next
    [current]
    (as-> current c
        (get tutorial-steps c {:order 0})
        (get c :order)
        (nthnext ordered-tutorial c)
        (if-not c current (first c))))

(defn tutorial-prev
    [current]
    (as-> current c
        (get tutorial-steps c {:order 0})
        (get c :order)
        (- c 2)
        (nthnext ordered-tutorial c)
        (first c)))
