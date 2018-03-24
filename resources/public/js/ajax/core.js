// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33089 = arguments.length;
var i__29628__auto___33090 = (0);
while(true){
if((i__29628__auto___33090 < len__29627__auto___33089)){
args__29634__auto__.push((arguments[i__29628__auto___33090]));

var G__33091 = (i__29628__auto___33090 + (1));
i__29628__auto___33090 = G__33091;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq33087){
var G__33088 = cljs.core.first.call(null,seq33087);
var seq33087__$1 = cljs.core.next.call(null,seq33087);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__33088,seq33087__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33094 = arguments.length;
var i__29628__auto___33095 = (0);
while(true){
if((i__29628__auto___33095 < len__29627__auto___33094)){
args__29634__auto__.push((arguments[i__29628__auto___33095]));

var G__33096 = (i__29628__auto___33095 + (1));
i__29628__auto___33095 = G__33096;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq33092){
var G__33093 = cljs.core.first.call(null,seq33092);
var seq33092__$1 = cljs.core.next.call(null,seq33092);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__33093,seq33092__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33099 = arguments.length;
var i__29628__auto___33100 = (0);
while(true){
if((i__29628__auto___33100 < len__29627__auto___33099)){
args__29634__auto__.push((arguments[i__29628__auto___33100]));

var G__33101 = (i__29628__auto___33100 + (1));
i__29628__auto___33100 = G__33101;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq33097){
var G__33098 = cljs.core.first.call(null,seq33097);
var seq33097__$1 = cljs.core.next.call(null,seq33097);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__33098,seq33097__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33104 = arguments.length;
var i__29628__auto___33105 = (0);
while(true){
if((i__29628__auto___33105 < len__29627__auto___33104)){
args__29634__auto__.push((arguments[i__29628__auto___33105]));

var G__33106 = (i__29628__auto___33105 + (1));
i__29628__auto___33105 = G__33106;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq33102){
var G__33103 = cljs.core.first.call(null,seq33102);
var seq33102__$1 = cljs.core.next.call(null,seq33102);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__33103,seq33102__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33109 = arguments.length;
var i__29628__auto___33110 = (0);
while(true){
if((i__29628__auto___33110 < len__29627__auto___33109)){
args__29634__auto__.push((arguments[i__29628__auto___33110]));

var G__33111 = (i__29628__auto___33110 + (1));
i__29628__auto___33110 = G__33111;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq33107){
var G__33108 = cljs.core.first.call(null,seq33107);
var seq33107__$1 = cljs.core.next.call(null,seq33107);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__33108,seq33107__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33114 = arguments.length;
var i__29628__auto___33115 = (0);
while(true){
if((i__29628__auto___33115 < len__29627__auto___33114)){
args__29634__auto__.push((arguments[i__29628__auto___33115]));

var G__33116 = (i__29628__auto___33115 + (1));
i__29628__auto___33115 = G__33116;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq33112){
var G__33113 = cljs.core.first.call(null,seq33112);
var seq33112__$1 = cljs.core.next.call(null,seq33112);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__33113,seq33112__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33119 = arguments.length;
var i__29628__auto___33120 = (0);
while(true){
if((i__29628__auto___33120 < len__29627__auto___33119)){
args__29634__auto__.push((arguments[i__29628__auto___33120]));

var G__33121 = (i__29628__auto___33120 + (1));
i__29628__auto___33120 = G__33121;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq33117){
var G__33118 = cljs.core.first.call(null,seq33117);
var seq33117__$1 = cljs.core.next.call(null,seq33117);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__33118,seq33117__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33124 = arguments.length;
var i__29628__auto___33125 = (0);
while(true){
if((i__29628__auto___33125 < len__29627__auto___33124)){
args__29634__auto__.push((arguments[i__29628__auto___33125]));

var G__33126 = (i__29628__auto___33125 + (1));
i__29628__auto___33125 = G__33126;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq33122){
var G__33123 = cljs.core.first.call(null,seq33122);
var seq33122__$1 = cljs.core.next.call(null,seq33122);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__33123,seq33122__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__29634__auto__ = [];
var len__29627__auto___33129 = arguments.length;
var i__29628__auto___33130 = (0);
while(true){
if((i__29628__auto___33130 < len__29627__auto___33129)){
args__29634__auto__.push((arguments[i__29628__auto___33130]));

var G__33131 = (i__29628__auto___33130 + (1));
i__29628__auto___33130 = G__33131;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32686__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__32686__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32686__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq33127){
var G__33128 = cljs.core.first.call(null,seq33127);
var seq33127__$1 = cljs.core.next.call(null,seq33127);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__33128,seq33127__$1);
});


//# sourceMappingURL=core.js.map?rel=1521239468651
