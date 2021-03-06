(defproject portal "0.10.5"
  :dependencies [[org.clojure/clojure        "1.9.0"]
                 [org.clojure/clojurescript  "1.10.238"]
                 [reagent  "0.7.0"]
                 [cljs-http "0.1.45"]
                 [re-com "0.9.0"]
                 [day8.re-frame/tracing-stubs "0.5.1"]
                 [camel-snake-kebab "0.4.0"]
                 [fentontravers/reframe-websocket "0.1.4"]
                 [cljsjs/moment "2.22.0-0"]
                 [day8.re-frame/async-flow-fx "0.0.9"]
                 [day8.re-frame/http-fx "0.1.6"]
                 [re-frame "0.10.5"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel  "0.5.14"]]

  :hooks [leiningen.cljsbuild]

  :profiles {:dev {
                    :dependencies 
                    [[day8.re-frame/re-frame-10x "0.3.1"]
                     [day8.re-frame/tracing "0.5.1"]]

                    
                    :cljsbuild
                   {:builds {:client {:figwheel     {:on-jsload "portal.core/run"}
                                      :compiler     {:main "portal.core"
                                                     :asset-path "js"
                                                     :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true
                                                                            "day8.re_frame.tracing.trace_enabled_QMARK_"  true}
                                                     :preloads             [day8.re-frame-10x.preload]
                                                     :optimizations :none
                                                     :source-map true
                                                     :source-map-timestamp true}}}}}

             :prod {:cljsbuild
                    {:builds {:client {:compiler    {:optimizations :advanced
                                                     :elide-asserts true
                                                     :pretty-print false}}}}}}

  :figwheel {:repl false :server-port 3449}
  

  :clean-targets ^{:protect false} ["resources/public/js"]

  :cljsbuild {:builds {:client {:source-paths ["src"]
                                :compiler     {:output-dir "resources/public/js"
                                               :output-to  "resources/public/js/client.js"}}}})
