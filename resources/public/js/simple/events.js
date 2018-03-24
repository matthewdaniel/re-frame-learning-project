// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.events');
goog.require('cljs.core');
goog.require('day8.re_frame.async_flow_fx');
goog.require('cljsjs.moment');
goog.require('camel_snake_kebab.core');
goog.require('goog.string');
goog.require('cljs.pprint');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
simple.events.make_moment = (function simple$events$make_moment(val){
if(cljs.core.truth_(val)){
return moment(val);
} else {
return val;
}
});
simple.events.momentify = (function simple$events$momentify(params){
var params__$1 = cljs.core.set.call(null,params);
return ((function (params__$1){
return (function (p1__42772_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (params__$1){
return (function (p__42773){
var vec__42774 = p__42773;
var param = cljs.core.nth.call(null,vec__42774,(0),null);
var val = cljs.core.nth.call(null,vec__42774,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,((cljs.core.contains_QMARK_.call(null,params__$1,param))?simple.events.make_moment.call(null,val):val)], null);
});})(params__$1))
,p1__42772_SHARP_));
});
;})(params__$1))
});
simple.events.formatter = ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));
simple.events.transform_ajax = (function simple$events$transform_ajax(var_args){
var args__29634__auto__ = [];
var len__29627__auto___42779 = arguments.length;
var i__29628__auto___42780 = (0);
while(true){
if((i__29628__auto___42780 < len__29627__auto___42779)){
args__29634__auto__.push((arguments[i__29628__auto___42780]));

var G__42781 = (i__29628__auto___42780 + (1));
i__29628__auto___42780 = G__42781;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return simple.events.transform_ajax.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

simple.events.transform_ajax.cljs$core$IFn$_invoke$arity$variadic = (function (formatters){
return cljs.core.assoc.call(null,simple.events.formatter,new cljs.core.Keyword(null,"read","read",1140058661),(function (p1__42777_SHARP_){
return simple.events.momentify.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokenExpires","tokenExpires",-62662516)], null)).call(null,new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(simple.events.formatter).call(null,p1__42777_SHARP_));
}));
});

simple.events.transform_ajax.cljs$lang$maxFixedArity = (0);

simple.events.transform_ajax.cljs$lang$applyTo = (function (seq42778){
return simple.events.transform_ajax.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42778));
});

simple.events.can_descend = (function simple$events$can_descend(val){
return (cljs.core.seq_QMARK_.call(null,val)) || (cljs.core.map_QMARK_.call(null,val));
});
simple.events.snake_kebab_it = (function simple$events$snake_kebab_it(obj){
if(!(cljs.core.map_QMARK_.call(null,obj))){
var test = (1);
return cljs.core.map.call(null,simple.events.snake_kebab_it,obj);
} else {
var obj2 = cljs.core.seq.call(null,obj);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (obj2){
return (function (p__42782){
var vec__42783 = p__42782;
var param = cljs.core.nth.call(null,vec__42783,(0),null);
var val = cljs.core.nth.call(null,vec__42783,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [camel_snake_kebab.core.__GT_kebab_case.call(null,param),(cljs.core.truth_(simple.events.can_descend.call(null,val))?simple.events.snake_kebab_it.call(null,val):val)], null);
});})(obj2))
,obj2));
}
});
simple.events.connect_batch = (function simple$events$connect_batch(){
var con = (window["hubConnection"]);
var batchWsApi = (window["batchWsApi"]);
var server = (batchWsApi["server"]);
batchWsApi.on("listUpdate",((function (con,batchWsApi,server){
return (function (p1__42786_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list-updated","list-updated",622542834),p1__42786_SHARP_], null));
});})(con,batchWsApi,server))
);

batchWsApi.on("notifyError",((function (con,batchWsApi,server){
return (function (p1__42787_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list-update-error","list-update-error",1954987290),p1__42787_SHARP_], null));
});})(con,batchWsApi,server))
);

cljs.pprint.pprint.call(null,"START!");

((function (con,batchWsApi,server){
return (function (conStart){
return cljs.core.get.call(null,conStart,"done",((function (con,batchWsApi,server){
return (function (_){
cljs.pprint.pprint.call(null,"yo done");

simple.events.sess_id = (con["id"]);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sess-id","sess-id",701996862),simple.events.sess_id], null));

window.batch_subscribe("81294b8a-adfb-4687-8b4d-5f12540d3d59");

return re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"checkout-item","checkout-item",613416591),((function (con,batchWsApi,server){
return (function (db,p__42788){
var vec__42789 = p__42788;
var ___$1 = cljs.core.nth.call(null,vec__42789,(0),null);
var item_id = cljs.core.nth.call(null,vec__42789,(1),null);
window.batch_checkout("81294b8a-adfb-4687-8b4d-5f12540d3d59",item_id);

return db;
});})(con,batchWsApi,server))
);
});})(con,batchWsApi,server))
.call(null)).call(null);
});})(con,batchWsApi,server))
.call(null,((function (con,batchWsApi,server){
return (function (con__$1){
return window.hubConnection.start();
});})(con,batchWsApi,server))
.call(null,con));


return null;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"sess-id","sess-id",701996862),(function (db,p__42792){
var vec__42793 = p__42792;
var _ = cljs.core.nth.call(null,vec__42793,(0),null);
var sess_id = cljs.core.nth.call(null,vec__42793,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sess-id","sess-id",701996862),sess_id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"sess-id","sess-id",701996862),(function (db,_){
return new cljs.core.Keyword(null,"sess-id","sess-id",701996862).cljs$core$IFn$_invoke$arity$1(db);
}));
simple.events.mine_QMARK_ = (function simple$events$mine_QMARK_(sess_id,item){
return cljs.core._EQ_.call(null,sess_id,new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(item));
});
simple.events.someone_elses_QMARK_ = (function simple$events$someone_elses_QMARK_(sess_id,item){
var and__28446__auto__ = cljs.core.not.call(null,simple.events.mine_QMARK_.call(null,sess_id,item));
if(and__28446__auto__){
return new cljs.core.Keyword(null,"editing","editing",1365491601).cljs$core$IFn$_invoke$arity$1(item);
} else {
return and__28446__auto__;
}
});
simple.events.set_checkedout = (function simple$events$set_checkedout(sess_id){
return (function (item){
return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"is-mine","is-mine",563465516),simple.events.mine_QMARK_.call(null,sess_id,item),new cljs.core.Keyword(null,"is-someone-elses","is-someone-elses",-1561183885),simple.events.someone_elses_QMARK_.call(null,sess_id,item));
});
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"list-updated","list-updated",622542834),(function (db,p__42797){
var vec__42798 = p__42797;
var _ = cljs.core.nth.call(null,vec__42798,(0),null);
var new_list = cljs.core.nth.call(null,vec__42798,(1),null);
var transformed = (function (){var v = new_list;
var v__$1 = cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var v__$2 = simple.events.snake_kebab_it.call(null,v__$1);
return cljs.core.map.call(null,simple.events.set_checkedout.call(null,simple.events.sess_id),v__$2);
})();
var mine = cljs.core.first.call(null,cljs.core.filter.call(null,((function (transformed,vec__42798,_,new_list){
return (function (p1__42796_SHARP_){
return new cljs.core.Keyword(null,"is-mine","is-mine",563465516).cljs$core$IFn$_invoke$arity$1(p1__42796_SHARP_);
});})(transformed,vec__42798,_,new_list))
,transformed));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing-field","editing-field",915572585),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mine)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"batch-list","batch-list",-221457323),transformed);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-fields","set-fields",1292836081),(function (db,p__42801){
var vec__42802 = p__42801;
var _ = cljs.core.nth.call(null,vec__42802,(0),null);
var fields = cljs.core.nth.call(null,vec__42802,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"edit-fields","edit-fields",639333075),simple.events.snake_kebab_it.call(null,fields),new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212),false);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212),(function (db,_){
return new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"edit-fields","edit-fields",639333075),(function (db,_){
return new cljs.core.Keyword(null,"edit-fields","edit-fields",639333075).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"editing-field","editing-field",915572585),(function (p__42805,p__42806){
var map__42807 = p__42805;
var map__42807__$1 = ((((!((map__42807 == null)))?((((map__42807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42807):map__42807);
var db = cljs.core.get.call(null,map__42807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42808 = p__42806;
var _ = cljs.core.nth.call(null,vec__42808,(0),null);
var item_id = cljs.core.nth.call(null,vec__42808,(1),null);
if(cljs.core.not.call(null,item_id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212),false,new cljs.core.Keyword(null,"edit-fields","edit-fields",639333075),cljs.core.PersistentVector.EMPTY)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://portal.blainsupply.com/apis/v1/edit-lists/81294b8a-adfb-4687-8b4d-5f12540d3d59/items/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id),"/fields"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),simple.events.formatter,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-fields","set-fields",1292836081)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bork-it-up-fields","bork-it-up-fields",-1487120332)], null)], null)], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bork-it-up-fields","bork-it-up-fields",-1487120332),(function (db,_){
cljs.pprint.pprint.call(null,new cljs.core.Keyword(null,"borked-fields","borked-fields",480699496));

cljs.pprint.pprint.call(null,_);

return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"batch-list","batch-list",-221457323),(function (db,_){
return cljs.core.sort_by.call(null,(function (p1__42812_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__42812_SHARP_);
}),new cljs.core.Keyword(null,"batch-list","batch-list",-221457323).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-batch-data","set-batch-data",-2050134930),(function (db,p__42813){
var vec__42814 = p__42813;
var _ = cljs.core.nth.call(null,vec__42814,(0),null);
var result = cljs.core.nth.call(null,vec__42814,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"batch-overview","batch-overview",-1381910978),result);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bork-it-up","bork-it-up",1860181673),(function (db,p__42817){
var vec__42818 = p__42817;
var _ = cljs.core.nth.call(null,vec__42818,(0),null);
var resultset_seq = cljs.core.nth.call(null,vec__42818,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"failed","failed",-1397425762),true);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-batch-details","get-batch-details",-1209495692),(function (p__42821){
var map__42822 = p__42821;
var map__42822__$1 = ((((!((map__42822 == null)))?((((map__42822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42822.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42822):map__42822);
var db = cljs.core.get.call(null,map__42822__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://portal.blainsupply.com/apis/v1/edit-lists/81294b8a-adfb-4687-8b4d-5f12540d3d59",new cljs.core.Keyword(null,"response-format","response-format",1664465322),simple.events.transform_ajax.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokenExpires","tokenExpires",-62662516)], null),simple.events.formatter),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-batch-data","set-batch-data",-2050134930)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bork-it-up","bork-it-up",1860181673)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){

return "#f88";
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-field-val","update-field-val",-768161186),(function (db,p__42824){
var vec__42825 = p__42824;
var _ = cljs.core.nth.call(null,vec__42825,(0),null);
var map__42828 = cljs.core.nth.call(null,vec__42825,(1),null);
var map__42828__$1 = ((((!((map__42828 == null)))?((((map__42828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42828):map__42828);
var field_id = cljs.core.get.call(null,map__42828__$1,new cljs.core.Keyword(null,"field-id","field-id",-353751335));
var new_value = cljs.core.get.call(null,map__42828__$1,new cljs.core.Keyword(null,"new-value","new-value",1087038368));
cljs.pprint.pprint.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),field_id,new cljs.core.Keyword(null,"val","val",128701612),new_value], null));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-changes","field-changes",778145496),field_id], null),new_value);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"field-changes","field-changes",778145496),(function (db,p__42830){
var vec__42831 = p__42830;
var _ = cljs.core.nth.call(null,vec__42831,(0),null);
var vec__42834 = cljs.core.nth.call(null,vec__42831,(1),null);
var field_id = cljs.core.nth.call(null,vec__42834,(0),null);
var real_val = cljs.core.nth.call(null,vec__42834,(1),null);
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-changes","field-changes",778145496),field_id], null),real_val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-field-value","clear-field-value",1566443820),(function (db,p__42837){
var vec__42838 = p__42837;
var _ = cljs.core.nth.call(null,vec__42838,(0),null);
var field_id = cljs.core.nth.call(null,vec__42838,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-changes","field-changes",778145496)], null),cljs.core.dissoc,field_id);
}));

//# sourceMappingURL=events.js.map?rel=1521839020940
