// Compiled by ClojureScript 1.9.908 {}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40106 = arguments.length;
var i__29628__auto___40107 = (0);
while(true){
if((i__29628__auto___40107 < len__29627__auto___40106)){
args__29634__auto__.push((arguments[i__29628__auto___40107]));

var G__40108 = (i__29628__auto___40107 + (1));
i__29628__auto___40107 = G__40108;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((4) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__29635__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq40101){
var G__40102 = cljs.core.first.call(null,seq40101);
var seq40101__$1 = cljs.core.next.call(null,seq40101);
var G__40103 = cljs.core.first.call(null,seq40101__$1);
var seq40101__$2 = cljs.core.next.call(null,seq40101__$1);
var G__40104 = cljs.core.first.call(null,seq40101__$2);
var seq40101__$3 = cljs.core.next.call(null,seq40101__$2);
var G__40105 = cljs.core.first.call(null,seq40101__$3);
var seq40101__$4 = cljs.core.next.call(null,seq40101__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__40102,G__40103,G__40104,G__40105,seq40101__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40117 = arguments.length;
var i__29628__auto___40118 = (0);
while(true){
if((i__29628__auto___40118 < len__29627__auto___40117)){
args__29634__auto__.push((arguments[i__29628__auto___40118]));

var G__40119 = (i__29628__auto___40118 + (1));
i__29628__auto___40118 = G__40119;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq40109){
var G__40110 = cljs.core.first.call(null,seq40109);
var seq40109__$1 = cljs.core.next.call(null,seq40109);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__40110,seq40109__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40120 = arguments.length;
var i__29628__auto___40121 = (0);
while(true){
if((i__29628__auto___40121 < len__29627__auto___40120)){
args__29634__auto__.push((arguments[i__29628__auto___40121]));

var G__40122 = (i__29628__auto___40121 + (1));
i__29628__auto___40121 = G__40122;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq40111){
var G__40112 = cljs.core.first.call(null,seq40111);
var seq40111__$1 = cljs.core.next.call(null,seq40111);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__40112,seq40111__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40123 = arguments.length;
var i__29628__auto___40124 = (0);
while(true){
if((i__29628__auto___40124 < len__29627__auto___40123)){
args__29634__auto__.push((arguments[i__29628__auto___40124]));

var G__40125 = (i__29628__auto___40124 + (1));
i__29628__auto___40124 = G__40125;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq40113){
var G__40114 = cljs.core.first.call(null,seq40113);
var seq40113__$1 = cljs.core.next.call(null,seq40113);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__40114,seq40113__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40126 = arguments.length;
var i__29628__auto___40127 = (0);
while(true){
if((i__29628__auto___40127 < len__29627__auto___40126)){
args__29634__auto__.push((arguments[i__29628__auto___40127]));

var G__40128 = (i__29628__auto___40127 + (1));
i__29628__auto___40127 = G__40128;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq40115){
var G__40116 = cljs.core.first.call(null,seq40115);
var seq40115__$1 = cljs.core.next.call(null,seq40115);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__40116,seq40115__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40137 = arguments.length;
var i__29628__auto___40138 = (0);
while(true){
if((i__29628__auto___40138 < len__29627__auto___40137)){
args__29634__auto__.push((arguments[i__29628__auto___40138]));

var G__40139 = (i__29628__auto___40138 + (1));
i__29628__auto___40138 = G__40139;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq40129){
var G__40130 = cljs.core.first.call(null,seq40129);
var seq40129__$1 = cljs.core.next.call(null,seq40129);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__40130,seq40129__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40140 = arguments.length;
var i__29628__auto___40141 = (0);
while(true){
if((i__29628__auto___40141 < len__29627__auto___40140)){
args__29634__auto__.push((arguments[i__29628__auto___40141]));

var G__40142 = (i__29628__auto___40141 + (1));
i__29628__auto___40141 = G__40142;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq40131){
var G__40132 = cljs.core.first.call(null,seq40131);
var seq40131__$1 = cljs.core.next.call(null,seq40131);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__40132,seq40131__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40143 = arguments.length;
var i__29628__auto___40144 = (0);
while(true){
if((i__29628__auto___40144 < len__29627__auto___40143)){
args__29634__auto__.push((arguments[i__29628__auto___40144]));

var G__40145 = (i__29628__auto___40144 + (1));
i__29628__auto___40144 = G__40145;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq40133){
var G__40134 = cljs.core.first.call(null,seq40133);
var seq40133__$1 = cljs.core.next.call(null,seq40133);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__40134,seq40133__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40146 = arguments.length;
var i__29628__auto___40147 = (0);
while(true){
if((i__29628__auto___40147 < len__29627__auto___40146)){
args__29634__auto__.push((arguments[i__29628__auto___40147]));

var G__40148 = (i__29628__auto___40147 + (1));
i__29628__auto___40147 = G__40148;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq40135){
var G__40136 = cljs.core.first.call(null,seq40135);
var seq40135__$1 = cljs.core.next.call(null,seq40135);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__40136,seq40135__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40157 = arguments.length;
var i__29628__auto___40158 = (0);
while(true){
if((i__29628__auto___40158 < len__29627__auto___40157)){
args__29634__auto__.push((arguments[i__29628__auto___40158]));

var G__40159 = (i__29628__auto___40158 + (1));
i__29628__auto___40158 = G__40159;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq40149){
var G__40150 = cljs.core.first.call(null,seq40149);
var seq40149__$1 = cljs.core.next.call(null,seq40149);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__40150,seq40149__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40160 = arguments.length;
var i__29628__auto___40161 = (0);
while(true){
if((i__29628__auto___40161 < len__29627__auto___40160)){
args__29634__auto__.push((arguments[i__29628__auto___40161]));

var G__40162 = (i__29628__auto___40161 + (1));
i__29628__auto___40161 = G__40162;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq40151){
var G__40152 = cljs.core.first.call(null,seq40151);
var seq40151__$1 = cljs.core.next.call(null,seq40151);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__40152,seq40151__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40163 = arguments.length;
var i__29628__auto___40164 = (0);
while(true){
if((i__29628__auto___40164 < len__29627__auto___40163)){
args__29634__auto__.push((arguments[i__29628__auto___40164]));

var G__40165 = (i__29628__auto___40164 + (1));
i__29628__auto___40164 = G__40165;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq40153){
var G__40154 = cljs.core.first.call(null,seq40153);
var seq40153__$1 = cljs.core.next.call(null,seq40153);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__40154,seq40153__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40166 = arguments.length;
var i__29628__auto___40167 = (0);
while(true){
if((i__29628__auto___40167 < len__29627__auto___40166)){
args__29634__auto__.push((arguments[i__29628__auto___40167]));

var G__40168 = (i__29628__auto___40167 + (1));
i__29628__auto___40167 = G__40168;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq40155){
var G__40156 = cljs.core.first.call(null,seq40155);
var seq40155__$1 = cljs.core.next.call(null,seq40155);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__40156,seq40155__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40177 = arguments.length;
var i__29628__auto___40178 = (0);
while(true){
if((i__29628__auto___40178 < len__29627__auto___40177)){
args__29634__auto__.push((arguments[i__29628__auto___40178]));

var G__40179 = (i__29628__auto___40178 + (1));
i__29628__auto___40178 = G__40179;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq40169){
var G__40170 = cljs.core.first.call(null,seq40169);
var seq40169__$1 = cljs.core.next.call(null,seq40169);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__40170,seq40169__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40180 = arguments.length;
var i__29628__auto___40181 = (0);
while(true){
if((i__29628__auto___40181 < len__29627__auto___40180)){
args__29634__auto__.push((arguments[i__29628__auto___40181]));

var G__40182 = (i__29628__auto___40181 + (1));
i__29628__auto___40181 = G__40182;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq40171){
var G__40172 = cljs.core.first.call(null,seq40171);
var seq40171__$1 = cljs.core.next.call(null,seq40171);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__40172,seq40171__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40183 = arguments.length;
var i__29628__auto___40184 = (0);
while(true){
if((i__29628__auto___40184 < len__29627__auto___40183)){
args__29634__auto__.push((arguments[i__29628__auto___40184]));

var G__40185 = (i__29628__auto___40184 + (1));
i__29628__auto___40184 = G__40185;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq40173){
var G__40174 = cljs.core.first.call(null,seq40173);
var seq40173__$1 = cljs.core.next.call(null,seq40173);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__40174,seq40173__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40186 = arguments.length;
var i__29628__auto___40187 = (0);
while(true){
if((i__29628__auto___40187 < len__29627__auto___40186)){
args__29634__auto__.push((arguments[i__29628__auto___40187]));

var G__40188 = (i__29628__auto___40187 + (1));
i__29628__auto___40187 = G__40188;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq40175){
var G__40176 = cljs.core.first.call(null,seq40175);
var seq40175__$1 = cljs.core.next.call(null,seq40175);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__40176,seq40175__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40197 = arguments.length;
var i__29628__auto___40198 = (0);
while(true){
if((i__29628__auto___40198 < len__29627__auto___40197)){
args__29634__auto__.push((arguments[i__29628__auto___40198]));

var G__40199 = (i__29628__auto___40198 + (1));
i__29628__auto___40198 = G__40199;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq40189){
var G__40190 = cljs.core.first.call(null,seq40189);
var seq40189__$1 = cljs.core.next.call(null,seq40189);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__40190,seq40189__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40200 = arguments.length;
var i__29628__auto___40201 = (0);
while(true){
if((i__29628__auto___40201 < len__29627__auto___40200)){
args__29634__auto__.push((arguments[i__29628__auto___40201]));

var G__40202 = (i__29628__auto___40201 + (1));
i__29628__auto___40201 = G__40202;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq40191){
var G__40192 = cljs.core.first.call(null,seq40191);
var seq40191__$1 = cljs.core.next.call(null,seq40191);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__40192,seq40191__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40203 = arguments.length;
var i__29628__auto___40204 = (0);
while(true){
if((i__29628__auto___40204 < len__29627__auto___40203)){
args__29634__auto__.push((arguments[i__29628__auto___40204]));

var G__40205 = (i__29628__auto___40204 + (1));
i__29628__auto___40204 = G__40205;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq40193){
var G__40194 = cljs.core.first.call(null,seq40193);
var seq40193__$1 = cljs.core.next.call(null,seq40193);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__40194,seq40193__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40206 = arguments.length;
var i__29628__auto___40207 = (0);
while(true){
if((i__29628__auto___40207 < len__29627__auto___40206)){
args__29634__auto__.push((arguments[i__29628__auto___40207]));

var G__40208 = (i__29628__auto___40207 + (1));
i__29628__auto___40207 = G__40208;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq40195){
var G__40196 = cljs.core.first.call(null,seq40195);
var seq40195__$1 = cljs.core.next.call(null,seq40195);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__40196,seq40195__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40217 = arguments.length;
var i__29628__auto___40218 = (0);
while(true){
if((i__29628__auto___40218 < len__29627__auto___40217)){
args__29634__auto__.push((arguments[i__29628__auto___40218]));

var G__40219 = (i__29628__auto___40218 + (1));
i__29628__auto___40218 = G__40219;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq40209){
var G__40210 = cljs.core.first.call(null,seq40209);
var seq40209__$1 = cljs.core.next.call(null,seq40209);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__40210,seq40209__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40220 = arguments.length;
var i__29628__auto___40221 = (0);
while(true){
if((i__29628__auto___40221 < len__29627__auto___40220)){
args__29634__auto__.push((arguments[i__29628__auto___40221]));

var G__40222 = (i__29628__auto___40221 + (1));
i__29628__auto___40221 = G__40222;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq40211){
var G__40212 = cljs.core.first.call(null,seq40211);
var seq40211__$1 = cljs.core.next.call(null,seq40211);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__40212,seq40211__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40223 = arguments.length;
var i__29628__auto___40224 = (0);
while(true){
if((i__29628__auto___40224 < len__29627__auto___40223)){
args__29634__auto__.push((arguments[i__29628__auto___40224]));

var G__40225 = (i__29628__auto___40224 + (1));
i__29628__auto___40224 = G__40225;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq40213){
var G__40214 = cljs.core.first.call(null,seq40213);
var seq40213__$1 = cljs.core.next.call(null,seq40213);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__40214,seq40213__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40226 = arguments.length;
var i__29628__auto___40227 = (0);
while(true){
if((i__29628__auto___40227 < len__29627__auto___40226)){
args__29634__auto__.push((arguments[i__29628__auto___40227]));

var G__40228 = (i__29628__auto___40227 + (1));
i__29628__auto___40227 = G__40228;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq40215){
var G__40216 = cljs.core.first.call(null,seq40215);
var seq40215__$1 = cljs.core.next.call(null,seq40215);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__40216,seq40215__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40237 = arguments.length;
var i__29628__auto___40238 = (0);
while(true){
if((i__29628__auto___40238 < len__29627__auto___40237)){
args__29634__auto__.push((arguments[i__29628__auto___40238]));

var G__40239 = (i__29628__auto___40238 + (1));
i__29628__auto___40238 = G__40239;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__40068__auto__,rest__40069__auto__){
var convert_case__40070__auto__ = (function (p1__40067__40071__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__40067__40071__auto__,rest__40069__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__40068__auto__,convert_case__40070__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq40229){
var G__40230 = cljs.core.first.call(null,seq40229);
var seq40229__$1 = cljs.core.next.call(null,seq40229);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__40230,seq40229__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40240 = arguments.length;
var i__29628__auto___40241 = (0);
while(true){
if((i__29628__auto___40241 < len__29627__auto___40240)){
args__29634__auto__.push((arguments[i__29628__auto___40241]));

var G__40242 = (i__29628__auto___40241 + (1));
i__29628__auto___40241 = G__40242;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq40231){
var G__40232 = cljs.core.first.call(null,seq40231);
var seq40231__$1 = cljs.core.next.call(null,seq40231);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__40232,seq40231__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40243 = arguments.length;
var i__29628__auto___40244 = (0);
while(true){
if((i__29628__auto___40244 < len__29627__auto___40243)){
args__29634__auto__.push((arguments[i__29628__auto___40244]));

var G__40245 = (i__29628__auto___40244 + (1));
i__29628__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq40233){
var G__40234 = cljs.core.first.call(null,seq40233);
var seq40233__$1 = cljs.core.next.call(null,seq40233);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__40234,seq40233__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40246 = arguments.length;
var i__29628__auto___40247 = (0);
while(true){
if((i__29628__auto___40247 < len__29627__auto___40246)){
args__29634__auto__.push((arguments[i__29628__auto___40247]));

var G__40248 = (i__29628__auto___40247 + (1));
i__29628__auto___40247 = G__40248;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__40073__auto__,rest__40074__auto__){
if(!((s__40073__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__40073__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__40073__auto__),rest__40074__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq40235){
var G__40236 = cljs.core.first.call(null,seq40235);
var seq40235__$1 = cljs.core.next.call(null,seq40235);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__40236,seq40235__$1);
});


//# sourceMappingURL=core.js.map?rel=1521239475036
