// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.views.batch_items');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljsjs.moment');
goog.require('cljs.pprint');
goog.require('clojure.string');
simple.views.batch_items.locked_QMARK_ = (function simple$views$batch_items$locked_QMARK_(sess_id){
return null;
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("batch-items","hide-bar","batch-items/hide-bar",-733242004),(function (db,p__37611){
var vec__37612 = p__37611;
var _ = cljs.core.nth.call(null,vec__37612,(0),null);
var hide = cljs.core.nth.call(null,vec__37612,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("batch-items","hide-bar","batch-items/hide-bar",-733242004),hide);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("batch-items","bar-hidden","batch-items/bar-hidden",-407013283),(function (db,_){
if(cljs.core.truth_(new cljs.core.Keyword("batch-items","hide-bar","batch-items/hide-bar",-733242004).cljs$core$IFn$_invoke$arity$1(db))){
return true;
} else {
return false;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"bar-minimized-class","bar-minimized-class",1088989915),(function (_,___$1){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("batch-items","bar-hidden","batch-items/bar-hidden",-407013283)], null));
}),(function (hidden,_){
if(cljs.core.truth_(hidden)){
return "minimized";
} else {
return "";
}
}));
simple.views.batch_items.batch_item = (function simple$views$batch_items$batch_item(p__37615){
var map__37616 = p__37615;
var map__37616__$1 = ((((!((map__37616 == null)))?((((map__37616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37616):map__37616);
var map__37617 = cljs.core.get.call(null,map__37616__$1,new cljs.core.Keyword(null,"item","item",249373802));
var map__37617__$1 = ((((!((map__37617 == null)))?((((map__37617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37617):map__37617);
var name = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var editing = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var is_mine = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"is-mine","is-mine",563465516));
var is_someone_elses = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"is-someone-elses","is-someone-elses",-1561183885));
var finalized = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"finalized","finalized",49452698));
var edited = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"edited","edited",-262616624));
var id = cljs.core.get.call(null,map__37617__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.item.single-item-container","li.item.single-item-container",2134666554),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__37616,map__37616__$1,map__37617,map__37617__$1,name,editing,is_mine,is_someone_elses,finalized,edited,id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkout-item","checkout-item",613416591),id], null));
});})(map__37616,map__37616__$1,map__37617,map__37617__$1,name,editing,is_mine,is_someone_elses,finalized,edited,id))
,new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(is_mine)?" active":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(is_someone_elses)?" checked-out":null))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner","div.inner",-1581324128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"javascript:void(0)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.name","span.name",-230739013),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon-group","span.icon-group",738769560),(cljs.core.truth_(is_someone_elses)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.list-item-status.notediting.fa.fa-lock","i.list-item-status.notediting.fa.fa-lock",1305820690)], null):null),(cljs.core.truth_(finalized)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.list-item-status.finalized.fa.fa-circle","i.list-item-status.finalized.fa.fa-circle",2071865120)], null):null),(cljs.core.truth_(edited)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.list-item-status.viewed.fa.fa-check","i.list-item-status.viewed.fa.fa-check",-188226651)], null):null)], null)], null)], null)], null);
});
simple.views.batch_items.batch_items_container = (function simple$views$batch_items$batch_items_container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-box","div.list-box",433928380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bar-minimized-class","bar-minimized-class",1088989915)], null)))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toggler","div.toggler",1927296221),(function (hidden){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-bars","i.fa.fa-bars",-1114139547),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("batch-items","hide-bar","batch-items/hide-bar",-733242004),cljs.core.not.call(null,hidden)], null));
})], null)], null);
}).call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("batch-items","bar-hidden","batch-items/bar-hidden",-407013283)], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend","div.legend",-315677844),"yo legend here"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter","div.filter",145823472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bar-minimized-class","bar-minimized-class",1088989915)], null)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action-items","div.action-items",-1071232553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-long-arrow-down","i.fa.fa-long-arrow-down",577668885)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Action Items"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-long-arrow-down","i.fa.fa-long-arrow-down",577668885)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.list-wrapper","div.list-wrapper",-717757501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item,sess_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.batch_items.batch_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"item","item",249373802),item], null)], null);
}),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"batch-list","batch-list",-221457323)], null))))], null)], null)], null)], null);
});

//# sourceMappingURL=batch_items.js.map?rel=1521752065068
