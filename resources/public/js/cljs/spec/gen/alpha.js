// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39444 = arguments.length;
var i__29628__auto___39445 = (0);
while(true){
if((i__29628__auto___39445 < len__29627__auto___39444)){
args__29634__auto__.push((arguments[i__29628__auto___39445]));

var G__39446 = (i__29628__auto___39445 + (1));
i__29628__auto___39445 = G__39446;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq39443){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39443));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39448 = arguments.length;
var i__29628__auto___39449 = (0);
while(true){
if((i__29628__auto___39449 < len__29627__auto___39448)){
args__29634__auto__.push((arguments[i__29628__auto___39449]));

var G__39450 = (i__29628__auto___39449 + (1));
i__29628__auto___39449 = G__39450;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq39447){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39447));
});

var g_QMARK__39451 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_39452 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39451){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__39451))
,null));
var mkg_39453 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__39451,g_39452){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__39451,g_39452))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__39451,g_39452,mkg_39453){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__39451).call(null,x);
});})(g_QMARK__39451,g_39452,mkg_39453))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__39451,g_39452,mkg_39453){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_39453).call(null,gfn);
});})(g_QMARK__39451,g_39452,mkg_39453))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__39451,g_39452,mkg_39453){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_39452).call(null,generator);
});})(g_QMARK__39451,g_39452,mkg_39453))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30776__auto___39473 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30776__auto___39473){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39474 = arguments.length;
var i__29628__auto___39475 = (0);
while(true){
if((i__29628__auto___39475 < len__29627__auto___39474)){
args__29634__auto__.push((arguments[i__29628__auto___39475]));

var G__39476 = (i__29628__auto___39475 + (1));
i__29628__auto___39475 = G__39476;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39473))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39473){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39473),args);
});})(g__30776__auto___39473))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30776__auto___39473){
return (function (seq39454){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39454));
});})(g__30776__auto___39473))
;


var g__30776__auto___39477 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30776__auto___39477){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39478 = arguments.length;
var i__29628__auto___39479 = (0);
while(true){
if((i__29628__auto___39479 < len__29627__auto___39478)){
args__29634__auto__.push((arguments[i__29628__auto___39479]));

var G__39480 = (i__29628__auto___39479 + (1));
i__29628__auto___39479 = G__39480;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39477))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39477){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39477),args);
});})(g__30776__auto___39477))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30776__auto___39477){
return (function (seq39455){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39455));
});})(g__30776__auto___39477))
;


var g__30776__auto___39481 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30776__auto___39481){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39482 = arguments.length;
var i__29628__auto___39483 = (0);
while(true){
if((i__29628__auto___39483 < len__29627__auto___39482)){
args__29634__auto__.push((arguments[i__29628__auto___39483]));

var G__39484 = (i__29628__auto___39483 + (1));
i__29628__auto___39483 = G__39484;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39481))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39481){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39481),args);
});})(g__30776__auto___39481))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30776__auto___39481){
return (function (seq39456){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39456));
});})(g__30776__auto___39481))
;


var g__30776__auto___39485 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30776__auto___39485){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39486 = arguments.length;
var i__29628__auto___39487 = (0);
while(true){
if((i__29628__auto___39487 < len__29627__auto___39486)){
args__29634__auto__.push((arguments[i__29628__auto___39487]));

var G__39488 = (i__29628__auto___39487 + (1));
i__29628__auto___39487 = G__39488;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39485))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39485){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39485),args);
});})(g__30776__auto___39485))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30776__auto___39485){
return (function (seq39457){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39457));
});})(g__30776__auto___39485))
;


var g__30776__auto___39489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30776__auto___39489){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39490 = arguments.length;
var i__29628__auto___39491 = (0);
while(true){
if((i__29628__auto___39491 < len__29627__auto___39490)){
args__29634__auto__.push((arguments[i__29628__auto___39491]));

var G__39492 = (i__29628__auto___39491 + (1));
i__29628__auto___39491 = G__39492;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39489))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39489),args);
});})(g__30776__auto___39489))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30776__auto___39489){
return (function (seq39458){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39458));
});})(g__30776__auto___39489))
;


var g__30776__auto___39493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30776__auto___39493){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39494 = arguments.length;
var i__29628__auto___39495 = (0);
while(true){
if((i__29628__auto___39495 < len__29627__auto___39494)){
args__29634__auto__.push((arguments[i__29628__auto___39495]));

var G__39496 = (i__29628__auto___39495 + (1));
i__29628__auto___39495 = G__39496;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39493))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39493),args);
});})(g__30776__auto___39493))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30776__auto___39493){
return (function (seq39459){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39459));
});})(g__30776__auto___39493))
;


var g__30776__auto___39497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30776__auto___39497){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39498 = arguments.length;
var i__29628__auto___39499 = (0);
while(true){
if((i__29628__auto___39499 < len__29627__auto___39498)){
args__29634__auto__.push((arguments[i__29628__auto___39499]));

var G__39500 = (i__29628__auto___39499 + (1));
i__29628__auto___39499 = G__39500;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39497))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39497),args);
});})(g__30776__auto___39497))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30776__auto___39497){
return (function (seq39460){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39460));
});})(g__30776__auto___39497))
;


var g__30776__auto___39501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30776__auto___39501){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39502 = arguments.length;
var i__29628__auto___39503 = (0);
while(true){
if((i__29628__auto___39503 < len__29627__auto___39502)){
args__29634__auto__.push((arguments[i__29628__auto___39503]));

var G__39504 = (i__29628__auto___39503 + (1));
i__29628__auto___39503 = G__39504;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39501))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39501),args);
});})(g__30776__auto___39501))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30776__auto___39501){
return (function (seq39461){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39461));
});})(g__30776__auto___39501))
;


var g__30776__auto___39505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30776__auto___39505){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39506 = arguments.length;
var i__29628__auto___39507 = (0);
while(true){
if((i__29628__auto___39507 < len__29627__auto___39506)){
args__29634__auto__.push((arguments[i__29628__auto___39507]));

var G__39508 = (i__29628__auto___39507 + (1));
i__29628__auto___39507 = G__39508;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39505))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39505),args);
});})(g__30776__auto___39505))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30776__auto___39505){
return (function (seq39462){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39462));
});})(g__30776__auto___39505))
;


var g__30776__auto___39509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30776__auto___39509){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39510 = arguments.length;
var i__29628__auto___39511 = (0);
while(true){
if((i__29628__auto___39511 < len__29627__auto___39510)){
args__29634__auto__.push((arguments[i__29628__auto___39511]));

var G__39512 = (i__29628__auto___39511 + (1));
i__29628__auto___39511 = G__39512;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39509))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39509),args);
});})(g__30776__auto___39509))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30776__auto___39509){
return (function (seq39463){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39463));
});})(g__30776__auto___39509))
;


var g__30776__auto___39513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30776__auto___39513){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39514 = arguments.length;
var i__29628__auto___39515 = (0);
while(true){
if((i__29628__auto___39515 < len__29627__auto___39514)){
args__29634__auto__.push((arguments[i__29628__auto___39515]));

var G__39516 = (i__29628__auto___39515 + (1));
i__29628__auto___39515 = G__39516;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39513))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39513),args);
});})(g__30776__auto___39513))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30776__auto___39513){
return (function (seq39464){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39464));
});})(g__30776__auto___39513))
;


var g__30776__auto___39517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30776__auto___39517){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39518 = arguments.length;
var i__29628__auto___39519 = (0);
while(true){
if((i__29628__auto___39519 < len__29627__auto___39518)){
args__29634__auto__.push((arguments[i__29628__auto___39519]));

var G__39520 = (i__29628__auto___39519 + (1));
i__29628__auto___39519 = G__39520;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39517))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39517),args);
});})(g__30776__auto___39517))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30776__auto___39517){
return (function (seq39465){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39465));
});})(g__30776__auto___39517))
;


var g__30776__auto___39521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30776__auto___39521){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39522 = arguments.length;
var i__29628__auto___39523 = (0);
while(true){
if((i__29628__auto___39523 < len__29627__auto___39522)){
args__29634__auto__.push((arguments[i__29628__auto___39523]));

var G__39524 = (i__29628__auto___39523 + (1));
i__29628__auto___39523 = G__39524;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39521))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39521),args);
});})(g__30776__auto___39521))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30776__auto___39521){
return (function (seq39466){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39466));
});})(g__30776__auto___39521))
;


var g__30776__auto___39525 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30776__auto___39525){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39526 = arguments.length;
var i__29628__auto___39527 = (0);
while(true){
if((i__29628__auto___39527 < len__29627__auto___39526)){
args__29634__auto__.push((arguments[i__29628__auto___39527]));

var G__39528 = (i__29628__auto___39527 + (1));
i__29628__auto___39527 = G__39528;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39525))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39525),args);
});})(g__30776__auto___39525))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30776__auto___39525){
return (function (seq39467){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39467));
});})(g__30776__auto___39525))
;


var g__30776__auto___39529 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30776__auto___39529){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39530 = arguments.length;
var i__29628__auto___39531 = (0);
while(true){
if((i__29628__auto___39531 < len__29627__auto___39530)){
args__29634__auto__.push((arguments[i__29628__auto___39531]));

var G__39532 = (i__29628__auto___39531 + (1));
i__29628__auto___39531 = G__39532;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39529))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39529),args);
});})(g__30776__auto___39529))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30776__auto___39529){
return (function (seq39468){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39468));
});})(g__30776__auto___39529))
;


var g__30776__auto___39533 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30776__auto___39533){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39534 = arguments.length;
var i__29628__auto___39535 = (0);
while(true){
if((i__29628__auto___39535 < len__29627__auto___39534)){
args__29634__auto__.push((arguments[i__29628__auto___39535]));

var G__39536 = (i__29628__auto___39535 + (1));
i__29628__auto___39535 = G__39536;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39533))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39533),args);
});})(g__30776__auto___39533))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30776__auto___39533){
return (function (seq39469){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39469));
});})(g__30776__auto___39533))
;


var g__30776__auto___39537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30776__auto___39537){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39538 = arguments.length;
var i__29628__auto___39539 = (0);
while(true){
if((i__29628__auto___39539 < len__29627__auto___39538)){
args__29634__auto__.push((arguments[i__29628__auto___39539]));

var G__39540 = (i__29628__auto___39539 + (1));
i__29628__auto___39539 = G__39540;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39537))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39537),args);
});})(g__30776__auto___39537))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30776__auto___39537){
return (function (seq39470){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39470));
});})(g__30776__auto___39537))
;


var g__30776__auto___39541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30776__auto___39541){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39542 = arguments.length;
var i__29628__auto___39543 = (0);
while(true){
if((i__29628__auto___39543 < len__29627__auto___39542)){
args__29634__auto__.push((arguments[i__29628__auto___39543]));

var G__39544 = (i__29628__auto___39543 + (1));
i__29628__auto___39543 = G__39544;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39541))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39541),args);
});})(g__30776__auto___39541))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30776__auto___39541){
return (function (seq39471){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39471));
});})(g__30776__auto___39541))
;


var g__30776__auto___39545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30776__auto___39545){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39546 = arguments.length;
var i__29628__auto___39547 = (0);
while(true){
if((i__29628__auto___39547 < len__29627__auto___39546)){
args__29634__auto__.push((arguments[i__29628__auto___39547]));

var G__39548 = (i__29628__auto___39547 + (1));
i__29628__auto___39547 = G__39548;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30776__auto___39545))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30776__auto___39545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30776__auto___39545),args);
});})(g__30776__auto___39545))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30776__auto___39545){
return (function (seq39472){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39472));
});})(g__30776__auto___39545))
;

var g__30789__auto___39570 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30789__auto___39570){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39571 = arguments.length;
var i__29628__auto___39572 = (0);
while(true){
if((i__29628__auto___39572 < len__29627__auto___39571)){
args__29634__auto__.push((arguments[i__29628__auto___39572]));

var G__39573 = (i__29628__auto___39572 + (1));
i__29628__auto___39572 = G__39573;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39570))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39570){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39570);
});})(g__30789__auto___39570))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30789__auto___39570){
return (function (seq39549){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39549));
});})(g__30789__auto___39570))
;


var g__30789__auto___39574 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30789__auto___39574){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39575 = arguments.length;
var i__29628__auto___39576 = (0);
while(true){
if((i__29628__auto___39576 < len__29627__auto___39575)){
args__29634__auto__.push((arguments[i__29628__auto___39576]));

var G__39577 = (i__29628__auto___39576 + (1));
i__29628__auto___39576 = G__39577;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39574))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39574){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39574);
});})(g__30789__auto___39574))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30789__auto___39574){
return (function (seq39550){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39550));
});})(g__30789__auto___39574))
;


var g__30789__auto___39578 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30789__auto___39578){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39579 = arguments.length;
var i__29628__auto___39580 = (0);
while(true){
if((i__29628__auto___39580 < len__29627__auto___39579)){
args__29634__auto__.push((arguments[i__29628__auto___39580]));

var G__39581 = (i__29628__auto___39580 + (1));
i__29628__auto___39580 = G__39581;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39578))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39578){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39578);
});})(g__30789__auto___39578))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30789__auto___39578){
return (function (seq39551){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39551));
});})(g__30789__auto___39578))
;


var g__30789__auto___39582 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30789__auto___39582){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39583 = arguments.length;
var i__29628__auto___39584 = (0);
while(true){
if((i__29628__auto___39584 < len__29627__auto___39583)){
args__29634__auto__.push((arguments[i__29628__auto___39584]));

var G__39585 = (i__29628__auto___39584 + (1));
i__29628__auto___39584 = G__39585;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39582))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39582){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39582);
});})(g__30789__auto___39582))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30789__auto___39582){
return (function (seq39552){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39552));
});})(g__30789__auto___39582))
;


var g__30789__auto___39586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30789__auto___39586){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39587 = arguments.length;
var i__29628__auto___39588 = (0);
while(true){
if((i__29628__auto___39588 < len__29627__auto___39587)){
args__29634__auto__.push((arguments[i__29628__auto___39588]));

var G__39589 = (i__29628__auto___39588 + (1));
i__29628__auto___39588 = G__39589;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39586))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39586){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39586);
});})(g__30789__auto___39586))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30789__auto___39586){
return (function (seq39553){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39553));
});})(g__30789__auto___39586))
;


var g__30789__auto___39590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30789__auto___39590){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39591 = arguments.length;
var i__29628__auto___39592 = (0);
while(true){
if((i__29628__auto___39592 < len__29627__auto___39591)){
args__29634__auto__.push((arguments[i__29628__auto___39592]));

var G__39593 = (i__29628__auto___39592 + (1));
i__29628__auto___39592 = G__39593;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39590))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39590){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39590);
});})(g__30789__auto___39590))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30789__auto___39590){
return (function (seq39554){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39554));
});})(g__30789__auto___39590))
;


var g__30789__auto___39594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30789__auto___39594){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39595 = arguments.length;
var i__29628__auto___39596 = (0);
while(true){
if((i__29628__auto___39596 < len__29627__auto___39595)){
args__29634__auto__.push((arguments[i__29628__auto___39596]));

var G__39597 = (i__29628__auto___39596 + (1));
i__29628__auto___39596 = G__39597;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39594))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39594){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39594);
});})(g__30789__auto___39594))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30789__auto___39594){
return (function (seq39555){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39555));
});})(g__30789__auto___39594))
;


var g__30789__auto___39598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30789__auto___39598){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39599 = arguments.length;
var i__29628__auto___39600 = (0);
while(true){
if((i__29628__auto___39600 < len__29627__auto___39599)){
args__29634__auto__.push((arguments[i__29628__auto___39600]));

var G__39601 = (i__29628__auto___39600 + (1));
i__29628__auto___39600 = G__39601;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39598))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39598){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39598);
});})(g__30789__auto___39598))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30789__auto___39598){
return (function (seq39556){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39556));
});})(g__30789__auto___39598))
;


var g__30789__auto___39602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30789__auto___39602){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39603 = arguments.length;
var i__29628__auto___39604 = (0);
while(true){
if((i__29628__auto___39604 < len__29627__auto___39603)){
args__29634__auto__.push((arguments[i__29628__auto___39604]));

var G__39605 = (i__29628__auto___39604 + (1));
i__29628__auto___39604 = G__39605;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39602))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39602){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39602);
});})(g__30789__auto___39602))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30789__auto___39602){
return (function (seq39557){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39557));
});})(g__30789__auto___39602))
;


var g__30789__auto___39606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30789__auto___39606){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39607 = arguments.length;
var i__29628__auto___39608 = (0);
while(true){
if((i__29628__auto___39608 < len__29627__auto___39607)){
args__29634__auto__.push((arguments[i__29628__auto___39608]));

var G__39609 = (i__29628__auto___39608 + (1));
i__29628__auto___39608 = G__39609;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39606))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39606){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39606);
});})(g__30789__auto___39606))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30789__auto___39606){
return (function (seq39558){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39558));
});})(g__30789__auto___39606))
;


var g__30789__auto___39610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30789__auto___39610){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39611 = arguments.length;
var i__29628__auto___39612 = (0);
while(true){
if((i__29628__auto___39612 < len__29627__auto___39611)){
args__29634__auto__.push((arguments[i__29628__auto___39612]));

var G__39613 = (i__29628__auto___39612 + (1));
i__29628__auto___39612 = G__39613;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39610))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39610){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39610);
});})(g__30789__auto___39610))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30789__auto___39610){
return (function (seq39559){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39559));
});})(g__30789__auto___39610))
;


var g__30789__auto___39614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30789__auto___39614){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39615 = arguments.length;
var i__29628__auto___39616 = (0);
while(true){
if((i__29628__auto___39616 < len__29627__auto___39615)){
args__29634__auto__.push((arguments[i__29628__auto___39616]));

var G__39617 = (i__29628__auto___39616 + (1));
i__29628__auto___39616 = G__39617;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39614))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39614){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39614);
});})(g__30789__auto___39614))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30789__auto___39614){
return (function (seq39560){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39560));
});})(g__30789__auto___39614))
;


var g__30789__auto___39618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30789__auto___39618){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39619 = arguments.length;
var i__29628__auto___39620 = (0);
while(true){
if((i__29628__auto___39620 < len__29627__auto___39619)){
args__29634__auto__.push((arguments[i__29628__auto___39620]));

var G__39621 = (i__29628__auto___39620 + (1));
i__29628__auto___39620 = G__39621;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39618))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39618){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39618);
});})(g__30789__auto___39618))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30789__auto___39618){
return (function (seq39561){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39561));
});})(g__30789__auto___39618))
;


var g__30789__auto___39622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30789__auto___39622){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39623 = arguments.length;
var i__29628__auto___39624 = (0);
while(true){
if((i__29628__auto___39624 < len__29627__auto___39623)){
args__29634__auto__.push((arguments[i__29628__auto___39624]));

var G__39625 = (i__29628__auto___39624 + (1));
i__29628__auto___39624 = G__39625;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39622))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39622){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39622);
});})(g__30789__auto___39622))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30789__auto___39622){
return (function (seq39562){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39562));
});})(g__30789__auto___39622))
;


var g__30789__auto___39626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30789__auto___39626){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39627 = arguments.length;
var i__29628__auto___39628 = (0);
while(true){
if((i__29628__auto___39628 < len__29627__auto___39627)){
args__29634__auto__.push((arguments[i__29628__auto___39628]));

var G__39629 = (i__29628__auto___39628 + (1));
i__29628__auto___39628 = G__39629;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39626))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39626){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39626);
});})(g__30789__auto___39626))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30789__auto___39626){
return (function (seq39563){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39563));
});})(g__30789__auto___39626))
;


var g__30789__auto___39630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30789__auto___39630){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39631 = arguments.length;
var i__29628__auto___39632 = (0);
while(true){
if((i__29628__auto___39632 < len__29627__auto___39631)){
args__29634__auto__.push((arguments[i__29628__auto___39632]));

var G__39633 = (i__29628__auto___39632 + (1));
i__29628__auto___39632 = G__39633;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39630))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39630){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39630);
});})(g__30789__auto___39630))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30789__auto___39630){
return (function (seq39564){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39564));
});})(g__30789__auto___39630))
;


var g__30789__auto___39634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30789__auto___39634){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39635 = arguments.length;
var i__29628__auto___39636 = (0);
while(true){
if((i__29628__auto___39636 < len__29627__auto___39635)){
args__29634__auto__.push((arguments[i__29628__auto___39636]));

var G__39637 = (i__29628__auto___39636 + (1));
i__29628__auto___39636 = G__39637;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39634))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39634){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39634);
});})(g__30789__auto___39634))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30789__auto___39634){
return (function (seq39565){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39565));
});})(g__30789__auto___39634))
;


var g__30789__auto___39638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30789__auto___39638){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39639 = arguments.length;
var i__29628__auto___39640 = (0);
while(true){
if((i__29628__auto___39640 < len__29627__auto___39639)){
args__29634__auto__.push((arguments[i__29628__auto___39640]));

var G__39641 = (i__29628__auto___39640 + (1));
i__29628__auto___39640 = G__39641;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39638))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39638){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39638);
});})(g__30789__auto___39638))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30789__auto___39638){
return (function (seq39566){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39566));
});})(g__30789__auto___39638))
;


var g__30789__auto___39642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30789__auto___39642){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39643 = arguments.length;
var i__29628__auto___39644 = (0);
while(true){
if((i__29628__auto___39644 < len__29627__auto___39643)){
args__29634__auto__.push((arguments[i__29628__auto___39644]));

var G__39645 = (i__29628__auto___39644 + (1));
i__29628__auto___39644 = G__39645;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39642))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39642){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39642);
});})(g__30789__auto___39642))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30789__auto___39642){
return (function (seq39567){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39567));
});})(g__30789__auto___39642))
;


var g__30789__auto___39646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30789__auto___39646){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39647 = arguments.length;
var i__29628__auto___39648 = (0);
while(true){
if((i__29628__auto___39648 < len__29627__auto___39647)){
args__29634__auto__.push((arguments[i__29628__auto___39648]));

var G__39649 = (i__29628__auto___39648 + (1));
i__29628__auto___39648 = G__39649;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39646))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39646){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39646);
});})(g__30789__auto___39646))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30789__auto___39646){
return (function (seq39568){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39568));
});})(g__30789__auto___39646))
;


var g__30789__auto___39650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30789__auto___39650){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39651 = arguments.length;
var i__29628__auto___39652 = (0);
while(true){
if((i__29628__auto___39652 < len__29627__auto___39651)){
args__29634__auto__.push((arguments[i__29628__auto___39652]));

var G__39653 = (i__29628__auto___39652 + (1));
i__29628__auto___39652 = G__39653;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__30789__auto___39650))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30789__auto___39650){
return (function (args){
return cljs.core.deref.call(null,g__30789__auto___39650);
});})(g__30789__auto___39650))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30789__auto___39650){
return (function (seq39569){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39569));
});})(g__30789__auto___39650))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39656 = arguments.length;
var i__29628__auto___39657 = (0);
while(true){
if((i__29628__auto___39657 < len__29627__auto___39656)){
args__29634__auto__.push((arguments[i__29628__auto___39657]));

var G__39658 = (i__29628__auto___39657 + (1));
i__29628__auto___39657 = G__39658;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__39654_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__39654_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq39655){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39655));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple__$1 = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple__$1),cljs.spec.gen.alpha.vector.call(null,simple__$1),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple__$1){
return (function (p1__39659_SHARP_){
return (new Date(p1__39659_SHARP_));
});})(simple__$1))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple__$1),cljs.spec.gen.alpha.vector.call(null,simple__$1)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple__$1),cljs.spec.gen.alpha.map.call(null,simple__$1,simple__$1),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple__$1,simple__$1),cljs.spec.gen.alpha.vector.call(null,simple__$1)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple__$1),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple__$1),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple__$1),cljs.spec.gen.alpha.vector.call(null,simple__$1),cljs.spec.gen.alpha.map.call(null,simple__$1,simple__$1),cljs.spec.gen.alpha.set.call(null,simple__$1),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple__$1,simple__$1),cljs.spec.gen.alpha.list.call(null,simple__$1),cljs.spec.gen.alpha.vector.call(null,simple__$1),cljs.spec.gen.alpha.set.call(null,simple__$1)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521903536994
