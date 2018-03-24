// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38948){
var map__38949 = p__38948;
var map__38949__$1 = ((((!((map__38949 == null)))?((((map__38949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38949):map__38949);
var m = map__38949__$1;
var n = cljs.core.get.call(null,map__38949__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38949__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38951_38973 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38952_38974 = null;
var count__38953_38975 = (0);
var i__38954_38976 = (0);
while(true){
if((i__38954_38976 < count__38953_38975)){
var f_38977 = cljs.core._nth.call(null,chunk__38952_38974,i__38954_38976);
cljs.core.println.call(null,"  ",f_38977);

var G__38978 = seq__38951_38973;
var G__38979 = chunk__38952_38974;
var G__38980 = count__38953_38975;
var G__38981 = (i__38954_38976 + (1));
seq__38951_38973 = G__38978;
chunk__38952_38974 = G__38979;
count__38953_38975 = G__38980;
i__38954_38976 = G__38981;
continue;
} else {
var temp__4657__auto___38982 = cljs.core.seq.call(null,seq__38951_38973);
if(temp__4657__auto___38982){
var seq__38951_38983__$1 = temp__4657__auto___38982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38951_38983__$1)){
var c__29297__auto___38984 = cljs.core.chunk_first.call(null,seq__38951_38983__$1);
var G__38985 = cljs.core.chunk_rest.call(null,seq__38951_38983__$1);
var G__38986 = c__29297__auto___38984;
var G__38987 = cljs.core.count.call(null,c__29297__auto___38984);
var G__38988 = (0);
seq__38951_38973 = G__38985;
chunk__38952_38974 = G__38986;
count__38953_38975 = G__38987;
i__38954_38976 = G__38988;
continue;
} else {
var f_38989 = cljs.core.first.call(null,seq__38951_38983__$1);
cljs.core.println.call(null,"  ",f_38989);

var G__38990 = cljs.core.next.call(null,seq__38951_38983__$1);
var G__38991 = null;
var G__38992 = (0);
var G__38993 = (0);
seq__38951_38973 = G__38990;
chunk__38952_38974 = G__38991;
count__38953_38975 = G__38992;
i__38954_38976 = G__38993;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38994 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28458__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38994);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38994)))?cljs.core.second.call(null,arglists_38994):arglists_38994));
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
var seq__38955_38995 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38956_38996 = null;
var count__38957_38997 = (0);
var i__38958_38998 = (0);
while(true){
if((i__38958_38998 < count__38957_38997)){
var vec__38959_38999 = cljs.core._nth.call(null,chunk__38956_38996,i__38958_38998);
var name_39000 = cljs.core.nth.call(null,vec__38959_38999,(0),null);
var map__38962_39001 = cljs.core.nth.call(null,vec__38959_38999,(1),null);
var map__38962_39002__$1 = ((((!((map__38962_39001 == null)))?((((map__38962_39001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38962_39001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38962_39001):map__38962_39001);
var doc_39003 = cljs.core.get.call(null,map__38962_39002__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39004 = cljs.core.get.call(null,map__38962_39002__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39000);

cljs.core.println.call(null," ",arglists_39004);

if(cljs.core.truth_(doc_39003)){
cljs.core.println.call(null," ",doc_39003);
} else {
}

var G__39005 = seq__38955_38995;
var G__39006 = chunk__38956_38996;
var G__39007 = count__38957_38997;
var G__39008 = (i__38958_38998 + (1));
seq__38955_38995 = G__39005;
chunk__38956_38996 = G__39006;
count__38957_38997 = G__39007;
i__38958_38998 = G__39008;
continue;
} else {
var temp__4657__auto___39009 = cljs.core.seq.call(null,seq__38955_38995);
if(temp__4657__auto___39009){
var seq__38955_39010__$1 = temp__4657__auto___39009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38955_39010__$1)){
var c__29297__auto___39011 = cljs.core.chunk_first.call(null,seq__38955_39010__$1);
var G__39012 = cljs.core.chunk_rest.call(null,seq__38955_39010__$1);
var G__39013 = c__29297__auto___39011;
var G__39014 = cljs.core.count.call(null,c__29297__auto___39011);
var G__39015 = (0);
seq__38955_38995 = G__39012;
chunk__38956_38996 = G__39013;
count__38957_38997 = G__39014;
i__38958_38998 = G__39015;
continue;
} else {
var vec__38964_39016 = cljs.core.first.call(null,seq__38955_39010__$1);
var name_39017 = cljs.core.nth.call(null,vec__38964_39016,(0),null);
var map__38967_39018 = cljs.core.nth.call(null,vec__38964_39016,(1),null);
var map__38967_39019__$1 = ((((!((map__38967_39018 == null)))?((((map__38967_39018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38967_39018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38967_39018):map__38967_39018);
var doc_39020 = cljs.core.get.call(null,map__38967_39019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39021 = cljs.core.get.call(null,map__38967_39019__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39017);

cljs.core.println.call(null," ",arglists_39021);

if(cljs.core.truth_(doc_39020)){
cljs.core.println.call(null," ",doc_39020);
} else {
}

var G__39022 = cljs.core.next.call(null,seq__38955_39010__$1);
var G__39023 = null;
var G__39024 = (0);
var G__39025 = (0);
seq__38955_38995 = G__39022;
chunk__38956_38996 = G__39023;
count__38957_38997 = G__39024;
i__38958_38998 = G__39025;
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

var seq__38969 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38970 = null;
var count__38971 = (0);
var i__38972 = (0);
while(true){
if((i__38972 < count__38971)){
var role = cljs.core._nth.call(null,chunk__38970,i__38972);
var temp__4657__auto___39026__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39026__$1)){
var spec_39027 = temp__4657__auto___39026__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39027));
} else {
}

var G__39028 = seq__38969;
var G__39029 = chunk__38970;
var G__39030 = count__38971;
var G__39031 = (i__38972 + (1));
seq__38969 = G__39028;
chunk__38970 = G__39029;
count__38971 = G__39030;
i__38972 = G__39031;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38969);
if(temp__4657__auto____$1){
var seq__38969__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38969__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__38969__$1);
var G__39032 = cljs.core.chunk_rest.call(null,seq__38969__$1);
var G__39033 = c__29297__auto__;
var G__39034 = cljs.core.count.call(null,c__29297__auto__);
var G__39035 = (0);
seq__38969 = G__39032;
chunk__38970 = G__39033;
count__38971 = G__39034;
i__38972 = G__39035;
continue;
} else {
var role = cljs.core.first.call(null,seq__38969__$1);
var temp__4657__auto___39036__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39036__$2)){
var spec_39037 = temp__4657__auto___39036__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39037));
} else {
}

var G__39038 = cljs.core.next.call(null,seq__38969__$1);
var G__39039 = null;
var G__39040 = (0);
var G__39041 = (0);
seq__38969 = G__39038;
chunk__38970 = G__39039;
count__38971 = G__39040;
i__38972 = G__39041;
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

//# sourceMappingURL=repl.js.map?rel=1521239474183
