// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28458__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28458__auto__){
return or__28458__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28458__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
var or__28458__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28458__auto____$1)){
return or__28458__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37481_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37481_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37482 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37483 = null;
var count__37484 = (0);
var i__37485 = (0);
while(true){
if((i__37485 < count__37484)){
var n = cljs.core._nth.call(null,chunk__37483,i__37485);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37486 = seq__37482;
var G__37487 = chunk__37483;
var G__37488 = count__37484;
var G__37489 = (i__37485 + (1));
seq__37482 = G__37486;
chunk__37483 = G__37487;
count__37484 = G__37488;
i__37485 = G__37489;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37482);
if(temp__4657__auto__){
var seq__37482__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37482__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__37482__$1);
var G__37490 = cljs.core.chunk_rest.call(null,seq__37482__$1);
var G__37491 = c__29297__auto__;
var G__37492 = cljs.core.count.call(null,c__29297__auto__);
var G__37493 = (0);
seq__37482 = G__37490;
chunk__37483 = G__37491;
count__37484 = G__37492;
i__37485 = G__37493;
continue;
} else {
var n = cljs.core.first.call(null,seq__37482__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37494 = cljs.core.next.call(null,seq__37482__$1);
var G__37495 = null;
var G__37496 = (0);
var G__37497 = (0);
seq__37482 = G__37494;
chunk__37483 = G__37495;
count__37484 = G__37496;
i__37485 = G__37497;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37498){
var vec__37499 = p__37498;
var _ = cljs.core.nth.call(null,vec__37499,(0),null);
var v = cljs.core.nth.call(null,vec__37499,(1),null);
var and__28446__auto__ = v;
if(cljs.core.truth_(and__28446__auto__)){
return v.call(null,dep);
} else {
return and__28446__auto__;
}
}),cljs.core.filter.call(null,(function (p__37502){
var vec__37503 = p__37502;
var k = cljs.core.nth.call(null,vec__37503,(0),null);
var v = cljs.core.nth.call(null,vec__37503,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37515_37523 = cljs.core.seq.call(null,deps);
var chunk__37516_37524 = null;
var count__37517_37525 = (0);
var i__37518_37526 = (0);
while(true){
if((i__37518_37526 < count__37517_37525)){
var dep_37527 = cljs.core._nth.call(null,chunk__37516_37524,i__37518_37526);
if(cljs.core.truth_((function (){var and__28446__auto__ = dep_37527;
if(cljs.core.truth_(and__28446__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37527));
} else {
return and__28446__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37527,(depth + (1)),state);
} else {
}

var G__37528 = seq__37515_37523;
var G__37529 = chunk__37516_37524;
var G__37530 = count__37517_37525;
var G__37531 = (i__37518_37526 + (1));
seq__37515_37523 = G__37528;
chunk__37516_37524 = G__37529;
count__37517_37525 = G__37530;
i__37518_37526 = G__37531;
continue;
} else {
var temp__4657__auto___37532 = cljs.core.seq.call(null,seq__37515_37523);
if(temp__4657__auto___37532){
var seq__37515_37533__$1 = temp__4657__auto___37532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37515_37533__$1)){
var c__29297__auto___37534 = cljs.core.chunk_first.call(null,seq__37515_37533__$1);
var G__37535 = cljs.core.chunk_rest.call(null,seq__37515_37533__$1);
var G__37536 = c__29297__auto___37534;
var G__37537 = cljs.core.count.call(null,c__29297__auto___37534);
var G__37538 = (0);
seq__37515_37523 = G__37535;
chunk__37516_37524 = G__37536;
count__37517_37525 = G__37537;
i__37518_37526 = G__37538;
continue;
} else {
var dep_37539 = cljs.core.first.call(null,seq__37515_37533__$1);
if(cljs.core.truth_((function (){var and__28446__auto__ = dep_37539;
if(cljs.core.truth_(and__28446__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37539));
} else {
return and__28446__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37539,(depth + (1)),state);
} else {
}

var G__37540 = cljs.core.next.call(null,seq__37515_37533__$1);
var G__37541 = null;
var G__37542 = (0);
var G__37543 = (0);
seq__37515_37523 = G__37540;
chunk__37516_37524 = G__37541;
count__37517_37525 = G__37542;
i__37518_37526 = G__37543;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37519){
var vec__37520 = p__37519;
var seq__37521 = cljs.core.seq.call(null,vec__37520);
var first__37522 = cljs.core.first.call(null,seq__37521);
var seq__37521__$1 = cljs.core.next.call(null,seq__37521);
var x = first__37522;
var xs = seq__37521__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37520,seq__37521,first__37522,seq__37521__$1,x,xs,get_deps__$1){
return (function (p1__37506_SHARP_){
return clojure.set.difference.call(null,p1__37506_SHARP_,x);
});})(vec__37520,seq__37521,first__37522,seq__37521__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37544 = cljs.core.seq.call(null,provides);
var chunk__37545 = null;
var count__37546 = (0);
var i__37547 = (0);
while(true){
if((i__37547 < count__37546)){
var prov = cljs.core._nth.call(null,chunk__37545,i__37547);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37548_37556 = cljs.core.seq.call(null,requires);
var chunk__37549_37557 = null;
var count__37550_37558 = (0);
var i__37551_37559 = (0);
while(true){
if((i__37551_37559 < count__37550_37558)){
var req_37560 = cljs.core._nth.call(null,chunk__37549_37557,i__37551_37559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37560,prov);

var G__37561 = seq__37548_37556;
var G__37562 = chunk__37549_37557;
var G__37563 = count__37550_37558;
var G__37564 = (i__37551_37559 + (1));
seq__37548_37556 = G__37561;
chunk__37549_37557 = G__37562;
count__37550_37558 = G__37563;
i__37551_37559 = G__37564;
continue;
} else {
var temp__4657__auto___37565 = cljs.core.seq.call(null,seq__37548_37556);
if(temp__4657__auto___37565){
var seq__37548_37566__$1 = temp__4657__auto___37565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37548_37566__$1)){
var c__29297__auto___37567 = cljs.core.chunk_first.call(null,seq__37548_37566__$1);
var G__37568 = cljs.core.chunk_rest.call(null,seq__37548_37566__$1);
var G__37569 = c__29297__auto___37567;
var G__37570 = cljs.core.count.call(null,c__29297__auto___37567);
var G__37571 = (0);
seq__37548_37556 = G__37568;
chunk__37549_37557 = G__37569;
count__37550_37558 = G__37570;
i__37551_37559 = G__37571;
continue;
} else {
var req_37572 = cljs.core.first.call(null,seq__37548_37566__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37572,prov);

var G__37573 = cljs.core.next.call(null,seq__37548_37566__$1);
var G__37574 = null;
var G__37575 = (0);
var G__37576 = (0);
seq__37548_37556 = G__37573;
chunk__37549_37557 = G__37574;
count__37550_37558 = G__37575;
i__37551_37559 = G__37576;
continue;
}
} else {
}
}
break;
}

var G__37577 = seq__37544;
var G__37578 = chunk__37545;
var G__37579 = count__37546;
var G__37580 = (i__37547 + (1));
seq__37544 = G__37577;
chunk__37545 = G__37578;
count__37546 = G__37579;
i__37547 = G__37580;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37544);
if(temp__4657__auto__){
var seq__37544__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37544__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__37544__$1);
var G__37581 = cljs.core.chunk_rest.call(null,seq__37544__$1);
var G__37582 = c__29297__auto__;
var G__37583 = cljs.core.count.call(null,c__29297__auto__);
var G__37584 = (0);
seq__37544 = G__37581;
chunk__37545 = G__37582;
count__37546 = G__37583;
i__37547 = G__37584;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37544__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37552_37585 = cljs.core.seq.call(null,requires);
var chunk__37553_37586 = null;
var count__37554_37587 = (0);
var i__37555_37588 = (0);
while(true){
if((i__37555_37588 < count__37554_37587)){
var req_37589 = cljs.core._nth.call(null,chunk__37553_37586,i__37555_37588);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37589,prov);

var G__37590 = seq__37552_37585;
var G__37591 = chunk__37553_37586;
var G__37592 = count__37554_37587;
var G__37593 = (i__37555_37588 + (1));
seq__37552_37585 = G__37590;
chunk__37553_37586 = G__37591;
count__37554_37587 = G__37592;
i__37555_37588 = G__37593;
continue;
} else {
var temp__4657__auto___37594__$1 = cljs.core.seq.call(null,seq__37552_37585);
if(temp__4657__auto___37594__$1){
var seq__37552_37595__$1 = temp__4657__auto___37594__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37552_37595__$1)){
var c__29297__auto___37596 = cljs.core.chunk_first.call(null,seq__37552_37595__$1);
var G__37597 = cljs.core.chunk_rest.call(null,seq__37552_37595__$1);
var G__37598 = c__29297__auto___37596;
var G__37599 = cljs.core.count.call(null,c__29297__auto___37596);
var G__37600 = (0);
seq__37552_37585 = G__37597;
chunk__37553_37586 = G__37598;
count__37554_37587 = G__37599;
i__37555_37588 = G__37600;
continue;
} else {
var req_37601 = cljs.core.first.call(null,seq__37552_37595__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37601,prov);

var G__37602 = cljs.core.next.call(null,seq__37552_37595__$1);
var G__37603 = null;
var G__37604 = (0);
var G__37605 = (0);
seq__37552_37585 = G__37602;
chunk__37553_37586 = G__37603;
count__37554_37587 = G__37604;
i__37555_37588 = G__37605;
continue;
}
} else {
}
}
break;
}

var G__37606 = cljs.core.next.call(null,seq__37544__$1);
var G__37607 = null;
var G__37608 = (0);
var G__37609 = (0);
seq__37544 = G__37606;
chunk__37545 = G__37607;
count__37546 = G__37608;
i__37547 = G__37609;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37610_37614 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37611_37615 = null;
var count__37612_37616 = (0);
var i__37613_37617 = (0);
while(true){
if((i__37613_37617 < count__37612_37616)){
var ns_37618 = cljs.core._nth.call(null,chunk__37611_37615,i__37613_37617);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37618);

var G__37619 = seq__37610_37614;
var G__37620 = chunk__37611_37615;
var G__37621 = count__37612_37616;
var G__37622 = (i__37613_37617 + (1));
seq__37610_37614 = G__37619;
chunk__37611_37615 = G__37620;
count__37612_37616 = G__37621;
i__37613_37617 = G__37622;
continue;
} else {
var temp__4657__auto___37623 = cljs.core.seq.call(null,seq__37610_37614);
if(temp__4657__auto___37623){
var seq__37610_37624__$1 = temp__4657__auto___37623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37610_37624__$1)){
var c__29297__auto___37625 = cljs.core.chunk_first.call(null,seq__37610_37624__$1);
var G__37626 = cljs.core.chunk_rest.call(null,seq__37610_37624__$1);
var G__37627 = c__29297__auto___37625;
var G__37628 = cljs.core.count.call(null,c__29297__auto___37625);
var G__37629 = (0);
seq__37610_37614 = G__37626;
chunk__37611_37615 = G__37627;
count__37612_37616 = G__37628;
i__37613_37617 = G__37629;
continue;
} else {
var ns_37630 = cljs.core.first.call(null,seq__37610_37624__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37630);

var G__37631 = cljs.core.next.call(null,seq__37610_37624__$1);
var G__37632 = null;
var G__37633 = (0);
var G__37634 = (0);
seq__37610_37614 = G__37631;
chunk__37611_37615 = G__37632;
count__37612_37616 = G__37633;
i__37613_37617 = G__37634;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28458__auto__ = goog.require__;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37635__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37635 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37636__i = 0, G__37636__a = new Array(arguments.length -  0);
while (G__37636__i < G__37636__a.length) {G__37636__a[G__37636__i] = arguments[G__37636__i + 0]; ++G__37636__i;}
  args = new cljs.core.IndexedSeq(G__37636__a,0,null);
} 
return G__37635__delegate.call(this,args);};
G__37635.cljs$lang$maxFixedArity = 0;
G__37635.cljs$lang$applyTo = (function (arglist__37637){
var args = cljs.core.seq(arglist__37637);
return G__37635__delegate(args);
});
G__37635.cljs$core$IFn$_invoke$arity$variadic = G__37635__delegate;
return G__37635;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37638_SHARP_,p2__37639_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37638_SHARP_)].join('')),p2__37639_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37640_SHARP_,p2__37641_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37640_SHARP_)].join(''),p2__37641_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37642 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37642.addCallback(((function (G__37642){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37642))
);

G__37642.addErrback(((function (G__37642){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37642))
);

return G__37642;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37643){if((e37643 instanceof Error)){
var e = e37643;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37643;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37644){if((e37644 instanceof Error)){
var e = e37644;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37644;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37645 = cljs.core._EQ_;
var expr__37646 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37645.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37646))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37645.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37646))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37645.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37646))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37645,expr__37646){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37645,expr__37646))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37648,callback){
var map__37649 = p__37648;
var map__37649__$1 = ((((!((map__37649 == null)))?((((map__37649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37649):map__37649);
var file_msg = map__37649__$1;
var request_url = cljs.core.get.call(null,map__37649__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28458__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37649,map__37649__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37649,map__37649__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto__){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto__){
return (function (state_37689){
var state_val_37690 = (state_37689[(1)]);
if((state_val_37690 === (7))){
var inst_37685 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37691_37718 = state_37689__$1;
(statearr_37691_37718[(2)] = inst_37685);

(statearr_37691_37718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (1))){
var state_37689__$1 = state_37689;
var statearr_37692_37719 = state_37689__$1;
(statearr_37692_37719[(2)] = null);

(statearr_37692_37719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (4))){
var inst_37653 = (state_37689[(7)]);
var inst_37653__$1 = (state_37689[(2)]);
var state_37689__$1 = (function (){var statearr_37693 = state_37689;
(statearr_37693[(7)] = inst_37653__$1);

return statearr_37693;
})();
if(cljs.core.truth_(inst_37653__$1)){
var statearr_37694_37720 = state_37689__$1;
(statearr_37694_37720[(1)] = (5));

} else {
var statearr_37695_37721 = state_37689__$1;
(statearr_37695_37721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (15))){
var inst_37670 = (state_37689[(8)]);
var inst_37667 = (state_37689[(9)]);
var inst_37672 = inst_37670.call(null,inst_37667);
var state_37689__$1 = state_37689;
var statearr_37696_37722 = state_37689__$1;
(statearr_37696_37722[(2)] = inst_37672);

(statearr_37696_37722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (13))){
var inst_37679 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37697_37723 = state_37689__$1;
(statearr_37697_37723[(2)] = inst_37679);

(statearr_37697_37723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (6))){
var state_37689__$1 = state_37689;
var statearr_37698_37724 = state_37689__$1;
(statearr_37698_37724[(2)] = null);

(statearr_37698_37724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (17))){
var inst_37676 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
var statearr_37699_37725 = state_37689__$1;
(statearr_37699_37725[(2)] = inst_37676);

(statearr_37699_37725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (3))){
var inst_37687 = (state_37689[(2)]);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37689__$1,inst_37687);
} else {
if((state_val_37690 === (12))){
var state_37689__$1 = state_37689;
var statearr_37700_37726 = state_37689__$1;
(statearr_37700_37726[(2)] = null);

(statearr_37700_37726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (2))){
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37690 === (11))){
var inst_37658 = (state_37689[(10)]);
var inst_37665 = figwheel.client.file_reloading.blocking_load.call(null,inst_37658);
var state_37689__$1 = state_37689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37689__$1,(14),inst_37665);
} else {
if((state_val_37690 === (9))){
var inst_37658 = (state_37689[(10)]);
var state_37689__$1 = state_37689;
if(cljs.core.truth_(inst_37658)){
var statearr_37701_37727 = state_37689__$1;
(statearr_37701_37727[(1)] = (11));

} else {
var statearr_37702_37728 = state_37689__$1;
(statearr_37702_37728[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (5))){
var inst_37659 = (state_37689[(11)]);
var inst_37653 = (state_37689[(7)]);
var inst_37658 = cljs.core.nth.call(null,inst_37653,(0),null);
var inst_37659__$1 = cljs.core.nth.call(null,inst_37653,(1),null);
var state_37689__$1 = (function (){var statearr_37703 = state_37689;
(statearr_37703[(10)] = inst_37658);

(statearr_37703[(11)] = inst_37659__$1);

return statearr_37703;
})();
if(cljs.core.truth_(inst_37659__$1)){
var statearr_37704_37729 = state_37689__$1;
(statearr_37704_37729[(1)] = (8));

} else {
var statearr_37705_37730 = state_37689__$1;
(statearr_37705_37730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (14))){
var inst_37658 = (state_37689[(10)]);
var inst_37670 = (state_37689[(8)]);
var inst_37667 = (state_37689[(2)]);
var inst_37668 = console.log("Loading!",inst_37658);
var inst_37669 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37670__$1 = cljs.core.get.call(null,inst_37669,inst_37658);
var state_37689__$1 = (function (){var statearr_37706 = state_37689;
(statearr_37706[(8)] = inst_37670__$1);

(statearr_37706[(9)] = inst_37667);

(statearr_37706[(12)] = inst_37668);

return statearr_37706;
})();
if(cljs.core.truth_(inst_37670__$1)){
var statearr_37707_37731 = state_37689__$1;
(statearr_37707_37731[(1)] = (15));

} else {
var statearr_37708_37732 = state_37689__$1;
(statearr_37708_37732[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (16))){
var inst_37667 = (state_37689[(9)]);
var inst_37674 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37667);
var state_37689__$1 = state_37689;
var statearr_37709_37733 = state_37689__$1;
(statearr_37709_37733[(2)] = inst_37674);

(statearr_37709_37733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (10))){
var inst_37681 = (state_37689[(2)]);
var state_37689__$1 = (function (){var statearr_37710 = state_37689;
(statearr_37710[(13)] = inst_37681);

return statearr_37710;
})();
var statearr_37711_37734 = state_37689__$1;
(statearr_37711_37734[(2)] = null);

(statearr_37711_37734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37690 === (8))){
var inst_37659 = (state_37689[(11)]);
var inst_37661 = console.log("Evaling!",inst_37659);
var inst_37662 = eval(inst_37659);
var state_37689__$1 = (function (){var statearr_37712 = state_37689;
(statearr_37712[(14)] = inst_37661);

return statearr_37712;
})();
var statearr_37713_37735 = state_37689__$1;
(statearr_37713_37735[(2)] = inst_37662);

(statearr_37713_37735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33913__auto__))
;
return ((function (switch__31482__auto__,c__33913__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31483__auto__ = null;
var figwheel$client$file_reloading$state_machine__31483__auto____0 = (function (){
var statearr_37714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37714[(0)] = figwheel$client$file_reloading$state_machine__31483__auto__);

(statearr_37714[(1)] = (1));

return statearr_37714;
});
var figwheel$client$file_reloading$state_machine__31483__auto____1 = (function (state_37689){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_37689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e37715){if((e37715 instanceof Object)){
var ex__31486__auto__ = e37715;
var statearr_37716_37736 = state_37689;
(statearr_37716_37736[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37737 = state_37689;
state_37689 = G__37737;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31483__auto__ = function(state_37689){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31483__auto____1.call(this,state_37689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31483__auto____0;
figwheel$client$file_reloading$state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31483__auto____1;
return figwheel$client$file_reloading$state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto__))
})();
var state__33915__auto__ = (function (){var statearr_37717 = f__33914__auto__.call(null);
(statearr_37717[(6)] = c__33913__auto__);

return statearr_37717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto__))
);

return c__33913__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37739 = arguments.length;
switch (G__37739) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37741,callback){
var map__37742 = p__37741;
var map__37742__$1 = ((((!((map__37742 == null)))?((((map__37742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37742.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37742):map__37742);
var file_msg = map__37742__$1;
var namespace = cljs.core.get.call(null,map__37742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37742,map__37742__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37742,map__37742__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37744){
var map__37745 = p__37744;
var map__37745__$1 = ((((!((map__37745 == null)))?((((map__37745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37745.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37745):map__37745);
var file_msg = map__37745__$1;
var namespace = cljs.core.get.call(null,map__37745__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37747){
var map__37748 = p__37747;
var map__37748__$1 = ((((!((map__37748 == null)))?((((map__37748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37748):map__37748);
var file_msg = map__37748__$1;
var namespace = cljs.core.get.call(null,map__37748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28446__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28446__auto__){
var or__28458__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
var or__28458__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28458__auto____$1)){
return or__28458__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28446__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37750,callback){
var map__37751 = p__37750;
var map__37751__$1 = ((((!((map__37751 == null)))?((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);
var file_msg = map__37751__$1;
var request_url = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33913__auto___37801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto___37801,out){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto___37801,out){
return (function (state_37786){
var state_val_37787 = (state_37786[(1)]);
if((state_val_37787 === (1))){
var inst_37760 = cljs.core.seq.call(null,files);
var inst_37761 = cljs.core.first.call(null,inst_37760);
var inst_37762 = cljs.core.next.call(null,inst_37760);
var inst_37763 = files;
var state_37786__$1 = (function (){var statearr_37788 = state_37786;
(statearr_37788[(7)] = inst_37762);

(statearr_37788[(8)] = inst_37763);

(statearr_37788[(9)] = inst_37761);

return statearr_37788;
})();
var statearr_37789_37802 = state_37786__$1;
(statearr_37789_37802[(2)] = null);

(statearr_37789_37802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (2))){
var inst_37769 = (state_37786[(10)]);
var inst_37763 = (state_37786[(8)]);
var inst_37768 = cljs.core.seq.call(null,inst_37763);
var inst_37769__$1 = cljs.core.first.call(null,inst_37768);
var inst_37770 = cljs.core.next.call(null,inst_37768);
var inst_37771 = (inst_37769__$1 == null);
var inst_37772 = cljs.core.not.call(null,inst_37771);
var state_37786__$1 = (function (){var statearr_37790 = state_37786;
(statearr_37790[(11)] = inst_37770);

(statearr_37790[(10)] = inst_37769__$1);

return statearr_37790;
})();
if(inst_37772){
var statearr_37791_37803 = state_37786__$1;
(statearr_37791_37803[(1)] = (4));

} else {
var statearr_37792_37804 = state_37786__$1;
(statearr_37792_37804[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (3))){
var inst_37784 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37786__$1,inst_37784);
} else {
if((state_val_37787 === (4))){
var inst_37769 = (state_37786[(10)]);
var inst_37774 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37769);
var state_37786__$1 = state_37786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37786__$1,(7),inst_37774);
} else {
if((state_val_37787 === (5))){
var inst_37780 = cljs.core.async.close_BANG_.call(null,out);
var state_37786__$1 = state_37786;
var statearr_37793_37805 = state_37786__$1;
(statearr_37793_37805[(2)] = inst_37780);

(statearr_37793_37805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (6))){
var inst_37782 = (state_37786[(2)]);
var state_37786__$1 = state_37786;
var statearr_37794_37806 = state_37786__$1;
(statearr_37794_37806[(2)] = inst_37782);

(statearr_37794_37806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37787 === (7))){
var inst_37770 = (state_37786[(11)]);
var inst_37776 = (state_37786[(2)]);
var inst_37777 = cljs.core.async.put_BANG_.call(null,out,inst_37776);
var inst_37763 = inst_37770;
var state_37786__$1 = (function (){var statearr_37795 = state_37786;
(statearr_37795[(8)] = inst_37763);

(statearr_37795[(12)] = inst_37777);

return statearr_37795;
})();
var statearr_37796_37807 = state_37786__$1;
(statearr_37796_37807[(2)] = null);

(statearr_37796_37807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33913__auto___37801,out))
;
return ((function (switch__31482__auto__,c__33913__auto___37801,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto____0 = (function (){
var statearr_37797 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37797[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto__);

(statearr_37797[(1)] = (1));

return statearr_37797;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto____1 = (function (state_37786){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_37786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object)){
var ex__31486__auto__ = e37798;
var statearr_37799_37808 = state_37786;
(statearr_37799_37808[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37809 = state_37786;
state_37786 = G__37809;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto__ = function(state_37786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto____1.call(this,state_37786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto___37801,out))
})();
var state__33915__auto__ = (function (){var statearr_37800 = f__33914__auto__.call(null);
(statearr_37800[(6)] = c__33913__auto___37801);

return statearr_37800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto___37801,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37810,opts){
var map__37811 = p__37810;
var map__37811__$1 = ((((!((map__37811 == null)))?((((map__37811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37811):map__37811);
var eval_body = cljs.core.get.call(null,map__37811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28446__auto__ = eval_body;
if(cljs.core.truth_(and__28446__auto__)){
return typeof eval_body === 'string';
} else {
return and__28446__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37813){var e = e37813;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37814_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37815){
var vec__37816 = p__37815;
var k = cljs.core.nth.call(null,vec__37816,(0),null);
var v = cljs.core.nth.call(null,vec__37816,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37819){
var vec__37820 = p__37819;
var k = cljs.core.nth.call(null,vec__37820,(0),null);
var v = cljs.core.nth.call(null,vec__37820,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37826,p__37827){
var map__37828 = p__37826;
var map__37828__$1 = ((((!((map__37828 == null)))?((((map__37828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37828):map__37828);
var opts = map__37828__$1;
var before_jsload = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37828__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37829 = p__37827;
var map__37829__$1 = ((((!((map__37829 == null)))?((((map__37829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37829):map__37829);
var msg = map__37829__$1;
var files = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37829__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37983){
var state_val_37984 = (state_37983[(1)]);
if((state_val_37984 === (7))){
var inst_37844 = (state_37983[(7)]);
var inst_37846 = (state_37983[(8)]);
var inst_37845 = (state_37983[(9)]);
var inst_37843 = (state_37983[(10)]);
var inst_37851 = cljs.core._nth.call(null,inst_37844,inst_37846);
var inst_37852 = figwheel.client.file_reloading.eval_body.call(null,inst_37851,opts);
var inst_37853 = (inst_37846 + (1));
var tmp37985 = inst_37844;
var tmp37986 = inst_37845;
var tmp37987 = inst_37843;
var inst_37843__$1 = tmp37987;
var inst_37844__$1 = tmp37985;
var inst_37845__$1 = tmp37986;
var inst_37846__$1 = inst_37853;
var state_37983__$1 = (function (){var statearr_37988 = state_37983;
(statearr_37988[(7)] = inst_37844__$1);

(statearr_37988[(8)] = inst_37846__$1);

(statearr_37988[(9)] = inst_37845__$1);

(statearr_37988[(11)] = inst_37852);

(statearr_37988[(10)] = inst_37843__$1);

return statearr_37988;
})();
var statearr_37989_38072 = state_37983__$1;
(statearr_37989_38072[(2)] = null);

(statearr_37989_38072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (20))){
var inst_37886 = (state_37983[(12)]);
var inst_37894 = figwheel.client.file_reloading.sort_files.call(null,inst_37886);
var state_37983__$1 = state_37983;
var statearr_37990_38073 = state_37983__$1;
(statearr_37990_38073[(2)] = inst_37894);

(statearr_37990_38073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (27))){
var state_37983__$1 = state_37983;
var statearr_37991_38074 = state_37983__$1;
(statearr_37991_38074[(2)] = null);

(statearr_37991_38074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (1))){
var inst_37835 = (state_37983[(13)]);
var inst_37832 = before_jsload.call(null,files);
var inst_37833 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37834 = (function (){return ((function (inst_37835,inst_37832,inst_37833,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37823_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37823_SHARP_);
});
;})(inst_37835,inst_37832,inst_37833,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37835__$1 = cljs.core.filter.call(null,inst_37834,files);
var inst_37836 = cljs.core.not_empty.call(null,inst_37835__$1);
var state_37983__$1 = (function (){var statearr_37992 = state_37983;
(statearr_37992[(14)] = inst_37833);

(statearr_37992[(13)] = inst_37835__$1);

(statearr_37992[(15)] = inst_37832);

return statearr_37992;
})();
if(cljs.core.truth_(inst_37836)){
var statearr_37993_38075 = state_37983__$1;
(statearr_37993_38075[(1)] = (2));

} else {
var statearr_37994_38076 = state_37983__$1;
(statearr_37994_38076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (24))){
var state_37983__$1 = state_37983;
var statearr_37995_38077 = state_37983__$1;
(statearr_37995_38077[(2)] = null);

(statearr_37995_38077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (39))){
var inst_37936 = (state_37983[(16)]);
var state_37983__$1 = state_37983;
var statearr_37996_38078 = state_37983__$1;
(statearr_37996_38078[(2)] = inst_37936);

(statearr_37996_38078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (46))){
var inst_37978 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_37997_38079 = state_37983__$1;
(statearr_37997_38079[(2)] = inst_37978);

(statearr_37997_38079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (4))){
var inst_37880 = (state_37983[(2)]);
var inst_37881 = cljs.core.List.EMPTY;
var inst_37882 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37881);
var inst_37883 = (function (){return ((function (inst_37880,inst_37881,inst_37882,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37824_SHARP_){
var and__28446__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37824_SHARP_);
if(cljs.core.truth_(and__28446__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37824_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37824_SHARP_)));
} else {
return and__28446__auto__;
}
});
;})(inst_37880,inst_37881,inst_37882,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37884 = cljs.core.filter.call(null,inst_37883,files);
var inst_37885 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37886 = cljs.core.concat.call(null,inst_37884,inst_37885);
var state_37983__$1 = (function (){var statearr_37998 = state_37983;
(statearr_37998[(12)] = inst_37886);

(statearr_37998[(17)] = inst_37882);

(statearr_37998[(18)] = inst_37880);

return statearr_37998;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37999_38080 = state_37983__$1;
(statearr_37999_38080[(1)] = (16));

} else {
var statearr_38000_38081 = state_37983__$1;
(statearr_38000_38081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (15))){
var inst_37870 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38001_38082 = state_37983__$1;
(statearr_38001_38082[(2)] = inst_37870);

(statearr_38001_38082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (21))){
var inst_37896 = (state_37983[(19)]);
var inst_37896__$1 = (state_37983[(2)]);
var inst_37897 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37896__$1);
var state_37983__$1 = (function (){var statearr_38002 = state_37983;
(statearr_38002[(19)] = inst_37896__$1);

return statearr_38002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37983__$1,(22),inst_37897);
} else {
if((state_val_37984 === (31))){
var inst_37981 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37983__$1,inst_37981);
} else {
if((state_val_37984 === (32))){
var inst_37936 = (state_37983[(16)]);
var inst_37941 = inst_37936.cljs$lang$protocol_mask$partition0$;
var inst_37942 = (inst_37941 & (64));
var inst_37943 = inst_37936.cljs$core$ISeq$;
var inst_37944 = (cljs.core.PROTOCOL_SENTINEL === inst_37943);
var inst_37945 = (inst_37942) || (inst_37944);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37945)){
var statearr_38003_38083 = state_37983__$1;
(statearr_38003_38083[(1)] = (35));

} else {
var statearr_38004_38084 = state_37983__$1;
(statearr_38004_38084[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (40))){
var inst_37958 = (state_37983[(20)]);
var inst_37957 = (state_37983[(2)]);
var inst_37958__$1 = cljs.core.get.call(null,inst_37957,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37959 = cljs.core.get.call(null,inst_37957,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37960 = cljs.core.not_empty.call(null,inst_37958__$1);
var state_37983__$1 = (function (){var statearr_38005 = state_37983;
(statearr_38005[(20)] = inst_37958__$1);

(statearr_38005[(21)] = inst_37959);

return statearr_38005;
})();
if(cljs.core.truth_(inst_37960)){
var statearr_38006_38085 = state_37983__$1;
(statearr_38006_38085[(1)] = (41));

} else {
var statearr_38007_38086 = state_37983__$1;
(statearr_38007_38086[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (33))){
var state_37983__$1 = state_37983;
var statearr_38008_38087 = state_37983__$1;
(statearr_38008_38087[(2)] = false);

(statearr_38008_38087[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (13))){
var inst_37856 = (state_37983[(22)]);
var inst_37860 = cljs.core.chunk_first.call(null,inst_37856);
var inst_37861 = cljs.core.chunk_rest.call(null,inst_37856);
var inst_37862 = cljs.core.count.call(null,inst_37860);
var inst_37843 = inst_37861;
var inst_37844 = inst_37860;
var inst_37845 = inst_37862;
var inst_37846 = (0);
var state_37983__$1 = (function (){var statearr_38009 = state_37983;
(statearr_38009[(7)] = inst_37844);

(statearr_38009[(8)] = inst_37846);

(statearr_38009[(9)] = inst_37845);

(statearr_38009[(10)] = inst_37843);

return statearr_38009;
})();
var statearr_38010_38088 = state_37983__$1;
(statearr_38010_38088[(2)] = null);

(statearr_38010_38088[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (22))){
var inst_37900 = (state_37983[(23)]);
var inst_37899 = (state_37983[(24)]);
var inst_37896 = (state_37983[(19)]);
var inst_37904 = (state_37983[(25)]);
var inst_37899__$1 = (state_37983[(2)]);
var inst_37900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37899__$1);
var inst_37901 = (function (){var all_files = inst_37896;
var res_SINGLEQUOTE_ = inst_37899__$1;
var res = inst_37900__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37900,inst_37899,inst_37896,inst_37904,inst_37899__$1,inst_37900__$1,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37825_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37825_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37900,inst_37899,inst_37896,inst_37904,inst_37899__$1,inst_37900__$1,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37902 = cljs.core.filter.call(null,inst_37901,inst_37899__$1);
var inst_37903 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37904__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37903);
var inst_37905 = cljs.core.not_empty.call(null,inst_37904__$1);
var state_37983__$1 = (function (){var statearr_38011 = state_37983;
(statearr_38011[(23)] = inst_37900__$1);

(statearr_38011[(26)] = inst_37902);

(statearr_38011[(24)] = inst_37899__$1);

(statearr_38011[(25)] = inst_37904__$1);

return statearr_38011;
})();
if(cljs.core.truth_(inst_37905)){
var statearr_38012_38089 = state_37983__$1;
(statearr_38012_38089[(1)] = (23));

} else {
var statearr_38013_38090 = state_37983__$1;
(statearr_38013_38090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (36))){
var state_37983__$1 = state_37983;
var statearr_38014_38091 = state_37983__$1;
(statearr_38014_38091[(2)] = false);

(statearr_38014_38091[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (41))){
var inst_37958 = (state_37983[(20)]);
var inst_37962 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37963 = cljs.core.map.call(null,inst_37962,inst_37958);
var inst_37964 = cljs.core.pr_str.call(null,inst_37963);
var inst_37965 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37964)].join('');
var inst_37966 = figwheel.client.utils.log.call(null,inst_37965);
var state_37983__$1 = state_37983;
var statearr_38015_38092 = state_37983__$1;
(statearr_38015_38092[(2)] = inst_37966);

(statearr_38015_38092[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (43))){
var inst_37959 = (state_37983[(21)]);
var inst_37969 = (state_37983[(2)]);
var inst_37970 = cljs.core.not_empty.call(null,inst_37959);
var state_37983__$1 = (function (){var statearr_38016 = state_37983;
(statearr_38016[(27)] = inst_37969);

return statearr_38016;
})();
if(cljs.core.truth_(inst_37970)){
var statearr_38017_38093 = state_37983__$1;
(statearr_38017_38093[(1)] = (44));

} else {
var statearr_38018_38094 = state_37983__$1;
(statearr_38018_38094[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (29))){
var inst_37936 = (state_37983[(16)]);
var inst_37900 = (state_37983[(23)]);
var inst_37902 = (state_37983[(26)]);
var inst_37899 = (state_37983[(24)]);
var inst_37896 = (state_37983[(19)]);
var inst_37904 = (state_37983[(25)]);
var inst_37932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37935 = (function (){var all_files = inst_37896;
var res_SINGLEQUOTE_ = inst_37899;
var res = inst_37900;
var files_not_loaded = inst_37902;
var dependencies_that_loaded = inst_37904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37936,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37932,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37934){
var map__38019 = p__37934;
var map__38019__$1 = ((((!((map__38019 == null)))?((((map__38019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38019):map__38019);
var namespace = cljs.core.get.call(null,map__38019__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37936,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37932,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37936__$1 = cljs.core.group_by.call(null,inst_37935,inst_37902);
var inst_37938 = (inst_37936__$1 == null);
var inst_37939 = cljs.core.not.call(null,inst_37938);
var state_37983__$1 = (function (){var statearr_38021 = state_37983;
(statearr_38021[(16)] = inst_37936__$1);

(statearr_38021[(28)] = inst_37932);

return statearr_38021;
})();
if(inst_37939){
var statearr_38022_38095 = state_37983__$1;
(statearr_38022_38095[(1)] = (32));

} else {
var statearr_38023_38096 = state_37983__$1;
(statearr_38023_38096[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (44))){
var inst_37959 = (state_37983[(21)]);
var inst_37972 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37959);
var inst_37973 = cljs.core.pr_str.call(null,inst_37972);
var inst_37974 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37973)].join('');
var inst_37975 = figwheel.client.utils.log.call(null,inst_37974);
var state_37983__$1 = state_37983;
var statearr_38024_38097 = state_37983__$1;
(statearr_38024_38097[(2)] = inst_37975);

(statearr_38024_38097[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (6))){
var inst_37877 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38025_38098 = state_37983__$1;
(statearr_38025_38098[(2)] = inst_37877);

(statearr_38025_38098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (28))){
var inst_37902 = (state_37983[(26)]);
var inst_37929 = (state_37983[(2)]);
var inst_37930 = cljs.core.not_empty.call(null,inst_37902);
var state_37983__$1 = (function (){var statearr_38026 = state_37983;
(statearr_38026[(29)] = inst_37929);

return statearr_38026;
})();
if(cljs.core.truth_(inst_37930)){
var statearr_38027_38099 = state_37983__$1;
(statearr_38027_38099[(1)] = (29));

} else {
var statearr_38028_38100 = state_37983__$1;
(statearr_38028_38100[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (25))){
var inst_37900 = (state_37983[(23)]);
var inst_37916 = (state_37983[(2)]);
var inst_37917 = cljs.core.not_empty.call(null,inst_37900);
var state_37983__$1 = (function (){var statearr_38029 = state_37983;
(statearr_38029[(30)] = inst_37916);

return statearr_38029;
})();
if(cljs.core.truth_(inst_37917)){
var statearr_38030_38101 = state_37983__$1;
(statearr_38030_38101[(1)] = (26));

} else {
var statearr_38031_38102 = state_37983__$1;
(statearr_38031_38102[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (34))){
var inst_37952 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37952)){
var statearr_38032_38103 = state_37983__$1;
(statearr_38032_38103[(1)] = (38));

} else {
var statearr_38033_38104 = state_37983__$1;
(statearr_38033_38104[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (17))){
var state_37983__$1 = state_37983;
var statearr_38034_38105 = state_37983__$1;
(statearr_38034_38105[(2)] = recompile_dependents);

(statearr_38034_38105[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (3))){
var state_37983__$1 = state_37983;
var statearr_38035_38106 = state_37983__$1;
(statearr_38035_38106[(2)] = null);

(statearr_38035_38106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (12))){
var inst_37873 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38036_38107 = state_37983__$1;
(statearr_38036_38107[(2)] = inst_37873);

(statearr_38036_38107[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (2))){
var inst_37835 = (state_37983[(13)]);
var inst_37842 = cljs.core.seq.call(null,inst_37835);
var inst_37843 = inst_37842;
var inst_37844 = null;
var inst_37845 = (0);
var inst_37846 = (0);
var state_37983__$1 = (function (){var statearr_38037 = state_37983;
(statearr_38037[(7)] = inst_37844);

(statearr_38037[(8)] = inst_37846);

(statearr_38037[(9)] = inst_37845);

(statearr_38037[(10)] = inst_37843);

return statearr_38037;
})();
var statearr_38038_38108 = state_37983__$1;
(statearr_38038_38108[(2)] = null);

(statearr_38038_38108[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (23))){
var inst_37900 = (state_37983[(23)]);
var inst_37902 = (state_37983[(26)]);
var inst_37899 = (state_37983[(24)]);
var inst_37896 = (state_37983[(19)]);
var inst_37904 = (state_37983[(25)]);
var inst_37907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37909 = (function (){var all_files = inst_37896;
var res_SINGLEQUOTE_ = inst_37899;
var res = inst_37900;
var files_not_loaded = inst_37902;
var dependencies_that_loaded = inst_37904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37907,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37908){
var map__38039 = p__37908;
var map__38039__$1 = ((((!((map__38039 == null)))?((((map__38039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38039):map__38039);
var request_url = cljs.core.get.call(null,map__38039__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37907,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37910 = cljs.core.reverse.call(null,inst_37904);
var inst_37911 = cljs.core.map.call(null,inst_37909,inst_37910);
var inst_37912 = cljs.core.pr_str.call(null,inst_37911);
var inst_37913 = figwheel.client.utils.log.call(null,inst_37912);
var state_37983__$1 = (function (){var statearr_38041 = state_37983;
(statearr_38041[(31)] = inst_37907);

return statearr_38041;
})();
var statearr_38042_38109 = state_37983__$1;
(statearr_38042_38109[(2)] = inst_37913);

(statearr_38042_38109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (35))){
var state_37983__$1 = state_37983;
var statearr_38043_38110 = state_37983__$1;
(statearr_38043_38110[(2)] = true);

(statearr_38043_38110[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (19))){
var inst_37886 = (state_37983[(12)]);
var inst_37892 = figwheel.client.file_reloading.expand_files.call(null,inst_37886);
var state_37983__$1 = state_37983;
var statearr_38044_38111 = state_37983__$1;
(statearr_38044_38111[(2)] = inst_37892);

(statearr_38044_38111[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (11))){
var state_37983__$1 = state_37983;
var statearr_38045_38112 = state_37983__$1;
(statearr_38045_38112[(2)] = null);

(statearr_38045_38112[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (9))){
var inst_37875 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38046_38113 = state_37983__$1;
(statearr_38046_38113[(2)] = inst_37875);

(statearr_38046_38113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (5))){
var inst_37846 = (state_37983[(8)]);
var inst_37845 = (state_37983[(9)]);
var inst_37848 = (inst_37846 < inst_37845);
var inst_37849 = inst_37848;
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37849)){
var statearr_38047_38114 = state_37983__$1;
(statearr_38047_38114[(1)] = (7));

} else {
var statearr_38048_38115 = state_37983__$1;
(statearr_38048_38115[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (14))){
var inst_37856 = (state_37983[(22)]);
var inst_37865 = cljs.core.first.call(null,inst_37856);
var inst_37866 = figwheel.client.file_reloading.eval_body.call(null,inst_37865,opts);
var inst_37867 = cljs.core.next.call(null,inst_37856);
var inst_37843 = inst_37867;
var inst_37844 = null;
var inst_37845 = (0);
var inst_37846 = (0);
var state_37983__$1 = (function (){var statearr_38049 = state_37983;
(statearr_38049[(7)] = inst_37844);

(statearr_38049[(8)] = inst_37846);

(statearr_38049[(9)] = inst_37845);

(statearr_38049[(32)] = inst_37866);

(statearr_38049[(10)] = inst_37843);

return statearr_38049;
})();
var statearr_38050_38116 = state_37983__$1;
(statearr_38050_38116[(2)] = null);

(statearr_38050_38116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (45))){
var state_37983__$1 = state_37983;
var statearr_38051_38117 = state_37983__$1;
(statearr_38051_38117[(2)] = null);

(statearr_38051_38117[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (26))){
var inst_37900 = (state_37983[(23)]);
var inst_37902 = (state_37983[(26)]);
var inst_37899 = (state_37983[(24)]);
var inst_37896 = (state_37983[(19)]);
var inst_37904 = (state_37983[(25)]);
var inst_37919 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37921 = (function (){var all_files = inst_37896;
var res_SINGLEQUOTE_ = inst_37899;
var res = inst_37900;
var files_not_loaded = inst_37902;
var dependencies_that_loaded = inst_37904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37919,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37920){
var map__38052 = p__37920;
var map__38052__$1 = ((((!((map__38052 == null)))?((((map__38052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38052):map__38052);
var namespace = cljs.core.get.call(null,map__38052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37919,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37922 = cljs.core.map.call(null,inst_37921,inst_37900);
var inst_37923 = cljs.core.pr_str.call(null,inst_37922);
var inst_37924 = figwheel.client.utils.log.call(null,inst_37923);
var inst_37925 = (function (){var all_files = inst_37896;
var res_SINGLEQUOTE_ = inst_37899;
var res = inst_37900;
var files_not_loaded = inst_37902;
var dependencies_that_loaded = inst_37904;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37919,inst_37921,inst_37922,inst_37923,inst_37924,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37900,inst_37902,inst_37899,inst_37896,inst_37904,inst_37919,inst_37921,inst_37922,inst_37923,inst_37924,state_val_37984,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37926 = setTimeout(inst_37925,(10));
var state_37983__$1 = (function (){var statearr_38054 = state_37983;
(statearr_38054[(33)] = inst_37919);

(statearr_38054[(34)] = inst_37924);

return statearr_38054;
})();
var statearr_38055_38118 = state_37983__$1;
(statearr_38055_38118[(2)] = inst_37926);

(statearr_38055_38118[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (16))){
var state_37983__$1 = state_37983;
var statearr_38056_38119 = state_37983__$1;
(statearr_38056_38119[(2)] = reload_dependents);

(statearr_38056_38119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (38))){
var inst_37936 = (state_37983[(16)]);
var inst_37954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37936);
var state_37983__$1 = state_37983;
var statearr_38057_38120 = state_37983__$1;
(statearr_38057_38120[(2)] = inst_37954);

(statearr_38057_38120[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (30))){
var state_37983__$1 = state_37983;
var statearr_38058_38121 = state_37983__$1;
(statearr_38058_38121[(2)] = null);

(statearr_38058_38121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (10))){
var inst_37856 = (state_37983[(22)]);
var inst_37858 = cljs.core.chunked_seq_QMARK_.call(null,inst_37856);
var state_37983__$1 = state_37983;
if(inst_37858){
var statearr_38059_38122 = state_37983__$1;
(statearr_38059_38122[(1)] = (13));

} else {
var statearr_38060_38123 = state_37983__$1;
(statearr_38060_38123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (18))){
var inst_37890 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37890)){
var statearr_38061_38124 = state_37983__$1;
(statearr_38061_38124[(1)] = (19));

} else {
var statearr_38062_38125 = state_37983__$1;
(statearr_38062_38125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (42))){
var state_37983__$1 = state_37983;
var statearr_38063_38126 = state_37983__$1;
(statearr_38063_38126[(2)] = null);

(statearr_38063_38126[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (37))){
var inst_37949 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38064_38127 = state_37983__$1;
(statearr_38064_38127[(2)] = inst_37949);

(statearr_38064_38127[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (8))){
var inst_37856 = (state_37983[(22)]);
var inst_37843 = (state_37983[(10)]);
var inst_37856__$1 = cljs.core.seq.call(null,inst_37843);
var state_37983__$1 = (function (){var statearr_38065 = state_37983;
(statearr_38065[(22)] = inst_37856__$1);

return statearr_38065;
})();
if(inst_37856__$1){
var statearr_38066_38128 = state_37983__$1;
(statearr_38066_38128[(1)] = (10));

} else {
var statearr_38067_38129 = state_37983__$1;
(statearr_38067_38129[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31482__auto__,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto____0 = (function (){
var statearr_38068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38068[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto__);

(statearr_38068[(1)] = (1));

return statearr_38068;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto____1 = (function (state_37983){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_37983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e38069){if((e38069 instanceof Object)){
var ex__31486__auto__ = e38069;
var statearr_38070_38130 = state_37983;
(statearr_38070_38130[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38131 = state_37983;
state_37983 = G__38131;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto__ = function(state_37983){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto____1.call(this,state_37983);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33915__auto__ = (function (){var statearr_38071 = f__33914__auto__.call(null);
(statearr_38071[(6)] = c__33913__auto__);

return statearr_38071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto__,map__37828,map__37828__$1,opts,before_jsload,on_jsload,reload_dependents,map__37829,map__37829__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33913__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38134,link){
var map__38135 = p__38134;
var map__38135__$1 = ((((!((map__38135 == null)))?((((map__38135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38135):map__38135);
var file = cljs.core.get.call(null,map__38135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38135,map__38135__$1,file){
return (function (p1__38132_SHARP_,p2__38133_SHARP_){
if(cljs.core._EQ_.call(null,p1__38132_SHARP_,p2__38133_SHARP_)){
return p1__38132_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38135,map__38135__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38138){
var map__38139 = p__38138;
var map__38139__$1 = ((((!((map__38139 == null)))?((((map__38139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38139):map__38139);
var match_length = cljs.core.get.call(null,map__38139__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38139__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38137_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38137_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38141_SHARP_,p2__38142_SHARP_){
return cljs.core.assoc.call(null,p1__38141_SHARP_,cljs.core.get.call(null,p2__38142_SHARP_,key),p2__38142_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38143 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38143);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38143);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38144,p__38145){
var map__38146 = p__38144;
var map__38146__$1 = ((((!((map__38146 == null)))?((((map__38146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38146):map__38146);
var on_cssload = cljs.core.get.call(null,map__38146__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38147 = p__38145;
var map__38147__$1 = ((((!((map__38147 == null)))?((((map__38147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38147):map__38147);
var files_msg = map__38147__$1;
var files = cljs.core.get.call(null,map__38147__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521239473160
