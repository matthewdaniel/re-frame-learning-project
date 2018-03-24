// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_35969 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__35970 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35971 = null;
var count__35972 = (0);
var i__35973 = (0);
while(true){
if((i__35973 < count__35972)){
var vec__35974 = cljs.core._nth.call(null,chunk__35971,i__35973);
var effect_key = cljs.core.nth.call(null,vec__35974,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35974,(1),null);
var temp__4655__auto___35990 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35990)){
var effect_fn_35991 = temp__4655__auto___35990;
effect_fn_35991.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__35992 = seq__35970;
var G__35993 = chunk__35971;
var G__35994 = count__35972;
var G__35995 = (i__35973 + (1));
seq__35970 = G__35992;
chunk__35971 = G__35993;
count__35972 = G__35994;
i__35973 = G__35995;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35970);
if(temp__4657__auto__){
var seq__35970__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35970__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__35970__$1);
var G__35996 = cljs.core.chunk_rest.call(null,seq__35970__$1);
var G__35997 = c__29297__auto__;
var G__35998 = cljs.core.count.call(null,c__29297__auto__);
var G__35999 = (0);
seq__35970 = G__35996;
chunk__35971 = G__35997;
count__35972 = G__35998;
i__35973 = G__35999;
continue;
} else {
var vec__35977 = cljs.core.first.call(null,seq__35970__$1);
var effect_key = cljs.core.nth.call(null,vec__35977,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35977,(1),null);
var temp__4655__auto___36000 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36000)){
var effect_fn_36001 = temp__4655__auto___36000;
effect_fn_36001.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__36002 = cljs.core.next.call(null,seq__35970__$1);
var G__36003 = null;
var G__36004 = (0);
var G__36005 = (0);
seq__35970 = G__36002;
chunk__35971 = G__36003;
count__35972 = G__36004;
i__35973 = G__36005;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__33403__auto___36006 = re_frame.interop.now.call(null);
var duration__33404__auto___36007 = (end__33403__auto___36006 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__33404__auto___36007,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__33403__auto___36006);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_35969;
}} else {
var seq__35980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35981 = null;
var count__35982 = (0);
var i__35983 = (0);
while(true){
if((i__35983 < count__35982)){
var vec__35984 = cljs.core._nth.call(null,chunk__35981,i__35983);
var effect_key = cljs.core.nth.call(null,vec__35984,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35984,(1),null);
var temp__4655__auto___36008 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36008)){
var effect_fn_36009 = temp__4655__auto___36008;
effect_fn_36009.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__36010 = seq__35980;
var G__36011 = chunk__35981;
var G__36012 = count__35982;
var G__36013 = (i__35983 + (1));
seq__35980 = G__36010;
chunk__35981 = G__36011;
count__35982 = G__36012;
i__35983 = G__36013;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35980);
if(temp__4657__auto__){
var seq__35980__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35980__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__35980__$1);
var G__36014 = cljs.core.chunk_rest.call(null,seq__35980__$1);
var G__36015 = c__29297__auto__;
var G__36016 = cljs.core.count.call(null,c__29297__auto__);
var G__36017 = (0);
seq__35980 = G__36014;
chunk__35981 = G__36015;
count__35982 = G__36016;
i__35983 = G__36017;
continue;
} else {
var vec__35987 = cljs.core.first.call(null,seq__35980__$1);
var effect_key = cljs.core.nth.call(null,vec__35987,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35987,(1),null);
var temp__4655__auto___36018 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___36018)){
var effect_fn_36019 = temp__4655__auto___36018;
effect_fn_36019.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__36020 = cljs.core.next.call(null,seq__35980__$1);
var G__36021 = null;
var G__36022 = (0);
var G__36023 = (0);
seq__35980 = G__36020;
chunk__35981 = G__36021;
count__35982 = G__36022;
i__35983 = G__36023;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__36024 = cljs.core.seq.call(null,value);
var chunk__36025 = null;
var count__36026 = (0);
var i__36027 = (0);
while(true){
if((i__36027 < count__36026)){
var map__36028 = cljs.core._nth.call(null,chunk__36025,i__36027);
var map__36028__$1 = ((((!((map__36028 == null)))?((((map__36028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36028):map__36028);
var effect = map__36028__$1;
var ms = cljs.core.get.call(null,map__36028__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36028__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36024,chunk__36025,count__36026,i__36027,map__36028,map__36028__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36024,chunk__36025,count__36026,i__36027,map__36028,map__36028__$1,effect,ms,dispatch))
,ms);
}

var G__36032 = seq__36024;
var G__36033 = chunk__36025;
var G__36034 = count__36026;
var G__36035 = (i__36027 + (1));
seq__36024 = G__36032;
chunk__36025 = G__36033;
count__36026 = G__36034;
i__36027 = G__36035;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36024);
if(temp__4657__auto__){
var seq__36024__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36024__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__36024__$1);
var G__36036 = cljs.core.chunk_rest.call(null,seq__36024__$1);
var G__36037 = c__29297__auto__;
var G__36038 = cljs.core.count.call(null,c__29297__auto__);
var G__36039 = (0);
seq__36024 = G__36036;
chunk__36025 = G__36037;
count__36026 = G__36038;
i__36027 = G__36039;
continue;
} else {
var map__36030 = cljs.core.first.call(null,seq__36024__$1);
var map__36030__$1 = ((((!((map__36030 == null)))?((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36030):map__36030);
var effect = map__36030__$1;
var ms = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__36030__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__36024,chunk__36025,count__36026,i__36027,map__36030,map__36030__$1,effect,ms,dispatch,seq__36024__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__36024,chunk__36025,count__36026,i__36027,map__36030,map__36030__$1,effect,ms,dispatch,seq__36024__$1,temp__4657__auto__))
,ms);
}

var G__36040 = cljs.core.next.call(null,seq__36024__$1);
var G__36041 = null;
var G__36042 = (0);
var G__36043 = (0);
seq__36024 = G__36040;
chunk__36025 = G__36041;
count__36026 = G__36042;
i__36027 = G__36043;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__36044 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__36045 = null;
var count__36046 = (0);
var i__36047 = (0);
while(true){
if((i__36047 < count__36046)){
var event = cljs.core._nth.call(null,chunk__36045,i__36047);
re_frame.router.dispatch.call(null,event);

var G__36048 = seq__36044;
var G__36049 = chunk__36045;
var G__36050 = count__36046;
var G__36051 = (i__36047 + (1));
seq__36044 = G__36048;
chunk__36045 = G__36049;
count__36046 = G__36050;
i__36047 = G__36051;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36044);
if(temp__4657__auto__){
var seq__36044__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36044__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__36044__$1);
var G__36052 = cljs.core.chunk_rest.call(null,seq__36044__$1);
var G__36053 = c__29297__auto__;
var G__36054 = cljs.core.count.call(null,c__29297__auto__);
var G__36055 = (0);
seq__36044 = G__36052;
chunk__36045 = G__36053;
count__36046 = G__36054;
i__36047 = G__36055;
continue;
} else {
var event = cljs.core.first.call(null,seq__36044__$1);
re_frame.router.dispatch.call(null,event);

var G__36056 = cljs.core.next.call(null,seq__36044__$1);
var G__36057 = null;
var G__36058 = (0);
var G__36059 = (0);
seq__36044 = G__36056;
chunk__36045 = G__36057;
count__36046 = G__36058;
i__36047 = G__36059;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__36060 = cljs.core.seq.call(null,value);
var chunk__36061 = null;
var count__36062 = (0);
var i__36063 = (0);
while(true){
if((i__36063 < count__36062)){
var event = cljs.core._nth.call(null,chunk__36061,i__36063);
clear_event.call(null,event);

var G__36064 = seq__36060;
var G__36065 = chunk__36061;
var G__36066 = count__36062;
var G__36067 = (i__36063 + (1));
seq__36060 = G__36064;
chunk__36061 = G__36065;
count__36062 = G__36066;
i__36063 = G__36067;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36060);
if(temp__4657__auto__){
var seq__36060__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36060__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__36060__$1);
var G__36068 = cljs.core.chunk_rest.call(null,seq__36060__$1);
var G__36069 = c__29297__auto__;
var G__36070 = cljs.core.count.call(null,c__29297__auto__);
var G__36071 = (0);
seq__36060 = G__36068;
chunk__36061 = G__36069;
count__36062 = G__36070;
i__36063 = G__36071;
continue;
} else {
var event = cljs.core.first.call(null,seq__36060__$1);
clear_event.call(null,event);

var G__36072 = cljs.core.next.call(null,seq__36060__$1);
var G__36073 = null;
var G__36074 = (0);
var G__36075 = (0);
seq__36060 = G__36072;
chunk__36061 = G__36073;
count__36062 = G__36074;
i__36063 = G__36075;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1521239471193
