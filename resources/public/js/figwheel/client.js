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
}catch (e40527){if((e40527 instanceof Error)){
var e = e40527;
return "Error: Unable to stringify";
} else {
throw e40527;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40530 = arguments.length;
switch (G__40530) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40528_SHARP_){
if(typeof p1__40528_SHARP_ === 'string'){
return p1__40528_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40528_SHARP_);
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
var len__29627__auto___40533 = arguments.length;
var i__29628__auto___40534 = (0);
while(true){
if((i__29628__auto___40534 < len__29627__auto___40533)){
args__29634__auto__.push((arguments[i__29628__auto___40534]));

var G__40535 = (i__29628__auto___40534 + (1));
i__29628__auto___40534 = G__40535;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40532){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40532));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29634__auto__ = [];
var len__29627__auto___40537 = arguments.length;
var i__29628__auto___40538 = (0);
while(true){
if((i__29628__auto___40538 < len__29627__auto___40537)){
args__29634__auto__.push((arguments[i__29628__auto___40538]));

var G__40539 = (i__29628__auto___40538 + (1));
i__29628__auto___40538 = G__40539;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40536){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40536));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40540){
var map__40541 = p__40540;
var map__40541__$1 = ((((!((map__40541 == null)))?((((map__40541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40541):map__40541);
var message = cljs.core.get.call(null,map__40541__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40541__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__35451__auto___40620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___40620,ch){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___40620,ch){
return (function (state_40592){
var state_val_40593 = (state_40592[(1)]);
if((state_val_40593 === (7))){
var inst_40588 = (state_40592[(2)]);
var state_40592__$1 = state_40592;
var statearr_40594_40621 = state_40592__$1;
(statearr_40594_40621[(2)] = inst_40588);

(statearr_40594_40621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (1))){
var state_40592__$1 = state_40592;
var statearr_40595_40622 = state_40592__$1;
(statearr_40595_40622[(2)] = null);

(statearr_40595_40622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (4))){
var inst_40545 = (state_40592[(7)]);
var inst_40545__$1 = (state_40592[(2)]);
var state_40592__$1 = (function (){var statearr_40596 = state_40592;
(statearr_40596[(7)] = inst_40545__$1);

return statearr_40596;
})();
if(cljs.core.truth_(inst_40545__$1)){
var statearr_40597_40623 = state_40592__$1;
(statearr_40597_40623[(1)] = (5));

} else {
var statearr_40598_40624 = state_40592__$1;
(statearr_40598_40624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (15))){
var inst_40552 = (state_40592[(8)]);
var inst_40567 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40552);
var inst_40568 = cljs.core.first.call(null,inst_40567);
var inst_40569 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40568);
var inst_40570 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40569)].join('');
var inst_40571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40570);
var state_40592__$1 = state_40592;
var statearr_40599_40625 = state_40592__$1;
(statearr_40599_40625[(2)] = inst_40571);

(statearr_40599_40625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (13))){
var inst_40576 = (state_40592[(2)]);
var state_40592__$1 = state_40592;
var statearr_40600_40626 = state_40592__$1;
(statearr_40600_40626[(2)] = inst_40576);

(statearr_40600_40626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (6))){
var state_40592__$1 = state_40592;
var statearr_40601_40627 = state_40592__$1;
(statearr_40601_40627[(2)] = null);

(statearr_40601_40627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (17))){
var inst_40574 = (state_40592[(2)]);
var state_40592__$1 = state_40592;
var statearr_40602_40628 = state_40592__$1;
(statearr_40602_40628[(2)] = inst_40574);

(statearr_40602_40628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (3))){
var inst_40590 = (state_40592[(2)]);
var state_40592__$1 = state_40592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40592__$1,inst_40590);
} else {
if((state_val_40593 === (12))){
var inst_40551 = (state_40592[(9)]);
var inst_40565 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40551,opts);
var state_40592__$1 = state_40592;
if(cljs.core.truth_(inst_40565)){
var statearr_40603_40629 = state_40592__$1;
(statearr_40603_40629[(1)] = (15));

} else {
var statearr_40604_40630 = state_40592__$1;
(statearr_40604_40630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (2))){
var state_40592__$1 = state_40592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40592__$1,(4),ch);
} else {
if((state_val_40593 === (11))){
var inst_40552 = (state_40592[(8)]);
var inst_40557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40558 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40552);
var inst_40559 = cljs.core.async.timeout.call(null,(1000));
var inst_40560 = [inst_40558,inst_40559];
var inst_40561 = (new cljs.core.PersistentVector(null,2,(5),inst_40557,inst_40560,null));
var state_40592__$1 = state_40592;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40592__$1,(14),inst_40561);
} else {
if((state_val_40593 === (9))){
var inst_40552 = (state_40592[(8)]);
var inst_40578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40579 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40552);
var inst_40580 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40579);
var inst_40581 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40580)].join('');
var inst_40582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40581);
var state_40592__$1 = (function (){var statearr_40605 = state_40592;
(statearr_40605[(10)] = inst_40578);

return statearr_40605;
})();
var statearr_40606_40631 = state_40592__$1;
(statearr_40606_40631[(2)] = inst_40582);

(statearr_40606_40631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (5))){
var inst_40545 = (state_40592[(7)]);
var inst_40547 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40548 = (new cljs.core.PersistentArrayMap(null,2,inst_40547,null));
var inst_40549 = (new cljs.core.PersistentHashSet(null,inst_40548,null));
var inst_40550 = figwheel.client.focus_msgs.call(null,inst_40549,inst_40545);
var inst_40551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40550);
var inst_40552 = cljs.core.first.call(null,inst_40550);
var inst_40553 = figwheel.client.autoload_QMARK_.call(null);
var state_40592__$1 = (function (){var statearr_40607 = state_40592;
(statearr_40607[(9)] = inst_40551);

(statearr_40607[(8)] = inst_40552);

return statearr_40607;
})();
if(cljs.core.truth_(inst_40553)){
var statearr_40608_40632 = state_40592__$1;
(statearr_40608_40632[(1)] = (8));

} else {
var statearr_40609_40633 = state_40592__$1;
(statearr_40609_40633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (14))){
var inst_40563 = (state_40592[(2)]);
var state_40592__$1 = state_40592;
var statearr_40610_40634 = state_40592__$1;
(statearr_40610_40634[(2)] = inst_40563);

(statearr_40610_40634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (16))){
var state_40592__$1 = state_40592;
var statearr_40611_40635 = state_40592__$1;
(statearr_40611_40635[(2)] = null);

(statearr_40611_40635[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (10))){
var inst_40584 = (state_40592[(2)]);
var state_40592__$1 = (function (){var statearr_40612 = state_40592;
(statearr_40612[(11)] = inst_40584);

return statearr_40612;
})();
var statearr_40613_40636 = state_40592__$1;
(statearr_40613_40636[(2)] = null);

(statearr_40613_40636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40593 === (8))){
var inst_40551 = (state_40592[(9)]);
var inst_40555 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40551,opts);
var state_40592__$1 = state_40592;
if(cljs.core.truth_(inst_40555)){
var statearr_40614_40637 = state_40592__$1;
(statearr_40614_40637[(1)] = (11));

} else {
var statearr_40615_40638 = state_40592__$1;
(statearr_40615_40638[(1)] = (12));

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
});})(c__35451__auto___40620,ch))
;
return ((function (switch__35363__auto__,c__35451__auto___40620,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35364__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35364__auto____0 = (function (){
var statearr_40616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40616[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35364__auto__);

(statearr_40616[(1)] = (1));

return statearr_40616;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35364__auto____1 = (function (state_40592){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_40592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e40617){if((e40617 instanceof Object)){
var ex__35367__auto__ = e40617;
var statearr_40618_40639 = state_40592;
(statearr_40618_40639[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40640 = state_40592;
state_40592 = G__40640;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35364__auto__ = function(state_40592){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35364__auto____1.call(this,state_40592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35364__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35364__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___40620,ch))
})();
var state__35453__auto__ = (function (){var statearr_40619 = f__35452__auto__.call(null);
(statearr_40619[(6)] = c__35451__auto___40620);

return statearr_40619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___40620,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40641_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40641_SHARP_));
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
var base_path_40643 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40643){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40642){if((e40642 instanceof Error)){
var e = e40642;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40643], null));
} else {
var e = e40642;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40643))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40644){
var map__40645 = p__40644;
var map__40645__$1 = ((((!((map__40645 == null)))?((((map__40645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40645):map__40645);
var opts = map__40645__$1;
var build_id = cljs.core.get.call(null,map__40645__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40645,map__40645__$1,opts,build_id){
return (function (p__40647){
var vec__40648 = p__40647;
var seq__40649 = cljs.core.seq.call(null,vec__40648);
var first__40650 = cljs.core.first.call(null,seq__40649);
var seq__40649__$1 = cljs.core.next.call(null,seq__40649);
var map__40651 = first__40650;
var map__40651__$1 = ((((!((map__40651 == null)))?((((map__40651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40651):map__40651);
var msg = map__40651__$1;
var msg_name = cljs.core.get.call(null,map__40651__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40649__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40648,seq__40649,first__40650,seq__40649__$1,map__40651,map__40651__$1,msg,msg_name,_,map__40645,map__40645__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40648,seq__40649,first__40650,seq__40649__$1,map__40651,map__40651__$1,msg,msg_name,_,map__40645,map__40645__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40645,map__40645__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40653){
var vec__40654 = p__40653;
var seq__40655 = cljs.core.seq.call(null,vec__40654);
var first__40656 = cljs.core.first.call(null,seq__40655);
var seq__40655__$1 = cljs.core.next.call(null,seq__40655);
var map__40657 = first__40656;
var map__40657__$1 = ((((!((map__40657 == null)))?((((map__40657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40657):map__40657);
var msg = map__40657__$1;
var msg_name = cljs.core.get.call(null,map__40657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40655__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40659){
var map__40660 = p__40659;
var map__40660__$1 = ((((!((map__40660 == null)))?((((map__40660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40660):map__40660);
var on_compile_warning = cljs.core.get.call(null,map__40660__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40660__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40660,map__40660__$1,on_compile_warning,on_compile_fail){
return (function (p__40662){
var vec__40663 = p__40662;
var seq__40664 = cljs.core.seq.call(null,vec__40663);
var first__40665 = cljs.core.first.call(null,seq__40664);
var seq__40664__$1 = cljs.core.next.call(null,seq__40664);
var map__40666 = first__40665;
var map__40666__$1 = ((((!((map__40666 == null)))?((((map__40666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40666):map__40666);
var msg = map__40666__$1;
var msg_name = cljs.core.get.call(null,map__40666__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40664__$1;
var pred__40668 = cljs.core._EQ_;
var expr__40669 = msg_name;
if(cljs.core.truth_(pred__40668.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40669))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40668.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40669))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40660,map__40660__$1,on_compile_warning,on_compile_fail))
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
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__,msg_hist,msg_names,msg){
return (function (state_40758){
var state_val_40759 = (state_40758[(1)]);
if((state_val_40759 === (7))){
var inst_40678 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40678)){
var statearr_40760_40807 = state_40758__$1;
(statearr_40760_40807[(1)] = (8));

} else {
var statearr_40761_40808 = state_40758__$1;
(statearr_40761_40808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (20))){
var inst_40752 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40762_40809 = state_40758__$1;
(statearr_40762_40809[(2)] = inst_40752);

(statearr_40762_40809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (27))){
var inst_40748 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40763_40810 = state_40758__$1;
(statearr_40763_40810[(2)] = inst_40748);

(statearr_40763_40810[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (1))){
var inst_40671 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40671)){
var statearr_40764_40811 = state_40758__$1;
(statearr_40764_40811[(1)] = (2));

} else {
var statearr_40765_40812 = state_40758__$1;
(statearr_40765_40812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (24))){
var inst_40750 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40766_40813 = state_40758__$1;
(statearr_40766_40813[(2)] = inst_40750);

(statearr_40766_40813[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (4))){
var inst_40756 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40758__$1,inst_40756);
} else {
if((state_val_40759 === (15))){
var inst_40754 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40767_40814 = state_40758__$1;
(statearr_40767_40814[(2)] = inst_40754);

(statearr_40767_40814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (21))){
var inst_40707 = (state_40758[(2)]);
var inst_40708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40709 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40708);
var state_40758__$1 = (function (){var statearr_40768 = state_40758;
(statearr_40768[(7)] = inst_40707);

return statearr_40768;
})();
var statearr_40769_40815 = state_40758__$1;
(statearr_40769_40815[(2)] = inst_40709);

(statearr_40769_40815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (31))){
var inst_40737 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40737)){
var statearr_40770_40816 = state_40758__$1;
(statearr_40770_40816[(1)] = (34));

} else {
var statearr_40771_40817 = state_40758__$1;
(statearr_40771_40817[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (32))){
var inst_40746 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40772_40818 = state_40758__$1;
(statearr_40772_40818[(2)] = inst_40746);

(statearr_40772_40818[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (33))){
var inst_40733 = (state_40758[(2)]);
var inst_40734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40735 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40734);
var state_40758__$1 = (function (){var statearr_40773 = state_40758;
(statearr_40773[(8)] = inst_40733);

return statearr_40773;
})();
var statearr_40774_40819 = state_40758__$1;
(statearr_40774_40819[(2)] = inst_40735);

(statearr_40774_40819[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (13))){
var inst_40692 = figwheel.client.heads_up.clear.call(null);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(16),inst_40692);
} else {
if((state_val_40759 === (22))){
var inst_40713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40714 = figwheel.client.heads_up.append_warning_message.call(null,inst_40713);
var state_40758__$1 = state_40758;
var statearr_40775_40820 = state_40758__$1;
(statearr_40775_40820[(2)] = inst_40714);

(statearr_40775_40820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (36))){
var inst_40744 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40776_40821 = state_40758__$1;
(statearr_40776_40821[(2)] = inst_40744);

(statearr_40776_40821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (29))){
var inst_40724 = (state_40758[(2)]);
var inst_40725 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40726 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40725);
var state_40758__$1 = (function (){var statearr_40777 = state_40758;
(statearr_40777[(9)] = inst_40724);

return statearr_40777;
})();
var statearr_40778_40822 = state_40758__$1;
(statearr_40778_40822[(2)] = inst_40726);

(statearr_40778_40822[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (6))){
var inst_40673 = (state_40758[(10)]);
var state_40758__$1 = state_40758;
var statearr_40779_40823 = state_40758__$1;
(statearr_40779_40823[(2)] = inst_40673);

(statearr_40779_40823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (28))){
var inst_40720 = (state_40758[(2)]);
var inst_40721 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40722 = figwheel.client.heads_up.display_warning.call(null,inst_40721);
var state_40758__$1 = (function (){var statearr_40780 = state_40758;
(statearr_40780[(11)] = inst_40720);

return statearr_40780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(29),inst_40722);
} else {
if((state_val_40759 === (25))){
var inst_40718 = figwheel.client.heads_up.clear.call(null);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(28),inst_40718);
} else {
if((state_val_40759 === (34))){
var inst_40739 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(37),inst_40739);
} else {
if((state_val_40759 === (17))){
var inst_40698 = (state_40758[(2)]);
var inst_40699 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40700 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40699);
var state_40758__$1 = (function (){var statearr_40781 = state_40758;
(statearr_40781[(12)] = inst_40698);

return statearr_40781;
})();
var statearr_40782_40824 = state_40758__$1;
(statearr_40782_40824[(2)] = inst_40700);

(statearr_40782_40824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (3))){
var inst_40690 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40690)){
var statearr_40783_40825 = state_40758__$1;
(statearr_40783_40825[(1)] = (13));

} else {
var statearr_40784_40826 = state_40758__$1;
(statearr_40784_40826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (12))){
var inst_40686 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40785_40827 = state_40758__$1;
(statearr_40785_40827[(2)] = inst_40686);

(statearr_40785_40827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (2))){
var inst_40673 = (state_40758[(10)]);
var inst_40673__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40758__$1 = (function (){var statearr_40786 = state_40758;
(statearr_40786[(10)] = inst_40673__$1);

return statearr_40786;
})();
if(cljs.core.truth_(inst_40673__$1)){
var statearr_40787_40828 = state_40758__$1;
(statearr_40787_40828[(1)] = (5));

} else {
var statearr_40788_40829 = state_40758__$1;
(statearr_40788_40829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (23))){
var inst_40716 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40716)){
var statearr_40789_40830 = state_40758__$1;
(statearr_40789_40830[(1)] = (25));

} else {
var statearr_40790_40831 = state_40758__$1;
(statearr_40790_40831[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (35))){
var state_40758__$1 = state_40758;
var statearr_40791_40832 = state_40758__$1;
(statearr_40791_40832[(2)] = null);

(statearr_40791_40832[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (19))){
var inst_40711 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40711)){
var statearr_40792_40833 = state_40758__$1;
(statearr_40792_40833[(1)] = (22));

} else {
var statearr_40793_40834 = state_40758__$1;
(statearr_40793_40834[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (11))){
var inst_40682 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40794_40835 = state_40758__$1;
(statearr_40794_40835[(2)] = inst_40682);

(statearr_40794_40835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (9))){
var inst_40684 = figwheel.client.heads_up.clear.call(null);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(12),inst_40684);
} else {
if((state_val_40759 === (5))){
var inst_40675 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40758__$1 = state_40758;
var statearr_40795_40836 = state_40758__$1;
(statearr_40795_40836[(2)] = inst_40675);

(statearr_40795_40836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (14))){
var inst_40702 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40702)){
var statearr_40796_40837 = state_40758__$1;
(statearr_40796_40837[(1)] = (18));

} else {
var statearr_40797_40838 = state_40758__$1;
(statearr_40797_40838[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (26))){
var inst_40728 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40758__$1 = state_40758;
if(cljs.core.truth_(inst_40728)){
var statearr_40798_40839 = state_40758__$1;
(statearr_40798_40839[(1)] = (30));

} else {
var statearr_40799_40840 = state_40758__$1;
(statearr_40799_40840[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (16))){
var inst_40694 = (state_40758[(2)]);
var inst_40695 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40696 = figwheel.client.heads_up.display_exception.call(null,inst_40695);
var state_40758__$1 = (function (){var statearr_40800 = state_40758;
(statearr_40800[(13)] = inst_40694);

return statearr_40800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(17),inst_40696);
} else {
if((state_val_40759 === (30))){
var inst_40730 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40731 = figwheel.client.heads_up.display_warning.call(null,inst_40730);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(33),inst_40731);
} else {
if((state_val_40759 === (10))){
var inst_40688 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40801_40841 = state_40758__$1;
(statearr_40801_40841[(2)] = inst_40688);

(statearr_40801_40841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (18))){
var inst_40704 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40705 = figwheel.client.heads_up.display_exception.call(null,inst_40704);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(21),inst_40705);
} else {
if((state_val_40759 === (37))){
var inst_40741 = (state_40758[(2)]);
var state_40758__$1 = state_40758;
var statearr_40802_40842 = state_40758__$1;
(statearr_40802_40842[(2)] = inst_40741);

(statearr_40802_40842[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40759 === (8))){
var inst_40680 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40758__$1 = state_40758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40758__$1,(11),inst_40680);
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
});})(c__35451__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35363__auto__,c__35451__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto____0 = (function (){
var statearr_40803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40803[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto__);

(statearr_40803[(1)] = (1));

return statearr_40803;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto____1 = (function (state_40758){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_40758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e40804){if((e40804 instanceof Object)){
var ex__35367__auto__ = e40804;
var statearr_40805_40843 = state_40758;
(statearr_40805_40843[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40844 = state_40758;
state_40758 = G__40844;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto__ = function(state_40758){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto____1.call(this,state_40758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__,msg_hist,msg_names,msg))
})();
var state__35453__auto__ = (function (){var statearr_40806 = f__35452__auto__.call(null);
(statearr_40806[(6)] = c__35451__auto__);

return statearr_40806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__,msg_hist,msg_names,msg))
);

return c__35451__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35451__auto___40873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___40873,ch){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___40873,ch){
return (function (state_40859){
var state_val_40860 = (state_40859[(1)]);
if((state_val_40860 === (1))){
var state_40859__$1 = state_40859;
var statearr_40861_40874 = state_40859__$1;
(statearr_40861_40874[(2)] = null);

(statearr_40861_40874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40860 === (2))){
var state_40859__$1 = state_40859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40859__$1,(4),ch);
} else {
if((state_val_40860 === (3))){
var inst_40857 = (state_40859[(2)]);
var state_40859__$1 = state_40859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40859__$1,inst_40857);
} else {
if((state_val_40860 === (4))){
var inst_40847 = (state_40859[(7)]);
var inst_40847__$1 = (state_40859[(2)]);
var state_40859__$1 = (function (){var statearr_40862 = state_40859;
(statearr_40862[(7)] = inst_40847__$1);

return statearr_40862;
})();
if(cljs.core.truth_(inst_40847__$1)){
var statearr_40863_40875 = state_40859__$1;
(statearr_40863_40875[(1)] = (5));

} else {
var statearr_40864_40876 = state_40859__$1;
(statearr_40864_40876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40860 === (5))){
var inst_40847 = (state_40859[(7)]);
var inst_40849 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40847);
var state_40859__$1 = state_40859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40859__$1,(8),inst_40849);
} else {
if((state_val_40860 === (6))){
var state_40859__$1 = state_40859;
var statearr_40865_40877 = state_40859__$1;
(statearr_40865_40877[(2)] = null);

(statearr_40865_40877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40860 === (7))){
var inst_40855 = (state_40859[(2)]);
var state_40859__$1 = state_40859;
var statearr_40866_40878 = state_40859__$1;
(statearr_40866_40878[(2)] = inst_40855);

(statearr_40866_40878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40860 === (8))){
var inst_40851 = (state_40859[(2)]);
var state_40859__$1 = (function (){var statearr_40867 = state_40859;
(statearr_40867[(8)] = inst_40851);

return statearr_40867;
})();
var statearr_40868_40879 = state_40859__$1;
(statearr_40868_40879[(2)] = null);

(statearr_40868_40879[(1)] = (2));


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
});})(c__35451__auto___40873,ch))
;
return ((function (switch__35363__auto__,c__35451__auto___40873,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35364__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35364__auto____0 = (function (){
var statearr_40869 = [null,null,null,null,null,null,null,null,null];
(statearr_40869[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35364__auto__);

(statearr_40869[(1)] = (1));

return statearr_40869;
});
var figwheel$client$heads_up_plugin_$_state_machine__35364__auto____1 = (function (state_40859){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_40859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e40870){if((e40870 instanceof Object)){
var ex__35367__auto__ = e40870;
var statearr_40871_40880 = state_40859;
(statearr_40871_40880[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40881 = state_40859;
state_40859 = G__40881;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35364__auto__ = function(state_40859){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35364__auto____1.call(this,state_40859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35364__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35364__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___40873,ch))
})();
var state__35453__auto__ = (function (){var statearr_40872 = f__35452__auto__.call(null);
(statearr_40872[(6)] = c__35451__auto___40873);

return statearr_40872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___40873,ch))
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
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__){
return (function (state_40887){
var state_val_40888 = (state_40887[(1)]);
if((state_val_40888 === (1))){
var inst_40882 = cljs.core.async.timeout.call(null,(3000));
var state_40887__$1 = state_40887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40887__$1,(2),inst_40882);
} else {
if((state_val_40888 === (2))){
var inst_40884 = (state_40887[(2)]);
var inst_40885 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40887__$1 = (function (){var statearr_40889 = state_40887;
(statearr_40889[(7)] = inst_40884);

return statearr_40889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40887__$1,inst_40885);
} else {
return null;
}
}
});})(c__35451__auto__))
;
return ((function (switch__35363__auto__,c__35451__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35364__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35364__auto____0 = (function (){
var statearr_40890 = [null,null,null,null,null,null,null,null];
(statearr_40890[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35364__auto__);

(statearr_40890[(1)] = (1));

return statearr_40890;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35364__auto____1 = (function (state_40887){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_40887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e40891){if((e40891 instanceof Object)){
var ex__35367__auto__ = e40891;
var statearr_40892_40894 = state_40887;
(statearr_40892_40894[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40895 = state_40887;
state_40887 = G__40895;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35364__auto__ = function(state_40887){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35364__auto____1.call(this,state_40887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35364__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35364__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__))
})();
var state__35453__auto__ = (function (){var statearr_40893 = f__35452__auto__.call(null);
(statearr_40893[(6)] = c__35451__auto__);

return statearr_40893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__))
);

return c__35451__auto__;
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
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__,figwheel_version,temp__4657__auto__){
return (function (state_40902){
var state_val_40903 = (state_40902[(1)]);
if((state_val_40903 === (1))){
var inst_40896 = cljs.core.async.timeout.call(null,(2000));
var state_40902__$1 = state_40902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40902__$1,(2),inst_40896);
} else {
if((state_val_40903 === (2))){
var inst_40898 = (state_40902[(2)]);
var inst_40899 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40900 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40899);
var state_40902__$1 = (function (){var statearr_40904 = state_40902;
(statearr_40904[(7)] = inst_40898);

return statearr_40904;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40902__$1,inst_40900);
} else {
return null;
}
}
});})(c__35451__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__35363__auto__,c__35451__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto____0 = (function (){
var statearr_40905 = [null,null,null,null,null,null,null,null];
(statearr_40905[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto__);

(statearr_40905[(1)] = (1));

return statearr_40905;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto____1 = (function (state_40902){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_40902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e40906){if((e40906 instanceof Object)){
var ex__35367__auto__ = e40906;
var statearr_40907_40909 = state_40902;
(statearr_40907_40909[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40910 = state_40902;
state_40902 = G__40910;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto__ = function(state_40902){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto____1.call(this,state_40902);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__,figwheel_version,temp__4657__auto__))
})();
var state__35453__auto__ = (function (){var statearr_40908 = f__35452__auto__.call(null);
(statearr_40908[(6)] = c__35451__auto__);

return statearr_40908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__,figwheel_version,temp__4657__auto__))
);

return c__35451__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40911){
var map__40912 = p__40911;
var map__40912__$1 = ((((!((map__40912 == null)))?((((map__40912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40912):map__40912);
var file = cljs.core.get.call(null,map__40912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40912__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40912__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40914 = "";
var G__40914__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40914),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40914);
var G__40914__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40914__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40914__$1);
if(cljs.core.truth_((function (){var and__28446__auto__ = line;
if(cljs.core.truth_(and__28446__auto__)){
return column;
} else {
return and__28446__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40914__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40914__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40915){
var map__40916 = p__40915;
var map__40916__$1 = ((((!((map__40916 == null)))?((((map__40916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40916):map__40916);
var ed = map__40916__$1;
var formatted_exception = cljs.core.get.call(null,map__40916__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40916__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40916__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40918_40922 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40919_40923 = null;
var count__40920_40924 = (0);
var i__40921_40925 = (0);
while(true){
if((i__40921_40925 < count__40920_40924)){
var msg_40926 = cljs.core._nth.call(null,chunk__40919_40923,i__40921_40925);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40926);

var G__40927 = seq__40918_40922;
var G__40928 = chunk__40919_40923;
var G__40929 = count__40920_40924;
var G__40930 = (i__40921_40925 + (1));
seq__40918_40922 = G__40927;
chunk__40919_40923 = G__40928;
count__40920_40924 = G__40929;
i__40921_40925 = G__40930;
continue;
} else {
var temp__4657__auto___40931 = cljs.core.seq.call(null,seq__40918_40922);
if(temp__4657__auto___40931){
var seq__40918_40932__$1 = temp__4657__auto___40931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40918_40932__$1)){
var c__29297__auto___40933 = cljs.core.chunk_first.call(null,seq__40918_40932__$1);
var G__40934 = cljs.core.chunk_rest.call(null,seq__40918_40932__$1);
var G__40935 = c__29297__auto___40933;
var G__40936 = cljs.core.count.call(null,c__29297__auto___40933);
var G__40937 = (0);
seq__40918_40922 = G__40934;
chunk__40919_40923 = G__40935;
count__40920_40924 = G__40936;
i__40921_40925 = G__40937;
continue;
} else {
var msg_40938 = cljs.core.first.call(null,seq__40918_40932__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40938);

var G__40939 = cljs.core.next.call(null,seq__40918_40932__$1);
var G__40940 = null;
var G__40941 = (0);
var G__40942 = (0);
seq__40918_40922 = G__40939;
chunk__40919_40923 = G__40940;
count__40920_40924 = G__40941;
i__40921_40925 = G__40942;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40943){
var map__40944 = p__40943;
var map__40944__$1 = ((((!((map__40944 == null)))?((((map__40944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40944):map__40944);
var w = map__40944__$1;
var message = cljs.core.get.call(null,map__40944__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__40946 = cljs.core.seq.call(null,plugins);
var chunk__40947 = null;
var count__40948 = (0);
var i__40949 = (0);
while(true){
if((i__40949 < count__40948)){
var vec__40950 = cljs.core._nth.call(null,chunk__40947,i__40949);
var k = cljs.core.nth.call(null,vec__40950,(0),null);
var plugin = cljs.core.nth.call(null,vec__40950,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40956 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40946,chunk__40947,count__40948,i__40949,pl_40956,vec__40950,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40956.call(null,msg_hist);
});})(seq__40946,chunk__40947,count__40948,i__40949,pl_40956,vec__40950,k,plugin))
);
} else {
}

var G__40957 = seq__40946;
var G__40958 = chunk__40947;
var G__40959 = count__40948;
var G__40960 = (i__40949 + (1));
seq__40946 = G__40957;
chunk__40947 = G__40958;
count__40948 = G__40959;
i__40949 = G__40960;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40946);
if(temp__4657__auto__){
var seq__40946__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40946__$1)){
var c__29297__auto__ = cljs.core.chunk_first.call(null,seq__40946__$1);
var G__40961 = cljs.core.chunk_rest.call(null,seq__40946__$1);
var G__40962 = c__29297__auto__;
var G__40963 = cljs.core.count.call(null,c__29297__auto__);
var G__40964 = (0);
seq__40946 = G__40961;
chunk__40947 = G__40962;
count__40948 = G__40963;
i__40949 = G__40964;
continue;
} else {
var vec__40953 = cljs.core.first.call(null,seq__40946__$1);
var k = cljs.core.nth.call(null,vec__40953,(0),null);
var plugin = cljs.core.nth.call(null,vec__40953,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40965 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40946,chunk__40947,count__40948,i__40949,pl_40965,vec__40953,k,plugin,seq__40946__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40965.call(null,msg_hist);
});})(seq__40946,chunk__40947,count__40948,i__40949,pl_40965,vec__40953,k,plugin,seq__40946__$1,temp__4657__auto__))
);
} else {
}

var G__40966 = cljs.core.next.call(null,seq__40946__$1);
var G__40967 = null;
var G__40968 = (0);
var G__40969 = (0);
seq__40946 = G__40966;
chunk__40947 = G__40967;
count__40948 = G__40968;
i__40949 = G__40969;
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
var G__40971 = arguments.length;
switch (G__40971) {
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

var seq__40972_40977 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40973_40978 = null;
var count__40974_40979 = (0);
var i__40975_40980 = (0);
while(true){
if((i__40975_40980 < count__40974_40979)){
var msg_40981 = cljs.core._nth.call(null,chunk__40973_40978,i__40975_40980);
figwheel.client.socket.handle_incoming_message.call(null,msg_40981);

var G__40982 = seq__40972_40977;
var G__40983 = chunk__40973_40978;
var G__40984 = count__40974_40979;
var G__40985 = (i__40975_40980 + (1));
seq__40972_40977 = G__40982;
chunk__40973_40978 = G__40983;
count__40974_40979 = G__40984;
i__40975_40980 = G__40985;
continue;
} else {
var temp__4657__auto___40986 = cljs.core.seq.call(null,seq__40972_40977);
if(temp__4657__auto___40986){
var seq__40972_40987__$1 = temp__4657__auto___40986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40972_40987__$1)){
var c__29297__auto___40988 = cljs.core.chunk_first.call(null,seq__40972_40987__$1);
var G__40989 = cljs.core.chunk_rest.call(null,seq__40972_40987__$1);
var G__40990 = c__29297__auto___40988;
var G__40991 = cljs.core.count.call(null,c__29297__auto___40988);
var G__40992 = (0);
seq__40972_40977 = G__40989;
chunk__40973_40978 = G__40990;
count__40974_40979 = G__40991;
i__40975_40980 = G__40992;
continue;
} else {
var msg_40993 = cljs.core.first.call(null,seq__40972_40987__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40993);

var G__40994 = cljs.core.next.call(null,seq__40972_40987__$1);
var G__40995 = null;
var G__40996 = (0);
var G__40997 = (0);
seq__40972_40977 = G__40994;
chunk__40973_40978 = G__40995;
count__40974_40979 = G__40996;
i__40975_40980 = G__40997;
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
var len__29627__auto___41002 = arguments.length;
var i__29628__auto___41003 = (0);
while(true){
if((i__29628__auto___41003 < len__29627__auto___41002)){
args__29634__auto__.push((arguments[i__29628__auto___41003]));

var G__41004 = (i__29628__auto___41003 + (1));
i__29628__auto___41003 = G__41004;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((0) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29635__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40999){
var map__41000 = p__40999;
var map__41000__$1 = ((((!((map__41000 == null)))?((((map__41000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41000):map__41000);
var opts = map__41000__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40998){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40998));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e41005){if((e41005 instanceof Error)){
var e = e41005;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e41005;

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
return (function (p__41006){
var map__41007 = p__41006;
var map__41007__$1 = ((((!((map__41007 == null)))?((((map__41007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41007):map__41007);
var msg_name = cljs.core.get.call(null,map__41007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521903538244
