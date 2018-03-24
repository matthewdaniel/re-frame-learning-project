// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.views.field_types.text');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljsjs.moment');
goog.require('cljs.pprint');
goog.require('clojure.string');
simple.views.field_types.text.field = (function simple$views$field_types$text$field(p__42570){
var map__42571 = p__42570;
var map__42571__$1 = ((((!((map__42571 == null)))?((((map__42571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42571):map__42571);
var value = cljs.core.get.call(null,map__42571__$1,new cljs.core.Keyword(null,"value","value",305978217));
var id = cljs.core.get.call(null,map__42571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.field-type-text","input.form-control.field-type-text",-402430583),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__42571,map__42571__$1,value,id){
return (function (p1__42569_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-field-val","update-field-val",-768161186),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field-id","field-id",-353751335),id,new cljs.core.Keyword(null,"new-value","new-value",1087038368),p1__42569_SHARP_.target.value], null)], null));
});})(map__42571,map__42571__$1,value,id))
,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-changes","field-changes",778145496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,value], null)], null)))], null)], null);
});

//# sourceMappingURL=text.js.map?rel=1521838792846
