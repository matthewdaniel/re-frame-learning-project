// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39236){if((e39236 instanceof Error)){
var e = e39236;
return "Error: Unable to stringify";
} else {
throw e39236;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39239 = arguments.length;
switch (G__39239) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39237_SHARP_){
if(typeof p1__39237_SHARP_ === 'string'){
return p1__39237_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39237_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39242 = arguments.length;
var i__29628__auto___39243 = (0);
while(true){
if((i__29628__auto___39243 < len__29627__auto___39242)){
args__29634__auto__.push((arguments[i__29628__auto___39243]));

var G__39244 = (i__29628__auto___39243 + (1));
i__29628__auto___39243 = G__39244;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39241){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39241));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39246 = arguments.length;
var i__29628__auto___39247 = (0);
while(true){
if((i__29628__auto___39247 < len__29627__auto___39246)){
args__29634__auto__.push((arguments[i__29628__auto___39247]));

var G__39248 = (i__29628__auto___39247 + (1));
i__29628__auto___39247 = G__39248;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39245){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39245));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39249){
var map__39250 = p__39249;
var map__39250__$1 = ((((!((map__39250 == null)))?((((map__39250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39250):map__39250);
var message = cljs.core.get.call(null,map__39250__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39250__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28458__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28446__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28446__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28446__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33913__auto___39329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto___39329,ch){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto___39329,ch){
return (function (state_39301){
var state_val_39302 = (state_39301[(1)]);
if((state_val_39302 === (7))){
var inst_39297 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39303_39330 = state_39301__$1;
(statearr_39303_39330[(2)] = inst_39297);

(statearr_39303_39330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (1))){
var state_39301__$1 = state_39301;
var statearr_39304_39331 = state_39301__$1;
(statearr_39304_39331[(2)] = null);

(statearr_39304_39331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (4))){
var inst_39254 = (state_39301[(7)]);
var inst_39254__$1 = (state_39301[(2)]);
var state_39301__$1 = (function (){var statearr_39305 = state_39301;
(statearr_39305[(7)] = inst_39254__$1);

return statearr_39305;
})();
if(cljs.core.truth_(inst_39254__$1)){
var statearr_39306_39332 = state_39301__$1;
(statearr_39306_39332[(1)] = (5));

} else {
var statearr_39307_39333 = state_39301__$1;
(statearr_39307_39333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (15))){
var inst_39261 = (state_39301[(8)]);
var inst_39276 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39261);
var inst_39277 = cljs.core.first.call(null,inst_39276);
var inst_39278 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39277);
var inst_39279 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39278)].join('');
var inst_39280 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39279);
var state_39301__$1 = state_39301;
var statearr_39308_39334 = state_39301__$1;
(statearr_39308_39334[(2)] = inst_39280);

(statearr_39308_39334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (13))){
var inst_39285 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39309_39335 = state_39301__$1;
(statearr_39309_39335[(2)] = inst_39285);

(statearr_39309_39335[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (6))){
var state_39301__$1 = state_39301;
var statearr_39310_39336 = state_39301__$1;
(statearr_39310_39336[(2)] = null);

(statearr_39310_39336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (17))){
var inst_39283 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39311_39337 = state_39301__$1;
(statearr_39311_39337[(2)] = inst_39283);

(statearr_39311_39337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (3))){
var inst_39299 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39301__$1,inst_39299);
} else {
if((state_val_39302 === (12))){
var inst_39260 = (state_39301[(9)]);
var inst_39274 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39260,opts);
var state_39301__$1 = state_39301;
if(cljs.core.truth_(inst_39274)){
var statearr_39312_39338 = state_39301__$1;
(statearr_39312_39338[(1)] = (15));

} else {
var statearr_39313_39339 = state_39301__$1;
(statearr_39313_39339[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (2))){
var state_39301__$1 = state_39301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39301__$1,(4),ch);
} else {
if((state_val_39302 === (11))){
var inst_39261 = (state_39301[(8)]);
var inst_39266 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39267 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39261);
var inst_39268 = cljs.core.async.timeout.call(null,(1000));
var inst_39269 = [inst_39267,inst_39268];
var inst_39270 = (new cljs.core.PersistentVector(null,2,(5),inst_39266,inst_39269,null));
var state_39301__$1 = state_39301;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39301__$1,(14),inst_39270);
} else {
if((state_val_39302 === (9))){
var inst_39261 = (state_39301[(8)]);
var inst_39287 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39288 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39261);
var inst_39289 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39288);
var inst_39290 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39289)].join('');
var inst_39291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39290);
var state_39301__$1 = (function (){var statearr_39314 = state_39301;
(statearr_39314[(10)] = inst_39287);

return statearr_39314;
})();
var statearr_39315_39340 = state_39301__$1;
(statearr_39315_39340[(2)] = inst_39291);

(statearr_39315_39340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (5))){
var inst_39254 = (state_39301[(7)]);
var inst_39256 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39257 = (new cljs.core.PersistentArrayMap(null,2,inst_39256,null));
var inst_39258 = (new cljs.core.PersistentHashSet(null,inst_39257,null));
var inst_39259 = figwheel.client.focus_msgs.call(null,inst_39258,inst_39254);
var inst_39260 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39259);
var inst_39261 = cljs.core.first.call(null,inst_39259);
var inst_39262 = figwheel.client.autoload_QMARK_.call(null);
var state_39301__$1 = (function (){var statearr_39316 = state_39301;
(statearr_39316[(9)] = inst_39260);

(statearr_39316[(8)] = inst_39261);

return statearr_39316;
})();
if(cljs.core.truth_(inst_39262)){
var statearr_39317_39341 = state_39301__$1;
(statearr_39317_39341[(1)] = (8));

} else {
var statearr_39318_39342 = state_39301__$1;
(statearr_39318_39342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (14))){
var inst_39272 = (state_39301[(2)]);
var state_39301__$1 = state_39301;
var statearr_39319_39343 = state_39301__$1;
(statearr_39319_39343[(2)] = inst_39272);

(statearr_39319_39343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (16))){
var state_39301__$1 = state_39301;
var statearr_39320_39344 = state_39301__$1;
(statearr_39320_39344[(2)] = null);

(statearr_39320_39344[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (10))){
var inst_39293 = (state_39301[(2)]);
var state_39301__$1 = (function (){var statearr_39321 = state_39301;
(statearr_39321[(11)] = inst_39293);

return statearr_39321;
})();
var statearr_39322_39345 = state_39301__$1;
(statearr_39322_39345[(2)] = null);

(statearr_39322_39345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39302 === (8))){
var inst_39260 = (state_39301[(9)]);
var inst_39264 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39260,opts);
var state_39301__$1 = state_39301;
if(cljs.core.truth_(inst_39264)){
var statearr_39323_39346 = state_39301__$1;
(statearr_39323_39346[(1)] = (11));

} else {
var statearr_39324_39347 = state_39301__$1;
(statearr_39324_39347[(1)] = (12));

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
});})(c__33913__auto___39329,ch))
;
return ((function (switch__31482__auto__,c__33913__auto___39329,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31483__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31483__auto____0 = (function (){
var statearr_39325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39325[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31483__auto__);

(statearr_39325[(1)] = (1));

return statearr_39325;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31483__auto____1 = (function (state_39301){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_39301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e39326){if((e39326 instanceof Object)){
var ex__31486__auto__ = e39326;
var statearr_39327_39348 = state_39301;
(statearr_39327_39348[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39349 = state_39301;
state_39301 = G__39349;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31483__auto__ = function(state_39301){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31483__auto____1.call(this,state_39301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31483__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31483__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto___39329,ch))
})();
var state__33915__auto__ = (function (){var statearr_39328 = f__33914__auto__.call(null);
(statearr_39328[(6)] = c__33913__auto___39329);

return statearr_39328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto___39329,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39350_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39350_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39352 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39352){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39351){if((e39351 instanceof Error)){
var e = e39351;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39352], null));
} else {
var e = e39351;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39352))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39353){
var map__39354 = p__39353;
var map__39354__$1 = ((((!((map__39354 == null)))?((((map__39354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39354):map__39354);
var opts = map__39354__$1;
var build_id = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39354,map__39354__$1,opts,build_id){
return (function (p__39356){
var vec__39357 = p__39356;
var seq__39358 = cljs.core.seq.call(null,vec__39357);
var first__39359 = cljs.core.first.call(null,seq__39358);
var seq__39358__$1 = cljs.core.next.call(null,seq__39358);
var map__39360 = first__39359;
var map__39360__$1 = ((((!((map__39360 == null)))?((((map__39360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39360):map__39360);
var msg = map__39360__$1;
var msg_name = cljs.core.get.call(null,map__39360__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39358__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39357,seq__39358,first__39359,seq__39358__$1,map__39360,map__39360__$1,msg,msg_name,_,map__39354,map__39354__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39357,seq__39358,first__39359,seq__39358__$1,map__39360,map__39360__$1,msg,msg_name,_,map__39354,map__39354__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39354,map__39354__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39362){
var vec__39363 = p__39362;
var seq__39364 = cljs.core.seq.call(null,vec__39363);
var first__39365 = cljs.core.first.call(null,seq__39364);
var seq__39364__$1 = cljs.core.next.call(null,seq__39364);
var map__39366 = first__39365;
var map__39366__$1 = ((((!((map__39366 == null)))?((((map__39366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39366):map__39366);
var msg = map__39366__$1;
var msg_name = cljs.core.get.call(null,map__39366__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39364__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39368){
var map__39369 = p__39368;
var map__39369__$1 = ((((!((map__39369 == null)))?((((map__39369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39369):map__39369);
var on_compile_warning = cljs.core.get.call(null,map__39369__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39369__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39369,map__39369__$1,on_compile_warning,on_compile_fail){
return (function (p__39371){
var vec__39372 = p__39371;
var seq__39373 = cljs.core.seq.call(null,vec__39372);
var first__39374 = cljs.core.first.call(null,seq__39373);
var seq__39373__$1 = cljs.core.next.call(null,seq__39373);
var map__39375 = first__39374;
var map__39375__$1 = ((((!((map__39375 == null)))?((((map__39375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39375):map__39375);
var msg = map__39375__$1;
var msg_name = cljs.core.get.call(null,map__39375__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39373__$1;
var pred__39377 = cljs.core._EQ_;
var expr__39378 = msg_name;
if(cljs.core.truth_(pred__39377.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39378))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39377.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39378))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39369,map__39369__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto__,msg_hist,msg_names,msg){
return (function (state_39467){
var state_val_39468 = (state_39467[(1)]);
if((state_val_39468 === (7))){
var inst_39387 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39387)){
var statearr_39469_39516 = state_39467__$1;
(statearr_39469_39516[(1)] = (8));

} else {
var statearr_39470_39517 = state_39467__$1;
(statearr_39470_39517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (20))){
var inst_39461 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39471_39518 = state_39467__$1;
(statearr_39471_39518[(2)] = inst_39461);

(statearr_39471_39518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (27))){
var inst_39457 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39472_39519 = state_39467__$1;
(statearr_39472_39519[(2)] = inst_39457);

(statearr_39472_39519[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (1))){
var inst_39380 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39380)){
var statearr_39473_39520 = state_39467__$1;
(statearr_39473_39520[(1)] = (2));

} else {
var statearr_39474_39521 = state_39467__$1;
(statearr_39474_39521[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (24))){
var inst_39459 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39475_39522 = state_39467__$1;
(statearr_39475_39522[(2)] = inst_39459);

(statearr_39475_39522[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (4))){
var inst_39465 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39467__$1,inst_39465);
} else {
if((state_val_39468 === (15))){
var inst_39463 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39476_39523 = state_39467__$1;
(statearr_39476_39523[(2)] = inst_39463);

(statearr_39476_39523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (21))){
var inst_39416 = (state_39467[(2)]);
var inst_39417 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39418 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39417);
var state_39467__$1 = (function (){var statearr_39477 = state_39467;
(statearr_39477[(7)] = inst_39416);

return statearr_39477;
})();
var statearr_39478_39524 = state_39467__$1;
(statearr_39478_39524[(2)] = inst_39418);

(statearr_39478_39524[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (31))){
var inst_39446 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39446)){
var statearr_39479_39525 = state_39467__$1;
(statearr_39479_39525[(1)] = (34));

} else {
var statearr_39480_39526 = state_39467__$1;
(statearr_39480_39526[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (32))){
var inst_39455 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39481_39527 = state_39467__$1;
(statearr_39481_39527[(2)] = inst_39455);

(statearr_39481_39527[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (33))){
var inst_39442 = (state_39467[(2)]);
var inst_39443 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39444 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39443);
var state_39467__$1 = (function (){var statearr_39482 = state_39467;
(statearr_39482[(8)] = inst_39442);

return statearr_39482;
})();
var statearr_39483_39528 = state_39467__$1;
(statearr_39483_39528[(2)] = inst_39444);

(statearr_39483_39528[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (13))){
var inst_39401 = figwheel.client.heads_up.clear.call(null);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(16),inst_39401);
} else {
if((state_val_39468 === (22))){
var inst_39422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39423 = figwheel.client.heads_up.append_warning_message.call(null,inst_39422);
var state_39467__$1 = state_39467;
var statearr_39484_39529 = state_39467__$1;
(statearr_39484_39529[(2)] = inst_39423);

(statearr_39484_39529[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (36))){
var inst_39453 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39485_39530 = state_39467__$1;
(statearr_39485_39530[(2)] = inst_39453);

(statearr_39485_39530[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (29))){
var inst_39433 = (state_39467[(2)]);
var inst_39434 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39435 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39434);
var state_39467__$1 = (function (){var statearr_39486 = state_39467;
(statearr_39486[(9)] = inst_39433);

return statearr_39486;
})();
var statearr_39487_39531 = state_39467__$1;
(statearr_39487_39531[(2)] = inst_39435);

(statearr_39487_39531[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (6))){
var inst_39382 = (state_39467[(10)]);
var state_39467__$1 = state_39467;
var statearr_39488_39532 = state_39467__$1;
(statearr_39488_39532[(2)] = inst_39382);

(statearr_39488_39532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (28))){
var inst_39429 = (state_39467[(2)]);
var inst_39430 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39431 = figwheel.client.heads_up.display_warning.call(null,inst_39430);
var state_39467__$1 = (function (){var statearr_39489 = state_39467;
(statearr_39489[(11)] = inst_39429);

return statearr_39489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(29),inst_39431);
} else {
if((state_val_39468 === (25))){
var inst_39427 = figwheel.client.heads_up.clear.call(null);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(28),inst_39427);
} else {
if((state_val_39468 === (34))){
var inst_39448 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(37),inst_39448);
} else {
if((state_val_39468 === (17))){
var inst_39407 = (state_39467[(2)]);
var inst_39408 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39409 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39408);
var state_39467__$1 = (function (){var statearr_39490 = state_39467;
(statearr_39490[(12)] = inst_39407);

return statearr_39490;
})();
var statearr_39491_39533 = state_39467__$1;
(statearr_39491_39533[(2)] = inst_39409);

(statearr_39491_39533[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (3))){
var inst_39399 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39399)){
var statearr_39492_39534 = state_39467__$1;
(statearr_39492_39534[(1)] = (13));

} else {
var statearr_39493_39535 = state_39467__$1;
(statearr_39493_39535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (12))){
var inst_39395 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39494_39536 = state_39467__$1;
(statearr_39494_39536[(2)] = inst_39395);

(statearr_39494_39536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (2))){
var inst_39382 = (state_39467[(10)]);
var inst_39382__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39467__$1 = (function (){var statearr_39495 = state_39467;
(statearr_39495[(10)] = inst_39382__$1);

return statearr_39495;
})();
if(cljs.core.truth_(inst_39382__$1)){
var statearr_39496_39537 = state_39467__$1;
(statearr_39496_39537[(1)] = (5));

} else {
var statearr_39497_39538 = state_39467__$1;
(statearr_39497_39538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (23))){
var inst_39425 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39425)){
var statearr_39498_39539 = state_39467__$1;
(statearr_39498_39539[(1)] = (25));

} else {
var statearr_39499_39540 = state_39467__$1;
(statearr_39499_39540[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (35))){
var state_39467__$1 = state_39467;
var statearr_39500_39541 = state_39467__$1;
(statearr_39500_39541[(2)] = null);

(statearr_39500_39541[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (19))){
var inst_39420 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39420)){
var statearr_39501_39542 = state_39467__$1;
(statearr_39501_39542[(1)] = (22));

} else {
var statearr_39502_39543 = state_39467__$1;
(statearr_39502_39543[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (11))){
var inst_39391 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39503_39544 = state_39467__$1;
(statearr_39503_39544[(2)] = inst_39391);

(statearr_39503_39544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (9))){
var inst_39393 = figwheel.client.heads_up.clear.call(null);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(12),inst_39393);
} else {
if((state_val_39468 === (5))){
var inst_39384 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39467__$1 = state_39467;
var statearr_39504_39545 = state_39467__$1;
(statearr_39504_39545[(2)] = inst_39384);

(statearr_39504_39545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (14))){
var inst_39411 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39411)){
var statearr_39505_39546 = state_39467__$1;
(statearr_39505_39546[(1)] = (18));

} else {
var statearr_39506_39547 = state_39467__$1;
(statearr_39506_39547[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (26))){
var inst_39437 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39467__$1 = state_39467;
if(cljs.core.truth_(inst_39437)){
var statearr_39507_39548 = state_39467__$1;
(statearr_39507_39548[(1)] = (30));

} else {
var statearr_39508_39549 = state_39467__$1;
(statearr_39508_39549[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (16))){
var inst_39403 = (state_39467[(2)]);
var inst_39404 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39405 = figwheel.client.heads_up.display_exception.call(null,inst_39404);
var state_39467__$1 = (function (){var statearr_39509 = state_39467;
(statearr_39509[(13)] = inst_39403);

return statearr_39509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(17),inst_39405);
} else {
if((state_val_39468 === (30))){
var inst_39439 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39440 = figwheel.client.heads_up.display_warning.call(null,inst_39439);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(33),inst_39440);
} else {
if((state_val_39468 === (10))){
var inst_39397 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39510_39550 = state_39467__$1;
(statearr_39510_39550[(2)] = inst_39397);

(statearr_39510_39550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (18))){
var inst_39413 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39414 = figwheel.client.heads_up.display_exception.call(null,inst_39413);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(21),inst_39414);
} else {
if((state_val_39468 === (37))){
var inst_39450 = (state_39467[(2)]);
var state_39467__$1 = state_39467;
var statearr_39511_39551 = state_39467__$1;
(statearr_39511_39551[(2)] = inst_39450);

(statearr_39511_39551[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39468 === (8))){
var inst_39389 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39467__$1 = state_39467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39467__$1,(11),inst_39389);
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
});})(c__33913__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31482__auto__,c__33913__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto____0 = (function (){
var statearr_39512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39512[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto__);

(statearr_39512[(1)] = (1));

return statearr_39512;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto____1 = (function (state_39467){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_39467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e39513){if((e39513 instanceof Object)){
var ex__31486__auto__ = e39513;
var statearr_39514_39552 = state_39467;
(statearr_39514_39552[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39553 = state_39467;
state_39467 = G__39553;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto__ = function(state_39467){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto____1.call(this,state_39467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto__,msg_hist,msg_names,msg))
})();
var state__33915__auto__ = (function (){var statearr_39515 = f__33914__auto__.call(null);
(statearr_39515[(6)] = c__33913__auto__);

return statearr_39515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto__,msg_hist,msg_names,msg))
);

return c__33913__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33913__auto___39582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto___39582,ch){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto___39582,ch){
return (function (state_39568){
var state_val_39569 = (state_39568[(1)]);
if((state_val_39569 === (1))){
var state_39568__$1 = state_39568;
var statearr_39570_39583 = state_39568__$1;
(statearr_39570_39583[(2)] = null);

(statearr_39570_39583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (2))){
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39568__$1,(4),ch);
} else {
if((state_val_39569 === (3))){
var inst_39566 = (state_39568[(2)]);
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39568__$1,inst_39566);
} else {
if((state_val_39569 === (4))){
var inst_39556 = (state_39568[(7)]);
var inst_39556__$1 = (state_39568[(2)]);
var state_39568__$1 = (function (){var statearr_39571 = state_39568;
(statearr_39571[(7)] = inst_39556__$1);

return statearr_39571;
})();
if(cljs.core.truth_(inst_39556__$1)){
var statearr_39572_39584 = state_39568__$1;
(statearr_39572_39584[(1)] = (5));

} else {
var statearr_39573_39585 = state_39568__$1;
(statearr_39573_39585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (5))){
var inst_39556 = (state_39568[(7)]);
var inst_39558 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39556);
var state_39568__$1 = state_39568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39568__$1,(8),inst_39558);
} else {
if((state_val_39569 === (6))){
var state_39568__$1 = state_39568;
var statearr_39574_39586 = state_39568__$1;
(statearr_39574_39586[(2)] = null);

(statearr_39574_39586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (7))){
var inst_39564 = (state_39568[(2)]);
var state_39568__$1 = state_39568;
var statearr_39575_39587 = state_39568__$1;
(statearr_39575_39587[(2)] = inst_39564);

(statearr_39575_39587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39569 === (8))){
var inst_39560 = (state_39568[(2)]);
var state_39568__$1 = (function (){var statearr_39576 = state_39568;
(statearr_39576[(8)] = inst_39560);

return statearr_39576;
})();
var statearr_39577_39588 = state_39568__$1;
(statearr_39577_39588[(2)] = null);

(statearr_39577_39588[(1)] = (2));


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
});})(c__33913__auto___39582,ch))
;
return ((function (switch__31482__auto__,c__33913__auto___39582,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31483__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31483__auto____0 = (function (){
var statearr_39578 = [null,null,null,null,null,null,null,null,null];
(statearr_39578[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31483__auto__);

(statearr_39578[(1)] = (1));

return statearr_39578;
});
var figwheel$client$heads_up_plugin_$_state_machine__31483__auto____1 = (function (state_39568){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_39568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e39579){if((e39579 instanceof Object)){
var ex__31486__auto__ = e39579;
var statearr_39580_39589 = state_39568;
(statearr_39580_39589[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39590 = state_39568;
state_39568 = G__39590;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31483__auto__ = function(state_39568){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31483__auto____1.call(this,state_39568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31483__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31483__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto___39582,ch))
})();
var state__33915__auto__ = (function (){var statearr_39581 = f__33914__auto__.call(null);
(statearr_39581[(6)] = c__33913__auto___39582);

return statearr_39581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto___39582,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto__){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto__){
return (function (state_39596){
var state_val_39597 = (state_39596[(1)]);
if((state_val_39597 === (1))){
var inst_39591 = cljs.core.async.timeout.call(null,(3000));
var state_39596__$1 = state_39596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39596__$1,(2),inst_39591);
} else {
if((state_val_39597 === (2))){
var inst_39593 = (state_39596[(2)]);
var inst_39594 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39596__$1 = (function (){var statearr_39598 = state_39596;
(statearr_39598[(7)] = inst_39593);

return statearr_39598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39596__$1,inst_39594);
} else {
return null;
}
}
});})(c__33913__auto__))
;
return ((function (switch__31482__auto__,c__33913__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31483__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31483__auto____0 = (function (){
var statearr_39599 = [null,null,null,null,null,null,null,null];
(statearr_39599[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31483__auto__);

(statearr_39599[(1)] = (1));

return statearr_39599;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31483__auto____1 = (function (state_39596){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_39596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e39600){if((e39600 instanceof Object)){
var ex__31486__auto__ = e39600;
var statearr_39601_39603 = state_39596;
(statearr_39601_39603[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39604 = state_39596;
state_39596 = G__39604;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31483__auto__ = function(state_39596){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31483__auto____1.call(this,state_39596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31483__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31483__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto__))
})();
var state__33915__auto__ = (function (){var statearr_39602 = f__33914__auto__.call(null);
(statearr_39602[(6)] = c__33913__auto__);

return statearr_39602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto__))
);

return c__33913__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33913__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33913__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33914__auto__ = (function (){var switch__31482__auto__ = ((function (c__33913__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39611){
var state_val_39612 = (state_39611[(1)]);
if((state_val_39612 === (1))){
var inst_39605 = cljs.core.async.timeout.call(null,(2000));
var state_39611__$1 = state_39611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39611__$1,(2),inst_39605);
} else {
if((state_val_39612 === (2))){
var inst_39607 = (state_39611[(2)]);
var inst_39608 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39609 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39608);
var state_39611__$1 = (function (){var statearr_39613 = state_39611;
(statearr_39613[(7)] = inst_39607);

return statearr_39613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39611__$1,inst_39609);
} else {
return null;
}
}
});})(c__33913__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31482__auto__,c__33913__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto____0 = (function (){
var statearr_39614 = [null,null,null,null,null,null,null,null];
(statearr_39614[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto__);

(statearr_39614[(1)] = (1));

return statearr_39614;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto____1 = (function (state_39611){
while(true){
var ret_value__31484__auto__ = (function (){try{while(true){
var result__31485__auto__ = switch__31482__auto__.call(null,state_39611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31485__auto__;
}
break;
}
}catch (e39615){if((e39615 instanceof Object)){
var ex__31486__auto__ = e39615;
var statearr_39616_39618 = state_39611;
(statearr_39616_39618[(5)] = ex__31486__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31484__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39619 = state_39611;
state_39611 = G__39619;
continue;
} else {
return ret_value__31484__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto__ = function(state_39611){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto____1.call(this,state_39611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31483__auto__;
})()
;})(switch__31482__auto__,c__33913__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33915__auto__ = (function (){var statearr_39617 = f__33914__auto__.call(null);
(statearr_39617[(6)] = c__33913__auto__);

return statearr_39617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33915__auto__);
});})(c__33913__auto__,figwheel_version,temp__4657__auto__))
);

return c__33913__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39620){
var map__39621 = p__39620;
var map__39621__$1 = ((((!((map__39621 == null)))?((((map__39621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39621):map__39621);
var file = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39621__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39623 = "";
var G__39623__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39623),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39623);
var G__39623__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39623__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39623__$1);
if(cljs.core.truth_((function (){var and__28446__auto__ = line;
if(cljs.core.truth_(and__28446__auto__)){
return column;
} else {
return and__28446__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39623__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39623__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39624){
var map__39625 = p__39624;
var map__39625__$1 = ((((!((map__39625 == null)))?((((map__39625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39625):map__39625);
var ed = map__39625__$1;
var formatted_exception = cljs.core.get.call(null,map__39625__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39625__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39625__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39627_39631 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39628_39632 = null;
var count__39629_39633 = (0);
var i__39630_39634 = (0);
while(true){
if((i__39630_39634 < count__39629_39633)){
var msg_39635 = cljs.core._nth.call(null,chunk__39628_39632,i__39630_39634);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39635);

var G__39636 = seq__39627_39631;
var G__39637 = chunk__39628_39632;
var G__39638 = count__39629_39633;
var G__39639 = (i__39630_39634 + (1));
seq__39627_39631 = G__39636;
chunk__39628_39632 = G__39637;
count__39629_39633 = G__39638;
i__39630_39634 = G__39639;
continue;
} else {
var temp__4657__auto___39640 = cljs.core.seq.call(null,seq__39627_39631);
if(temp__4657__auto___39640){
var seq__39627_39641__$1 = temp__4657__auto___39640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39627_39641__$1)){
var c__29297__auto___39642 = cljs.core.chunk_first.call(null,seq__39627_39641__$1);
var G__39643 = cljs.core.chunk_rest.call(null,seq__39627_39641__$1);
var G__39644 = c__29297__auto___39642;
var G__39645 = cljs.core.count.call(null,c__29297__auto___39642);
var G__39646 = (0);
seq__39627_39631 = G__39643;
chunk__39628_39632 = G__39644;
count__39629_39633 = G__39645;
i__39630_39634 = G__39646;
continue;
} else {
var msg_39647 = cljs.core.first.call(null,seq__39627_39641__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39647);

var G__39648 = cljs.core.next.call(null,seq__39627_39641__$1);
var G__39649 = null;
var G__39650 = (0);
var G__39651 = (0);
seq__39627_39631 = G__39648;
chunk__39628_39632 = G__39649;
count__39629_39633 = G__39650;
i__39630_39634 = G__39651;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39652){
var map__39653 = p__39652;
var map__39653__$1 = ((((!((map__39653 == null)))?((((map__39653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39653):map__39653);
var w = map__39653__$1;
var message = cljs.core.get.call(null,map__39653__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28446__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28446__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28446__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39655 = cljs.core.seq.call(null,plugins);
var chunk__39656 = null;
var count__39657 = (0);
var i__39658 = (0);
while(true){
if((i__39658 < count__39657)){
var vec__39659 = cljs.core._nth.call(null,chunk__39656,i__39658);
var k = cljs.core.nth.call(null,vec__39659,(0),null);
var plugin = cljs.core.nth.call(null,vec__39659,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39665 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39655,chunk__39656,count__39657,i__39658,pl_39665,vec__39659,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39665.call(null,msg_hist);
});})(seq__39655,chunk__39656,count__39657,i__39658,pl_39665,vec__39659,k,plugin))
);
} else {
}

var G__39666 = seq__39655;
var G__39667 = chunk__39656;
var G__39668 = count__39657;
var G__39669 = (i__39658 + (1));
seq__39655 = G__39666;
chunk__39656 = G__39667;
count__39657 = G__39668;
i__39658 = G__39669;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39655);
if(temp__4657__auto__){
var seq__39655__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39655__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__39655__$1);
var G__39670 = cljs.core.chunk_rest.call(null,seq__39655__$1);
var G__39671 = c__29297__auto__;
var G__39672 = cljs.core.count.call(null,c__29297__auto__);
var G__39673 = (0);
seq__39655 = G__39670;
chunk__39656 = G__39671;
count__39657 = G__39672;
i__39658 = G__39673;
continue;
} else {
var vec__39662 = cljs.core.first.call(null,seq__39655__$1);
var k = cljs.core.nth.call(null,vec__39662,(0),null);
var plugin = cljs.core.nth.call(null,vec__39662,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39674 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39655,chunk__39656,count__39657,i__39658,pl_39674,vec__39662,k,plugin,seq__39655__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39674.call(null,msg_hist);
});})(seq__39655,chunk__39656,count__39657,i__39658,pl_39674,vec__39662,k,plugin,seq__39655__$1,temp__4657__auto__))
);
} else {
}

var G__39675 = cljs.core.next.call(null,seq__39655__$1);
var G__39676 = null;
var G__39677 = (0);
var G__39678 = (0);
seq__39655 = G__39675;
chunk__39656 = G__39676;
count__39657 = G__39677;
i__39658 = G__39678;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39680 = arguments.length;
switch (G__39680) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39681_39686 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39682_39687 = null;
var count__39683_39688 = (0);
var i__39684_39689 = (0);
while(true){
if((i__39684_39689 < count__39683_39688)){
var msg_39690 = cljs.core._nth.call(null,chunk__39682_39687,i__39684_39689);
figwheel.client.socket.handle_incoming_message.call(null,msg_39690);

var G__39691 = seq__39681_39686;
var G__39692 = chunk__39682_39687;
var G__39693 = count__39683_39688;
var G__39694 = (i__39684_39689 + (1));
seq__39681_39686 = G__39691;
chunk__39682_39687 = G__39692;
count__39683_39688 = G__39693;
i__39684_39689 = G__39694;
continue;
} else {
var temp__4657__auto___39695 = cljs.core.seq.call(null,seq__39681_39686);
if(temp__4657__auto___39695){
var seq__39681_39696__$1 = temp__4657__auto___39695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39681_39696__$1)){
var c__29297__auto___39697 = cljs.core.chunk_first.call(null,seq__39681_39696__$1);
var G__39698 = cljs.core.chunk_rest.call(null,seq__39681_39696__$1);
var G__39699 = c__29297__auto___39697;
var G__39700 = cljs.core.count.call(null,c__29297__auto___39697);
var G__39701 = (0);
seq__39681_39686 = G__39698;
chunk__39682_39687 = G__39699;
count__39683_39688 = G__39700;
i__39684_39689 = G__39701;
continue;
} else {
var msg_39702 = cljs.core.first.call(null,seq__39681_39696__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39702);

var G__39703 = cljs.core.next.call(null,seq__39681_39696__$1);
var G__39704 = null;
var G__39705 = (0);
var G__39706 = (0);
seq__39681_39686 = G__39703;
chunk__39682_39687 = G__39704;
count__39683_39688 = G__39705;
i__39684_39689 = G__39706;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29634__auto__ = [];
var len__29627__auto___39711 = arguments.length;
var i__29628__auto___39712 = (0);
while(true){
if((i__29628__auto___39712 < len__29627__auto___39711)){
args__29634__auto__.push((arguments[i__29628__auto___39712]));

var G__39713 = (i__29628__auto___39712 + (1));
i__29628__auto___39712 = G__39713;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39708){
var map__39709 = p__39708;
var map__39709__$1 = ((((!((map__39709 == null)))?((((map__39709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39709):map__39709);
var opts = map__39709__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39707){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39707));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39714){if((e39714 instanceof Error)){
var e = e39714;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39714;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39715){
var map__39716 = p__39715;
var map__39716__$1 = ((((!((map__39716 == null)))?((((map__39716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39716):map__39716);
var msg_name = cljs.core.get.call(null,map__39716__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521239474583
