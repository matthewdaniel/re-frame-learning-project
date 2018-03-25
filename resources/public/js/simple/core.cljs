(ns simple.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [simple.views]
            [simple.views.batchItems]
            [simple.views.editBar]
            [simple.views.fields]
            [simple.events]
            [simple.events :as ev]))

;; A detailed walk-through of this source code is provided in the docs:
;; https://github.com/Day8/re-frame/blob/master/docs/CodeWalkthrough.md

;; -- Domino 1 - Event Dispatch -----------------------------------------------

(defn dispatch-timer-event
  []
  (let [now (js/Date.)]
    (rf/dispatch [:timer now])))  ;; <-- dispatch used

;; Call the dispatching function every second.
;; `defonce` is like `def` but it ensures only one instance is ever
;; created in the face of figwheel hot-reloading of this file.
; (defonce do-timer (js/setInterval dispatch-timer-event 1000))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
  :initialize                 ;; usage:  (dispatch [:initialize])
  (fn [_ _]                   ;; the two parameters are not important here, so use _
    {:time (js/Date.)         ;; What it returns becomes the new application state
     :time-color "#f88"}))    ;; so the application state will initially be a map with two keys


(rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
  :time-color-change            ;; dispatched when the user enters a new colour into the UI text field
  (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
    (assoc db :time-color new-color-value)))   ;; compute and return the new application state


(rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
  :timer                         ;; every second an event of this kind will be dispatched
  (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
    (assoc db :time new-time)))  ;; compute and return the new application state


;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
  :time
  (fn [db _]     ;; db is current app state. 2nd unused param is query vector
    (:time db))) ;; return a query computation over the application state

(rf/reg-sub
  :batch-overview
  (fn [db _]
    (:batch-overview db)))

(rf/reg-sub
  :time-color
  (fn [db _]
    (:time-color db)))


;; -- Domino 5 - View Functions ----------------------------------------------

(defn clock
  []
  [:div.example-clock
   {:style {:color @(rf/subscribe [:time-color])}}
   (-> @(rf/subscribe [:time])
       .toTimeString
       (str/split " ")
       first)])

(defn color-input
  []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @(rf/subscribe [:time-color])
            :on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---

(defn ui
  []
  [:div
   [:h1 "Hello world, it is now"]
   [clock]
   [color-input]])

(rf/reg-sub
  :initial-load-finished
  (fn [{:keys [sess-id]} _]
    (js/console.log "sess-id" sess-id)
    (not (not sess-id))))
;; -- Entry Point -------------------------------------------------------------

(defn- main-window
  []
  (-> @(rf/subscribe [:initial-load-finished])
      ((fn [is-subbed]
         (if-not is-subbed
           [:div.connecting
             [:span "Connecting..."]
             [:i.fa.fa-spin.fa-spinner]]
           [:div.main-inner
             [simple.views.batchItems/batch-items-container]
             [simple.views.editBar/edit-bar]
             [simple.views.fields/fields-container]])))))


(defn ^:export run
  []
  (rf/dispatch [:get-batch-details])
  (reagent/render [:div.main 
                    [simple.views/header]
                    [main-window]]
    (js/document.getElementById "app")))

                  
(defonce yo (simple.events/connect-batch))
