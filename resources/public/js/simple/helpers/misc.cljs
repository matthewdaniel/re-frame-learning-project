(ns simple.helpers.misc
    (:require [cljs.pprint :refer [pprint]]))

(defn browser-copy
    [txt]
    (let [el (.createElement js/document "input")]
        (.setAttribute el "value" txt)
        (.appendChild js/document.body el)
        (.select el)
        (.execCommand js/document "copy")
        (.removeChild js/document.body el)))

