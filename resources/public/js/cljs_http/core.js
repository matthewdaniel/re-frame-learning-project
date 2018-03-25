// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__37360){
var vec__37361 = p__37360;
var k = cljs.core.nth.call(null,vec__37361,(0),null);
var v = cljs.core.nth.call(null,vec__37361,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__37364 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__37364)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__37364)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__37364)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__37364)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__37364)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__37364)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37364)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37365){
var map__37366 = p__37365;
var map__37366__$1 = ((((!((map__37366 == null)))?((((map__37366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var request = map__37366__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__28458__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37368 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__37368,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__37368,response_type);

G__37368.setTimeoutInterval(timeout);

G__37368.setWithCredentials(send_credentials);

return G__37368;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37369){
var map__37370 = p__37369;
var map__37370__$1 = ((((!((map__37370 == null)))?((((map__37370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37370):map__37370);
var request = map__37370__$1;
var request_method = cljs.core.get.call(null,map__37370__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__37370__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__37370__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__37370__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__37370__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__37370__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__28458__auto__ = request_method;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_37394 = ((function (channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__37372_37395 = xhr;
G__37372_37395.setProgressEventsEnabled(true);

G__37372_37395.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_37394,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__37372_37395.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_37394,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__35451__auto___37396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___37396,channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___37396,channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_37383){
var state_val_37384 = (state_37383[(1)]);
if((state_val_37384 === (1))){
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37383__$1,(2),cancel);
} else {
if((state_val_37384 === (2))){
var inst_37374 = (state_37383[(2)]);
var inst_37375 = xhr.isComplete();
var inst_37376 = cljs.core.not.call(null,inst_37375);
var state_37383__$1 = (function (){var statearr_37385 = state_37383;
(statearr_37385[(7)] = inst_37374);

return statearr_37385;
})();
if(inst_37376){
var statearr_37386_37397 = state_37383__$1;
(statearr_37386_37397[(1)] = (3));

} else {
var statearr_37387_37398 = state_37383__$1;
(statearr_37387_37398[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (3))){
var inst_37378 = xhr.abort();
var state_37383__$1 = state_37383;
var statearr_37388_37399 = state_37383__$1;
(statearr_37388_37399[(2)] = inst_37378);

(statearr_37388_37399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (4))){
var state_37383__$1 = state_37383;
var statearr_37389_37400 = state_37383__$1;
(statearr_37389_37400[(2)] = null);

(statearr_37389_37400[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37384 === (5))){
var inst_37381 = (state_37383[(2)]);
var state_37383__$1 = state_37383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37383__$1,inst_37381);
} else {
return null;
}
}
}
}
}
});})(c__35451__auto___37396,channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__35363__auto__,c__35451__auto___37396,channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__35364__auto__ = null;
var cljs_http$core$xhr_$_state_machine__35364__auto____0 = (function (){
var statearr_37390 = [null,null,null,null,null,null,null,null];
(statearr_37390[(0)] = cljs_http$core$xhr_$_state_machine__35364__auto__);

(statearr_37390[(1)] = (1));

return statearr_37390;
});
var cljs_http$core$xhr_$_state_machine__35364__auto____1 = (function (state_37383){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_37383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e37391){if((e37391 instanceof Object)){
var ex__35367__auto__ = e37391;
var statearr_37392_37401 = state_37383;
(statearr_37392_37401[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37402 = state_37383;
state_37383 = G__37402;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__35364__auto__ = function(state_37383){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__35364__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__35364__auto____1.call(this,state_37383);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__35364__auto____0;
cljs_http$core$xhr_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__35364__auto____1;
return cljs_http$core$xhr_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___37396,channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__35453__auto__ = (function (){var statearr_37393 = f__35452__auto__.call(null);
(statearr_37393[(6)] = c__35451__auto___37396);

return statearr_37393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___37396,channel,request_url,method,headers__$1,xhr,map__37370,map__37370__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37403){
var map__37404 = p__37403;
var map__37404__$1 = ((((!((map__37404 == null)))?((((map__37404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37404):map__37404);
var request = map__37404__$1;
var timeout = cljs.core.get.call(null,map__37404__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__37404__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__37404__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__37404__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_37417 = jsonp.send(null,((function (channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_37417], null));

if(cljs.core.truth_(cancel)){
var c__35451__auto___37418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___37418,req_37417,channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___37418,req_37417,channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_37410){
var state_val_37411 = (state_37410[(1)]);
if((state_val_37411 === (1))){
var state_37410__$1 = state_37410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37410__$1,(2),cancel);
} else {
if((state_val_37411 === (2))){
var inst_37407 = (state_37410[(2)]);
var inst_37408 = jsonp.cancel(req_37417);
var state_37410__$1 = (function (){var statearr_37412 = state_37410;
(statearr_37412[(7)] = inst_37407);

return statearr_37412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37410__$1,inst_37408);
} else {
return null;
}
}
});})(c__35451__auto___37418,req_37417,channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__35363__auto__,c__35451__auto___37418,req_37417,channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__35364__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__35364__auto____0 = (function (){
var statearr_37413 = [null,null,null,null,null,null,null,null];
(statearr_37413[(0)] = cljs_http$core$jsonp_$_state_machine__35364__auto__);

(statearr_37413[(1)] = (1));

return statearr_37413;
});
var cljs_http$core$jsonp_$_state_machine__35364__auto____1 = (function (state_37410){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_37410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e37414){if((e37414 instanceof Object)){
var ex__35367__auto__ = e37414;
var statearr_37415_37419 = state_37410;
(statearr_37415_37419[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37420 = state_37410;
state_37410 = G__37420;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__35364__auto__ = function(state_37410){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__35364__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__35364__auto____1.call(this,state_37410);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__35364__auto____0;
cljs_http$core$jsonp_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__35364__auto____1;
return cljs_http$core$jsonp_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___37418,req_37417,channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__35453__auto__ = (function (){var statearr_37416 = f__35452__auto__.call(null);
(statearr_37416[(6)] = c__35451__auto___37418);

return statearr_37416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___37418,req_37417,channel,jsonp,map__37404,map__37404__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37421){
var map__37422 = p__37421;
var map__37422__$1 = ((((!((map__37422 == null)))?((((map__37422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37422.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37422):map__37422);
var request = map__37422__$1;
var request_method = cljs.core.get.call(null,map__37422__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1521903533494
