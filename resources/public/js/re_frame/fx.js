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
var _STAR_current_trace_STAR_32900 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__32901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__32902 = null;
var count__32903 = (0);
var i__32904 = (0);
while(true){
if((i__32904 < count__32903)){
var vec__32905 = cljs.core._nth.call(null,chunk__32902,i__32904);
var effect_key = cljs.core.nth.call(null,vec__32905,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32905,(1),null);
var temp__4655__auto___32921 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32921)){
var effect_fn_32922 = temp__4655__auto___32921;
effect_fn_32922.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32923 = seq__32901;
var G__32924 = chunk__32902;
var G__32925 = count__32903;
var G__32926 = (i__32904 + (1));
seq__32901 = G__32923;
chunk__32902 = G__32924;
count__32903 = G__32925;
i__32904 = G__32926;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32901);
if(temp__4657__auto__){
var seq__32901__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32901__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__32901__$1);
var G__32927 = cljs.core.chunk_rest.call(null,seq__32901__$1);
var G__32928 = c__29297__auto__;
var G__32929 = cljs.core.count.call(null,c__29297__auto__);
var G__32930 = (0);
seq__32901 = G__32927;
chunk__32902 = G__32928;
count__32903 = G__32929;
i__32904 = G__32930;
continue;
} else {
var vec__32908 = cljs.core.first.call(null,seq__32901__$1);
var effect_key = cljs.core.nth.call(null,vec__32908,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32908,(1),null);
var temp__4655__auto___32931 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32931)){
var effect_fn_32932 = temp__4655__auto___32931;
effect_fn_32932.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32933 = cljs.core.next.call(null,seq__32901__$1);
var G__32934 = null;
var G__32935 = (0);
var G__32936 = (0);
seq__32901 = G__32933;
chunk__32902 = G__32934;
count__32903 = G__32935;
i__32904 = G__32936;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32740__auto___32937 = re_frame.interop.now.call(null);
var duration__32741__auto___32938 = (end__32740__auto___32937 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32741__auto___32938,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__32740__auto___32937);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_32900;
}} else {
var seq__32911 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__32912 = null;
var count__32913 = (0);
var i__32914 = (0);
while(true){
if((i__32914 < count__32913)){
var vec__32915 = cljs.core._nth.call(null,chunk__32912,i__32914);
var effect_key = cljs.core.nth.call(null,vec__32915,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32915,(1),null);
var temp__4655__auto___32939 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32939)){
var effect_fn_32940 = temp__4655__auto___32939;
effect_fn_32940.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32941 = seq__32911;
var G__32942 = chunk__32912;
var G__32943 = count__32913;
var G__32944 = (i__32914 + (1));
seq__32911 = G__32941;
chunk__32912 = G__32942;
count__32913 = G__32943;
i__32914 = G__32944;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32911);
if(temp__4657__auto__){
var seq__32911__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32911__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__32911__$1);
var G__32945 = cljs.core.chunk_rest.call(null,seq__32911__$1);
var G__32946 = c__29297__auto__;
var G__32947 = cljs.core.count.call(null,c__29297__auto__);
var G__32948 = (0);
seq__32911 = G__32945;
chunk__32912 = G__32946;
count__32913 = G__32947;
i__32914 = G__32948;
continue;
} else {
var vec__32918 = cljs.core.first.call(null,seq__32911__$1);
var effect_key = cljs.core.nth.call(null,vec__32918,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32918,(1),null);
var temp__4655__auto___32949 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32949)){
var effect_fn_32950 = temp__4655__auto___32949;
effect_fn_32950.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32951 = cljs.core.next.call(null,seq__32911__$1);
var G__32952 = null;
var G__32953 = (0);
var G__32954 = (0);
seq__32911 = G__32951;
chunk__32912 = G__32952;
count__32913 = G__32953;
i__32914 = G__32954;
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
var seq__32955 = cljs.core.seq.call(null,value);
var chunk__32956 = null;
var count__32957 = (0);
var i__32958 = (0);
while(true){
if((i__32958 < count__32957)){
var map__32959 = cljs.core._nth.call(null,chunk__32956,i__32958);
var map__32959__$1 = ((((!((map__32959 == null)))?((((map__32959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32959):map__32959);
var effect = map__32959__$1;
var ms = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32955,chunk__32956,count__32957,i__32958,map__32959,map__32959__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32955,chunk__32956,count__32957,i__32958,map__32959,map__32959__$1,effect,ms,dispatch))
,ms);
}

var G__32963 = seq__32955;
var G__32964 = chunk__32956;
var G__32965 = count__32957;
var G__32966 = (i__32958 + (1));
seq__32955 = G__32963;
chunk__32956 = G__32964;
count__32957 = G__32965;
i__32958 = G__32966;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32955);
if(temp__4657__auto__){
var seq__32955__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32955__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__32955__$1);
var G__32967 = cljs.core.chunk_rest.call(null,seq__32955__$1);
var G__32968 = c__29297__auto__;
var G__32969 = cljs.core.count.call(null,c__29297__auto__);
var G__32970 = (0);
seq__32955 = G__32967;
chunk__32956 = G__32968;
count__32957 = G__32969;
i__32958 = G__32970;
continue;
} else {
var map__32961 = cljs.core.first.call(null,seq__32955__$1);
var map__32961__$1 = ((((!((map__32961 == null)))?((((map__32961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32961):map__32961);
var effect = map__32961__$1;
var ms = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32961__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32955,chunk__32956,count__32957,i__32958,map__32961,map__32961__$1,effect,ms,dispatch,seq__32955__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32955,chunk__32956,count__32957,i__32958,map__32961,map__32961__$1,effect,ms,dispatch,seq__32955__$1,temp__4657__auto__))
,ms);
}

var G__32971 = cljs.core.next.call(null,seq__32955__$1);
var G__32972 = null;
var G__32973 = (0);
var G__32974 = (0);
seq__32955 = G__32971;
chunk__32956 = G__32972;
count__32957 = G__32973;
i__32958 = G__32974;
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
var seq__32975 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__32976 = null;
var count__32977 = (0);
var i__32978 = (0);
while(true){
if((i__32978 < count__32977)){
var event = cljs.core._nth.call(null,chunk__32976,i__32978);
re_frame.router.dispatch.call(null,event);

var G__32979 = seq__32975;
var G__32980 = chunk__32976;
var G__32981 = count__32977;
var G__32982 = (i__32978 + (1));
seq__32975 = G__32979;
chunk__32976 = G__32980;
count__32977 = G__32981;
i__32978 = G__32982;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32975);
if(temp__4657__auto__){
var seq__32975__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32975__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__32975__$1);
var G__32983 = cljs.core.chunk_rest.call(null,seq__32975__$1);
var G__32984 = c__29297__auto__;
var G__32985 = cljs.core.count.call(null,c__29297__auto__);
var G__32986 = (0);
seq__32975 = G__32983;
chunk__32976 = G__32984;
count__32977 = G__32985;
i__32978 = G__32986;
continue;
} else {
var event = cljs.core.first.call(null,seq__32975__$1);
re_frame.router.dispatch.call(null,event);

var G__32987 = cljs.core.next.call(null,seq__32975__$1);
var G__32988 = null;
var G__32989 = (0);
var G__32990 = (0);
seq__32975 = G__32987;
chunk__32976 = G__32988;
count__32977 = G__32989;
i__32978 = G__32990;
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
var seq__32991 = cljs.core.seq.call(null,value);
var chunk__32992 = null;
var count__32993 = (0);
var i__32994 = (0);
while(true){
if((i__32994 < count__32993)){
var event = cljs.core._nth.call(null,chunk__32992,i__32994);
clear_event.call(null,event);

var G__32995 = seq__32991;
var G__32996 = chunk__32992;
var G__32997 = count__32993;
var G__32998 = (i__32994 + (1));
seq__32991 = G__32995;
chunk__32992 = G__32996;
count__32993 = G__32997;
i__32994 = G__32998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32991);
if(temp__4657__auto__){
var seq__32991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32991__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__32991__$1);
var G__32999 = cljs.core.chunk_rest.call(null,seq__32991__$1);
var G__33000 = c__29297__auto__;
var G__33001 = cljs.core.count.call(null,c__29297__auto__);
var G__33002 = (0);
seq__32991 = G__32999;
chunk__32992 = G__33000;
count__32993 = G__33001;
i__32994 = G__33002;
continue;
} else {
var event = cljs.core.first.call(null,seq__32991__$1);
clear_event.call(null,event);

var G__33003 = cljs.core.next.call(null,seq__32991__$1);
var G__33004 = null;
var G__33005 = (0);
var G__33006 = (0);
seq__32991 = G__33003;
chunk__32992 = G__33004;
count__32993 = G__33005;
i__32994 = G__33006;
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

//# sourceMappingURL=fx.js.map?rel=1521903529178
