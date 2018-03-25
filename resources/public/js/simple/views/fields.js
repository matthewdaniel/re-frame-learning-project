// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.views.fields');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple.views.field_types.html');
goog.require('simple.views.field_types.text');
goog.require('simple.views.field_types.upc');
goog.require('simple.views.field_types.text_area');
goog.require('simple.views.field_types.type_ahead');
goog.require('cljsjs.moment');
goog.require('cljs.pprint');
goog.require('clojure.string');
simple.views.fields.field_types = new cljs.core.PersistentArrayMap(null, 8, [(0),new cljs.core.Keyword(null,"text","text",-1790561697),(1),new cljs.core.Keyword(null,"number","number",1570378438),(2),new cljs.core.Keyword(null,"text-row","text-row",534540472),(3),new cljs.core.Keyword(null,"type-ahead","type-ahead",642978641),(4),new cljs.core.Keyword(null,"color-images","color-images",1926472163),(5),new cljs.core.Keyword(null,"html","html",-998796897),(6),new cljs.core.Keyword(null,"upcs","upcs",436686257),(7),new cljs.core.Keyword(null,"text-area","text-area",-1481158655)], null);
simple.views.fields.field_label = (function simple$views$fields$field_label(label_value,field_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label.field-label","label.control-label.field-label",1924263293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-field-value","clear-field-value",1566443820),field_id], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label_value], null),(function (p1__46021_SHARP_){
if(cljs.core.truth_(p1__46021_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.dirty-icon.fa.fa-trash","i.dirty-icon.fa.fa-trash",384146648),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),["This value has changed but not been saved. Previous value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46021_SHARP_)].join('')], null)], null);
} else {
return null;
}
}).call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-dirty-val","field-dirty-val",-129427221),field_id], null))))], null)], null);
});
simple.views.fields.full_QMARK_ = (function simple$views$fields$full_QMARK_(p__46022){
var map__46023 = p__46022;
var map__46023__$1 = ((((!((map__46023 == null)))?((((map__46023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46023):map__46023);
var field_type = cljs.core.get.call(null,map__46023__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var type = cljs.core.get.call(null,simple.views.fields.field_types,field_type);
return (cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"text-row","text-row",534540472))) || (cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"upcs","upcs",436686257))) || (cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"html","html",-998796897))) || (cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"text-area","text-area",-1481158655)));
});
simple.views.fields.single_field = (function simple$views$fields$single_field(p__46025){
var map__46026 = p__46025;
var map__46026__$1 = ((((!((map__46026 == null)))?((((map__46026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46026):map__46026);
var field = map__46026__$1;
var id = cljs.core.get.call(null,map__46026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__46026__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field_type = cljs.core.get.call(null,map__46026__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var value = cljs.core.get.call(null,map__46026__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field-container","div.field-container",2017482740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(simple.views.fields.full_QMARK_.call(null,field))?"full":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field-label-value","div.field-label-value",1413309534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.fields.field_label,name,id], null),(function (){var G__46028 = cljs.core.get.call(null,simple.views.fields.field_types,field_type);
var G__46028__$1 = (((G__46028 instanceof cljs.core.Keyword))?G__46028.fqn:null);
switch (G__46028__$1) {
case "html":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.html.field,field], null);

break;
case "upcs":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.upc.field,field], null);

break;
case "text-row":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text.field,field,"text"], null);

break;
case "number":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text.field,field,"number"], null);

break;
case "text":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text.field,field,"text"], null);

break;
case "type-ahead":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.type_ahead.field,field], null);

break;
case "color-images":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-images","div.color-images",-1066376753),"color images"], null);

break;
case "text-area":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text_area.field,field], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.unmatched","div.unmatched",-602092822),["unknown field type",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_type)].join('')], null);

}
})()], null)], null);
});
simple.views.fields.fields_container = (function simple$views$fields$fields_container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fields-container","div.fields-container",293952386),(function (p1__46030_SHARP_){
if(cljs.core.truth_(p1__46030_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),"Loading..."], null);
} else {
return null;
}
}).call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212)], null)))),cljs.core.map.call(null,simple.views.fields.single_field,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-fields","edit-fields",639333075)], null))))], null);
});

//# sourceMappingURL=fields.js.map?rel=1521931627117
