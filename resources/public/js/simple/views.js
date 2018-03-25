// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljsjs.moment');
goog.require('cljs.pprint');
goog.require('clojure.string');
simple.views.now = moment();
simple.views.expiry_element = (function simple$views$expiry_element(p__47891){
var map__47892 = p__47891;
var map__47892__$1 = ((((!((map__47892 == null)))?((((map__47892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47892):map__47892);
var expires = cljs.core.get.call(null,map__47892__$1,new cljs.core.Keyword(null,"tokenExpires","tokenExpires",-62662516));
if(cljs.core.truth_(expires)){
var hours_full = expires.diff(simple.views.now,"hours");
var minutes_full = expires.diff(simple.views.now,"minutes");
var days = expires.diff(simple.views.now,"days");
var minutes = (minutes_full - (hours_full * (60)));
var hours = (hours_full - (days * (24)));
if(cljs.core.truth_(expires)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(days)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(days),"D "].join(''):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(hours)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours),"H "].join(''):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(cljs.core.truth_(minutes)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes),"M"].join(''):null)], null)], null);
} else {
return null;
}
} else {
return null;
}
});
simple.views.header = (function simple$views$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header-bar","div.header-bar",292234542),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.batch-title-bar","div.batch-title-bar",-1659940647),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.blains","div.blains",900570559),"Vendor Portal Inc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"batch-overview","batch-overview",-1381910978)], null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.countdown","div.countdown",-103200404),simple.views.expiry_element.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"batch-overview","batch-overview",-1381910978)], null))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar","div.progress-bar",929518721),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.background","div.background",1316303945),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress.viewed","div.progress.viewed",1751950399),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"10%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress.edited","div.progress.edited",-1764511660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress.finalized","div.progress.finalized",-1756567764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"30%"], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1521936469975
