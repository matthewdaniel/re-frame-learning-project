// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30709__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30710__i = 0, G__30710__a = new Array(arguments.length -  0);
while (G__30710__i < G__30710__a.length) {G__30710__a[G__30710__i] = arguments[G__30710__i + 0]; ++G__30710__i;}
  args = new cljs.core.IndexedSeq(G__30710__a,0,null);
} 
return G__30709__delegate.call(this,args);};
G__30709.cljs$lang$maxFixedArity = 0;
G__30709.cljs$lang$applyTo = (function (arglist__30711){
var args = cljs.core.seq(arglist__30711);
return G__30709__delegate(args);
});
G__30709.cljs$core$IFn$_invoke$arity$variadic = G__30709__delegate;
return G__30709;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30712__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30713__i = 0, G__30713__a = new Array(arguments.length -  0);
while (G__30713__i < G__30713__a.length) {G__30713__a[G__30713__i] = arguments[G__30713__i + 0]; ++G__30713__i;}
  args = new cljs.core.IndexedSeq(G__30713__a,0,null);
} 
return G__30712__delegate.call(this,args);};
G__30712.cljs$lang$maxFixedArity = 0;
G__30712.cljs$lang$applyTo = (function (arglist__30714){
var args = cljs.core.seq(arglist__30714);
return G__30712__delegate(args);
});
G__30712.cljs$core$IFn$_invoke$arity$variadic = G__30712__delegate;
return G__30712;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1521903526189
