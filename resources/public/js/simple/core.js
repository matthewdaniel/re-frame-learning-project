// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('simple.views');
goog.require('simple.views.batchItems');
goog.require('simple.views.editBar');
goog.require('simple.views.fields');
goog.require('simple.events');
simple.core.dispatch_timer_event = (function simple$core$dispatch_timer_event(){
var now = (new Date());
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f88"], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__52881){
var vec__52882 = p__52881;
var _ = cljs.core.nth.call(null,vec__52882,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__52882,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__52885){
var vec__52886 = p__52885;
var _ = cljs.core.nth.call(null,vec__52886,(0),null);
var new_time = cljs.core.nth.call(null,vec__52886,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"batch-overview","batch-overview",-1381910978),(function (db,_){
return new cljs.core.Keyword(null,"batch-overview","batch-overview",-1381910978).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(db);
}));
simple.core.clock = (function simple$core$clock(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))).toTimeString()," "))], null);
});
simple.core.color_input = (function simple$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52889_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),p1__52889_SHARP_.target.value], null));
})], null)], null)], null);
});
simple.core.ui = (function simple$core$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.color_input], null)], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"initial-load-finished","initial-load-finished",-1148601070),(function (p__52890,_){
var map__52891 = p__52890;
var map__52891__$1 = ((((!((map__52891 == null)))?((((map__52891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52891):map__52891);
var sess_id = cljs.core.get.call(null,map__52891__$1,new cljs.core.Keyword(null,"sess-id","sess-id",701996862));
console.log("sess-id",sess_id);

return !(cljs.core.not.call(null,sess_id));
}));
simple.core.main_window = (function simple$core$main_window(){
return (function (is_subbed){
if(cljs.core.not.call(null,is_subbed)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.connecting","div.connecting",1312828909),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Connecting..."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-spin.fa-spinner","i.fa.fa-spin.fa-spinner",-715892354)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-inner","div.main-inner",1647158396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.batchItems.batch_items_container], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.editBar.edit_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.fields.fields_container], null)], null);
}
}).call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-load-finished","initial-load-finished",-1148601070)], null))));
});
simple.core.run = (function simple$core$run(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-batch-details","get-batch-details",-1209495692)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.views.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.main_window], null)], null),document.getElementById("app"));
});
goog.exportSymbol('simple.core.run', simple.core.run);
if(typeof simple.core.yo !== 'undefined'){
} else {
simple.core.yo = simple.events.connect_batch.call(null);
}

//# sourceMappingURL=core.js.map?rel=1522019210920
