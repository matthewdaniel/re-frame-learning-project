// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40239){
var map__40240 = p__40239;
var map__40240__$1 = ((((!((map__40240 == null)))?((((map__40240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40240):map__40240);
var m = map__40240__$1;
var n = cljs.core.get.call(null,map__40240__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40242_40264 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40243_40265 = null;
var count__40244_40266 = (0);
var i__40245_40267 = (0);
while(true){
if((i__40245_40267 < count__40244_40266)){
var f_40268 = cljs.core._nth.call(null,chunk__40243_40265,i__40245_40267);
cljs.core.println.call(null,"  ",f_40268);

var G__40269 = seq__40242_40264;
var G__40270 = chunk__40243_40265;
var G__40271 = count__40244_40266;
var G__40272 = (i__40245_40267 + (1));
seq__40242_40264 = G__40269;
chunk__40243_40265 = G__40270;
count__40244_40266 = G__40271;
i__40245_40267 = G__40272;
continue;
} else {
var temp__4657__auto___40273 = cljs.core.seq.call(null,seq__40242_40264);
if(temp__4657__auto___40273){
var seq__40242_40274__$1 = temp__4657__auto___40273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40242_40274__$1)){
var c__29297__auto___40275 = cljs.core.chunk_first.call(null,seq__40242_40274__$1);
var G__40276 = cljs.core.chunk_rest.call(null,seq__40242_40274__$1);
var G__40277 = c__29297__auto___40275;
var G__40278 = cljs.core.count.call(null,c__29297__auto___40275);
var G__40279 = (0);
seq__40242_40264 = G__40276;
chunk__40243_40265 = G__40277;
count__40244_40266 = G__40278;
i__40245_40267 = G__40279;
continue;
} else {
var f_40280 = cljs.core.first.call(null,seq__40242_40274__$1);
cljs.core.println.call(null,"  ",f_40280);

var G__40281 = cljs.core.next.call(null,seq__40242_40274__$1);
var G__40282 = null;
var G__40283 = (0);
var G__40284 = (0);
seq__40242_40264 = G__40281;
chunk__40243_40265 = G__40282;
count__40244_40266 = G__40283;
i__40245_40267 = G__40284;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40285 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28458__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40285);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40285)))?cljs.core.second.call(null,arglists_40285):arglists_40285));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40246_40286 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40247_40287 = null;
var count__40248_40288 = (0);
var i__40249_40289 = (0);
while(true){
if((i__40249_40289 < count__40248_40288)){
var vec__40250_40290 = cljs.core._nth.call(null,chunk__40247_40287,i__40249_40289);
var name_40291 = cljs.core.nth.call(null,vec__40250_40290,(0),null);
var map__40253_40292 = cljs.core.nth.call(null,vec__40250_40290,(1),null);
var map__40253_40293__$1 = ((((!((map__40253_40292 == null)))?((((map__40253_40292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40253_40292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40253_40292):map__40253_40292);
var doc_40294 = cljs.core.get.call(null,map__40253_40293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40295 = cljs.core.get.call(null,map__40253_40293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40291);

cljs.core.println.call(null," ",arglists_40295);

if(cljs.core.truth_(doc_40294)){
cljs.core.println.call(null," ",doc_40294);
} else {
}

var G__40296 = seq__40246_40286;
var G__40297 = chunk__40247_40287;
var G__40298 = count__40248_40288;
var G__40299 = (i__40249_40289 + (1));
seq__40246_40286 = G__40296;
chunk__40247_40287 = G__40297;
count__40248_40288 = G__40298;
i__40249_40289 = G__40299;
continue;
} else {
var temp__4657__auto___40300 = cljs.core.seq.call(null,seq__40246_40286);
if(temp__4657__auto___40300){
var seq__40246_40301__$1 = temp__4657__auto___40300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40246_40301__$1)){
var c__29297__auto___40302 = cljs.core.chunk_first.call(null,seq__40246_40301__$1);
var G__40303 = cljs.core.chunk_rest.call(null,seq__40246_40301__$1);
var G__40304 = c__29297__auto___40302;
var G__40305 = cljs.core.count.call(null,c__29297__auto___40302);
var G__40306 = (0);
seq__40246_40286 = G__40303;
chunk__40247_40287 = G__40304;
count__40248_40288 = G__40305;
i__40249_40289 = G__40306;
continue;
} else {
var vec__40255_40307 = cljs.core.first.call(null,seq__40246_40301__$1);
var name_40308 = cljs.core.nth.call(null,vec__40255_40307,(0),null);
var map__40258_40309 = cljs.core.nth.call(null,vec__40255_40307,(1),null);
var map__40258_40310__$1 = ((((!((map__40258_40309 == null)))?((((map__40258_40309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40258_40309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40258_40309):map__40258_40309);
var doc_40311 = cljs.core.get.call(null,map__40258_40310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40312 = cljs.core.get.call(null,map__40258_40310__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40308);

cljs.core.println.call(null," ",arglists_40312);

if(cljs.core.truth_(doc_40311)){
cljs.core.println.call(null," ",doc_40311);
} else {
}

var G__40313 = cljs.core.next.call(null,seq__40246_40301__$1);
var G__40314 = null;
var G__40315 = (0);
var G__40316 = (0);
seq__40246_40286 = G__40313;
chunk__40247_40287 = G__40314;
count__40248_40288 = G__40315;
i__40249_40289 = G__40316;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__40260 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40261 = null;
var count__40262 = (0);
var i__40263 = (0);
while(true){
if((i__40263 < count__40262)){
var role = cljs.core._nth.call(null,chunk__40261,i__40263);
var temp__4657__auto___40317__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40317__$1)){
var spec_40318 = temp__4657__auto___40317__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40318));
} else {
}

var G__40319 = seq__40260;
var G__40320 = chunk__40261;
var G__40321 = count__40262;
var G__40322 = (i__40263 + (1));
seq__40260 = G__40319;
chunk__40261 = G__40320;
count__40262 = G__40321;
i__40263 = G__40322;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__40260);
if(temp__4657__auto____$1){
var seq__40260__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40260__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__40260__$1);
var G__40323 = cljs.core.chunk_rest.call(null,seq__40260__$1);
var G__40324 = c__29297__auto__;
var G__40325 = cljs.core.count.call(null,c__29297__auto__);
var G__40326 = (0);
seq__40260 = G__40323;
chunk__40261 = G__40324;
count__40262 = G__40325;
i__40263 = G__40326;
continue;
} else {
var role = cljs.core.first.call(null,seq__40260__$1);
var temp__4657__auto___40327__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___40327__$2)){
var spec_40328 = temp__4657__auto___40327__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40328));
} else {
}

var G__40329 = cljs.core.next.call(null,seq__40260__$1);
var G__40330 = null;
var G__40331 = (0);
var G__40332 = (0);
seq__40260 = G__40329;
chunk__40261 = G__40330;
count__40262 = G__40331;
i__40263 = G__40332;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521903537826
