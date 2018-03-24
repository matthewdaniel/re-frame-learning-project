// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('simple.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43044__delegate = function (x){
if(cljs.core.truth_(simple.core.run)){
return cljs.core.apply.call(null,simple.core.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'simple.core/run' is missing");
}
};
var G__43044 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__43045__i = 0, G__43045__a = new Array(arguments.length -  0);
while (G__43045__i < G__43045__a.length) {G__43045__a[G__43045__i] = arguments[G__43045__i + 0]; ++G__43045__i;}
  x = new cljs.core.IndexedSeq(G__43045__a,0,null);
} 
return G__43044__delegate.call(this,x);};
G__43044.cljs$lang$maxFixedArity = 0;
G__43044.cljs$lang$applyTo = (function (arglist__43046){
var x = cljs.core.seq(arglist__43046);
return G__43044__delegate(x);
});
G__43044.cljs$core$IFn$_invoke$arity$variadic = G__43044__delegate;
return G__43044;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1521839185811
