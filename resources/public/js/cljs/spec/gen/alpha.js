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
var len__29627__auto___38153 = arguments.length;
var i__29628__auto___38154 = (0);
while(true){
if((i__29628__auto___38154 < len__29627__auto___38153)){
args__29634__auto__.push((arguments[i__29628__auto___38154]));

var G__38155 = (i__29628__auto___38154 + (1));
i__29628__auto___38154 = G__38155;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38152){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38152));
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
var len__29627__auto___38157 = arguments.length;
var i__29628__auto___38158 = (0);
while(true){
if((i__29628__auto___38158 < len__29627__auto___38157)){
args__29634__auto__.push((arguments[i__29628__auto___38158]));

var G__38159 = (i__29628__auto___38158 + (1));
i__29628__auto___38158 = G__38159;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38156){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38156));
});

var g_QMARK__38160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_38161 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38160){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__38160))
,null));
var mkg_38162 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38160,g_38161){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__38160,g_38161))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38160,g_38161,mkg_38162){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38160).call(null,x);
});})(g_QMARK__38160,g_38161,mkg_38162))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38160,g_38161,mkg_38162){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38162).call(null,gfn);
});})(g_QMARK__38160,g_38161,mkg_38162))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38160,g_38161,mkg_38162){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38161).call(null,generator);
});})(g_QMARK__38160,g_38161,mkg_38162))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31706__auto___38182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31706__auto___38182){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38183 = arguments.length;
var i__29628__auto___38184 = (0);
while(true){
if((i__29628__auto___38184 < len__29627__auto___38183)){
args__29634__auto__.push((arguments[i__29628__auto___38184]));

var G__38185 = (i__29628__auto___38184 + (1));
i__29628__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38182))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38182),args);
});})(g__31706__auto___38182))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31706__auto___38182){
return (function (seq38163){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38163));
});})(g__31706__auto___38182))
;


var g__31706__auto___38186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31706__auto___38186){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38187 = arguments.length;
var i__29628__auto___38188 = (0);
while(true){
if((i__29628__auto___38188 < len__29627__auto___38187)){
args__29634__auto__.push((arguments[i__29628__auto___38188]));

var G__38189 = (i__29628__auto___38188 + (1));
i__29628__auto___38188 = G__38189;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38186))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38186),args);
});})(g__31706__auto___38186))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31706__auto___38186){
return (function (seq38164){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38164));
});})(g__31706__auto___38186))
;


var g__31706__auto___38190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31706__auto___38190){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38191 = arguments.length;
var i__29628__auto___38192 = (0);
while(true){
if((i__29628__auto___38192 < len__29627__auto___38191)){
args__29634__auto__.push((arguments[i__29628__auto___38192]));

var G__38193 = (i__29628__auto___38192 + (1));
i__29628__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38190))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38190),args);
});})(g__31706__auto___38190))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31706__auto___38190){
return (function (seq38165){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38165));
});})(g__31706__auto___38190))
;


var g__31706__auto___38194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31706__auto___38194){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38195 = arguments.length;
var i__29628__auto___38196 = (0);
while(true){
if((i__29628__auto___38196 < len__29627__auto___38195)){
args__29634__auto__.push((arguments[i__29628__auto___38196]));

var G__38197 = (i__29628__auto___38196 + (1));
i__29628__auto___38196 = G__38197;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38194))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38194),args);
});})(g__31706__auto___38194))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31706__auto___38194){
return (function (seq38166){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38166));
});})(g__31706__auto___38194))
;


var g__31706__auto___38198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31706__auto___38198){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38199 = arguments.length;
var i__29628__auto___38200 = (0);
while(true){
if((i__29628__auto___38200 < len__29627__auto___38199)){
args__29634__auto__.push((arguments[i__29628__auto___38200]));

var G__38201 = (i__29628__auto___38200 + (1));
i__29628__auto___38200 = G__38201;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38198))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38198),args);
});})(g__31706__auto___38198))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31706__auto___38198){
return (function (seq38167){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38167));
});})(g__31706__auto___38198))
;


var g__31706__auto___38202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31706__auto___38202){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38203 = arguments.length;
var i__29628__auto___38204 = (0);
while(true){
if((i__29628__auto___38204 < len__29627__auto___38203)){
args__29634__auto__.push((arguments[i__29628__auto___38204]));

var G__38205 = (i__29628__auto___38204 + (1));
i__29628__auto___38204 = G__38205;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38202))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38202),args);
});})(g__31706__auto___38202))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31706__auto___38202){
return (function (seq38168){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38168));
});})(g__31706__auto___38202))
;


var g__31706__auto___38206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31706__auto___38206){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38207 = arguments.length;
var i__29628__auto___38208 = (0);
while(true){
if((i__29628__auto___38208 < len__29627__auto___38207)){
args__29634__auto__.push((arguments[i__29628__auto___38208]));

var G__38209 = (i__29628__auto___38208 + (1));
i__29628__auto___38208 = G__38209;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38206))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38206),args);
});})(g__31706__auto___38206))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31706__auto___38206){
return (function (seq38169){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38169));
});})(g__31706__auto___38206))
;


var g__31706__auto___38210 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31706__auto___38210){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38211 = arguments.length;
var i__29628__auto___38212 = (0);
while(true){
if((i__29628__auto___38212 < len__29627__auto___38211)){
args__29634__auto__.push((arguments[i__29628__auto___38212]));

var G__38213 = (i__29628__auto___38212 + (1));
i__29628__auto___38212 = G__38213;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38210))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38210),args);
});})(g__31706__auto___38210))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31706__auto___38210){
return (function (seq38170){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38170));
});})(g__31706__auto___38210))
;


var g__31706__auto___38214 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31706__auto___38214){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38215 = arguments.length;
var i__29628__auto___38216 = (0);
while(true){
if((i__29628__auto___38216 < len__29627__auto___38215)){
args__29634__auto__.push((arguments[i__29628__auto___38216]));

var G__38217 = (i__29628__auto___38216 + (1));
i__29628__auto___38216 = G__38217;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38214))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38214),args);
});})(g__31706__auto___38214))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31706__auto___38214){
return (function (seq38171){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38171));
});})(g__31706__auto___38214))
;


var g__31706__auto___38218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31706__auto___38218){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38219 = arguments.length;
var i__29628__auto___38220 = (0);
while(true){
if((i__29628__auto___38220 < len__29627__auto___38219)){
args__29634__auto__.push((arguments[i__29628__auto___38220]));

var G__38221 = (i__29628__auto___38220 + (1));
i__29628__auto___38220 = G__38221;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38218))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38218),args);
});})(g__31706__auto___38218))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31706__auto___38218){
return (function (seq38172){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38172));
});})(g__31706__auto___38218))
;


var g__31706__auto___38222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31706__auto___38222){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38223 = arguments.length;
var i__29628__auto___38224 = (0);
while(true){
if((i__29628__auto___38224 < len__29627__auto___38223)){
args__29634__auto__.push((arguments[i__29628__auto___38224]));

var G__38225 = (i__29628__auto___38224 + (1));
i__29628__auto___38224 = G__38225;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38222))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38222),args);
});})(g__31706__auto___38222))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31706__auto___38222){
return (function (seq38173){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38173));
});})(g__31706__auto___38222))
;


var g__31706__auto___38226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31706__auto___38226){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38227 = arguments.length;
var i__29628__auto___38228 = (0);
while(true){
if((i__29628__auto___38228 < len__29627__auto___38227)){
args__29634__auto__.push((arguments[i__29628__auto___38228]));

var G__38229 = (i__29628__auto___38228 + (1));
i__29628__auto___38228 = G__38229;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38226))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38226),args);
});})(g__31706__auto___38226))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31706__auto___38226){
return (function (seq38174){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38174));
});})(g__31706__auto___38226))
;


var g__31706__auto___38230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31706__auto___38230){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38231 = arguments.length;
var i__29628__auto___38232 = (0);
while(true){
if((i__29628__auto___38232 < len__29627__auto___38231)){
args__29634__auto__.push((arguments[i__29628__auto___38232]));

var G__38233 = (i__29628__auto___38232 + (1));
i__29628__auto___38232 = G__38233;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38230))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38230),args);
});})(g__31706__auto___38230))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31706__auto___38230){
return (function (seq38175){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38175));
});})(g__31706__auto___38230))
;


var g__31706__auto___38234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31706__auto___38234){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38235 = arguments.length;
var i__29628__auto___38236 = (0);
while(true){
if((i__29628__auto___38236 < len__29627__auto___38235)){
args__29634__auto__.push((arguments[i__29628__auto___38236]));

var G__38237 = (i__29628__auto___38236 + (1));
i__29628__auto___38236 = G__38237;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38234))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38234),args);
});})(g__31706__auto___38234))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31706__auto___38234){
return (function (seq38176){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38176));
});})(g__31706__auto___38234))
;


var g__31706__auto___38238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31706__auto___38238){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38239 = arguments.length;
var i__29628__auto___38240 = (0);
while(true){
if((i__29628__auto___38240 < len__29627__auto___38239)){
args__29634__auto__.push((arguments[i__29628__auto___38240]));

var G__38241 = (i__29628__auto___38240 + (1));
i__29628__auto___38240 = G__38241;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38238))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38238),args);
});})(g__31706__auto___38238))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31706__auto___38238){
return (function (seq38177){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38177));
});})(g__31706__auto___38238))
;


var g__31706__auto___38242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31706__auto___38242){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38243 = arguments.length;
var i__29628__auto___38244 = (0);
while(true){
if((i__29628__auto___38244 < len__29627__auto___38243)){
args__29634__auto__.push((arguments[i__29628__auto___38244]));

var G__38245 = (i__29628__auto___38244 + (1));
i__29628__auto___38244 = G__38245;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38242))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38242),args);
});})(g__31706__auto___38242))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31706__auto___38242){
return (function (seq38178){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38178));
});})(g__31706__auto___38242))
;


var g__31706__auto___38246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31706__auto___38246){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38247 = arguments.length;
var i__29628__auto___38248 = (0);
while(true){
if((i__29628__auto___38248 < len__29627__auto___38247)){
args__29634__auto__.push((arguments[i__29628__auto___38248]));

var G__38249 = (i__29628__auto___38248 + (1));
i__29628__auto___38248 = G__38249;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38246))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38246),args);
});})(g__31706__auto___38246))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31706__auto___38246){
return (function (seq38179){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38179));
});})(g__31706__auto___38246))
;


var g__31706__auto___38250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31706__auto___38250){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38251 = arguments.length;
var i__29628__auto___38252 = (0);
while(true){
if((i__29628__auto___38252 < len__29627__auto___38251)){
args__29634__auto__.push((arguments[i__29628__auto___38252]));

var G__38253 = (i__29628__auto___38252 + (1));
i__29628__auto___38252 = G__38253;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38250))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38250),args);
});})(g__31706__auto___38250))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31706__auto___38250){
return (function (seq38180){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38180));
});})(g__31706__auto___38250))
;


var g__31706__auto___38254 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31706__auto___38254){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38255 = arguments.length;
var i__29628__auto___38256 = (0);
while(true){
if((i__29628__auto___38256 < len__29627__auto___38255)){
args__29634__auto__.push((arguments[i__29628__auto___38256]));

var G__38257 = (i__29628__auto___38256 + (1));
i__29628__auto___38256 = G__38257;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31706__auto___38254))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31706__auto___38254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31706__auto___38254),args);
});})(g__31706__auto___38254))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31706__auto___38254){
return (function (seq38181){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38181));
});})(g__31706__auto___38254))
;

var g__31719__auto___38279 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31719__auto___38279){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38280 = arguments.length;
var i__29628__auto___38281 = (0);
while(true){
if((i__29628__auto___38281 < len__29627__auto___38280)){
args__29634__auto__.push((arguments[i__29628__auto___38281]));

var G__38282 = (i__29628__auto___38281 + (1));
i__29628__auto___38281 = G__38282;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38279))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38279){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38279);
});})(g__31719__auto___38279))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31719__auto___38279){
return (function (seq38258){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38258));
});})(g__31719__auto___38279))
;


var g__31719__auto___38283 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31719__auto___38283){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38284 = arguments.length;
var i__29628__auto___38285 = (0);
while(true){
if((i__29628__auto___38285 < len__29627__auto___38284)){
args__29634__auto__.push((arguments[i__29628__auto___38285]));

var G__38286 = (i__29628__auto___38285 + (1));
i__29628__auto___38285 = G__38286;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38283))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38283){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38283);
});})(g__31719__auto___38283))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31719__auto___38283){
return (function (seq38259){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38259));
});})(g__31719__auto___38283))
;


var g__31719__auto___38287 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31719__auto___38287){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38288 = arguments.length;
var i__29628__auto___38289 = (0);
while(true){
if((i__29628__auto___38289 < len__29627__auto___38288)){
args__29634__auto__.push((arguments[i__29628__auto___38289]));

var G__38290 = (i__29628__auto___38289 + (1));
i__29628__auto___38289 = G__38290;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38287))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38287){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38287);
});})(g__31719__auto___38287))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31719__auto___38287){
return (function (seq38260){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38260));
});})(g__31719__auto___38287))
;


var g__31719__auto___38291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31719__auto___38291){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38292 = arguments.length;
var i__29628__auto___38293 = (0);
while(true){
if((i__29628__auto___38293 < len__29627__auto___38292)){
args__29634__auto__.push((arguments[i__29628__auto___38293]));

var G__38294 = (i__29628__auto___38293 + (1));
i__29628__auto___38293 = G__38294;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38291))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38291){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38291);
});})(g__31719__auto___38291))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31719__auto___38291){
return (function (seq38261){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38261));
});})(g__31719__auto___38291))
;


var g__31719__auto___38295 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31719__auto___38295){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38296 = arguments.length;
var i__29628__auto___38297 = (0);
while(true){
if((i__29628__auto___38297 < len__29627__auto___38296)){
args__29634__auto__.push((arguments[i__29628__auto___38297]));

var G__38298 = (i__29628__auto___38297 + (1));
i__29628__auto___38297 = G__38298;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38295))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38295){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38295);
});})(g__31719__auto___38295))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31719__auto___38295){
return (function (seq38262){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38262));
});})(g__31719__auto___38295))
;


var g__31719__auto___38299 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31719__auto___38299){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38300 = arguments.length;
var i__29628__auto___38301 = (0);
while(true){
if((i__29628__auto___38301 < len__29627__auto___38300)){
args__29634__auto__.push((arguments[i__29628__auto___38301]));

var G__38302 = (i__29628__auto___38301 + (1));
i__29628__auto___38301 = G__38302;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38299))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38299){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38299);
});})(g__31719__auto___38299))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31719__auto___38299){
return (function (seq38263){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38263));
});})(g__31719__auto___38299))
;


var g__31719__auto___38303 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31719__auto___38303){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38304 = arguments.length;
var i__29628__auto___38305 = (0);
while(true){
if((i__29628__auto___38305 < len__29627__auto___38304)){
args__29634__auto__.push((arguments[i__29628__auto___38305]));

var G__38306 = (i__29628__auto___38305 + (1));
i__29628__auto___38305 = G__38306;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38303))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38303){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38303);
});})(g__31719__auto___38303))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31719__auto___38303){
return (function (seq38264){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38264));
});})(g__31719__auto___38303))
;


var g__31719__auto___38307 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31719__auto___38307){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38308 = arguments.length;
var i__29628__auto___38309 = (0);
while(true){
if((i__29628__auto___38309 < len__29627__auto___38308)){
args__29634__auto__.push((arguments[i__29628__auto___38309]));

var G__38310 = (i__29628__auto___38309 + (1));
i__29628__auto___38309 = G__38310;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38307))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38307){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38307);
});})(g__31719__auto___38307))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31719__auto___38307){
return (function (seq38265){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38265));
});})(g__31719__auto___38307))
;


var g__31719__auto___38311 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31719__auto___38311){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38312 = arguments.length;
var i__29628__auto___38313 = (0);
while(true){
if((i__29628__auto___38313 < len__29627__auto___38312)){
args__29634__auto__.push((arguments[i__29628__auto___38313]));

var G__38314 = (i__29628__auto___38313 + (1));
i__29628__auto___38313 = G__38314;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38311))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38311){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38311);
});})(g__31719__auto___38311))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31719__auto___38311){
return (function (seq38266){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38266));
});})(g__31719__auto___38311))
;


var g__31719__auto___38315 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31719__auto___38315){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38316 = arguments.length;
var i__29628__auto___38317 = (0);
while(true){
if((i__29628__auto___38317 < len__29627__auto___38316)){
args__29634__auto__.push((arguments[i__29628__auto___38317]));

var G__38318 = (i__29628__auto___38317 + (1));
i__29628__auto___38317 = G__38318;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38315))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38315){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38315);
});})(g__31719__auto___38315))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31719__auto___38315){
return (function (seq38267){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38267));
});})(g__31719__auto___38315))
;


var g__31719__auto___38319 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31719__auto___38319){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38320 = arguments.length;
var i__29628__auto___38321 = (0);
while(true){
if((i__29628__auto___38321 < len__29627__auto___38320)){
args__29634__auto__.push((arguments[i__29628__auto___38321]));

var G__38322 = (i__29628__auto___38321 + (1));
i__29628__auto___38321 = G__38322;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38319))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38319){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38319);
});})(g__31719__auto___38319))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31719__auto___38319){
return (function (seq38268){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38268));
});})(g__31719__auto___38319))
;


var g__31719__auto___38323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31719__auto___38323){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38324 = arguments.length;
var i__29628__auto___38325 = (0);
while(true){
if((i__29628__auto___38325 < len__29627__auto___38324)){
args__29634__auto__.push((arguments[i__29628__auto___38325]));

var G__38326 = (i__29628__auto___38325 + (1));
i__29628__auto___38325 = G__38326;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38323))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38323){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38323);
});})(g__31719__auto___38323))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31719__auto___38323){
return (function (seq38269){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38269));
});})(g__31719__auto___38323))
;


var g__31719__auto___38327 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31719__auto___38327){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38328 = arguments.length;
var i__29628__auto___38329 = (0);
while(true){
if((i__29628__auto___38329 < len__29627__auto___38328)){
args__29634__auto__.push((arguments[i__29628__auto___38329]));

var G__38330 = (i__29628__auto___38329 + (1));
i__29628__auto___38329 = G__38330;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38327))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38327){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38327);
});})(g__31719__auto___38327))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31719__auto___38327){
return (function (seq38270){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38270));
});})(g__31719__auto___38327))
;


var g__31719__auto___38331 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31719__auto___38331){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38332 = arguments.length;
var i__29628__auto___38333 = (0);
while(true){
if((i__29628__auto___38333 < len__29627__auto___38332)){
args__29634__auto__.push((arguments[i__29628__auto___38333]));

var G__38334 = (i__29628__auto___38333 + (1));
i__29628__auto___38333 = G__38334;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38331))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38331){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38331);
});})(g__31719__auto___38331))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31719__auto___38331){
return (function (seq38271){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38271));
});})(g__31719__auto___38331))
;


var g__31719__auto___38335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31719__auto___38335){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38336 = arguments.length;
var i__29628__auto___38337 = (0);
while(true){
if((i__29628__auto___38337 < len__29627__auto___38336)){
args__29634__auto__.push((arguments[i__29628__auto___38337]));

var G__38338 = (i__29628__auto___38337 + (1));
i__29628__auto___38337 = G__38338;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38335))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38335){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38335);
});})(g__31719__auto___38335))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31719__auto___38335){
return (function (seq38272){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38272));
});})(g__31719__auto___38335))
;


var g__31719__auto___38339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31719__auto___38339){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38340 = arguments.length;
var i__29628__auto___38341 = (0);
while(true){
if((i__29628__auto___38341 < len__29627__auto___38340)){
args__29634__auto__.push((arguments[i__29628__auto___38341]));

var G__38342 = (i__29628__auto___38341 + (1));
i__29628__auto___38341 = G__38342;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38339))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38339){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38339);
});})(g__31719__auto___38339))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31719__auto___38339){
return (function (seq38273){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38273));
});})(g__31719__auto___38339))
;


var g__31719__auto___38343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31719__auto___38343){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38344 = arguments.length;
var i__29628__auto___38345 = (0);
while(true){
if((i__29628__auto___38345 < len__29627__auto___38344)){
args__29634__auto__.push((arguments[i__29628__auto___38345]));

var G__38346 = (i__29628__auto___38345 + (1));
i__29628__auto___38345 = G__38346;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38343))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38343){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38343);
});})(g__31719__auto___38343))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31719__auto___38343){
return (function (seq38274){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38274));
});})(g__31719__auto___38343))
;


var g__31719__auto___38347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31719__auto___38347){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38348 = arguments.length;
var i__29628__auto___38349 = (0);
while(true){
if((i__29628__auto___38349 < len__29627__auto___38348)){
args__29634__auto__.push((arguments[i__29628__auto___38349]));

var G__38350 = (i__29628__auto___38349 + (1));
i__29628__auto___38349 = G__38350;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38347))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38347){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38347);
});})(g__31719__auto___38347))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31719__auto___38347){
return (function (seq38275){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38275));
});})(g__31719__auto___38347))
;


var g__31719__auto___38351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31719__auto___38351){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38352 = arguments.length;
var i__29628__auto___38353 = (0);
while(true){
if((i__29628__auto___38353 < len__29627__auto___38352)){
args__29634__auto__.push((arguments[i__29628__auto___38353]));

var G__38354 = (i__29628__auto___38353 + (1));
i__29628__auto___38353 = G__38354;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38351))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38351){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38351);
});})(g__31719__auto___38351))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31719__auto___38351){
return (function (seq38276){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38276));
});})(g__31719__auto___38351))
;


var g__31719__auto___38355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31719__auto___38355){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38356 = arguments.length;
var i__29628__auto___38357 = (0);
while(true){
if((i__29628__auto___38357 < len__29627__auto___38356)){
args__29634__auto__.push((arguments[i__29628__auto___38357]));

var G__38358 = (i__29628__auto___38357 + (1));
i__29628__auto___38357 = G__38358;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38355))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38355){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38355);
});})(g__31719__auto___38355))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31719__auto___38355){
return (function (seq38277){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38277));
});})(g__31719__auto___38355))
;


var g__31719__auto___38359 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31719__auto___38359){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38360 = arguments.length;
var i__29628__auto___38361 = (0);
while(true){
if((i__29628__auto___38361 < len__29627__auto___38360)){
args__29634__auto__.push((arguments[i__29628__auto___38361]));

var G__38362 = (i__29628__auto___38361 + (1));
i__29628__auto___38361 = G__38362;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});})(g__31719__auto___38359))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31719__auto___38359){
return (function (args){
return cljs.core.deref.call(null,g__31719__auto___38359);
});})(g__31719__auto___38359))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31719__auto___38359){
return (function (seq38278){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38278));
});})(g__31719__auto___38359))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29634__auto__ = [];
var len__29627__auto___38365 = arguments.length;
var i__29628__auto___38366 = (0);
while(true){
if((i__29628__auto___38366 < len__29627__auto___38365)){
args__29634__auto__.push((arguments[i__29628__auto___38366]));

var G__38367 = (i__29628__auto___38366 + (1));
i__29628__auto___38366 = G__38367;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38363_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38363_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38364){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38364));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38368_SHARP_){
return (new Date(p1__38368_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
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

//# sourceMappingURL=alpha.js.map?rel=1521239473443
