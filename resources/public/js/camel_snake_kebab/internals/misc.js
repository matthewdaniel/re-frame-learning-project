// Compiled by ClojureScript 1.9.908 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39923 = arguments.length;
var i__29628__auto___39924 = (0);
while(true){
if((i__29628__auto___39924 < len__29627__auto___39923)){
args__29634__auto__.push((arguments[i__29628__auto___39924]));

var G__39925 = (i__29628__auto___39924 + (1));
i__29628__auto___39924 = G__39925;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((4) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29635__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__39917){
var map__39918 = p__39917;
var map__39918__$1 = ((((!((map__39918 == null)))?((((map__39918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39918):map__39918);
var separator = cljs.core.get.call(null,map__39918__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__39920 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__39921 = cljs.core.seq.call(null,vec__39920);
var first__39922 = cljs.core.first.call(null,seq__39921);
var seq__39921__$1 = cljs.core.next.call(null,seq__39921);
var first = first__39922;
var rest = seq__39921__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq39912){
var G__39913 = cljs.core.first.call(null,seq39912);
var seq39912__$1 = cljs.core.next.call(null,seq39912);
var G__39914 = cljs.core.first.call(null,seq39912__$1);
var seq39912__$2 = cljs.core.next.call(null,seq39912__$1);
var G__39915 = cljs.core.first.call(null,seq39912__$2);
var seq39912__$3 = cljs.core.next.call(null,seq39912__$2);
var G__39916 = cljs.core.first.call(null,seq39912__$3);
var seq39912__$4 = cljs.core.next.call(null,seq39912__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__39913,G__39914,G__39915,G__39916,seq39912__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__28458__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});

//# sourceMappingURL=misc.js.map?rel=1521239474849
