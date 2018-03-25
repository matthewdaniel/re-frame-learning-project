// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.async_flow_fx');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('clojure.set');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame.async_flow_fx.dissoc_in = (function day8$re_frame$async_flow_fx$dissoc_in(m,p__38669){
var vec__38670 = p__38669;
var seq__38671 = cljs.core.seq.call(null,vec__38670);
var first__38672 = cljs.core.first.call(null,seq__38671);
var seq__38671__$1 = cljs.core.next.call(null,seq__38671);
var k = first__38672;
var ks = seq__38671__$1;
var keys = vec__38670;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = day8.re_frame.async_flow_fx.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Looks at the required-events items and returns a predicate which
 *   will either
 *   - match only the event-keyword if a keyword is supplied
 *   - match the entire event vector if a collection is supplied
 *   - returns a callback-pred if it is a fn
 */
day8.re_frame.async_flow_fx.as_callback_pred = (function day8$re_frame$async_flow_fx$as_callback_pred(callback_pred){
if(cljs.core.truth_(callback_pred)){
if(cljs.core.fn_QMARK_.call(null,callback_pred)){
return callback_pred;
} else {
if((callback_pred instanceof cljs.core.Keyword)){
return (function (p__38673){
var vec__38674 = p__38673;
var event_id = cljs.core.nth.call(null,vec__38674,(0),null);
var _ = cljs.core.nth.call(null,vec__38674,(1),null);
return cljs.core._EQ_.call(null,callback_pred,event_id);
});
} else {
if(cljs.core.coll_QMARK_.call(null,callback_pred)){
return (function (event_v){
return cljs.core._EQ_.call(null,callback_pred,event_v);
});
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,callback_pred))," isn't an event predicate"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-pred","callback-pred",90867475),callback_pred], null));

}
}
}
} else {
return null;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),(function (){var id__GT_listen_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var process_one_entry = ((function (id__GT_listen_fn){
return (function (p__38677){
var map__38678 = p__38677;
var map__38678__$1 = ((((!((map__38678 == null)))?((((map__38678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38678):map__38678);
var m = map__38678__$1;
var unregister = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"unregister","unregister",2105339971));
var register = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"register","register",1968522516));
var events = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch_to = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401));
var _ = ((cljs.core.map_QMARK_.call(null,m))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["re-frame: effects handler for :forward-events expected a map or a list of maps. Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('')),"\n","(map? m)"].join('')))})());
var ___$1 = (((cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),null], null), null),cljs.core.set.call(null,cljs.core.keys.call(null,m)))) || (cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"events","events",1792552201),null,new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),null,new cljs.core.Keyword(null,"register","register",1968522516),null], null), null),cljs.core.set.call(null,cljs.core.keys.call(null,m)))))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["re-frame: effects handler for :forward-events given wrong map keys",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.set.call(null,cljs.core.keys.call(null,m)))].join('')),"\n","(or (= #{:unregister} (-> m keys set)) (= #{:events :dispatch-to :register} (-> m keys set)))"].join('')))})());
if(cljs.core.truth_(unregister)){
return re_frame.core.remove_post_event_callback.call(null,unregister);
} else {
var events_preds = cljs.core.map.call(null,day8.re_frame.async_flow_fx.as_callback_pred,events);
var post_event_callback_fn = ((function (events_preds,_,___$1,map__38678,map__38678__$1,m,unregister,register,events,dispatch_to,id__GT_listen_fn){
return (function (event_v,___$2){
if(cljs.core.truth_(cljs.core.some.call(null,((function (events_preds,_,___$1,map__38678,map__38678__$1,m,unregister,register,events,dispatch_to,id__GT_listen_fn){
return (function (pred){
return pred.call(null,event_v);
});})(events_preds,_,___$1,map__38678,map__38678__$1,m,unregister,register,events,dispatch_to,id__GT_listen_fn))
,events_preds))){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,dispatch_to,event_v));
} else {
return null;
}
});})(events_preds,_,___$1,map__38678,map__38678__$1,m,unregister,register,events,dispatch_to,id__GT_listen_fn))
;
return re_frame.core.add_post_event_callback.call(null,register,post_event_callback_fn);
}
});})(id__GT_listen_fn))
;
return ((function (id__GT_listen_fn,process_one_entry){
return (function (val){
if(cljs.core.map_QMARK_.call(null,val)){
return process_one_entry.call(null,val);
} else {
if(cljs.core.sequential_QMARK_.call(null,val)){
return cljs.core.doall.call(null,cljs.core.map.call(null,process_one_entry,val));
} else {
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),":forward-events expected a map or a list of maps, but got: ",val);

}
}
});
;})(id__GT_listen_fn,process_one_entry))
})());
day8.re_frame.async_flow_fx.seen_all_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_all_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.call(null,day8.re_frame.async_flow_fx.as_callback_pred,required_events);
return cljs.core.every_QMARK_.call(null,((function (callback_preds){
return (function (pred){
return cljs.core.some.call(null,pred,seen_events);
});})(callback_preds))
,callback_preds);
});
day8.re_frame.async_flow_fx.seen_any_of_QMARK_ = (function day8$re_frame$async_flow_fx$seen_any_of_QMARK_(required_events,seen_events){
var callback_preds = cljs.core.map.call(null,day8.re_frame.async_flow_fx.as_callback_pred,required_events);
return !((cljs.core.some.call(null,((function (callback_preds){
return (function (pred){
return cljs.core.some.call(null,pred,seen_events);
});})(callback_preds))
,callback_preds) == null));
});
/**
 * Given the accumulated set of seen events and the set of rules already started,
 *   return the list of rules which should now be started
 */
day8.re_frame.async_flow_fx.startable_rules = (function day8$re_frame$async_flow_fx$startable_rules(rules,now_seen_events,rules_fired){
return cljs.core.filterv.call(null,(function (task){
return new cljs.core.Keyword(null,"when","when",-576417306).cljs$core$IFn$_invoke$arity$1(task).call(null,new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(task),now_seen_events);
}),cljs.core.remove.call(null,cljs.core.comp.call(null,rules_fired,new cljs.core.Keyword(null,"id","id",-1388402092)),rules));
});
day8.re_frame.async_flow_fx.map_when__GT_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"seen?","seen?",-1677689856),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-both?","seen-both?",-1396729677),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-all-of?","seen-all-of?",-651402557),day8.re_frame.async_flow_fx.seen_all_of_QMARK_,new cljs.core.Keyword(null,"seen-any-of?","seen-any-of?",622544182),day8.re_frame.async_flow_fx.seen_any_of_QMARK_], null);
day8.re_frame.async_flow_fx.when__GT_fn = (function day8$re_frame$async_flow_fx$when__GT_fn(when_kw){
var temp__4655__auto__ = day8.re_frame.async_flow_fx.map_when__GT_fn.call(null,when_kw);
if(cljs.core.truth_(temp__4655__auto__)){
var when_fn = temp__4655__auto__;
return when_fn;
} else {
return re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: got bad value for :when - ",when_kw);
}
});
/**
 * Massage the supplied rules as follows:
 *  - replace `:when` keyword value with a function implementing the predicate
 *  - ensure that only `:dispatch` or `:dispatch-n` is provided
 *  - add a unique :id, if one not already present
 */
day8.re_frame.async_flow_fx.massage_rules = (function day8$re_frame$async_flow_fx$massage_rules(rules){
return cljs.core.map_indexed.call(null,(function (index,p__38680){
var map__38681 = p__38680;
var map__38681__$1 = ((((!((map__38681 == null)))?((((map__38681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38681):map__38681);
var rule = map__38681__$1;
var id = cljs.core.get.call(null,map__38681__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var when = cljs.core.get.call(null,map__38681__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var events = cljs.core.get.call(null,map__38681__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var dispatch = cljs.core.get.call(null,map__38681__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var dispatch_n = cljs.core.get.call(null,map__38681__$1,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236));
var halt_QMARK_ = cljs.core.get.call(null,map__38681__$1,new cljs.core.Keyword(null,"halt?","halt?",-1110658247));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__28458__auto__ = id;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return index;
}
})(),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),(function (){var or__28458__auto__ = halt_QMARK_;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return false;
}
})(),new cljs.core.Keyword(null,"when","when",-576417306),day8.re_frame.async_flow_fx.when__GT_fn.call(null,when),new cljs.core.Keyword(null,"events","events",1792552201),((cljs.core.coll_QMARK_.call(null,events))?cljs.core.set.call(null,events):cljs.core.PersistentHashSet.createAsIfByAssoc([events])),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(cljs.core.truth_(dispatch_n)?(cljs.core.truth_(dispatch)?re_frame.core.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"async-flow: rule can only specify one of :dispatch and :dispatch-n. Got both: ",rule):dispatch_n):(cljs.core.truth_(dispatch)?(function (){var x__29320__auto__ = dispatch;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29320__auto__);
})():cljs.core.List.EMPTY
))], null);
}),rules);
});
/**
 * Given a flow definitiion, returns an event handler which implements this definition
 */
day8.re_frame.async_flow_fx.make_flow_event_handler = (function day8$re_frame$async_flow_fx$make_flow_event_handler(p__38683){
var map__38684 = p__38683;
var map__38684__$1 = ((((!((map__38684 == null)))?((((map__38684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38684):map__38684);
var id = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var db_path = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword(null,"db-path","db-path",-68094099));
var rules = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var first_dispatch = cljs.core.get.call(null,map__38684__$1,new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923));
var _ = ((((db_path == null)) || (cljs.core.vector_QMARK_.call(null,db_path)))?null:(function(){throw (new Error(["Assert failed: ","aync-flow: db-path must be a vector","\n","(or (nil? db-path) (vector? db-path))"].join('')))})());
var local_store = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var set_state = (cljs.core.truth_(db_path)?((function (_,local_store,map__38684,map__38684__$1,id,db_path,rules,first_dispatch){
return (function (db,seen,started){
return cljs.core.assoc_in.call(null,db,db_path,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));
});})(_,local_store,map__38684,map__38684__$1,id,db_path,rules,first_dispatch))
:((function (_,local_store,map__38684,map__38684__$1,id,db_path,rules,first_dispatch){
return (function (db,seen,started){
cljs.core.reset_BANG_.call(null,local_store,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seen-events","seen-events",1607648392),seen,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140),started], null));

return db;
});})(_,local_store,map__38684,map__38684__$1,id,db_path,rules,first_dispatch))
);
var get_state = (cljs.core.truth_(db_path)?((function (_,local_store,set_state,map__38684,map__38684__$1,id,db_path,rules,first_dispatch){
return (function (db){
return cljs.core.get_in.call(null,db,db_path);
});})(_,local_store,set_state,map__38684,map__38684__$1,id,db_path,rules,first_dispatch))
:((function (_,local_store,set_state,map__38684,map__38684__$1,id,db_path,rules,first_dispatch){
return (function (___$1){
return cljs.core.deref.call(null,local_store);
});})(_,local_store,set_state,map__38684,map__38684__$1,id,db_path,rules,first_dispatch))
);
var rules__$1 = day8.re_frame.async_flow_fx.massage_rules.call(null,rules);
return ((function (_,local_store,set_state,get_state,rules__$1,map__38684,map__38684__$1,id,db_path,rules,first_dispatch){
return (function day8$re_frame$async_flow_fx$make_flow_event_handler_$_async_flow_event_hander(p__38686,p__38687){
var map__38688 = p__38686;
var map__38688__$1 = ((((!((map__38688 == null)))?((((map__38688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38688):map__38688);
var db = cljs.core.get.call(null,map__38688__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__38689 = p__38687;
var ___$1 = cljs.core.nth.call(null,vec__38689,(0),null);
var event_type = cljs.core.nth.call(null,vec__38689,(1),null);
var event_v = vec__38689;
var pred__38693 = cljs.core._EQ_;
var expr__38694 = event_type;
if(cljs.core.truth_(pred__38693.call(null,new cljs.core.Keyword(null,"setup","setup",1987730512),expr__38694))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),set_state.call(null,db,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),first_dispatch,new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"register","register",1968522516),id,new cljs.core.Keyword(null,"events","events",1792552201),cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,new cljs.core.Keyword(null,"events","events",1792552201),rules__$1)),new cljs.core.Keyword(null,"dispatch-to","dispatch-to",-354764401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], null);
} else {
var vec__38696 = event_v;
var ___$2 = cljs.core.nth.call(null,vec__38696,(0),null);
var forwarded_event = cljs.core.nth.call(null,vec__38696,(1),null);
var map__38699 = get_state.call(null,db);
var map__38699__$1 = ((((!((map__38699 == null)))?((((map__38699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38699):map__38699);
var seen_events = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"seen-events","seen-events",1607648392));
var rules_fired = cljs.core.get.call(null,map__38699__$1,new cljs.core.Keyword(null,"rules-fired","rules-fired",-1669838140));
var new_seen_events = cljs.core.conj.call(null,seen_events,forwarded_event);
var ready_rules = day8.re_frame.async_flow_fx.startable_rules.call(null,rules__$1,new_seen_events,rules_fired);
var halt_QMARK_ = cljs.core.some.call(null,new cljs.core.Keyword(null,"halt?","halt?",-1110658247),ready_rules);
var ready_rules_ids = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),ready_rules));
var new_rules_fired = clojure.set.union.call(null,rules_fired,ready_rules_ids);
var new_dispatches = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),ready_rules);
var new_db = set_state.call(null,db,new_seen_events,new_rules_fired);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null),((cljs.core.seq.call(null,new_dispatches))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new_dispatches], null):null),(cljs.core.truth_(halt_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),day8.re_frame.async_flow_fx.dissoc_in.call(null,new_db,db_path),new cljs.core.Keyword(null,"forward-events","forward-events",1216790539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unregister","unregister",2105339971),id], null),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),id], null):null));
}
});
;})(_,local_store,set_state,get_state,rules__$1,map__38684,map__38684__$1,id,db_path,rules,first_dispatch))
});
/**
 * Ensure `flow` has an id. Return a vector of [id flow].
 */
day8.re_frame.async_flow_fx.ensure_has_id = (function day8$re_frame$async_flow_fx$ensure_has_id(flow){
var temp__4655__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow);
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,flow], null);
} else {
var new_id = cljs.core.keyword.call(null,["async-flow/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"id-"))].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_id,cljs.core.assoc.call(null,flow,new cljs.core.Keyword(null,"id","id",-1388402092),new_id)], null);
}
});
/**
 * Action the given flow effect
 */
day8.re_frame.async_flow_fx.flow__GT_handler = (function day8$re_frame$async_flow_fx$flow__GT_handler(flow){
var vec__38701 = day8.re_frame.async_flow_fx.ensure_has_id.call(null,flow);
var id = cljs.core.nth.call(null,vec__38701,(0),null);
var flow_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__38701,(1),null);
re_frame.core.reg_event_fx.call(null,id,day8.re_frame.async_flow_fx.make_flow_event_handler.call(null,flow_SINGLEQUOTE_));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"setup","setup",1987730512)], null));
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),day8.re_frame.async_flow_fx.flow__GT_handler);

//# sourceMappingURL=async_flow_fx.js.map?rel=1521903536344
