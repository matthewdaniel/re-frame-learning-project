// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('simple.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__52895__delegate = function (x){
if(cljs.core.truth_(simple.core.run)){
return cljs.core.apply.call(null,simple.core.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'simple.core/run' is missing");
}
};
var G__52895 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__52896__i = 0, G__52896__a = new Array(arguments.length -  0);
while (G__52896__i < G__52896__a.length) {G__52896__a[G__52896__i] = arguments[G__52896__i + 0]; ++G__52896__i;}
  x = new cljs.core.IndexedSeq(G__52896__a,0,null);
} 
return G__52895__delegate.call(this,x);};
G__52895.cljs$lang$maxFixedArity = 0;
G__52895.cljs$lang$applyTo = (function (arglist__52897){
var x = cljs.core.seq(arglist__52897);
return G__52895__delegate(x);
});
G__52895.cljs$core$IFn$_invoke$arity$variadic = G__52895__delegate;
return G__52895;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1522019210943
