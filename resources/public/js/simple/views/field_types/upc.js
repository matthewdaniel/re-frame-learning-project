// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.views.field_types.upc');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple.helpers.misc');
goog.require('cljsjs.moment');
goog.require('cljs.pprint');
goog.require('clojure.string');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upc-click","upc-click",-222984437),(function (db,p__41670){
var vec__41671 = p__41670;
var _ = cljs.core.nth.call(null,vec__41671,(0),null);
var upc = cljs.core.nth.call(null,vec__41671,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"upc-click","upc-click",-222984437),upc);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"upc-highlighted","upc-highlighted",-766924197),(function (db,_){
var upc_click = new cljs.core.Keyword(null,"upc-click","upc-click",-222984437).cljs$core$IFn$_invoke$arity$1(db);
return upc_click;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282),(function (_,___$1){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upc-highlighted","upc-highlighted",-766924197)], null));
}),(function (upc_highlighted,p__41674){
var vec__41675 = p__41674;
var _ = cljs.core.nth.call(null,vec__41675,(0),null);
var upc = cljs.core.nth.call(null,vec__41675,(1),null);
if(cljs.core._EQ_.call(null,upc_highlighted,upc)){
return "highlight";
} else {
return null;
}
}));
simple.views.field_types.upc.handle_copy_click = (function simple$views$field_types$upc$handle_copy_click(upc){
simple.helpers.misc.browser_copy.call(null,upc);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upc-click","upc-click",-222984437),upc], null));

return setTimeout((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upc-click","upc-click",-222984437),false], null));
}),(100));
});
simple.views.field_types.upc.upc_field = (function simple$views$field_types$upc$upc_field(upc){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.copy","li.copy",-2032062138),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),upc,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return simple.views.field_types.upc.handle_copy_click.call(null,upc);
}),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282),upc], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),upc], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"14px",new cljs.core.Keyword(null,"height","height",1025178622),"16px",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 14 16",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"clippy"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),"Created with Sketch."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#Octicons","g#Octicons",-1421481964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g#clippy","g#clippy",-517078970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#000000"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path#Shape","path#Shape",-834321166),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M2,13 L6,13 L6,14 L2,14 L2,13 L2,13 Z M7,7 L2,7 L2,8 L7,8 L7,7 L7,7 Z M9,10 L9,8 L6,11 L9,14 L9,12 L14,12 L14,10 L9,10 L9,10 Z M4.5,9 L2,9 L2,10 L4.5,10 L4.5,9 L4.5,9 Z M2,12 L4.5,12 L4.5,11 L2,11 L2,12 L2,12 Z M11,13 L12,13 L12,15 C11.98,15.28 11.89,15.52 11.7,15.7 C11.51,15.88 11.28,15.98 11,16 L1,16 C0.45,16 0,15.55 0,15 L0,4 C0,3.45 0.45,3 1,3 L4,3 C4,1.89 4.89,1 6,1 C7.11,1 8,1.89 8,3 L11,3 C11.55,3 12,3.45 12,4 L12,9 L11,9 L11,6 L1,6 L1,15 L11,15 L11,13 L11,13 Z M2,5 L10,5 C10,4.45 9.55,4 9,4 L8,4 C7.45,4 7,3.55 7,3 C7,2.45 6.55,2 6,2 C5.45,2 5,2.45 5,3 C5,3.55 4.55,4 4,4 L3,4 C2.45,4 2,4.45 2,5 L2,5 Z"], null)], null)], null)], null)], null)], null);
});
simple.views.field_types.upc.field = (function simple$views$field_types$upc$field(p__41678){
var map__41679 = p__41678;
var map__41679__$1 = ((((!((map__41679 == null)))?((((map__41679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41679):map__41679);
var value = cljs.core.get.call(null,map__41679__$1,new cljs.core.Keyword(null,"value","value",305978217));
var upcs = cljs.core.js__GT_clj.call(null,JSON.parse(value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.upcs","div.upcs",-760894592),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,((function (upcs,map__41679,map__41679__$1,value){
return (function (upc){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),upc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.upc.upc_field,upc], null)], null);
});})(upcs,map__41679,map__41679__$1,value))
,upcs)], null)], null)], null);
});

//# sourceMappingURL=upc.js.map?rel=1521903936682
