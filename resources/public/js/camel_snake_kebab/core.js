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
var len__29627__auto___41397 = arguments.length;
var i__29628__auto___41398 = (0);
while(true){
if((i__29628__auto___41398 < len__29627__auto___41397)){
args__29634__auto__.push((arguments[i__29628__auto___41398]));

var G__41399 = (i__29628__auto___41398 + (1));
i__29628__auto___41398 = G__41399;
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

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq41392){
var G__41393 = cljs.core.first.call(null,seq41392);
var seq41392__$1 = cljs.core.next.call(null,seq41392);
var G__41394 = cljs.core.first.call(null,seq41392__$1);
var seq41392__$2 = cljs.core.next.call(null,seq41392__$1);
var G__41395 = cljs.core.first.call(null,seq41392__$2);
var seq41392__$3 = cljs.core.next.call(null,seq41392__$2);
var G__41396 = cljs.core.first.call(null,seq41392__$3);
var seq41392__$4 = cljs.core.next.call(null,seq41392__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__41393,G__41394,G__41395,G__41396,seq41392__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41408 = arguments.length;
var i__29628__auto___41409 = (0);
while(true){
if((i__29628__auto___41409 < len__29627__auto___41408)){
args__29634__auto__.push((arguments[i__29628__auto___41409]));

var G__41410 = (i__29628__auto___41409 + (1));
i__29628__auto___41409 = G__41410;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq41400){
var G__41401 = cljs.core.first.call(null,seq41400);
var seq41400__$1 = cljs.core.next.call(null,seq41400);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__41401,seq41400__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41411 = arguments.length;
var i__29628__auto___41412 = (0);
while(true){
if((i__29628__auto___41412 < len__29627__auto___41411)){
args__29634__auto__.push((arguments[i__29628__auto___41412]));

var G__41413 = (i__29628__auto___41412 + (1));
i__29628__auto___41412 = G__41413;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq41402){
var G__41403 = cljs.core.first.call(null,seq41402);
var seq41402__$1 = cljs.core.next.call(null,seq41402);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__41403,seq41402__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41414 = arguments.length;
var i__29628__auto___41415 = (0);
while(true){
if((i__29628__auto___41415 < len__29627__auto___41414)){
args__29634__auto__.push((arguments[i__29628__auto___41415]));

var G__41416 = (i__29628__auto___41415 + (1));
i__29628__auto___41415 = G__41416;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq41404){
var G__41405 = cljs.core.first.call(null,seq41404);
var seq41404__$1 = cljs.core.next.call(null,seq41404);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__41405,seq41404__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41417 = arguments.length;
var i__29628__auto___41418 = (0);
while(true){
if((i__29628__auto___41418 < len__29627__auto___41417)){
args__29634__auto__.push((arguments[i__29628__auto___41418]));

var G__41419 = (i__29628__auto___41418 + (1));
i__29628__auto___41418 = G__41419;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq41406){
var G__41407 = cljs.core.first.call(null,seq41406);
var seq41406__$1 = cljs.core.next.call(null,seq41406);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__41407,seq41406__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41428 = arguments.length;
var i__29628__auto___41429 = (0);
while(true){
if((i__29628__auto___41429 < len__29627__auto___41428)){
args__29634__auto__.push((arguments[i__29628__auto___41429]));

var G__41430 = (i__29628__auto___41429 + (1));
i__29628__auto___41429 = G__41430;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq41420){
var G__41421 = cljs.core.first.call(null,seq41420);
var seq41420__$1 = cljs.core.next.call(null,seq41420);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__41421,seq41420__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41431 = arguments.length;
var i__29628__auto___41432 = (0);
while(true){
if((i__29628__auto___41432 < len__29627__auto___41431)){
args__29634__auto__.push((arguments[i__29628__auto___41432]));

var G__41433 = (i__29628__auto___41432 + (1));
i__29628__auto___41432 = G__41433;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq41422){
var G__41423 = cljs.core.first.call(null,seq41422);
var seq41422__$1 = cljs.core.next.call(null,seq41422);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__41423,seq41422__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41434 = arguments.length;
var i__29628__auto___41435 = (0);
while(true){
if((i__29628__auto___41435 < len__29627__auto___41434)){
args__29634__auto__.push((arguments[i__29628__auto___41435]));

var G__41436 = (i__29628__auto___41435 + (1));
i__29628__auto___41435 = G__41436;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq41424){
var G__41425 = cljs.core.first.call(null,seq41424);
var seq41424__$1 = cljs.core.next.call(null,seq41424);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__41425,seq41424__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41437 = arguments.length;
var i__29628__auto___41438 = (0);
while(true){
if((i__29628__auto___41438 < len__29627__auto___41437)){
args__29634__auto__.push((arguments[i__29628__auto___41438]));

var G__41439 = (i__29628__auto___41438 + (1));
i__29628__auto___41438 = G__41439;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq41426){
var G__41427 = cljs.core.first.call(null,seq41426);
var seq41426__$1 = cljs.core.next.call(null,seq41426);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__41427,seq41426__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41448 = arguments.length;
var i__29628__auto___41449 = (0);
while(true){
if((i__29628__auto___41449 < len__29627__auto___41448)){
args__29634__auto__.push((arguments[i__29628__auto___41449]));

var G__41450 = (i__29628__auto___41449 + (1));
i__29628__auto___41449 = G__41450;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq41440){
var G__41441 = cljs.core.first.call(null,seq41440);
var seq41440__$1 = cljs.core.next.call(null,seq41440);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__41441,seq41440__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41451 = arguments.length;
var i__29628__auto___41452 = (0);
while(true){
if((i__29628__auto___41452 < len__29627__auto___41451)){
args__29634__auto__.push((arguments[i__29628__auto___41452]));

var G__41453 = (i__29628__auto___41452 + (1));
i__29628__auto___41452 = G__41453;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq41442){
var G__41443 = cljs.core.first.call(null,seq41442);
var seq41442__$1 = cljs.core.next.call(null,seq41442);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__41443,seq41442__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41454 = arguments.length;
var i__29628__auto___41455 = (0);
while(true){
if((i__29628__auto___41455 < len__29627__auto___41454)){
args__29634__auto__.push((arguments[i__29628__auto___41455]));

var G__41456 = (i__29628__auto___41455 + (1));
i__29628__auto___41455 = G__41456;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq41444){
var G__41445 = cljs.core.first.call(null,seq41444);
var seq41444__$1 = cljs.core.next.call(null,seq41444);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__41445,seq41444__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41457 = arguments.length;
var i__29628__auto___41458 = (0);
while(true){
if((i__29628__auto___41458 < len__29627__auto___41457)){
args__29634__auto__.push((arguments[i__29628__auto___41458]));

var G__41459 = (i__29628__auto___41458 + (1));
i__29628__auto___41458 = G__41459;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq41446){
var G__41447 = cljs.core.first.call(null,seq41446);
var seq41446__$1 = cljs.core.next.call(null,seq41446);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__41447,seq41446__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41468 = arguments.length;
var i__29628__auto___41469 = (0);
while(true){
if((i__29628__auto___41469 < len__29627__auto___41468)){
args__29634__auto__.push((arguments[i__29628__auto___41469]));

var G__41470 = (i__29628__auto___41469 + (1));
i__29628__auto___41469 = G__41470;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq41460){
var G__41461 = cljs.core.first.call(null,seq41460);
var seq41460__$1 = cljs.core.next.call(null,seq41460);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__41461,seq41460__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41471 = arguments.length;
var i__29628__auto___41472 = (0);
while(true){
if((i__29628__auto___41472 < len__29627__auto___41471)){
args__29634__auto__.push((arguments[i__29628__auto___41472]));

var G__41473 = (i__29628__auto___41472 + (1));
i__29628__auto___41472 = G__41473;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq41462){
var G__41463 = cljs.core.first.call(null,seq41462);
var seq41462__$1 = cljs.core.next.call(null,seq41462);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__41463,seq41462__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41474 = arguments.length;
var i__29628__auto___41475 = (0);
while(true){
if((i__29628__auto___41475 < len__29627__auto___41474)){
args__29634__auto__.push((arguments[i__29628__auto___41475]));

var G__41476 = (i__29628__auto___41475 + (1));
i__29628__auto___41475 = G__41476;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq41464){
var G__41465 = cljs.core.first.call(null,seq41464);
var seq41464__$1 = cljs.core.next.call(null,seq41464);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__41465,seq41464__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41477 = arguments.length;
var i__29628__auto___41478 = (0);
while(true){
if((i__29628__auto___41478 < len__29627__auto___41477)){
args__29634__auto__.push((arguments[i__29628__auto___41478]));

var G__41479 = (i__29628__auto___41478 + (1));
i__29628__auto___41478 = G__41479;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq41466){
var G__41467 = cljs.core.first.call(null,seq41466);
var seq41466__$1 = cljs.core.next.call(null,seq41466);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__41467,seq41466__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41488 = arguments.length;
var i__29628__auto___41489 = (0);
while(true){
if((i__29628__auto___41489 < len__29627__auto___41488)){
args__29634__auto__.push((arguments[i__29628__auto___41489]));

var G__41490 = (i__29628__auto___41489 + (1));
i__29628__auto___41489 = G__41490;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq41480){
var G__41481 = cljs.core.first.call(null,seq41480);
var seq41480__$1 = cljs.core.next.call(null,seq41480);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__41481,seq41480__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41491 = arguments.length;
var i__29628__auto___41492 = (0);
while(true){
if((i__29628__auto___41492 < len__29627__auto___41491)){
args__29634__auto__.push((arguments[i__29628__auto___41492]));

var G__41493 = (i__29628__auto___41492 + (1));
i__29628__auto___41492 = G__41493;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq41482){
var G__41483 = cljs.core.first.call(null,seq41482);
var seq41482__$1 = cljs.core.next.call(null,seq41482);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__41483,seq41482__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41494 = arguments.length;
var i__29628__auto___41495 = (0);
while(true){
if((i__29628__auto___41495 < len__29627__auto___41494)){
args__29634__auto__.push((arguments[i__29628__auto___41495]));

var G__41496 = (i__29628__auto___41495 + (1));
i__29628__auto___41495 = G__41496;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq41484){
var G__41485 = cljs.core.first.call(null,seq41484);
var seq41484__$1 = cljs.core.next.call(null,seq41484);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__41485,seq41484__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41497 = arguments.length;
var i__29628__auto___41498 = (0);
while(true){
if((i__29628__auto___41498 < len__29627__auto___41497)){
args__29634__auto__.push((arguments[i__29628__auto___41498]));

var G__41499 = (i__29628__auto___41498 + (1));
i__29628__auto___41498 = G__41499;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq41486){
var G__41487 = cljs.core.first.call(null,seq41486);
var seq41486__$1 = cljs.core.next.call(null,seq41486);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__41487,seq41486__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41508 = arguments.length;
var i__29628__auto___41509 = (0);
while(true){
if((i__29628__auto___41509 < len__29627__auto___41508)){
args__29634__auto__.push((arguments[i__29628__auto___41509]));

var G__41510 = (i__29628__auto___41509 + (1));
i__29628__auto___41509 = G__41510;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq41500){
var G__41501 = cljs.core.first.call(null,seq41500);
var seq41500__$1 = cljs.core.next.call(null,seq41500);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__41501,seq41500__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41511 = arguments.length;
var i__29628__auto___41512 = (0);
while(true){
if((i__29628__auto___41512 < len__29627__auto___41511)){
args__29634__auto__.push((arguments[i__29628__auto___41512]));

var G__41513 = (i__29628__auto___41512 + (1));
i__29628__auto___41512 = G__41513;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq41502){
var G__41503 = cljs.core.first.call(null,seq41502);
var seq41502__$1 = cljs.core.next.call(null,seq41502);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__41503,seq41502__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41514 = arguments.length;
var i__29628__auto___41515 = (0);
while(true){
if((i__29628__auto___41515 < len__29627__auto___41514)){
args__29634__auto__.push((arguments[i__29628__auto___41515]));

var G__41516 = (i__29628__auto___41515 + (1));
i__29628__auto___41515 = G__41516;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq41504){
var G__41505 = cljs.core.first.call(null,seq41504);
var seq41504__$1 = cljs.core.next.call(null,seq41504);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__41505,seq41504__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41517 = arguments.length;
var i__29628__auto___41518 = (0);
while(true){
if((i__29628__auto___41518 < len__29627__auto___41517)){
args__29634__auto__.push((arguments[i__29628__auto___41518]));

var G__41519 = (i__29628__auto___41518 + (1));
i__29628__auto___41518 = G__41519;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq41506){
var G__41507 = cljs.core.first.call(null,seq41506);
var seq41506__$1 = cljs.core.next.call(null,seq41506);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__41507,seq41506__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41528 = arguments.length;
var i__29628__auto___41529 = (0);
while(true){
if((i__29628__auto___41529 < len__29627__auto___41528)){
args__29634__auto__.push((arguments[i__29628__auto___41529]));

var G__41530 = (i__29628__auto___41529 + (1));
i__29628__auto___41529 = G__41530;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__41359__auto__,rest__41360__auto__){
var convert_case__41361__auto__ = (function (p1__41358__41362__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__41358__41362__auto__,rest__41360__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__41359__auto__,convert_case__41361__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq41520){
var G__41521 = cljs.core.first.call(null,seq41520);
var seq41520__$1 = cljs.core.next.call(null,seq41520);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__41521,seq41520__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41531 = arguments.length;
var i__29628__auto___41532 = (0);
while(true){
if((i__29628__auto___41532 < len__29627__auto___41531)){
args__29634__auto__.push((arguments[i__29628__auto___41532]));

var G__41533 = (i__29628__auto___41532 + (1));
i__29628__auto___41532 = G__41533;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq41522){
var G__41523 = cljs.core.first.call(null,seq41522);
var seq41522__$1 = cljs.core.next.call(null,seq41522);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__41523,seq41522__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41534 = arguments.length;
var i__29628__auto___41535 = (0);
while(true){
if((i__29628__auto___41535 < len__29627__auto___41534)){
args__29634__auto__.push((arguments[i__29628__auto___41535]));

var G__41536 = (i__29628__auto___41535 + (1));
i__29628__auto___41535 = G__41536;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq41524){
var G__41525 = cljs.core.first.call(null,seq41524);
var seq41524__$1 = cljs.core.next.call(null,seq41524);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__41525,seq41524__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___41537 = arguments.length;
var i__29628__auto___41538 = (0);
while(true){
if((i__29628__auto___41538 < len__29627__auto___41537)){
args__29634__auto__.push((arguments[i__29628__auto___41538]));

var G__41539 = (i__29628__auto___41538 + (1));
i__29628__auto___41538 = G__41539;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__41364__auto__,rest__41365__auto__){
if(!((s__41364__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__41364__auto__))"));
}

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__41364__auto__),rest__41365__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq41526){
var G__41527 = cljs.core.first.call(null,seq41526);
var seq41526__$1 = cljs.core.next.call(null,seq41526);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__41527,seq41526__$1);
});


//# sourceMappingURL=core.js.map?rel=1521903538760
