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
var len__29627__auto___33896 = arguments.length;
var i__29628__auto___33897 = (0);
while(true){
if((i__29628__auto___33897 < len__29627__auto___33896)){
args__29634__auto__.push((arguments[i__29628__auto___33897]));

var G__33898 = (i__29628__auto___33897 + (1));
i__29628__auto___33897 = G__33898;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq33894){
var G__33895 = cljs.core.first.call(null,seq33894);
var seq33894__$1 = cljs.core.next.call(null,seq33894);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__33895,seq33894__$1);
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
var len__29627__auto___33901 = arguments.length;
var i__29628__auto___33902 = (0);
while(true){
if((i__29628__auto___33902 < len__29627__auto___33901)){
args__29634__auto__.push((arguments[i__29628__auto___33902]));

var G__33903 = (i__29628__auto___33902 + (1));
i__29628__auto___33902 = G__33903;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq33899){
var G__33900 = cljs.core.first.call(null,seq33899);
var seq33899__$1 = cljs.core.next.call(null,seq33899);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__33900,seq33899__$1);
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
var len__29627__auto___33906 = arguments.length;
var i__29628__auto___33907 = (0);
while(true){
if((i__29628__auto___33907 < len__29627__auto___33906)){
args__29634__auto__.push((arguments[i__29628__auto___33907]));

var G__33908 = (i__29628__auto___33907 + (1));
i__29628__auto___33907 = G__33908;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq33904){
var G__33905 = cljs.core.first.call(null,seq33904);
var seq33904__$1 = cljs.core.next.call(null,seq33904);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__33905,seq33904__$1);
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
var len__29627__auto___33911 = arguments.length;
var i__29628__auto___33912 = (0);
while(true){
if((i__29628__auto___33912 < len__29627__auto___33911)){
args__29634__auto__.push((arguments[i__29628__auto___33912]));

var G__33913 = (i__29628__auto___33912 + (1));
i__29628__auto___33912 = G__33913;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq33909){
var G__33910 = cljs.core.first.call(null,seq33909);
var seq33909__$1 = cljs.core.next.call(null,seq33909);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__33910,seq33909__$1);
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
var len__29627__auto___33916 = arguments.length;
var i__29628__auto___33917 = (0);
while(true){
if((i__29628__auto___33917 < len__29627__auto___33916)){
args__29634__auto__.push((arguments[i__29628__auto___33917]));

var G__33918 = (i__29628__auto___33917 + (1));
i__29628__auto___33917 = G__33918;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq33914){
var G__33915 = cljs.core.first.call(null,seq33914);
var seq33914__$1 = cljs.core.next.call(null,seq33914);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__33915,seq33914__$1);
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
var len__29627__auto___33921 = arguments.length;
var i__29628__auto___33922 = (0);
while(true){
if((i__29628__auto___33922 < len__29627__auto___33921)){
args__29634__auto__.push((arguments[i__29628__auto___33922]));

var G__33923 = (i__29628__auto___33922 + (1));
i__29628__auto___33922 = G__33923;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq33919){
var G__33920 = cljs.core.first.call(null,seq33919);
var seq33919__$1 = cljs.core.next.call(null,seq33919);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__33920,seq33919__$1);
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
var len__29627__auto___33926 = arguments.length;
var i__29628__auto___33927 = (0);
while(true){
if((i__29628__auto___33927 < len__29627__auto___33926)){
args__29634__auto__.push((arguments[i__29628__auto___33927]));

var G__33928 = (i__29628__auto___33927 + (1));
i__29628__auto___33927 = G__33928;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq33924){
var G__33925 = cljs.core.first.call(null,seq33924);
var seq33924__$1 = cljs.core.next.call(null,seq33924);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__33925,seq33924__$1);
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
var len__29627__auto___33931 = arguments.length;
var i__29628__auto___33932 = (0);
while(true){
if((i__29628__auto___33932 < len__29627__auto___33931)){
args__29634__auto__.push((arguments[i__29628__auto___33932]));

var G__33933 = (i__29628__auto___33932 + (1));
i__29628__auto___33932 = G__33933;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq33929){
var G__33930 = cljs.core.first.call(null,seq33929);
var seq33929__$1 = cljs.core.next.call(null,seq33929);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__33930,seq33929__$1);
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
var len__29627__auto___33936 = arguments.length;
var i__29628__auto___33937 = (0);
while(true){
if((i__29628__auto___33937 < len__29627__auto___33936)){
args__29634__auto__.push((arguments[i__29628__auto___33937]));

var G__33938 = (i__29628__auto___33937 + (1));
i__29628__auto___33937 = G__33938;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__33493__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__33493__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__33493__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq33934){
var G__33935 = cljs.core.first.call(null,seq33934);
var seq33934__$1 = cljs.core.next.call(null,seq33934);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__33935,seq33934__$1);
});


//# sourceMappingURL=core.js.map?rel=1521903530923
