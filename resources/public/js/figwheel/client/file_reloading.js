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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38772_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38772_SHARP_));
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
var seq__38773 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38774 = null;
var count__38775 = (0);
var i__38776 = (0);
while(true){
if((i__38776 < count__38775)){
var n = cljs.core._nth.call(null,chunk__38774,i__38776);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38777 = seq__38773;
var G__38778 = chunk__38774;
var G__38779 = count__38775;
var G__38780 = (i__38776 + (1));
seq__38773 = G__38777;
chunk__38774 = G__38778;
count__38775 = G__38779;
i__38776 = G__38780;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38773);
if(temp__4657__auto__){
var seq__38773__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38773__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__38773__$1);
var G__38781 = cljs.core.chunk_rest.call(null,seq__38773__$1);
var G__38782 = c__29297__auto__;
var G__38783 = cljs.core.count.call(null,c__29297__auto__);
var G__38784 = (0);
seq__38773 = G__38781;
chunk__38774 = G__38782;
count__38775 = G__38783;
i__38776 = G__38784;
continue;
} else {
var n = cljs.core.first.call(null,seq__38773__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__38785 = cljs.core.next.call(null,seq__38773__$1);
var G__38786 = null;
var G__38787 = (0);
var G__38788 = (0);
seq__38773 = G__38785;
chunk__38774 = G__38786;
count__38775 = G__38787;
i__38776 = G__38788;
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
return cljs.core.some.call(null,(function (p__38789){
var vec__38790 = p__38789;
var _ = cljs.core.nth.call(null,vec__38790,(0),null);
var v = cljs.core.nth.call(null,vec__38790,(1),null);
var and__28446__auto__ = v;
if(cljs.core.truth_(and__28446__auto__)){
return v.call(null,dep);
} else {
return and__28446__auto__;
}
}),cljs.core.filter.call(null,(function (p__38793){
var vec__38794 = p__38793;
var k = cljs.core.nth.call(null,vec__38794,(0),null);
var v = cljs.core.nth.call(null,vec__38794,(1),null);
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

var seq__38806_38814 = cljs.core.seq.call(null,deps);
var chunk__38807_38815 = null;
var count__38808_38816 = (0);
var i__38809_38817 = (0);
while(true){
if((i__38809_38817 < count__38808_38816)){
var dep_38818 = cljs.core._nth.call(null,chunk__38807_38815,i__38809_38817);
if(cljs.core.truth_((function (){var and__28446__auto__ = dep_38818;
if(cljs.core.truth_(and__28446__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38818));
} else {
return and__28446__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38818,(depth + (1)),state);
} else {
}

var G__38819 = seq__38806_38814;
var G__38820 = chunk__38807_38815;
var G__38821 = count__38808_38816;
var G__38822 = (i__38809_38817 + (1));
seq__38806_38814 = G__38819;
chunk__38807_38815 = G__38820;
count__38808_38816 = G__38821;
i__38809_38817 = G__38822;
continue;
} else {
var temp__4657__auto___38823 = cljs.core.seq.call(null,seq__38806_38814);
if(temp__4657__auto___38823){
var seq__38806_38824__$1 = temp__4657__auto___38823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38806_38824__$1)){
var c__29297__auto___38825 = cljs.core.chunk_first.call(null,seq__38806_38824__$1);
var G__38826 = cljs.core.chunk_rest.call(null,seq__38806_38824__$1);
var G__38827 = c__29297__auto___38825;
var G__38828 = cljs.core.count.call(null,c__29297__auto___38825);
var G__38829 = (0);
seq__38806_38814 = G__38826;
chunk__38807_38815 = G__38827;
count__38808_38816 = G__38828;
i__38809_38817 = G__38829;
continue;
} else {
var dep_38830 = cljs.core.first.call(null,seq__38806_38824__$1);
if(cljs.core.truth_((function (){var and__28446__auto__ = dep_38830;
if(cljs.core.truth_(and__28446__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38830));
} else {
return and__28446__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38830,(depth + (1)),state);
} else {
}

var G__38831 = cljs.core.next.call(null,seq__38806_38824__$1);
var G__38832 = null;
var G__38833 = (0);
var G__38834 = (0);
seq__38806_38814 = G__38831;
chunk__38807_38815 = G__38832;
count__38808_38816 = G__38833;
i__38809_38817 = G__38834;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38810){
var vec__38811 = p__38810;
var seq__38812 = cljs.core.seq.call(null,vec__38811);
var first__38813 = cljs.core.first.call(null,seq__38812);
var seq__38812__$1 = cljs.core.next.call(null,seq__38812);
var x = first__38813;
var xs = seq__38812__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38811,seq__38812,first__38813,seq__38812__$1,x,xs,get_deps__$1){
return (function (p1__38797_SHARP_){
return clojure.set.difference.call(null,p1__38797_SHARP_,x);
});})(vec__38811,seq__38812,first__38813,seq__38812__$1,x,xs,get_deps__$1))
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
var seq__38835 = cljs.core.seq.call(null,provides);
var chunk__38836 = null;
var count__38837 = (0);
var i__38838 = (0);
while(true){
if((i__38838 < count__38837)){
var prov = cljs.core._nth.call(null,chunk__38836,i__38838);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38839_38847 = cljs.core.seq.call(null,requires);
var chunk__38840_38848 = null;
var count__38841_38849 = (0);
var i__38842_38850 = (0);
while(true){
if((i__38842_38850 < count__38841_38849)){
var req_38851 = cljs.core._nth.call(null,chunk__38840_38848,i__38842_38850);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38851,prov);

var G__38852 = seq__38839_38847;
var G__38853 = chunk__38840_38848;
var G__38854 = count__38841_38849;
var G__38855 = (i__38842_38850 + (1));
seq__38839_38847 = G__38852;
chunk__38840_38848 = G__38853;
count__38841_38849 = G__38854;
i__38842_38850 = G__38855;
continue;
} else {
var temp__4657__auto___38856 = cljs.core.seq.call(null,seq__38839_38847);
if(temp__4657__auto___38856){
var seq__38839_38857__$1 = temp__4657__auto___38856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38839_38857__$1)){
var c__29297__auto___38858 = cljs.core.chunk_first.call(null,seq__38839_38857__$1);
var G__38859 = cljs.core.chunk_rest.call(null,seq__38839_38857__$1);
var G__38860 = c__29297__auto___38858;
var G__38861 = cljs.core.count.call(null,c__29297__auto___38858);
var G__38862 = (0);
seq__38839_38847 = G__38859;
chunk__38840_38848 = G__38860;
count__38841_38849 = G__38861;
i__38842_38850 = G__38862;
continue;
} else {
var req_38863 = cljs.core.first.call(null,seq__38839_38857__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38863,prov);

var G__38864 = cljs.core.next.call(null,seq__38839_38857__$1);
var G__38865 = null;
var G__38866 = (0);
var G__38867 = (0);
seq__38839_38847 = G__38864;
chunk__38840_38848 = G__38865;
count__38841_38849 = G__38866;
i__38842_38850 = G__38867;
continue;
}
} else {
}
}
break;
}

var G__38868 = seq__38835;
var G__38869 = chunk__38836;
var G__38870 = count__38837;
var G__38871 = (i__38838 + (1));
seq__38835 = G__38868;
chunk__38836 = G__38869;
count__38837 = G__38870;
i__38838 = G__38871;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38835);
if(temp__4657__auto__){
var seq__38835__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38835__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__38835__$1);
var G__38872 = cljs.core.chunk_rest.call(null,seq__38835__$1);
var G__38873 = c__29297__auto__;
var G__38874 = cljs.core.count.call(null,c__29297__auto__);
var G__38875 = (0);
seq__38835 = G__38872;
chunk__38836 = G__38873;
count__38837 = G__38874;
i__38838 = G__38875;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38835__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38843_38876 = cljs.core.seq.call(null,requires);
var chunk__38844_38877 = null;
var count__38845_38878 = (0);
var i__38846_38879 = (0);
while(true){
if((i__38846_38879 < count__38845_38878)){
var req_38880 = cljs.core._nth.call(null,chunk__38844_38877,i__38846_38879);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38880,prov);

var G__38881 = seq__38843_38876;
var G__38882 = chunk__38844_38877;
var G__38883 = count__38845_38878;
var G__38884 = (i__38846_38879 + (1));
seq__38843_38876 = G__38881;
chunk__38844_38877 = G__38882;
count__38845_38878 = G__38883;
i__38846_38879 = G__38884;
continue;
} else {
var temp__4657__auto___38885__$1 = cljs.core.seq.call(null,seq__38843_38876);
if(temp__4657__auto___38885__$1){
var seq__38843_38886__$1 = temp__4657__auto___38885__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38843_38886__$1)){
var c__29297__auto___38887 = cljs.core.chunk_first.call(null,seq__38843_38886__$1);
var G__38888 = cljs.core.chunk_rest.call(null,seq__38843_38886__$1);
var G__38889 = c__29297__auto___38887;
var G__38890 = cljs.core.count.call(null,c__29297__auto___38887);
var G__38891 = (0);
seq__38843_38876 = G__38888;
chunk__38844_38877 = G__38889;
count__38845_38878 = G__38890;
i__38846_38879 = G__38891;
continue;
} else {
var req_38892 = cljs.core.first.call(null,seq__38843_38886__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38892,prov);

var G__38893 = cljs.core.next.call(null,seq__38843_38886__$1);
var G__38894 = null;
var G__38895 = (0);
var G__38896 = (0);
seq__38843_38876 = G__38893;
chunk__38844_38877 = G__38894;
count__38845_38878 = G__38895;
i__38846_38879 = G__38896;
continue;
}
} else {
}
}
break;
}

var G__38897 = cljs.core.next.call(null,seq__38835__$1);
var G__38898 = null;
var G__38899 = (0);
var G__38900 = (0);
seq__38835 = G__38897;
chunk__38836 = G__38898;
count__38837 = G__38899;
i__38838 = G__38900;
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
var seq__38901_38905 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38902_38906 = null;
var count__38903_38907 = (0);
var i__38904_38908 = (0);
while(true){
if((i__38904_38908 < count__38903_38907)){
var ns_38909 = cljs.core._nth.call(null,chunk__38902_38906,i__38904_38908);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38909);

var G__38910 = seq__38901_38905;
var G__38911 = chunk__38902_38906;
var G__38912 = count__38903_38907;
var G__38913 = (i__38904_38908 + (1));
seq__38901_38905 = G__38910;
chunk__38902_38906 = G__38911;
count__38903_38907 = G__38912;
i__38904_38908 = G__38913;
continue;
} else {
var temp__4657__auto___38914 = cljs.core.seq.call(null,seq__38901_38905);
if(temp__4657__auto___38914){
var seq__38901_38915__$1 = temp__4657__auto___38914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38901_38915__$1)){
var c__29297__auto___38916 = cljs.core.chunk_first.call(null,seq__38901_38915__$1);
var G__38917 = cljs.core.chunk_rest.call(null,seq__38901_38915__$1);
var G__38918 = c__29297__auto___38916;
var G__38919 = cljs.core.count.call(null,c__29297__auto___38916);
var G__38920 = (0);
seq__38901_38905 = G__38917;
chunk__38902_38906 = G__38918;
count__38903_38907 = G__38919;
i__38904_38908 = G__38920;
continue;
} else {
var ns_38921 = cljs.core.first.call(null,seq__38901_38915__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38921);

var G__38922 = cljs.core.next.call(null,seq__38901_38915__$1);
var G__38923 = null;
var G__38924 = (0);
var G__38925 = (0);
seq__38901_38905 = G__38922;
chunk__38902_38906 = G__38923;
count__38903_38907 = G__38924;
i__38904_38908 = G__38925;
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
var G__38926__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__38926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38927__i = 0, G__38927__a = new Array(arguments.length -  0);
while (G__38927__i < G__38927__a.length) {G__38927__a[G__38927__i] = arguments[G__38927__i + 0]; ++G__38927__i;}
  args = new cljs.core.IndexedSeq(G__38927__a,0,null);
} 
return G__38926__delegate.call(this,args);};
G__38926.cljs$lang$maxFixedArity = 0;
G__38926.cljs$lang$applyTo = (function (arglist__38928){
var args = cljs.core.seq(arglist__38928);
return G__38926__delegate(args);
});
G__38926.cljs$core$IFn$_invoke$arity$variadic = G__38926__delegate;
return G__38926;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__38929_SHARP_,p2__38930_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38929_SHARP_)].join('')),p2__38930_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__38931_SHARP_,p2__38932_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38931_SHARP_)].join(''),p2__38932_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__38933 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__38933.addCallback(((function (G__38933){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__38933))
);

G__38933.addErrback(((function (G__38933){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__38933))
);

return G__38933;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e38934){if((e38934 instanceof Error)){
var e = e38934;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38934;

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
}catch (e38935){if((e38935 instanceof Error)){
var e = e38935;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e38935;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__38936 = cljs.core._EQ_;
var expr__38937 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__38936.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__38937))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__38936.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__38937))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__38936.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__38937))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__38936,expr__38937){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__38936,expr__38937))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__38939,callback){
var map__38940 = p__38939;
var map__38940__$1 = ((((!((map__38940 == null)))?((((map__38940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38940):map__38940);
var file_msg = map__38940__$1;
var request_url = cljs.core.get.call(null,map__38940__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28458__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__38940,map__38940__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__38940,map__38940__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__){
return (function (state_38980){
var state_val_38981 = (state_38980[(1)]);
if((state_val_38981 === (7))){
var inst_38976 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
var statearr_38982_39009 = state_38980__$1;
(statearr_38982_39009[(2)] = inst_38976);

(statearr_38982_39009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (1))){
var state_38980__$1 = state_38980;
var statearr_38983_39010 = state_38980__$1;
(statearr_38983_39010[(2)] = null);

(statearr_38983_39010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (4))){
var inst_38944 = (state_38980[(7)]);
var inst_38944__$1 = (state_38980[(2)]);
var state_38980__$1 = (function (){var statearr_38984 = state_38980;
(statearr_38984[(7)] = inst_38944__$1);

return statearr_38984;
})();
if(cljs.core.truth_(inst_38944__$1)){
var statearr_38985_39011 = state_38980__$1;
(statearr_38985_39011[(1)] = (5));

} else {
var statearr_38986_39012 = state_38980__$1;
(statearr_38986_39012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (15))){
var inst_38961 = (state_38980[(8)]);
var inst_38958 = (state_38980[(9)]);
var inst_38963 = inst_38961.call(null,inst_38958);
var state_38980__$1 = state_38980;
var statearr_38987_39013 = state_38980__$1;
(statearr_38987_39013[(2)] = inst_38963);

(statearr_38987_39013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (13))){
var inst_38970 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
var statearr_38988_39014 = state_38980__$1;
(statearr_38988_39014[(2)] = inst_38970);

(statearr_38988_39014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (6))){
var state_38980__$1 = state_38980;
var statearr_38989_39015 = state_38980__$1;
(statearr_38989_39015[(2)] = null);

(statearr_38989_39015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (17))){
var inst_38967 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
var statearr_38990_39016 = state_38980__$1;
(statearr_38990_39016[(2)] = inst_38967);

(statearr_38990_39016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (3))){
var inst_38978 = (state_38980[(2)]);
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38980__$1,inst_38978);
} else {
if((state_val_38981 === (12))){
var state_38980__$1 = state_38980;
var statearr_38991_39017 = state_38980__$1;
(statearr_38991_39017[(2)] = null);

(statearr_38991_39017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (2))){
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38980__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_38981 === (11))){
var inst_38949 = (state_38980[(10)]);
var inst_38956 = figwheel.client.file_reloading.blocking_load.call(null,inst_38949);
var state_38980__$1 = state_38980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38980__$1,(14),inst_38956);
} else {
if((state_val_38981 === (9))){
var inst_38949 = (state_38980[(10)]);
var state_38980__$1 = state_38980;
if(cljs.core.truth_(inst_38949)){
var statearr_38992_39018 = state_38980__$1;
(statearr_38992_39018[(1)] = (11));

} else {
var statearr_38993_39019 = state_38980__$1;
(statearr_38993_39019[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (5))){
var inst_38950 = (state_38980[(11)]);
var inst_38944 = (state_38980[(7)]);
var inst_38949 = cljs.core.nth.call(null,inst_38944,(0),null);
var inst_38950__$1 = cljs.core.nth.call(null,inst_38944,(1),null);
var state_38980__$1 = (function (){var statearr_38994 = state_38980;
(statearr_38994[(11)] = inst_38950__$1);

(statearr_38994[(10)] = inst_38949);

return statearr_38994;
})();
if(cljs.core.truth_(inst_38950__$1)){
var statearr_38995_39020 = state_38980__$1;
(statearr_38995_39020[(1)] = (8));

} else {
var statearr_38996_39021 = state_38980__$1;
(statearr_38996_39021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (14))){
var inst_38949 = (state_38980[(10)]);
var inst_38961 = (state_38980[(8)]);
var inst_38958 = (state_38980[(2)]);
var inst_38959 = console.log("Loading!",inst_38949);
var inst_38960 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_38961__$1 = cljs.core.get.call(null,inst_38960,inst_38949);
var state_38980__$1 = (function (){var statearr_38997 = state_38980;
(statearr_38997[(8)] = inst_38961__$1);

(statearr_38997[(9)] = inst_38958);

(statearr_38997[(12)] = inst_38959);

return statearr_38997;
})();
if(cljs.core.truth_(inst_38961__$1)){
var statearr_38998_39022 = state_38980__$1;
(statearr_38998_39022[(1)] = (15));

} else {
var statearr_38999_39023 = state_38980__$1;
(statearr_38999_39023[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (16))){
var inst_38958 = (state_38980[(9)]);
var inst_38965 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_38958);
var state_38980__$1 = state_38980;
var statearr_39000_39024 = state_38980__$1;
(statearr_39000_39024[(2)] = inst_38965);

(statearr_39000_39024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (10))){
var inst_38972 = (state_38980[(2)]);
var state_38980__$1 = (function (){var statearr_39001 = state_38980;
(statearr_39001[(13)] = inst_38972);

return statearr_39001;
})();
var statearr_39002_39025 = state_38980__$1;
(statearr_39002_39025[(2)] = null);

(statearr_39002_39025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38981 === (8))){
var inst_38950 = (state_38980[(11)]);
var inst_38952 = console.log("Evaling!",inst_38950);
var inst_38953 = eval(inst_38950);
var state_38980__$1 = (function (){var statearr_39003 = state_38980;
(statearr_39003[(14)] = inst_38952);

return statearr_39003;
})();
var statearr_39004_39026 = state_38980__$1;
(statearr_39004_39026[(2)] = inst_38953);

(statearr_39004_39026[(1)] = (10));


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
});})(c__35451__auto__))
;
return ((function (switch__35363__auto__,c__35451__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35364__auto__ = null;
var figwheel$client$file_reloading$state_machine__35364__auto____0 = (function (){
var statearr_39005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39005[(0)] = figwheel$client$file_reloading$state_machine__35364__auto__);

(statearr_39005[(1)] = (1));

return statearr_39005;
});
var figwheel$client$file_reloading$state_machine__35364__auto____1 = (function (state_38980){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_38980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e39006){if((e39006 instanceof Object)){
var ex__35367__auto__ = e39006;
var statearr_39007_39027 = state_38980;
(statearr_39007_39027[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39028 = state_38980;
state_38980 = G__39028;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35364__auto__ = function(state_38980){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35364__auto____1.call(this,state_38980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35364__auto____0;
figwheel$client$file_reloading$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35364__auto____1;
return figwheel$client$file_reloading$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__))
})();
var state__35453__auto__ = (function (){var statearr_39008 = f__35452__auto__.call(null);
(statearr_39008[(6)] = c__35451__auto__);

return statearr_39008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__))
);

return c__35451__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__39030 = arguments.length;
switch (G__39030) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39032,callback){
var map__39033 = p__39032;
var map__39033__$1 = ((((!((map__39033 == null)))?((((map__39033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39033):map__39033);
var file_msg = map__39033__$1;
var namespace = cljs.core.get.call(null,map__39033__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39033,map__39033__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39033,map__39033__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39035){
var map__39036 = p__39035;
var map__39036__$1 = ((((!((map__39036 == null)))?((((map__39036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39036):map__39036);
var file_msg = map__39036__$1;
var namespace = cljs.core.get.call(null,map__39036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39038){
var map__39039 = p__39038;
var map__39039__$1 = ((((!((map__39039 == null)))?((((map__39039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39039):map__39039);
var file_msg = map__39039__$1;
var namespace = cljs.core.get.call(null,map__39039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39041,callback){
var map__39042 = p__39041;
var map__39042__$1 = ((((!((map__39042 == null)))?((((map__39042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39042):map__39042);
var file_msg = map__39042__$1;
var request_url = cljs.core.get.call(null,map__39042__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__35451__auto___39092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___39092,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___39092,out){
return (function (state_39077){
var state_val_39078 = (state_39077[(1)]);
if((state_val_39078 === (1))){
var inst_39051 = cljs.core.seq.call(null,files);
var inst_39052 = cljs.core.first.call(null,inst_39051);
var inst_39053 = cljs.core.next.call(null,inst_39051);
var inst_39054 = files;
var state_39077__$1 = (function (){var statearr_39079 = state_39077;
(statearr_39079[(7)] = inst_39054);

(statearr_39079[(8)] = inst_39053);

(statearr_39079[(9)] = inst_39052);

return statearr_39079;
})();
var statearr_39080_39093 = state_39077__$1;
(statearr_39080_39093[(2)] = null);

(statearr_39080_39093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (2))){
var inst_39054 = (state_39077[(7)]);
var inst_39060 = (state_39077[(10)]);
var inst_39059 = cljs.core.seq.call(null,inst_39054);
var inst_39060__$1 = cljs.core.first.call(null,inst_39059);
var inst_39061 = cljs.core.next.call(null,inst_39059);
var inst_39062 = (inst_39060__$1 == null);
var inst_39063 = cljs.core.not.call(null,inst_39062);
var state_39077__$1 = (function (){var statearr_39081 = state_39077;
(statearr_39081[(11)] = inst_39061);

(statearr_39081[(10)] = inst_39060__$1);

return statearr_39081;
})();
if(inst_39063){
var statearr_39082_39094 = state_39077__$1;
(statearr_39082_39094[(1)] = (4));

} else {
var statearr_39083_39095 = state_39077__$1;
(statearr_39083_39095[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (3))){
var inst_39075 = (state_39077[(2)]);
var state_39077__$1 = state_39077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39077__$1,inst_39075);
} else {
if((state_val_39078 === (4))){
var inst_39060 = (state_39077[(10)]);
var inst_39065 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39060);
var state_39077__$1 = state_39077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39077__$1,(7),inst_39065);
} else {
if((state_val_39078 === (5))){
var inst_39071 = cljs.core.async.close_BANG_.call(null,out);
var state_39077__$1 = state_39077;
var statearr_39084_39096 = state_39077__$1;
(statearr_39084_39096[(2)] = inst_39071);

(statearr_39084_39096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (6))){
var inst_39073 = (state_39077[(2)]);
var state_39077__$1 = state_39077;
var statearr_39085_39097 = state_39077__$1;
(statearr_39085_39097[(2)] = inst_39073);

(statearr_39085_39097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39078 === (7))){
var inst_39061 = (state_39077[(11)]);
var inst_39067 = (state_39077[(2)]);
var inst_39068 = cljs.core.async.put_BANG_.call(null,out,inst_39067);
var inst_39054 = inst_39061;
var state_39077__$1 = (function (){var statearr_39086 = state_39077;
(statearr_39086[(7)] = inst_39054);

(statearr_39086[(12)] = inst_39068);

return statearr_39086;
})();
var statearr_39087_39098 = state_39077__$1;
(statearr_39087_39098[(2)] = null);

(statearr_39087_39098[(1)] = (2));


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
});})(c__35451__auto___39092,out))
;
return ((function (switch__35363__auto__,c__35451__auto___39092,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto____0 = (function (){
var statearr_39088 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39088[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto__);

(statearr_39088[(1)] = (1));

return statearr_39088;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto____1 = (function (state_39077){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_39077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e39089){if((e39089 instanceof Object)){
var ex__35367__auto__ = e39089;
var statearr_39090_39099 = state_39077;
(statearr_39090_39099[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39100 = state_39077;
state_39077 = G__39100;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto__ = function(state_39077){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto____1.call(this,state_39077);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___39092,out))
})();
var state__35453__auto__ = (function (){var statearr_39091 = f__35452__auto__.call(null);
(statearr_39091[(6)] = c__35451__auto___39092);

return statearr_39091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___39092,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39101,opts){
var map__39102 = p__39101;
var map__39102__$1 = ((((!((map__39102 == null)))?((((map__39102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39102):map__39102);
var eval_body = cljs.core.get.call(null,map__39102__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39102__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e39104){var e = e39104;
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
return (function (p1__39105_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39105_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39106){
var vec__39107 = p__39106;
var k = cljs.core.nth.call(null,vec__39107,(0),null);
var v = cljs.core.nth.call(null,vec__39107,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39110){
var vec__39111 = p__39110;
var k = cljs.core.nth.call(null,vec__39111,(0),null);
var v = cljs.core.nth.call(null,vec__39111,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39117,p__39118){
var map__39119 = p__39117;
var map__39119__$1 = ((((!((map__39119 == null)))?((((map__39119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39119):map__39119);
var opts = map__39119__$1;
var before_jsload = cljs.core.get.call(null,map__39119__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39119__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__39119__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__39120 = p__39118;
var map__39120__$1 = ((((!((map__39120 == null)))?((((map__39120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39120):map__39120);
var msg = map__39120__$1;
var files = cljs.core.get.call(null,map__39120__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__39120__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__39120__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_39274){
var state_val_39275 = (state_39274[(1)]);
if((state_val_39275 === (7))){
var inst_39134 = (state_39274[(7)]);
var inst_39135 = (state_39274[(8)]);
var inst_39136 = (state_39274[(9)]);
var inst_39137 = (state_39274[(10)]);
var inst_39142 = cljs.core._nth.call(null,inst_39135,inst_39137);
var inst_39143 = figwheel.client.file_reloading.eval_body.call(null,inst_39142,opts);
var inst_39144 = (inst_39137 + (1));
var tmp39276 = inst_39134;
var tmp39277 = inst_39135;
var tmp39278 = inst_39136;
var inst_39134__$1 = tmp39276;
var inst_39135__$1 = tmp39277;
var inst_39136__$1 = tmp39278;
var inst_39137__$1 = inst_39144;
var state_39274__$1 = (function (){var statearr_39279 = state_39274;
(statearr_39279[(11)] = inst_39143);

(statearr_39279[(7)] = inst_39134__$1);

(statearr_39279[(8)] = inst_39135__$1);

(statearr_39279[(9)] = inst_39136__$1);

(statearr_39279[(10)] = inst_39137__$1);

return statearr_39279;
})();
var statearr_39280_39363 = state_39274__$1;
(statearr_39280_39363[(2)] = null);

(statearr_39280_39363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (20))){
var inst_39177 = (state_39274[(12)]);
var inst_39185 = figwheel.client.file_reloading.sort_files.call(null,inst_39177);
var state_39274__$1 = state_39274;
var statearr_39281_39364 = state_39274__$1;
(statearr_39281_39364[(2)] = inst_39185);

(statearr_39281_39364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (27))){
var state_39274__$1 = state_39274;
var statearr_39282_39365 = state_39274__$1;
(statearr_39282_39365[(2)] = null);

(statearr_39282_39365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (1))){
var inst_39126 = (state_39274[(13)]);
var inst_39123 = before_jsload.call(null,files);
var inst_39124 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39125 = (function (){return ((function (inst_39126,inst_39123,inst_39124,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39114_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39114_SHARP_);
});
;})(inst_39126,inst_39123,inst_39124,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39126__$1 = cljs.core.filter.call(null,inst_39125,files);
var inst_39127 = cljs.core.not_empty.call(null,inst_39126__$1);
var state_39274__$1 = (function (){var statearr_39283 = state_39274;
(statearr_39283[(14)] = inst_39123);

(statearr_39283[(13)] = inst_39126__$1);

(statearr_39283[(15)] = inst_39124);

return statearr_39283;
})();
if(cljs.core.truth_(inst_39127)){
var statearr_39284_39366 = state_39274__$1;
(statearr_39284_39366[(1)] = (2));

} else {
var statearr_39285_39367 = state_39274__$1;
(statearr_39285_39367[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (24))){
var state_39274__$1 = state_39274;
var statearr_39286_39368 = state_39274__$1;
(statearr_39286_39368[(2)] = null);

(statearr_39286_39368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (39))){
var inst_39227 = (state_39274[(16)]);
var state_39274__$1 = state_39274;
var statearr_39287_39369 = state_39274__$1;
(statearr_39287_39369[(2)] = inst_39227);

(statearr_39287_39369[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (46))){
var inst_39269 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39288_39370 = state_39274__$1;
(statearr_39288_39370[(2)] = inst_39269);

(statearr_39288_39370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (4))){
var inst_39171 = (state_39274[(2)]);
var inst_39172 = cljs.core.List.EMPTY;
var inst_39173 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_39172);
var inst_39174 = (function (){return ((function (inst_39171,inst_39172,inst_39173,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39115_SHARP_){
var and__28446__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39115_SHARP_);
if(cljs.core.truth_(and__28446__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39115_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39115_SHARP_)));
} else {
return and__28446__auto__;
}
});
;})(inst_39171,inst_39172,inst_39173,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39175 = cljs.core.filter.call(null,inst_39174,files);
var inst_39176 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_39177 = cljs.core.concat.call(null,inst_39175,inst_39176);
var state_39274__$1 = (function (){var statearr_39289 = state_39274;
(statearr_39289[(17)] = inst_39173);

(statearr_39289[(18)] = inst_39171);

(statearr_39289[(12)] = inst_39177);

return statearr_39289;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_39290_39371 = state_39274__$1;
(statearr_39290_39371[(1)] = (16));

} else {
var statearr_39291_39372 = state_39274__$1;
(statearr_39291_39372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (15))){
var inst_39161 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39292_39373 = state_39274__$1;
(statearr_39292_39373[(2)] = inst_39161);

(statearr_39292_39373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (21))){
var inst_39187 = (state_39274[(19)]);
var inst_39187__$1 = (state_39274[(2)]);
var inst_39188 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39187__$1);
var state_39274__$1 = (function (){var statearr_39293 = state_39274;
(statearr_39293[(19)] = inst_39187__$1);

return statearr_39293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39274__$1,(22),inst_39188);
} else {
if((state_val_39275 === (31))){
var inst_39272 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39274__$1,inst_39272);
} else {
if((state_val_39275 === (32))){
var inst_39227 = (state_39274[(16)]);
var inst_39232 = inst_39227.cljs$lang$protocol_mask$partition0$;
var inst_39233 = (inst_39232 & (64));
var inst_39234 = inst_39227.cljs$core$ISeq$;
var inst_39235 = (cljs.core.PROTOCOL_SENTINEL === inst_39234);
var inst_39236 = (inst_39233) || (inst_39235);
var state_39274__$1 = state_39274;
if(cljs.core.truth_(inst_39236)){
var statearr_39294_39374 = state_39274__$1;
(statearr_39294_39374[(1)] = (35));

} else {
var statearr_39295_39375 = state_39274__$1;
(statearr_39295_39375[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (40))){
var inst_39249 = (state_39274[(20)]);
var inst_39248 = (state_39274[(2)]);
var inst_39249__$1 = cljs.core.get.call(null,inst_39248,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39250 = cljs.core.get.call(null,inst_39248,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39251 = cljs.core.not_empty.call(null,inst_39249__$1);
var state_39274__$1 = (function (){var statearr_39296 = state_39274;
(statearr_39296[(21)] = inst_39250);

(statearr_39296[(20)] = inst_39249__$1);

return statearr_39296;
})();
if(cljs.core.truth_(inst_39251)){
var statearr_39297_39376 = state_39274__$1;
(statearr_39297_39376[(1)] = (41));

} else {
var statearr_39298_39377 = state_39274__$1;
(statearr_39298_39377[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (33))){
var state_39274__$1 = state_39274;
var statearr_39299_39378 = state_39274__$1;
(statearr_39299_39378[(2)] = false);

(statearr_39299_39378[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (13))){
var inst_39147 = (state_39274[(22)]);
var inst_39151 = cljs.core.chunk_first.call(null,inst_39147);
var inst_39152 = cljs.core.chunk_rest.call(null,inst_39147);
var inst_39153 = cljs.core.count.call(null,inst_39151);
var inst_39134 = inst_39152;
var inst_39135 = inst_39151;
var inst_39136 = inst_39153;
var inst_39137 = (0);
var state_39274__$1 = (function (){var statearr_39300 = state_39274;
(statearr_39300[(7)] = inst_39134);

(statearr_39300[(8)] = inst_39135);

(statearr_39300[(9)] = inst_39136);

(statearr_39300[(10)] = inst_39137);

return statearr_39300;
})();
var statearr_39301_39379 = state_39274__$1;
(statearr_39301_39379[(2)] = null);

(statearr_39301_39379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (22))){
var inst_39195 = (state_39274[(23)]);
var inst_39187 = (state_39274[(19)]);
var inst_39191 = (state_39274[(24)]);
var inst_39190 = (state_39274[(25)]);
var inst_39190__$1 = (state_39274[(2)]);
var inst_39191__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39190__$1);
var inst_39192 = (function (){var all_files = inst_39187;
var res_SINGLEQUOTE_ = inst_39190__$1;
var res = inst_39191__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_39195,inst_39187,inst_39191,inst_39190,inst_39190__$1,inst_39191__$1,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39116_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39116_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_39195,inst_39187,inst_39191,inst_39190,inst_39190__$1,inst_39191__$1,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39193 = cljs.core.filter.call(null,inst_39192,inst_39190__$1);
var inst_39194 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_39195__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39194);
var inst_39196 = cljs.core.not_empty.call(null,inst_39195__$1);
var state_39274__$1 = (function (){var statearr_39302 = state_39274;
(statearr_39302[(23)] = inst_39195__$1);

(statearr_39302[(26)] = inst_39193);

(statearr_39302[(24)] = inst_39191__$1);

(statearr_39302[(25)] = inst_39190__$1);

return statearr_39302;
})();
if(cljs.core.truth_(inst_39196)){
var statearr_39303_39380 = state_39274__$1;
(statearr_39303_39380[(1)] = (23));

} else {
var statearr_39304_39381 = state_39274__$1;
(statearr_39304_39381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (36))){
var state_39274__$1 = state_39274;
var statearr_39305_39382 = state_39274__$1;
(statearr_39305_39382[(2)] = false);

(statearr_39305_39382[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (41))){
var inst_39249 = (state_39274[(20)]);
var inst_39253 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_39254 = cljs.core.map.call(null,inst_39253,inst_39249);
var inst_39255 = cljs.core.pr_str.call(null,inst_39254);
var inst_39256 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39255)].join('');
var inst_39257 = figwheel.client.utils.log.call(null,inst_39256);
var state_39274__$1 = state_39274;
var statearr_39306_39383 = state_39274__$1;
(statearr_39306_39383[(2)] = inst_39257);

(statearr_39306_39383[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (43))){
var inst_39250 = (state_39274[(21)]);
var inst_39260 = (state_39274[(2)]);
var inst_39261 = cljs.core.not_empty.call(null,inst_39250);
var state_39274__$1 = (function (){var statearr_39307 = state_39274;
(statearr_39307[(27)] = inst_39260);

return statearr_39307;
})();
if(cljs.core.truth_(inst_39261)){
var statearr_39308_39384 = state_39274__$1;
(statearr_39308_39384[(1)] = (44));

} else {
var statearr_39309_39385 = state_39274__$1;
(statearr_39309_39385[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (29))){
var inst_39195 = (state_39274[(23)]);
var inst_39187 = (state_39274[(19)]);
var inst_39193 = (state_39274[(26)]);
var inst_39227 = (state_39274[(16)]);
var inst_39191 = (state_39274[(24)]);
var inst_39190 = (state_39274[(25)]);
var inst_39223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39226 = (function (){var all_files = inst_39187;
var res_SINGLEQUOTE_ = inst_39190;
var res = inst_39191;
var files_not_loaded = inst_39193;
var dependencies_that_loaded = inst_39195;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39227,inst_39191,inst_39190,inst_39223,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39225){
var map__39310 = p__39225;
var map__39310__$1 = ((((!((map__39310 == null)))?((((map__39310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39310):map__39310);
var namespace = cljs.core.get.call(null,map__39310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39227,inst_39191,inst_39190,inst_39223,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39227__$1 = cljs.core.group_by.call(null,inst_39226,inst_39193);
var inst_39229 = (inst_39227__$1 == null);
var inst_39230 = cljs.core.not.call(null,inst_39229);
var state_39274__$1 = (function (){var statearr_39312 = state_39274;
(statearr_39312[(16)] = inst_39227__$1);

(statearr_39312[(28)] = inst_39223);

return statearr_39312;
})();
if(inst_39230){
var statearr_39313_39386 = state_39274__$1;
(statearr_39313_39386[(1)] = (32));

} else {
var statearr_39314_39387 = state_39274__$1;
(statearr_39314_39387[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (44))){
var inst_39250 = (state_39274[(21)]);
var inst_39263 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39250);
var inst_39264 = cljs.core.pr_str.call(null,inst_39263);
var inst_39265 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39264)].join('');
var inst_39266 = figwheel.client.utils.log.call(null,inst_39265);
var state_39274__$1 = state_39274;
var statearr_39315_39388 = state_39274__$1;
(statearr_39315_39388[(2)] = inst_39266);

(statearr_39315_39388[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (6))){
var inst_39168 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39316_39389 = state_39274__$1;
(statearr_39316_39389[(2)] = inst_39168);

(statearr_39316_39389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (28))){
var inst_39193 = (state_39274[(26)]);
var inst_39220 = (state_39274[(2)]);
var inst_39221 = cljs.core.not_empty.call(null,inst_39193);
var state_39274__$1 = (function (){var statearr_39317 = state_39274;
(statearr_39317[(29)] = inst_39220);

return statearr_39317;
})();
if(cljs.core.truth_(inst_39221)){
var statearr_39318_39390 = state_39274__$1;
(statearr_39318_39390[(1)] = (29));

} else {
var statearr_39319_39391 = state_39274__$1;
(statearr_39319_39391[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (25))){
var inst_39191 = (state_39274[(24)]);
var inst_39207 = (state_39274[(2)]);
var inst_39208 = cljs.core.not_empty.call(null,inst_39191);
var state_39274__$1 = (function (){var statearr_39320 = state_39274;
(statearr_39320[(30)] = inst_39207);

return statearr_39320;
})();
if(cljs.core.truth_(inst_39208)){
var statearr_39321_39392 = state_39274__$1;
(statearr_39321_39392[(1)] = (26));

} else {
var statearr_39322_39393 = state_39274__$1;
(statearr_39322_39393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (34))){
var inst_39243 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
if(cljs.core.truth_(inst_39243)){
var statearr_39323_39394 = state_39274__$1;
(statearr_39323_39394[(1)] = (38));

} else {
var statearr_39324_39395 = state_39274__$1;
(statearr_39324_39395[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (17))){
var state_39274__$1 = state_39274;
var statearr_39325_39396 = state_39274__$1;
(statearr_39325_39396[(2)] = recompile_dependents);

(statearr_39325_39396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (3))){
var state_39274__$1 = state_39274;
var statearr_39326_39397 = state_39274__$1;
(statearr_39326_39397[(2)] = null);

(statearr_39326_39397[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (12))){
var inst_39164 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39327_39398 = state_39274__$1;
(statearr_39327_39398[(2)] = inst_39164);

(statearr_39327_39398[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (2))){
var inst_39126 = (state_39274[(13)]);
var inst_39133 = cljs.core.seq.call(null,inst_39126);
var inst_39134 = inst_39133;
var inst_39135 = null;
var inst_39136 = (0);
var inst_39137 = (0);
var state_39274__$1 = (function (){var statearr_39328 = state_39274;
(statearr_39328[(7)] = inst_39134);

(statearr_39328[(8)] = inst_39135);

(statearr_39328[(9)] = inst_39136);

(statearr_39328[(10)] = inst_39137);

return statearr_39328;
})();
var statearr_39329_39399 = state_39274__$1;
(statearr_39329_39399[(2)] = null);

(statearr_39329_39399[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (23))){
var inst_39195 = (state_39274[(23)]);
var inst_39187 = (state_39274[(19)]);
var inst_39193 = (state_39274[(26)]);
var inst_39191 = (state_39274[(24)]);
var inst_39190 = (state_39274[(25)]);
var inst_39198 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_39200 = (function (){var all_files = inst_39187;
var res_SINGLEQUOTE_ = inst_39190;
var res = inst_39191;
var files_not_loaded = inst_39193;
var dependencies_that_loaded = inst_39195;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39191,inst_39190,inst_39198,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39199){
var map__39330 = p__39199;
var map__39330__$1 = ((((!((map__39330 == null)))?((((map__39330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39330):map__39330);
var request_url = cljs.core.get.call(null,map__39330__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39191,inst_39190,inst_39198,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39201 = cljs.core.reverse.call(null,inst_39195);
var inst_39202 = cljs.core.map.call(null,inst_39200,inst_39201);
var inst_39203 = cljs.core.pr_str.call(null,inst_39202);
var inst_39204 = figwheel.client.utils.log.call(null,inst_39203);
var state_39274__$1 = (function (){var statearr_39332 = state_39274;
(statearr_39332[(31)] = inst_39198);

return statearr_39332;
})();
var statearr_39333_39400 = state_39274__$1;
(statearr_39333_39400[(2)] = inst_39204);

(statearr_39333_39400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (35))){
var state_39274__$1 = state_39274;
var statearr_39334_39401 = state_39274__$1;
(statearr_39334_39401[(2)] = true);

(statearr_39334_39401[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (19))){
var inst_39177 = (state_39274[(12)]);
var inst_39183 = figwheel.client.file_reloading.expand_files.call(null,inst_39177);
var state_39274__$1 = state_39274;
var statearr_39335_39402 = state_39274__$1;
(statearr_39335_39402[(2)] = inst_39183);

(statearr_39335_39402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (11))){
var state_39274__$1 = state_39274;
var statearr_39336_39403 = state_39274__$1;
(statearr_39336_39403[(2)] = null);

(statearr_39336_39403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (9))){
var inst_39166 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39337_39404 = state_39274__$1;
(statearr_39337_39404[(2)] = inst_39166);

(statearr_39337_39404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (5))){
var inst_39136 = (state_39274[(9)]);
var inst_39137 = (state_39274[(10)]);
var inst_39139 = (inst_39137 < inst_39136);
var inst_39140 = inst_39139;
var state_39274__$1 = state_39274;
if(cljs.core.truth_(inst_39140)){
var statearr_39338_39405 = state_39274__$1;
(statearr_39338_39405[(1)] = (7));

} else {
var statearr_39339_39406 = state_39274__$1;
(statearr_39339_39406[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (14))){
var inst_39147 = (state_39274[(22)]);
var inst_39156 = cljs.core.first.call(null,inst_39147);
var inst_39157 = figwheel.client.file_reloading.eval_body.call(null,inst_39156,opts);
var inst_39158 = cljs.core.next.call(null,inst_39147);
var inst_39134 = inst_39158;
var inst_39135 = null;
var inst_39136 = (0);
var inst_39137 = (0);
var state_39274__$1 = (function (){var statearr_39340 = state_39274;
(statearr_39340[(7)] = inst_39134);

(statearr_39340[(8)] = inst_39135);

(statearr_39340[(32)] = inst_39157);

(statearr_39340[(9)] = inst_39136);

(statearr_39340[(10)] = inst_39137);

return statearr_39340;
})();
var statearr_39341_39407 = state_39274__$1;
(statearr_39341_39407[(2)] = null);

(statearr_39341_39407[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (45))){
var state_39274__$1 = state_39274;
var statearr_39342_39408 = state_39274__$1;
(statearr_39342_39408[(2)] = null);

(statearr_39342_39408[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (26))){
var inst_39195 = (state_39274[(23)]);
var inst_39187 = (state_39274[(19)]);
var inst_39193 = (state_39274[(26)]);
var inst_39191 = (state_39274[(24)]);
var inst_39190 = (state_39274[(25)]);
var inst_39210 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39212 = (function (){var all_files = inst_39187;
var res_SINGLEQUOTE_ = inst_39190;
var res = inst_39191;
var files_not_loaded = inst_39193;
var dependencies_that_loaded = inst_39195;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39191,inst_39190,inst_39210,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__39211){
var map__39343 = p__39211;
var map__39343__$1 = ((((!((map__39343 == null)))?((((map__39343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39343):map__39343);
var namespace = cljs.core.get.call(null,map__39343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39343__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39191,inst_39190,inst_39210,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39213 = cljs.core.map.call(null,inst_39212,inst_39191);
var inst_39214 = cljs.core.pr_str.call(null,inst_39213);
var inst_39215 = figwheel.client.utils.log.call(null,inst_39214);
var inst_39216 = (function (){var all_files = inst_39187;
var res_SINGLEQUOTE_ = inst_39190;
var res = inst_39191;
var files_not_loaded = inst_39193;
var dependencies_that_loaded = inst_39195;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39191,inst_39190,inst_39210,inst_39212,inst_39213,inst_39214,inst_39215,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_39195,inst_39187,inst_39193,inst_39191,inst_39190,inst_39210,inst_39212,inst_39213,inst_39214,inst_39215,state_val_39275,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_39217 = setTimeout(inst_39216,(10));
var state_39274__$1 = (function (){var statearr_39345 = state_39274;
(statearr_39345[(33)] = inst_39215);

(statearr_39345[(34)] = inst_39210);

return statearr_39345;
})();
var statearr_39346_39409 = state_39274__$1;
(statearr_39346_39409[(2)] = inst_39217);

(statearr_39346_39409[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (16))){
var state_39274__$1 = state_39274;
var statearr_39347_39410 = state_39274__$1;
(statearr_39347_39410[(2)] = reload_dependents);

(statearr_39347_39410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (38))){
var inst_39227 = (state_39274[(16)]);
var inst_39245 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39227);
var state_39274__$1 = state_39274;
var statearr_39348_39411 = state_39274__$1;
(statearr_39348_39411[(2)] = inst_39245);

(statearr_39348_39411[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (30))){
var state_39274__$1 = state_39274;
var statearr_39349_39412 = state_39274__$1;
(statearr_39349_39412[(2)] = null);

(statearr_39349_39412[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (10))){
var inst_39147 = (state_39274[(22)]);
var inst_39149 = cljs.core.chunked_seq_QMARK_.call(null,inst_39147);
var state_39274__$1 = state_39274;
if(inst_39149){
var statearr_39350_39413 = state_39274__$1;
(statearr_39350_39413[(1)] = (13));

} else {
var statearr_39351_39414 = state_39274__$1;
(statearr_39351_39414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (18))){
var inst_39181 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
if(cljs.core.truth_(inst_39181)){
var statearr_39352_39415 = state_39274__$1;
(statearr_39352_39415[(1)] = (19));

} else {
var statearr_39353_39416 = state_39274__$1;
(statearr_39353_39416[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (42))){
var state_39274__$1 = state_39274;
var statearr_39354_39417 = state_39274__$1;
(statearr_39354_39417[(2)] = null);

(statearr_39354_39417[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (37))){
var inst_39240 = (state_39274[(2)]);
var state_39274__$1 = state_39274;
var statearr_39355_39418 = state_39274__$1;
(statearr_39355_39418[(2)] = inst_39240);

(statearr_39355_39418[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39275 === (8))){
var inst_39134 = (state_39274[(7)]);
var inst_39147 = (state_39274[(22)]);
var inst_39147__$1 = cljs.core.seq.call(null,inst_39134);
var state_39274__$1 = (function (){var statearr_39356 = state_39274;
(statearr_39356[(22)] = inst_39147__$1);

return statearr_39356;
})();
if(inst_39147__$1){
var statearr_39357_39419 = state_39274__$1;
(statearr_39357_39419[(1)] = (10));

} else {
var statearr_39358_39420 = state_39274__$1;
(statearr_39358_39420[(1)] = (11));

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
});})(c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35363__auto__,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto____0 = (function (){
var statearr_39359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39359[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto__);

(statearr_39359[(1)] = (1));

return statearr_39359;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto____1 = (function (state_39274){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_39274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e39360){if((e39360 instanceof Object)){
var ex__35367__auto__ = e39360;
var statearr_39361_39421 = state_39274;
(statearr_39361_39421[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39422 = state_39274;
state_39274 = G__39422;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto__ = function(state_39274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto____1.call(this,state_39274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35453__auto__ = (function (){var statearr_39362 = f__35452__auto__.call(null);
(statearr_39362[(6)] = c__35451__auto__);

return statearr_39362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__,map__39119,map__39119__$1,opts,before_jsload,on_jsload,reload_dependents,map__39120,map__39120__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35451__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39425,link){
var map__39426 = p__39425;
var map__39426__$1 = ((((!((map__39426 == null)))?((((map__39426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39426):map__39426);
var file = cljs.core.get.call(null,map__39426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__39426,map__39426__$1,file){
return (function (p1__39423_SHARP_,p2__39424_SHARP_){
if(cljs.core._EQ_.call(null,p1__39423_SHARP_,p2__39424_SHARP_)){
return p1__39423_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__39426,map__39426__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39429){
var map__39430 = p__39429;
var map__39430__$1 = ((((!((map__39430 == null)))?((((map__39430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39430):map__39430);
var match_length = cljs.core.get.call(null,map__39430__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39430__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39428_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39428_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__39432_SHARP_,p2__39433_SHARP_){
return cljs.core.assoc.call(null,p1__39432_SHARP_,cljs.core.get.call(null,p2__39433_SHARP_,key),p2__39433_SHARP_);
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
var loaded_f_datas_39434 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_39434);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_39434);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39435,p__39436){
var map__39437 = p__39435;
var map__39437__$1 = ((((!((map__39437 == null)))?((((map__39437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39437):map__39437);
var on_cssload = cljs.core.get.call(null,map__39437__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__39438 = p__39436;
var map__39438__$1 = ((((!((map__39438 == null)))?((((map__39438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39438):map__39438);
var files_msg = map__39438__$1;
var files = cljs.core.get.call(null,map__39438__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1521903536750
