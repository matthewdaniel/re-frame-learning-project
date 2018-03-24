// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__33425){
var map__33426 = p__33425;
var map__33426__$1 = ((((!((map__33426 == null)))?((((map__33426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33426):map__33426);
var operation = cljs.core.get.call(null,map__33426__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__33426__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__33426__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__33426__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__28458__auto__ = child_of;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__33428_33440 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__33429_33441 = null;
var count__33430_33442 = (0);
var i__33431_33443 = (0);
while(true){
if((i__33431_33443 < count__33430_33442)){
var vec__33432_33444 = cljs.core._nth.call(null,chunk__33429_33441,i__33431_33443);
var k_33445 = cljs.core.nth.call(null,vec__33432_33444,(0),null);
var cb_33446 = cljs.core.nth.call(null,vec__33432_33444,(1),null);
try{cb_33446.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e33435){var e_33447 = e33435;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_33445,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_33447);
}
var G__33448 = seq__33428_33440;
var G__33449 = chunk__33429_33441;
var G__33450 = count__33430_33442;
var G__33451 = (i__33431_33443 + (1));
seq__33428_33440 = G__33448;
chunk__33429_33441 = G__33449;
count__33430_33442 = G__33450;
i__33431_33443 = G__33451;
continue;
} else {
var temp__4657__auto___33452 = cljs.core.seq.call(null,seq__33428_33440);
if(temp__4657__auto___33452){
var seq__33428_33453__$1 = temp__4657__auto___33452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33428_33453__$1)){
var c__29297__auto___33454 = cljs.core.chunk_first.call(null,seq__33428_33453__$1);
var G__33455 = cljs.core.chunk_rest.call(null,seq__33428_33453__$1);
var G__33456 = c__29297__auto___33454;
var G__33457 = cljs.core.count.call(null,c__29297__auto___33454);
var G__33458 = (0);
seq__33428_33440 = G__33455;
chunk__33429_33441 = G__33456;
count__33430_33442 = G__33457;
i__33431_33443 = G__33458;
continue;
} else {
var vec__33436_33459 = cljs.core.first.call(null,seq__33428_33453__$1);
var k_33460 = cljs.core.nth.call(null,vec__33436_33459,(0),null);
var cb_33461 = cljs.core.nth.call(null,vec__33436_33459,(1),null);
try{cb_33461.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e33439){var e_33462 = e33439;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_33460,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_33462);
}
var G__33463 = cljs.core.next.call(null,seq__33428_33453__$1);
var G__33464 = null;
var G__33465 = (0);
var G__33466 = (0);
seq__33428_33440 = G__33463;
chunk__33429_33441 = G__33464;
count__33430_33442 = G__33465;
i__33431_33443 = G__33466;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1521239469127
