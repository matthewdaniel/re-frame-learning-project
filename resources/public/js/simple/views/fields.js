// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.views.fields');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('simple.views.field_types.html');
goog.require('simple.views.field_types.text');
goog.require('simple.views.field_types.upc');
goog.require('cljsjs.moment');
goog.require('cljs.pprint');
goog.require('clojure.string');
simple.views.fields.field_types = new cljs.core.PersistentArrayMap(null, 8, [(0),new cljs.core.Keyword(null,"text","text",-1790561697),(1),new cljs.core.Keyword(null,"number","number",1570378438),(2),new cljs.core.Keyword(null,"text-row","text-row",534540472),(3),new cljs.core.Keyword(null,"type-ahead","type-ahead",642978641),(4),new cljs.core.Keyword(null,"color-images","color-images",1926472163),(5),new cljs.core.Keyword(null,"html","html",-998796897),(6),new cljs.core.Keyword(null,"upcs","upcs",436686257),(7),new cljs.core.Keyword(null,"text-area","text-area",-1481158655)], null);
simple.views.fields.field_label = (function simple$views$fields$field_label(label_value,field_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.control-label","label.control-label",-528524585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-field-value","clear-field-value",1566443820),field_id], null));
})], null),label_value], null);
});
simple.views.fields.single_field = (function simple$views$fields$single_field(p__43026){
var map__43027 = p__43026;
var map__43027__$1 = ((((!((map__43027 == null)))?((((map__43027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43027):map__43027);
var field = map__43027__$1;
var id = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field_type = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"field-type","field-type",2075623493));
var value = cljs.core.get.call(null,map__43027__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field-container","div.field-container",2017482740),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field-label-value","div.field-label-value",1413309534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.fields.field_label,name,id], null),(function (){var G__43029 = cljs.core.get.call(null,simple.views.fields.field_types,field_type);
var G__43029__$1 = (((G__43029 instanceof cljs.core.Keyword))?G__43029.fqn:null);
switch (G__43029__$1) {
case "html":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.html.field,field], null);

break;
case "upcs":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.upc.field,field], null);

break;
case "text-row":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text.field,field], null);

break;
case "number":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text.field,field], null);

break;
case "text":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.field_types.text.field,field], null);

break;
case "type-ahead":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.type-ahead","div.type-ahead",1510664559),"type-ahead"], null);

break;
case "color-images":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-images","div.color-images",-1066376753),"color images"], null);

break;
case "text-area":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-area","div.text-area",435887048),"text area"], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.unmatched","div.unmatched",-602092822),["unknown field type",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_type)].join('')], null);

}
})()], null)], null);
});
simple.views.fields.fields_container = (function simple$views$fields$fields_container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fields-container","div.fields-container",293952386),(function (loading_QMARK_){
if(cljs.core.truth_(loading_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loading","div.loading",-155515768),"Loading..."], null);
} else {
return null;
}
}).call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-fields","loading-fields",-1888522212)], null)))),cljs.core.map.call(null,simple.views.fields.single_field,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-fields","edit-fields",639333075)], null))))], null);
});

//# sourceMappingURL=fields.js.map?rel=1521839185758
