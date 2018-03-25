// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35497 = arguments.length;
switch (G__35497) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35498 = (function (f,blockable,meta35499){
this.f = f;
this.blockable = blockable;
this.meta35499 = meta35499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35500,meta35499__$1){
var self__ = this;
var _35500__$1 = this;
return (new cljs.core.async.t_cljs$core$async35498(self__.f,self__.blockable,meta35499__$1));
});

cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35500){
var self__ = this;
var _35500__$1 = this;
return self__.meta35499;
});

cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35499","meta35499",-525932290,null)], null);
});

cljs.core.async.t_cljs$core$async35498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35498";

cljs.core.async.t_cljs$core$async35498.cljs$lang$ctorPrWriter = (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async35498");
});

cljs.core.async.__GT_t_cljs$core$async35498 = (function cljs$core$async$__GT_t_cljs$core$async35498(f__$1,blockable__$1,meta35499){
return (new cljs.core.async.t_cljs$core$async35498(f__$1,blockable__$1,meta35499));
});

}

return (new cljs.core.async.t_cljs$core$async35498(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35504 = arguments.length;
switch (G__35504) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35507 = arguments.length;
switch (G__35507) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35510 = arguments.length;
switch (G__35510) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35512 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35512);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35512,ret){
return (function (){
return fn1.call(null,val_35512);
});})(val_35512,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35514 = arguments.length;
switch (G__35514) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29403__auto___35516 = n;
var x_35517 = (0);
while(true){
if((x_35517 < n__29403__auto___35516)){
(a[x_35517] = (0));

var G__35518 = (x_35517 + (1));
x_35517 = G__35518;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35519 = (i + (1));
i = G__35519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35520 = (function (flag,meta35521){
this.flag = flag;
this.meta35521 = meta35521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35522,meta35521__$1){
var self__ = this;
var _35522__$1 = this;
return (new cljs.core.async.t_cljs$core$async35520(self__.flag,meta35521__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35522){
var self__ = this;
var _35522__$1 = this;
return self__.meta35521;
});})(flag))
;

cljs.core.async.t_cljs$core$async35520.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35520.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35520.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35520.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35520.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35521","meta35521",-1446483567,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35520";

cljs.core.async.t_cljs$core$async35520.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async35520");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async35520 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35520(flag__$1,meta35521){
return (new cljs.core.async.t_cljs$core$async35520(flag__$1,meta35521));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35520(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35523 = (function (flag,cb,meta35524){
this.flag = flag;
this.cb = cb;
this.meta35524 = meta35524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35525,meta35524__$1){
var self__ = this;
var _35525__$1 = this;
return (new cljs.core.async.t_cljs$core$async35523(self__.flag,self__.cb,meta35524__$1));
});

cljs.core.async.t_cljs$core$async35523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35525){
var self__ = this;
var _35525__$1 = this;
return self__.meta35524;
});

cljs.core.async.t_cljs$core$async35523.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35523.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35524","meta35524",813791825,null)], null);
});

cljs.core.async.t_cljs$core$async35523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35523";

cljs.core.async.t_cljs$core$async35523.cljs$lang$ctorPrWriter = (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async35523");
});

cljs.core.async.__GT_t_cljs$core$async35523 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35523(flag__$1,cb__$1,meta35524){
return (new cljs.core.async.t_cljs$core$async35523(flag__$1,cb__$1,meta35524));
});

}

return (new cljs.core.async.t_cljs$core$async35523(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35526_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35526_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35527_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35527_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28458__auto__ = wport;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35528 = (i + (1));
i = G__35528;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28458__auto__ = ret;
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28446__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28446__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28446__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___35534 = arguments.length;
var i__29628__auto___35535 = (0);
while(true){
if((i__29628__auto___35535 < len__29627__auto___35534)){
args__29634__auto__.push((arguments[i__29628__auto___35535]));

var G__35536 = (i__29628__auto___35535 + (1));
i__29628__auto___35535 = G__35536;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((1) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29635__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35531){
var map__35532 = p__35531;
var map__35532__$1 = ((((!((map__35532 == null)))?((((map__35532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35532.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35532):map__35532);
var opts = map__35532__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35529){
var G__35530 = cljs.core.first.call(null,seq35529);
var seq35529__$1 = cljs.core.next.call(null,seq35529);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35530,seq35529__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35538 = arguments.length;
switch (G__35538) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35451__auto___35584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___35584){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___35584){
return (function (state_35562){
var state_val_35563 = (state_35562[(1)]);
if((state_val_35563 === (7))){
var inst_35558 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35564_35585 = state_35562__$1;
(statearr_35564_35585[(2)] = inst_35558);

(statearr_35564_35585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (1))){
var state_35562__$1 = state_35562;
var statearr_35565_35586 = state_35562__$1;
(statearr_35565_35586[(2)] = null);

(statearr_35565_35586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (4))){
var inst_35541 = (state_35562[(7)]);
var inst_35541__$1 = (state_35562[(2)]);
var inst_35542 = (inst_35541__$1 == null);
var state_35562__$1 = (function (){var statearr_35566 = state_35562;
(statearr_35566[(7)] = inst_35541__$1);

return statearr_35566;
})();
if(cljs.core.truth_(inst_35542)){
var statearr_35567_35587 = state_35562__$1;
(statearr_35567_35587[(1)] = (5));

} else {
var statearr_35568_35588 = state_35562__$1;
(statearr_35568_35588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (13))){
var state_35562__$1 = state_35562;
var statearr_35569_35589 = state_35562__$1;
(statearr_35569_35589[(2)] = null);

(statearr_35569_35589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (6))){
var inst_35541 = (state_35562[(7)]);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35562__$1,(11),to,inst_35541);
} else {
if((state_val_35563 === (3))){
var inst_35560 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35562__$1,inst_35560);
} else {
if((state_val_35563 === (12))){
var state_35562__$1 = state_35562;
var statearr_35570_35590 = state_35562__$1;
(statearr_35570_35590[(2)] = null);

(statearr_35570_35590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (2))){
var state_35562__$1 = state_35562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35562__$1,(4),from);
} else {
if((state_val_35563 === (11))){
var inst_35551 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
if(cljs.core.truth_(inst_35551)){
var statearr_35571_35591 = state_35562__$1;
(statearr_35571_35591[(1)] = (12));

} else {
var statearr_35572_35592 = state_35562__$1;
(statearr_35572_35592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (9))){
var state_35562__$1 = state_35562;
var statearr_35573_35593 = state_35562__$1;
(statearr_35573_35593[(2)] = null);

(statearr_35573_35593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (5))){
var state_35562__$1 = state_35562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35574_35594 = state_35562__$1;
(statearr_35574_35594[(1)] = (8));

} else {
var statearr_35575_35595 = state_35562__$1;
(statearr_35575_35595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (14))){
var inst_35556 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35576_35596 = state_35562__$1;
(statearr_35576_35596[(2)] = inst_35556);

(statearr_35576_35596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (10))){
var inst_35548 = (state_35562[(2)]);
var state_35562__$1 = state_35562;
var statearr_35577_35597 = state_35562__$1;
(statearr_35577_35597[(2)] = inst_35548);

(statearr_35577_35597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35563 === (8))){
var inst_35545 = cljs.core.async.close_BANG_.call(null,to);
var state_35562__$1 = state_35562;
var statearr_35578_35598 = state_35562__$1;
(statearr_35578_35598[(2)] = inst_35545);

(statearr_35578_35598[(1)] = (10));


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
});})(c__35451__auto___35584))
;
return ((function (switch__35363__auto__,c__35451__auto___35584){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_35579 = [null,null,null,null,null,null,null,null];
(statearr_35579[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_35579[(1)] = (1));

return statearr_35579;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_35562){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35580){if((e35580 instanceof Object)){
var ex__35367__auto__ = e35580;
var statearr_35581_35599 = state_35562;
(statearr_35581_35599[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35600 = state_35562;
state_35562 = G__35600;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_35562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_35562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___35584))
})();
var state__35453__auto__ = (function (){var statearr_35582 = f__35452__auto__.call(null);
(statearr_35582[(6)] = c__35451__auto___35584);

return statearr_35582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___35584))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35601){
var vec__35602 = p__35601;
var v = cljs.core.nth.call(null,vec__35602,(0),null);
var p = cljs.core.nth.call(null,vec__35602,(1),null);
var job = vec__35602;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35451__auto___35773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___35773,res,vec__35602,v,p,job,jobs,results){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___35773,res,vec__35602,v,p,job,jobs,results){
return (function (state_35609){
var state_val_35610 = (state_35609[(1)]);
if((state_val_35610 === (1))){
var state_35609__$1 = state_35609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35609__$1,(2),res,v);
} else {
if((state_val_35610 === (2))){
var inst_35606 = (state_35609[(2)]);
var inst_35607 = cljs.core.async.close_BANG_.call(null,res);
var state_35609__$1 = (function (){var statearr_35611 = state_35609;
(statearr_35611[(7)] = inst_35606);

return statearr_35611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35609__$1,inst_35607);
} else {
return null;
}
}
});})(c__35451__auto___35773,res,vec__35602,v,p,job,jobs,results))
;
return ((function (switch__35363__auto__,c__35451__auto___35773,res,vec__35602,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0 = (function (){
var statearr_35612 = [null,null,null,null,null,null,null,null];
(statearr_35612[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__);

(statearr_35612[(1)] = (1));

return statearr_35612;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1 = (function (state_35609){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object)){
var ex__35367__auto__ = e35613;
var statearr_35614_35774 = state_35609;
(statearr_35614_35774[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35775 = state_35609;
state_35609 = G__35775;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = function(state_35609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1.call(this,state_35609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___35773,res,vec__35602,v,p,job,jobs,results))
})();
var state__35453__auto__ = (function (){var statearr_35615 = f__35452__auto__.call(null);
(statearr_35615[(6)] = c__35451__auto___35773);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___35773,res,vec__35602,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35616){
var vec__35617 = p__35616;
var v = cljs.core.nth.call(null,vec__35617,(0),null);
var p = cljs.core.nth.call(null,vec__35617,(1),null);
var job = vec__35617;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29403__auto___35776 = n;
var __35777 = (0);
while(true){
if((__35777 < n__29403__auto___35776)){
var G__35620_35778 = type;
var G__35620_35779__$1 = (((G__35620_35778 instanceof cljs.core.Keyword))?G__35620_35778.fqn:null);
switch (G__35620_35779__$1) {
case "compute":
var c__35451__auto___35781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35777,c__35451__auto___35781,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (__35777,c__35451__auto___35781,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async){
return (function (state_35633){
var state_val_35634 = (state_35633[(1)]);
if((state_val_35634 === (1))){
var state_35633__$1 = state_35633;
var statearr_35635_35782 = state_35633__$1;
(statearr_35635_35782[(2)] = null);

(statearr_35635_35782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35634 === (2))){
var state_35633__$1 = state_35633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35633__$1,(4),jobs);
} else {
if((state_val_35634 === (3))){
var inst_35631 = (state_35633[(2)]);
var state_35633__$1 = state_35633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35633__$1,inst_35631);
} else {
if((state_val_35634 === (4))){
var inst_35623 = (state_35633[(2)]);
var inst_35624 = process.call(null,inst_35623);
var state_35633__$1 = state_35633;
if(cljs.core.truth_(inst_35624)){
var statearr_35636_35783 = state_35633__$1;
(statearr_35636_35783[(1)] = (5));

} else {
var statearr_35637_35784 = state_35633__$1;
(statearr_35637_35784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35634 === (5))){
var state_35633__$1 = state_35633;
var statearr_35638_35785 = state_35633__$1;
(statearr_35638_35785[(2)] = null);

(statearr_35638_35785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35634 === (6))){
var state_35633__$1 = state_35633;
var statearr_35639_35786 = state_35633__$1;
(statearr_35639_35786[(2)] = null);

(statearr_35639_35786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35634 === (7))){
var inst_35629 = (state_35633[(2)]);
var state_35633__$1 = state_35633;
var statearr_35640_35787 = state_35633__$1;
(statearr_35640_35787[(2)] = inst_35629);

(statearr_35640_35787[(1)] = (3));


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
});})(__35777,c__35451__auto___35781,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async))
;
return ((function (__35777,switch__35363__auto__,c__35451__auto___35781,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0 = (function (){
var statearr_35641 = [null,null,null,null,null,null,null];
(statearr_35641[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__);

(statearr_35641[(1)] = (1));

return statearr_35641;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1 = (function (state_35633){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35642){if((e35642 instanceof Object)){
var ex__35367__auto__ = e35642;
var statearr_35643_35788 = state_35633;
(statearr_35643_35788[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35789 = state_35633;
state_35633 = G__35789;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = function(state_35633){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1.call(this,state_35633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__;
})()
;})(__35777,switch__35363__auto__,c__35451__auto___35781,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async))
})();
var state__35453__auto__ = (function (){var statearr_35644 = f__35452__auto__.call(null);
(statearr_35644[(6)] = c__35451__auto___35781);

return statearr_35644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(__35777,c__35451__auto___35781,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async))
);


break;
case "async":
var c__35451__auto___35790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35777,c__35451__auto___35790,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (__35777,c__35451__auto___35790,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async){
return (function (state_35657){
var state_val_35658 = (state_35657[(1)]);
if((state_val_35658 === (1))){
var state_35657__$1 = state_35657;
var statearr_35659_35791 = state_35657__$1;
(statearr_35659_35791[(2)] = null);

(statearr_35659_35791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (2))){
var state_35657__$1 = state_35657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35657__$1,(4),jobs);
} else {
if((state_val_35658 === (3))){
var inst_35655 = (state_35657[(2)]);
var state_35657__$1 = state_35657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35657__$1,inst_35655);
} else {
if((state_val_35658 === (4))){
var inst_35647 = (state_35657[(2)]);
var inst_35648 = async.call(null,inst_35647);
var state_35657__$1 = state_35657;
if(cljs.core.truth_(inst_35648)){
var statearr_35660_35792 = state_35657__$1;
(statearr_35660_35792[(1)] = (5));

} else {
var statearr_35661_35793 = state_35657__$1;
(statearr_35661_35793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (5))){
var state_35657__$1 = state_35657;
var statearr_35662_35794 = state_35657__$1;
(statearr_35662_35794[(2)] = null);

(statearr_35662_35794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (6))){
var state_35657__$1 = state_35657;
var statearr_35663_35795 = state_35657__$1;
(statearr_35663_35795[(2)] = null);

(statearr_35663_35795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (7))){
var inst_35653 = (state_35657[(2)]);
var state_35657__$1 = state_35657;
var statearr_35664_35796 = state_35657__$1;
(statearr_35664_35796[(2)] = inst_35653);

(statearr_35664_35796[(1)] = (3));


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
});})(__35777,c__35451__auto___35790,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async))
;
return ((function (__35777,switch__35363__auto__,c__35451__auto___35790,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0 = (function (){
var statearr_35665 = [null,null,null,null,null,null,null];
(statearr_35665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__);

(statearr_35665[(1)] = (1));

return statearr_35665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1 = (function (state_35657){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35666){if((e35666 instanceof Object)){
var ex__35367__auto__ = e35666;
var statearr_35667_35797 = state_35657;
(statearr_35667_35797[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35798 = state_35657;
state_35657 = G__35798;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = function(state_35657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1.call(this,state_35657);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__;
})()
;})(__35777,switch__35363__auto__,c__35451__auto___35790,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async))
})();
var state__35453__auto__ = (function (){var statearr_35668 = f__35452__auto__.call(null);
(statearr_35668[(6)] = c__35451__auto___35790);

return statearr_35668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(__35777,c__35451__auto___35790,G__35620_35778,G__35620_35779__$1,n__29403__auto___35776,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35620_35779__$1)].join('')));

}

var G__35799 = (__35777 + (1));
__35777 = G__35799;
continue;
} else {
}
break;
}

var c__35451__auto___35800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___35800,jobs,results,process,async){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___35800,jobs,results,process,async){
return (function (state_35690){
var state_val_35691 = (state_35690[(1)]);
if((state_val_35691 === (1))){
var state_35690__$1 = state_35690;
var statearr_35692_35801 = state_35690__$1;
(statearr_35692_35801[(2)] = null);

(statearr_35692_35801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (2))){
var state_35690__$1 = state_35690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35690__$1,(4),from);
} else {
if((state_val_35691 === (3))){
var inst_35688 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35690__$1,inst_35688);
} else {
if((state_val_35691 === (4))){
var inst_35671 = (state_35690[(7)]);
var inst_35671__$1 = (state_35690[(2)]);
var inst_35672 = (inst_35671__$1 == null);
var state_35690__$1 = (function (){var statearr_35693 = state_35690;
(statearr_35693[(7)] = inst_35671__$1);

return statearr_35693;
})();
if(cljs.core.truth_(inst_35672)){
var statearr_35694_35802 = state_35690__$1;
(statearr_35694_35802[(1)] = (5));

} else {
var statearr_35695_35803 = state_35690__$1;
(statearr_35695_35803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (5))){
var inst_35674 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35690__$1 = state_35690;
var statearr_35696_35804 = state_35690__$1;
(statearr_35696_35804[(2)] = inst_35674);

(statearr_35696_35804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (6))){
var inst_35676 = (state_35690[(8)]);
var inst_35671 = (state_35690[(7)]);
var inst_35676__$1 = cljs.core.async.chan.call(null,(1));
var inst_35677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35678 = [inst_35671,inst_35676__$1];
var inst_35679 = (new cljs.core.PersistentVector(null,2,(5),inst_35677,inst_35678,null));
var state_35690__$1 = (function (){var statearr_35697 = state_35690;
(statearr_35697[(8)] = inst_35676__$1);

return statearr_35697;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35690__$1,(8),jobs,inst_35679);
} else {
if((state_val_35691 === (7))){
var inst_35686 = (state_35690[(2)]);
var state_35690__$1 = state_35690;
var statearr_35698_35805 = state_35690__$1;
(statearr_35698_35805[(2)] = inst_35686);

(statearr_35698_35805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35691 === (8))){
var inst_35676 = (state_35690[(8)]);
var inst_35681 = (state_35690[(2)]);
var state_35690__$1 = (function (){var statearr_35699 = state_35690;
(statearr_35699[(9)] = inst_35681);

return statearr_35699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35690__$1,(9),results,inst_35676);
} else {
if((state_val_35691 === (9))){
var inst_35683 = (state_35690[(2)]);
var state_35690__$1 = (function (){var statearr_35700 = state_35690;
(statearr_35700[(10)] = inst_35683);

return statearr_35700;
})();
var statearr_35701_35806 = state_35690__$1;
(statearr_35701_35806[(2)] = null);

(statearr_35701_35806[(1)] = (2));


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
});})(c__35451__auto___35800,jobs,results,process,async))
;
return ((function (switch__35363__auto__,c__35451__auto___35800,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0 = (function (){
var statearr_35702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__);

(statearr_35702[(1)] = (1));

return statearr_35702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1 = (function (state_35690){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35703){if((e35703 instanceof Object)){
var ex__35367__auto__ = e35703;
var statearr_35704_35807 = state_35690;
(statearr_35704_35807[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35808 = state_35690;
state_35690 = G__35808;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = function(state_35690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1.call(this,state_35690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___35800,jobs,results,process,async))
})();
var state__35453__auto__ = (function (){var statearr_35705 = f__35452__auto__.call(null);
(statearr_35705[(6)] = c__35451__auto___35800);

return statearr_35705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___35800,jobs,results,process,async))
);


var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__,jobs,results,process,async){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__,jobs,results,process,async){
return (function (state_35743){
var state_val_35744 = (state_35743[(1)]);
if((state_val_35744 === (7))){
var inst_35739 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35745_35809 = state_35743__$1;
(statearr_35745_35809[(2)] = inst_35739);

(statearr_35745_35809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (20))){
var state_35743__$1 = state_35743;
var statearr_35746_35810 = state_35743__$1;
(statearr_35746_35810[(2)] = null);

(statearr_35746_35810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (1))){
var state_35743__$1 = state_35743;
var statearr_35747_35811 = state_35743__$1;
(statearr_35747_35811[(2)] = null);

(statearr_35747_35811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (4))){
var inst_35708 = (state_35743[(7)]);
var inst_35708__$1 = (state_35743[(2)]);
var inst_35709 = (inst_35708__$1 == null);
var state_35743__$1 = (function (){var statearr_35748 = state_35743;
(statearr_35748[(7)] = inst_35708__$1);

return statearr_35748;
})();
if(cljs.core.truth_(inst_35709)){
var statearr_35749_35812 = state_35743__$1;
(statearr_35749_35812[(1)] = (5));

} else {
var statearr_35750_35813 = state_35743__$1;
(statearr_35750_35813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (15))){
var inst_35721 = (state_35743[(8)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35743__$1,(18),to,inst_35721);
} else {
if((state_val_35744 === (21))){
var inst_35734 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35751_35814 = state_35743__$1;
(statearr_35751_35814[(2)] = inst_35734);

(statearr_35751_35814[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (13))){
var inst_35736 = (state_35743[(2)]);
var state_35743__$1 = (function (){var statearr_35752 = state_35743;
(statearr_35752[(9)] = inst_35736);

return statearr_35752;
})();
var statearr_35753_35815 = state_35743__$1;
(statearr_35753_35815[(2)] = null);

(statearr_35753_35815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (6))){
var inst_35708 = (state_35743[(7)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35743__$1,(11),inst_35708);
} else {
if((state_val_35744 === (17))){
var inst_35729 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
if(cljs.core.truth_(inst_35729)){
var statearr_35754_35816 = state_35743__$1;
(statearr_35754_35816[(1)] = (19));

} else {
var statearr_35755_35817 = state_35743__$1;
(statearr_35755_35817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (3))){
var inst_35741 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35743__$1,inst_35741);
} else {
if((state_val_35744 === (12))){
var inst_35718 = (state_35743[(10)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35743__$1,(14),inst_35718);
} else {
if((state_val_35744 === (2))){
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35743__$1,(4),results);
} else {
if((state_val_35744 === (19))){
var state_35743__$1 = state_35743;
var statearr_35756_35818 = state_35743__$1;
(statearr_35756_35818[(2)] = null);

(statearr_35756_35818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (11))){
var inst_35718 = (state_35743[(2)]);
var state_35743__$1 = (function (){var statearr_35757 = state_35743;
(statearr_35757[(10)] = inst_35718);

return statearr_35757;
})();
var statearr_35758_35819 = state_35743__$1;
(statearr_35758_35819[(2)] = null);

(statearr_35758_35819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (9))){
var state_35743__$1 = state_35743;
var statearr_35759_35820 = state_35743__$1;
(statearr_35759_35820[(2)] = null);

(statearr_35759_35820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (5))){
var state_35743__$1 = state_35743;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35760_35821 = state_35743__$1;
(statearr_35760_35821[(1)] = (8));

} else {
var statearr_35761_35822 = state_35743__$1;
(statearr_35761_35822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (14))){
var inst_35723 = (state_35743[(11)]);
var inst_35721 = (state_35743[(8)]);
var inst_35721__$1 = (state_35743[(2)]);
var inst_35722 = (inst_35721__$1 == null);
var inst_35723__$1 = cljs.core.not.call(null,inst_35722);
var state_35743__$1 = (function (){var statearr_35762 = state_35743;
(statearr_35762[(11)] = inst_35723__$1);

(statearr_35762[(8)] = inst_35721__$1);

return statearr_35762;
})();
if(inst_35723__$1){
var statearr_35763_35823 = state_35743__$1;
(statearr_35763_35823[(1)] = (15));

} else {
var statearr_35764_35824 = state_35743__$1;
(statearr_35764_35824[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (16))){
var inst_35723 = (state_35743[(11)]);
var state_35743__$1 = state_35743;
var statearr_35765_35825 = state_35743__$1;
(statearr_35765_35825[(2)] = inst_35723);

(statearr_35765_35825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (10))){
var inst_35715 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35766_35826 = state_35743__$1;
(statearr_35766_35826[(2)] = inst_35715);

(statearr_35766_35826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (18))){
var inst_35726 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35767_35827 = state_35743__$1;
(statearr_35767_35827[(2)] = inst_35726);

(statearr_35767_35827[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (8))){
var inst_35712 = cljs.core.async.close_BANG_.call(null,to);
var state_35743__$1 = state_35743;
var statearr_35768_35828 = state_35743__$1;
(statearr_35768_35828[(2)] = inst_35712);

(statearr_35768_35828[(1)] = (10));


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
});})(c__35451__auto__,jobs,results,process,async))
;
return ((function (switch__35363__auto__,c__35451__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0 = (function (){
var statearr_35769 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__);

(statearr_35769[(1)] = (1));

return statearr_35769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1 = (function (state_35743){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35770){if((e35770 instanceof Object)){
var ex__35367__auto__ = e35770;
var statearr_35771_35829 = state_35743;
(statearr_35771_35829[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35830 = state_35743;
state_35743 = G__35830;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__ = function(state_35743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1.call(this,state_35743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35364__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__,jobs,results,process,async))
})();
var state__35453__auto__ = (function (){var statearr_35772 = f__35452__auto__.call(null);
(statearr_35772[(6)] = c__35451__auto__);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__,jobs,results,process,async))
);

return c__35451__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35832 = arguments.length;
switch (G__35832) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35835 = arguments.length;
switch (G__35835) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35838 = arguments.length;
switch (G__35838) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35451__auto___35887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___35887,tc,fc){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___35887,tc,fc){
return (function (state_35864){
var state_val_35865 = (state_35864[(1)]);
if((state_val_35865 === (7))){
var inst_35860 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35866_35888 = state_35864__$1;
(statearr_35866_35888[(2)] = inst_35860);

(statearr_35866_35888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (1))){
var state_35864__$1 = state_35864;
var statearr_35867_35889 = state_35864__$1;
(statearr_35867_35889[(2)] = null);

(statearr_35867_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (4))){
var inst_35841 = (state_35864[(7)]);
var inst_35841__$1 = (state_35864[(2)]);
var inst_35842 = (inst_35841__$1 == null);
var state_35864__$1 = (function (){var statearr_35868 = state_35864;
(statearr_35868[(7)] = inst_35841__$1);

return statearr_35868;
})();
if(cljs.core.truth_(inst_35842)){
var statearr_35869_35890 = state_35864__$1;
(statearr_35869_35890[(1)] = (5));

} else {
var statearr_35870_35891 = state_35864__$1;
(statearr_35870_35891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (13))){
var state_35864__$1 = state_35864;
var statearr_35871_35892 = state_35864__$1;
(statearr_35871_35892[(2)] = null);

(statearr_35871_35892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (6))){
var inst_35841 = (state_35864[(7)]);
var inst_35847 = p.call(null,inst_35841);
var state_35864__$1 = state_35864;
if(cljs.core.truth_(inst_35847)){
var statearr_35872_35893 = state_35864__$1;
(statearr_35872_35893[(1)] = (9));

} else {
var statearr_35873_35894 = state_35864__$1;
(statearr_35873_35894[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (3))){
var inst_35862 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35864__$1,inst_35862);
} else {
if((state_val_35865 === (12))){
var state_35864__$1 = state_35864;
var statearr_35874_35895 = state_35864__$1;
(statearr_35874_35895[(2)] = null);

(statearr_35874_35895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (2))){
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35864__$1,(4),ch);
} else {
if((state_val_35865 === (11))){
var inst_35841 = (state_35864[(7)]);
var inst_35851 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35864__$1,(8),inst_35851,inst_35841);
} else {
if((state_val_35865 === (9))){
var state_35864__$1 = state_35864;
var statearr_35875_35896 = state_35864__$1;
(statearr_35875_35896[(2)] = tc);

(statearr_35875_35896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (5))){
var inst_35844 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35845 = cljs.core.async.close_BANG_.call(null,fc);
var state_35864__$1 = (function (){var statearr_35876 = state_35864;
(statearr_35876[(8)] = inst_35844);

return statearr_35876;
})();
var statearr_35877_35897 = state_35864__$1;
(statearr_35877_35897[(2)] = inst_35845);

(statearr_35877_35897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (14))){
var inst_35858 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
var statearr_35878_35898 = state_35864__$1;
(statearr_35878_35898[(2)] = inst_35858);

(statearr_35878_35898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (10))){
var state_35864__$1 = state_35864;
var statearr_35879_35899 = state_35864__$1;
(statearr_35879_35899[(2)] = fc);

(statearr_35879_35899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35865 === (8))){
var inst_35853 = (state_35864[(2)]);
var state_35864__$1 = state_35864;
if(cljs.core.truth_(inst_35853)){
var statearr_35880_35900 = state_35864__$1;
(statearr_35880_35900[(1)] = (12));

} else {
var statearr_35881_35901 = state_35864__$1;
(statearr_35881_35901[(1)] = (13));

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
});})(c__35451__auto___35887,tc,fc))
;
return ((function (switch__35363__auto__,c__35451__auto___35887,tc,fc){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_35882 = [null,null,null,null,null,null,null,null,null];
(statearr_35882[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_35882[(1)] = (1));

return statearr_35882;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_35864){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35883){if((e35883 instanceof Object)){
var ex__35367__auto__ = e35883;
var statearr_35884_35902 = state_35864;
(statearr_35884_35902[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35903 = state_35864;
state_35864 = G__35903;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_35864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_35864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___35887,tc,fc))
})();
var state__35453__auto__ = (function (){var statearr_35885 = f__35452__auto__.call(null);
(statearr_35885[(6)] = c__35451__auto___35887);

return statearr_35885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___35887,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__){
return (function (state_35924){
var state_val_35925 = (state_35924[(1)]);
if((state_val_35925 === (7))){
var inst_35920 = (state_35924[(2)]);
var state_35924__$1 = state_35924;
var statearr_35926_35944 = state_35924__$1;
(statearr_35926_35944[(2)] = inst_35920);

(statearr_35926_35944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (1))){
var inst_35904 = init;
var state_35924__$1 = (function (){var statearr_35927 = state_35924;
(statearr_35927[(7)] = inst_35904);

return statearr_35927;
})();
var statearr_35928_35945 = state_35924__$1;
(statearr_35928_35945[(2)] = null);

(statearr_35928_35945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (4))){
var inst_35907 = (state_35924[(8)]);
var inst_35907__$1 = (state_35924[(2)]);
var inst_35908 = (inst_35907__$1 == null);
var state_35924__$1 = (function (){var statearr_35929 = state_35924;
(statearr_35929[(8)] = inst_35907__$1);

return statearr_35929;
})();
if(cljs.core.truth_(inst_35908)){
var statearr_35930_35946 = state_35924__$1;
(statearr_35930_35946[(1)] = (5));

} else {
var statearr_35931_35947 = state_35924__$1;
(statearr_35931_35947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (6))){
var inst_35907 = (state_35924[(8)]);
var inst_35904 = (state_35924[(7)]);
var inst_35911 = (state_35924[(9)]);
var inst_35911__$1 = f.call(null,inst_35904,inst_35907);
var inst_35912 = cljs.core.reduced_QMARK_.call(null,inst_35911__$1);
var state_35924__$1 = (function (){var statearr_35932 = state_35924;
(statearr_35932[(9)] = inst_35911__$1);

return statearr_35932;
})();
if(inst_35912){
var statearr_35933_35948 = state_35924__$1;
(statearr_35933_35948[(1)] = (8));

} else {
var statearr_35934_35949 = state_35924__$1;
(statearr_35934_35949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (3))){
var inst_35922 = (state_35924[(2)]);
var state_35924__$1 = state_35924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35924__$1,inst_35922);
} else {
if((state_val_35925 === (2))){
var state_35924__$1 = state_35924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35924__$1,(4),ch);
} else {
if((state_val_35925 === (9))){
var inst_35911 = (state_35924[(9)]);
var inst_35904 = inst_35911;
var state_35924__$1 = (function (){var statearr_35935 = state_35924;
(statearr_35935[(7)] = inst_35904);

return statearr_35935;
})();
var statearr_35936_35950 = state_35924__$1;
(statearr_35936_35950[(2)] = null);

(statearr_35936_35950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (5))){
var inst_35904 = (state_35924[(7)]);
var state_35924__$1 = state_35924;
var statearr_35937_35951 = state_35924__$1;
(statearr_35937_35951[(2)] = inst_35904);

(statearr_35937_35951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (10))){
var inst_35918 = (state_35924[(2)]);
var state_35924__$1 = state_35924;
var statearr_35938_35952 = state_35924__$1;
(statearr_35938_35952[(2)] = inst_35918);

(statearr_35938_35952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35925 === (8))){
var inst_35911 = (state_35924[(9)]);
var inst_35914 = cljs.core.deref.call(null,inst_35911);
var state_35924__$1 = state_35924;
var statearr_35939_35953 = state_35924__$1;
(statearr_35939_35953[(2)] = inst_35914);

(statearr_35939_35953[(1)] = (10));


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
});})(c__35451__auto__))
;
return ((function (switch__35363__auto__,c__35451__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35364__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35364__auto____0 = (function (){
var statearr_35940 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35940[(0)] = cljs$core$async$reduce_$_state_machine__35364__auto__);

(statearr_35940[(1)] = (1));

return statearr_35940;
});
var cljs$core$async$reduce_$_state_machine__35364__auto____1 = (function (state_35924){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35941){if((e35941 instanceof Object)){
var ex__35367__auto__ = e35941;
var statearr_35942_35954 = state_35924;
(statearr_35942_35954[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35955 = state_35924;
state_35924 = G__35955;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35364__auto__ = function(state_35924){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35364__auto____1.call(this,state_35924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35364__auto____0;
cljs$core$async$reduce_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35364__auto____1;
return cljs$core$async$reduce_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__))
})();
var state__35453__auto__ = (function (){var statearr_35943 = f__35452__auto__.call(null);
(statearr_35943[(6)] = c__35451__auto__);

return statearr_35943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__))
);

return c__35451__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__,f__$1){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__,f__$1){
return (function (state_35961){
var state_val_35962 = (state_35961[(1)]);
if((state_val_35962 === (1))){
var inst_35956 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35961__$1,(2),inst_35956);
} else {
if((state_val_35962 === (2))){
var inst_35958 = (state_35961[(2)]);
var inst_35959 = f__$1.call(null,inst_35958);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35961__$1,inst_35959);
} else {
return null;
}
}
});})(c__35451__auto__,f__$1))
;
return ((function (switch__35363__auto__,c__35451__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35364__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35364__auto____0 = (function (){
var statearr_35963 = [null,null,null,null,null,null,null];
(statearr_35963[(0)] = cljs$core$async$transduce_$_state_machine__35364__auto__);

(statearr_35963[(1)] = (1));

return statearr_35963;
});
var cljs$core$async$transduce_$_state_machine__35364__auto____1 = (function (state_35961){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e35964){if((e35964 instanceof Object)){
var ex__35367__auto__ = e35964;
var statearr_35965_35967 = state_35961;
(statearr_35965_35967[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35968 = state_35961;
state_35961 = G__35968;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35364__auto__ = function(state_35961){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35364__auto____1.call(this,state_35961);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35364__auto____0;
cljs$core$async$transduce_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35364__auto____1;
return cljs$core$async$transduce_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__,f__$1))
})();
var state__35453__auto__ = (function (){var statearr_35966 = f__35452__auto__.call(null);
(statearr_35966[(6)] = c__35451__auto__);

return statearr_35966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__,f__$1))
);

return c__35451__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35970 = arguments.length;
switch (G__35970) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__){
return (function (state_35995){
var state_val_35996 = (state_35995[(1)]);
if((state_val_35996 === (7))){
var inst_35977 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_35997_36018 = state_35995__$1;
(statearr_35997_36018[(2)] = inst_35977);

(statearr_35997_36018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (1))){
var inst_35971 = cljs.core.seq.call(null,coll);
var inst_35972 = inst_35971;
var state_35995__$1 = (function (){var statearr_35998 = state_35995;
(statearr_35998[(7)] = inst_35972);

return statearr_35998;
})();
var statearr_35999_36019 = state_35995__$1;
(statearr_35999_36019[(2)] = null);

(statearr_35999_36019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (4))){
var inst_35972 = (state_35995[(7)]);
var inst_35975 = cljs.core.first.call(null,inst_35972);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35995__$1,(7),ch,inst_35975);
} else {
if((state_val_35996 === (13))){
var inst_35989 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36000_36020 = state_35995__$1;
(statearr_36000_36020[(2)] = inst_35989);

(statearr_36000_36020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (6))){
var inst_35980 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35980)){
var statearr_36001_36021 = state_35995__$1;
(statearr_36001_36021[(1)] = (8));

} else {
var statearr_36002_36022 = state_35995__$1;
(statearr_36002_36022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (3))){
var inst_35993 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35995__$1,inst_35993);
} else {
if((state_val_35996 === (12))){
var state_35995__$1 = state_35995;
var statearr_36003_36023 = state_35995__$1;
(statearr_36003_36023[(2)] = null);

(statearr_36003_36023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (2))){
var inst_35972 = (state_35995[(7)]);
var state_35995__$1 = state_35995;
if(cljs.core.truth_(inst_35972)){
var statearr_36004_36024 = state_35995__$1;
(statearr_36004_36024[(1)] = (4));

} else {
var statearr_36005_36025 = state_35995__$1;
(statearr_36005_36025[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (11))){
var inst_35986 = cljs.core.async.close_BANG_.call(null,ch);
var state_35995__$1 = state_35995;
var statearr_36006_36026 = state_35995__$1;
(statearr_36006_36026[(2)] = inst_35986);

(statearr_36006_36026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (9))){
var state_35995__$1 = state_35995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36007_36027 = state_35995__$1;
(statearr_36007_36027[(1)] = (11));

} else {
var statearr_36008_36028 = state_35995__$1;
(statearr_36008_36028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (5))){
var inst_35972 = (state_35995[(7)]);
var state_35995__$1 = state_35995;
var statearr_36009_36029 = state_35995__$1;
(statearr_36009_36029[(2)] = inst_35972);

(statearr_36009_36029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (10))){
var inst_35991 = (state_35995[(2)]);
var state_35995__$1 = state_35995;
var statearr_36010_36030 = state_35995__$1;
(statearr_36010_36030[(2)] = inst_35991);

(statearr_36010_36030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35996 === (8))){
var inst_35972 = (state_35995[(7)]);
var inst_35982 = cljs.core.next.call(null,inst_35972);
var inst_35972__$1 = inst_35982;
var state_35995__$1 = (function (){var statearr_36011 = state_35995;
(statearr_36011[(7)] = inst_35972__$1);

return statearr_36011;
})();
var statearr_36012_36031 = state_35995__$1;
(statearr_36012_36031[(2)] = null);

(statearr_36012_36031[(1)] = (2));


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
});})(c__35451__auto__))
;
return ((function (switch__35363__auto__,c__35451__auto__){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_36013 = [null,null,null,null,null,null,null,null];
(statearr_36013[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_36013[(1)] = (1));

return statearr_36013;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_35995){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_35995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36014){if((e36014 instanceof Object)){
var ex__35367__auto__ = e36014;
var statearr_36015_36032 = state_35995;
(statearr_36015_36032[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36033 = state_35995;
state_35995 = G__36033;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_35995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_35995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__))
})();
var state__35453__auto__ = (function (){var statearr_36016 = f__35452__auto__.call(null);
(statearr_36016[(6)] = c__35451__auto__);

return statearr_36016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__))
);

return c__35451__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29141__auto__ = (((_ == null))?null:_);
var m__29142__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,_);
} else {
var m__29142__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29142__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m,ch);
} else {
var m__29142__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m);
} else {
var m__29142__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36034 = (function (ch,cs,meta36035){
this.ch = ch;
this.cs = cs;
this.meta36035 = meta36035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36036,meta36035__$1){
var self__ = this;
var _36036__$1 = this;
return (new cljs.core.async.t_cljs$core$async36034(self__.ch,self__.cs,meta36035__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36036){
var self__ = this;
var _36036__$1 = this;
return self__.meta36035;
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36035","meta36035",2044917336,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36034";

cljs.core.async.t_cljs$core$async36034.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36034");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async36034 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36034(ch__$1,cs__$1,meta36035){
return (new cljs.core.async.t_cljs$core$async36034(ch__$1,cs__$1,meta36035));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36034(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35451__auto___36256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36256,cs,m,dchan,dctr,done){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36256,cs,m,dchan,dctr,done){
return (function (state_36171){
var state_val_36172 = (state_36171[(1)]);
if((state_val_36172 === (7))){
var inst_36167 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36173_36257 = state_36171__$1;
(statearr_36173_36257[(2)] = inst_36167);

(statearr_36173_36257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (20))){
var inst_36070 = (state_36171[(7)]);
var inst_36082 = cljs.core.first.call(null,inst_36070);
var inst_36083 = cljs.core.nth.call(null,inst_36082,(0),null);
var inst_36084 = cljs.core.nth.call(null,inst_36082,(1),null);
var state_36171__$1 = (function (){var statearr_36174 = state_36171;
(statearr_36174[(8)] = inst_36083);

return statearr_36174;
})();
if(cljs.core.truth_(inst_36084)){
var statearr_36175_36258 = state_36171__$1;
(statearr_36175_36258[(1)] = (22));

} else {
var statearr_36176_36259 = state_36171__$1;
(statearr_36176_36259[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (27))){
var inst_36112 = (state_36171[(9)]);
var inst_36114 = (state_36171[(10)]);
var inst_36039 = (state_36171[(11)]);
var inst_36119 = (state_36171[(12)]);
var inst_36119__$1 = cljs.core._nth.call(null,inst_36112,inst_36114);
var inst_36120 = cljs.core.async.put_BANG_.call(null,inst_36119__$1,inst_36039,done);
var state_36171__$1 = (function (){var statearr_36177 = state_36171;
(statearr_36177[(12)] = inst_36119__$1);

return statearr_36177;
})();
if(cljs.core.truth_(inst_36120)){
var statearr_36178_36260 = state_36171__$1;
(statearr_36178_36260[(1)] = (30));

} else {
var statearr_36179_36261 = state_36171__$1;
(statearr_36179_36261[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (1))){
var state_36171__$1 = state_36171;
var statearr_36180_36262 = state_36171__$1;
(statearr_36180_36262[(2)] = null);

(statearr_36180_36262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (24))){
var inst_36070 = (state_36171[(7)]);
var inst_36089 = (state_36171[(2)]);
var inst_36090 = cljs.core.next.call(null,inst_36070);
var inst_36048 = inst_36090;
var inst_36049 = null;
var inst_36050 = (0);
var inst_36051 = (0);
var state_36171__$1 = (function (){var statearr_36181 = state_36171;
(statearr_36181[(13)] = inst_36049);

(statearr_36181[(14)] = inst_36050);

(statearr_36181[(15)] = inst_36051);

(statearr_36181[(16)] = inst_36048);

(statearr_36181[(17)] = inst_36089);

return statearr_36181;
})();
var statearr_36182_36263 = state_36171__$1;
(statearr_36182_36263[(2)] = null);

(statearr_36182_36263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (39))){
var state_36171__$1 = state_36171;
var statearr_36186_36264 = state_36171__$1;
(statearr_36186_36264[(2)] = null);

(statearr_36186_36264[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (4))){
var inst_36039 = (state_36171[(11)]);
var inst_36039__$1 = (state_36171[(2)]);
var inst_36040 = (inst_36039__$1 == null);
var state_36171__$1 = (function (){var statearr_36187 = state_36171;
(statearr_36187[(11)] = inst_36039__$1);

return statearr_36187;
})();
if(cljs.core.truth_(inst_36040)){
var statearr_36188_36265 = state_36171__$1;
(statearr_36188_36265[(1)] = (5));

} else {
var statearr_36189_36266 = state_36171__$1;
(statearr_36189_36266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (15))){
var inst_36049 = (state_36171[(13)]);
var inst_36050 = (state_36171[(14)]);
var inst_36051 = (state_36171[(15)]);
var inst_36048 = (state_36171[(16)]);
var inst_36066 = (state_36171[(2)]);
var inst_36067 = (inst_36051 + (1));
var tmp36183 = inst_36049;
var tmp36184 = inst_36050;
var tmp36185 = inst_36048;
var inst_36048__$1 = tmp36185;
var inst_36049__$1 = tmp36183;
var inst_36050__$1 = tmp36184;
var inst_36051__$1 = inst_36067;
var state_36171__$1 = (function (){var statearr_36190 = state_36171;
(statearr_36190[(13)] = inst_36049__$1);

(statearr_36190[(18)] = inst_36066);

(statearr_36190[(14)] = inst_36050__$1);

(statearr_36190[(15)] = inst_36051__$1);

(statearr_36190[(16)] = inst_36048__$1);

return statearr_36190;
})();
var statearr_36191_36267 = state_36171__$1;
(statearr_36191_36267[(2)] = null);

(statearr_36191_36267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (21))){
var inst_36093 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36195_36268 = state_36171__$1;
(statearr_36195_36268[(2)] = inst_36093);

(statearr_36195_36268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (31))){
var inst_36119 = (state_36171[(12)]);
var inst_36123 = done.call(null,null);
var inst_36124 = cljs.core.async.untap_STAR_.call(null,m,inst_36119);
var state_36171__$1 = (function (){var statearr_36196 = state_36171;
(statearr_36196[(19)] = inst_36123);

return statearr_36196;
})();
var statearr_36197_36269 = state_36171__$1;
(statearr_36197_36269[(2)] = inst_36124);

(statearr_36197_36269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (32))){
var inst_36112 = (state_36171[(9)]);
var inst_36113 = (state_36171[(20)]);
var inst_36114 = (state_36171[(10)]);
var inst_36111 = (state_36171[(21)]);
var inst_36126 = (state_36171[(2)]);
var inst_36127 = (inst_36114 + (1));
var tmp36192 = inst_36112;
var tmp36193 = inst_36113;
var tmp36194 = inst_36111;
var inst_36111__$1 = tmp36194;
var inst_36112__$1 = tmp36192;
var inst_36113__$1 = tmp36193;
var inst_36114__$1 = inst_36127;
var state_36171__$1 = (function (){var statearr_36198 = state_36171;
(statearr_36198[(9)] = inst_36112__$1);

(statearr_36198[(20)] = inst_36113__$1);

(statearr_36198[(10)] = inst_36114__$1);

(statearr_36198[(22)] = inst_36126);

(statearr_36198[(21)] = inst_36111__$1);

return statearr_36198;
})();
var statearr_36199_36270 = state_36171__$1;
(statearr_36199_36270[(2)] = null);

(statearr_36199_36270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (40))){
var inst_36139 = (state_36171[(23)]);
var inst_36143 = done.call(null,null);
var inst_36144 = cljs.core.async.untap_STAR_.call(null,m,inst_36139);
var state_36171__$1 = (function (){var statearr_36200 = state_36171;
(statearr_36200[(24)] = inst_36143);

return statearr_36200;
})();
var statearr_36201_36271 = state_36171__$1;
(statearr_36201_36271[(2)] = inst_36144);

(statearr_36201_36271[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (33))){
var inst_36130 = (state_36171[(25)]);
var inst_36132 = cljs.core.chunked_seq_QMARK_.call(null,inst_36130);
var state_36171__$1 = state_36171;
if(inst_36132){
var statearr_36202_36272 = state_36171__$1;
(statearr_36202_36272[(1)] = (36));

} else {
var statearr_36203_36273 = state_36171__$1;
(statearr_36203_36273[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (13))){
var inst_36060 = (state_36171[(26)]);
var inst_36063 = cljs.core.async.close_BANG_.call(null,inst_36060);
var state_36171__$1 = state_36171;
var statearr_36204_36274 = state_36171__$1;
(statearr_36204_36274[(2)] = inst_36063);

(statearr_36204_36274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (22))){
var inst_36083 = (state_36171[(8)]);
var inst_36086 = cljs.core.async.close_BANG_.call(null,inst_36083);
var state_36171__$1 = state_36171;
var statearr_36205_36275 = state_36171__$1;
(statearr_36205_36275[(2)] = inst_36086);

(statearr_36205_36275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (36))){
var inst_36130 = (state_36171[(25)]);
var inst_36134 = cljs.core.chunk_first.call(null,inst_36130);
var inst_36135 = cljs.core.chunk_rest.call(null,inst_36130);
var inst_36136 = cljs.core.count.call(null,inst_36134);
var inst_36111 = inst_36135;
var inst_36112 = inst_36134;
var inst_36113 = inst_36136;
var inst_36114 = (0);
var state_36171__$1 = (function (){var statearr_36206 = state_36171;
(statearr_36206[(9)] = inst_36112);

(statearr_36206[(20)] = inst_36113);

(statearr_36206[(10)] = inst_36114);

(statearr_36206[(21)] = inst_36111);

return statearr_36206;
})();
var statearr_36207_36276 = state_36171__$1;
(statearr_36207_36276[(2)] = null);

(statearr_36207_36276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (41))){
var inst_36130 = (state_36171[(25)]);
var inst_36146 = (state_36171[(2)]);
var inst_36147 = cljs.core.next.call(null,inst_36130);
var inst_36111 = inst_36147;
var inst_36112 = null;
var inst_36113 = (0);
var inst_36114 = (0);
var state_36171__$1 = (function (){var statearr_36208 = state_36171;
(statearr_36208[(9)] = inst_36112);

(statearr_36208[(20)] = inst_36113);

(statearr_36208[(10)] = inst_36114);

(statearr_36208[(27)] = inst_36146);

(statearr_36208[(21)] = inst_36111);

return statearr_36208;
})();
var statearr_36209_36277 = state_36171__$1;
(statearr_36209_36277[(2)] = null);

(statearr_36209_36277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (43))){
var state_36171__$1 = state_36171;
var statearr_36210_36278 = state_36171__$1;
(statearr_36210_36278[(2)] = null);

(statearr_36210_36278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (29))){
var inst_36155 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36211_36279 = state_36171__$1;
(statearr_36211_36279[(2)] = inst_36155);

(statearr_36211_36279[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (44))){
var inst_36164 = (state_36171[(2)]);
var state_36171__$1 = (function (){var statearr_36212 = state_36171;
(statearr_36212[(28)] = inst_36164);

return statearr_36212;
})();
var statearr_36213_36280 = state_36171__$1;
(statearr_36213_36280[(2)] = null);

(statearr_36213_36280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (6))){
var inst_36103 = (state_36171[(29)]);
var inst_36102 = cljs.core.deref.call(null,cs);
var inst_36103__$1 = cljs.core.keys.call(null,inst_36102);
var inst_36104 = cljs.core.count.call(null,inst_36103__$1);
var inst_36105 = cljs.core.reset_BANG_.call(null,dctr,inst_36104);
var inst_36110 = cljs.core.seq.call(null,inst_36103__$1);
var inst_36111 = inst_36110;
var inst_36112 = null;
var inst_36113 = (0);
var inst_36114 = (0);
var state_36171__$1 = (function (){var statearr_36214 = state_36171;
(statearr_36214[(9)] = inst_36112);

(statearr_36214[(20)] = inst_36113);

(statearr_36214[(10)] = inst_36114);

(statearr_36214[(29)] = inst_36103__$1);

(statearr_36214[(30)] = inst_36105);

(statearr_36214[(21)] = inst_36111);

return statearr_36214;
})();
var statearr_36215_36281 = state_36171__$1;
(statearr_36215_36281[(2)] = null);

(statearr_36215_36281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (28))){
var inst_36130 = (state_36171[(25)]);
var inst_36111 = (state_36171[(21)]);
var inst_36130__$1 = cljs.core.seq.call(null,inst_36111);
var state_36171__$1 = (function (){var statearr_36216 = state_36171;
(statearr_36216[(25)] = inst_36130__$1);

return statearr_36216;
})();
if(inst_36130__$1){
var statearr_36217_36282 = state_36171__$1;
(statearr_36217_36282[(1)] = (33));

} else {
var statearr_36218_36283 = state_36171__$1;
(statearr_36218_36283[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (25))){
var inst_36113 = (state_36171[(20)]);
var inst_36114 = (state_36171[(10)]);
var inst_36116 = (inst_36114 < inst_36113);
var inst_36117 = inst_36116;
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36117)){
var statearr_36219_36284 = state_36171__$1;
(statearr_36219_36284[(1)] = (27));

} else {
var statearr_36220_36285 = state_36171__$1;
(statearr_36220_36285[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (34))){
var state_36171__$1 = state_36171;
var statearr_36221_36286 = state_36171__$1;
(statearr_36221_36286[(2)] = null);

(statearr_36221_36286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (17))){
var state_36171__$1 = state_36171;
var statearr_36222_36287 = state_36171__$1;
(statearr_36222_36287[(2)] = null);

(statearr_36222_36287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (3))){
var inst_36169 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36171__$1,inst_36169);
} else {
if((state_val_36172 === (12))){
var inst_36098 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36223_36288 = state_36171__$1;
(statearr_36223_36288[(2)] = inst_36098);

(statearr_36223_36288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (2))){
var state_36171__$1 = state_36171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36171__$1,(4),ch);
} else {
if((state_val_36172 === (23))){
var state_36171__$1 = state_36171;
var statearr_36224_36289 = state_36171__$1;
(statearr_36224_36289[(2)] = null);

(statearr_36224_36289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (35))){
var inst_36153 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36225_36290 = state_36171__$1;
(statearr_36225_36290[(2)] = inst_36153);

(statearr_36225_36290[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (19))){
var inst_36070 = (state_36171[(7)]);
var inst_36074 = cljs.core.chunk_first.call(null,inst_36070);
var inst_36075 = cljs.core.chunk_rest.call(null,inst_36070);
var inst_36076 = cljs.core.count.call(null,inst_36074);
var inst_36048 = inst_36075;
var inst_36049 = inst_36074;
var inst_36050 = inst_36076;
var inst_36051 = (0);
var state_36171__$1 = (function (){var statearr_36226 = state_36171;
(statearr_36226[(13)] = inst_36049);

(statearr_36226[(14)] = inst_36050);

(statearr_36226[(15)] = inst_36051);

(statearr_36226[(16)] = inst_36048);

return statearr_36226;
})();
var statearr_36227_36291 = state_36171__$1;
(statearr_36227_36291[(2)] = null);

(statearr_36227_36291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (11))){
var inst_36070 = (state_36171[(7)]);
var inst_36048 = (state_36171[(16)]);
var inst_36070__$1 = cljs.core.seq.call(null,inst_36048);
var state_36171__$1 = (function (){var statearr_36228 = state_36171;
(statearr_36228[(7)] = inst_36070__$1);

return statearr_36228;
})();
if(inst_36070__$1){
var statearr_36229_36292 = state_36171__$1;
(statearr_36229_36292[(1)] = (16));

} else {
var statearr_36230_36293 = state_36171__$1;
(statearr_36230_36293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (9))){
var inst_36100 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36231_36294 = state_36171__$1;
(statearr_36231_36294[(2)] = inst_36100);

(statearr_36231_36294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (5))){
var inst_36046 = cljs.core.deref.call(null,cs);
var inst_36047 = cljs.core.seq.call(null,inst_36046);
var inst_36048 = inst_36047;
var inst_36049 = null;
var inst_36050 = (0);
var inst_36051 = (0);
var state_36171__$1 = (function (){var statearr_36232 = state_36171;
(statearr_36232[(13)] = inst_36049);

(statearr_36232[(14)] = inst_36050);

(statearr_36232[(15)] = inst_36051);

(statearr_36232[(16)] = inst_36048);

return statearr_36232;
})();
var statearr_36233_36295 = state_36171__$1;
(statearr_36233_36295[(2)] = null);

(statearr_36233_36295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (14))){
var state_36171__$1 = state_36171;
var statearr_36234_36296 = state_36171__$1;
(statearr_36234_36296[(2)] = null);

(statearr_36234_36296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (45))){
var inst_36161 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36235_36297 = state_36171__$1;
(statearr_36235_36297[(2)] = inst_36161);

(statearr_36235_36297[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (26))){
var inst_36103 = (state_36171[(29)]);
var inst_36157 = (state_36171[(2)]);
var inst_36158 = cljs.core.seq.call(null,inst_36103);
var state_36171__$1 = (function (){var statearr_36236 = state_36171;
(statearr_36236[(31)] = inst_36157);

return statearr_36236;
})();
if(inst_36158){
var statearr_36237_36298 = state_36171__$1;
(statearr_36237_36298[(1)] = (42));

} else {
var statearr_36238_36299 = state_36171__$1;
(statearr_36238_36299[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (16))){
var inst_36070 = (state_36171[(7)]);
var inst_36072 = cljs.core.chunked_seq_QMARK_.call(null,inst_36070);
var state_36171__$1 = state_36171;
if(inst_36072){
var statearr_36239_36300 = state_36171__$1;
(statearr_36239_36300[(1)] = (19));

} else {
var statearr_36240_36301 = state_36171__$1;
(statearr_36240_36301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (38))){
var inst_36150 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36241_36302 = state_36171__$1;
(statearr_36241_36302[(2)] = inst_36150);

(statearr_36241_36302[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (30))){
var state_36171__$1 = state_36171;
var statearr_36242_36303 = state_36171__$1;
(statearr_36242_36303[(2)] = null);

(statearr_36242_36303[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (10))){
var inst_36049 = (state_36171[(13)]);
var inst_36051 = (state_36171[(15)]);
var inst_36059 = cljs.core._nth.call(null,inst_36049,inst_36051);
var inst_36060 = cljs.core.nth.call(null,inst_36059,(0),null);
var inst_36061 = cljs.core.nth.call(null,inst_36059,(1),null);
var state_36171__$1 = (function (){var statearr_36243 = state_36171;
(statearr_36243[(26)] = inst_36060);

return statearr_36243;
})();
if(cljs.core.truth_(inst_36061)){
var statearr_36244_36304 = state_36171__$1;
(statearr_36244_36304[(1)] = (13));

} else {
var statearr_36245_36305 = state_36171__$1;
(statearr_36245_36305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (18))){
var inst_36096 = (state_36171[(2)]);
var state_36171__$1 = state_36171;
var statearr_36246_36306 = state_36171__$1;
(statearr_36246_36306[(2)] = inst_36096);

(statearr_36246_36306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (42))){
var state_36171__$1 = state_36171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36171__$1,(45),dchan);
} else {
if((state_val_36172 === (37))){
var inst_36139 = (state_36171[(23)]);
var inst_36039 = (state_36171[(11)]);
var inst_36130 = (state_36171[(25)]);
var inst_36139__$1 = cljs.core.first.call(null,inst_36130);
var inst_36140 = cljs.core.async.put_BANG_.call(null,inst_36139__$1,inst_36039,done);
var state_36171__$1 = (function (){var statearr_36247 = state_36171;
(statearr_36247[(23)] = inst_36139__$1);

return statearr_36247;
})();
if(cljs.core.truth_(inst_36140)){
var statearr_36248_36307 = state_36171__$1;
(statearr_36248_36307[(1)] = (39));

} else {
var statearr_36249_36308 = state_36171__$1;
(statearr_36249_36308[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36172 === (8))){
var inst_36050 = (state_36171[(14)]);
var inst_36051 = (state_36171[(15)]);
var inst_36053 = (inst_36051 < inst_36050);
var inst_36054 = inst_36053;
var state_36171__$1 = state_36171;
if(cljs.core.truth_(inst_36054)){
var statearr_36250_36309 = state_36171__$1;
(statearr_36250_36309[(1)] = (10));

} else {
var statearr_36251_36310 = state_36171__$1;
(statearr_36251_36310[(1)] = (11));

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
});})(c__35451__auto___36256,cs,m,dchan,dctr,done))
;
return ((function (switch__35363__auto__,c__35451__auto___36256,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35364__auto__ = null;
var cljs$core$async$mult_$_state_machine__35364__auto____0 = (function (){
var statearr_36252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36252[(0)] = cljs$core$async$mult_$_state_machine__35364__auto__);

(statearr_36252[(1)] = (1));

return statearr_36252;
});
var cljs$core$async$mult_$_state_machine__35364__auto____1 = (function (state_36171){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36253){if((e36253 instanceof Object)){
var ex__35367__auto__ = e36253;
var statearr_36254_36311 = state_36171;
(statearr_36254_36311[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36312 = state_36171;
state_36171 = G__36312;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35364__auto__ = function(state_36171){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35364__auto____1.call(this,state_36171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35364__auto____0;
cljs$core$async$mult_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35364__auto____1;
return cljs$core$async$mult_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36256,cs,m,dchan,dctr,done))
})();
var state__35453__auto__ = (function (){var statearr_36255 = f__35452__auto__.call(null);
(statearr_36255[(6)] = c__35451__auto___36256);

return statearr_36255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36256,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36314 = arguments.length;
switch (G__36314) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m,ch);
} else {
var m__29142__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m,ch);
} else {
var m__29142__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m);
} else {
var m__29142__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m,state_map);
} else {
var m__29142__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29141__auto__ = (((m == null))?null:m);
var m__29142__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,m,mode);
} else {
var m__29142__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29634__auto__ = [];
var len__29627__auto___36326 = arguments.length;
var i__29628__auto___36327 = (0);
while(true){
if((i__29628__auto___36327 < len__29627__auto___36326)){
args__29634__auto__.push((arguments[i__29628__auto___36327]));

var G__36328 = (i__29628__auto___36327 + (1));
i__29628__auto___36327 = G__36328;
continue;
} else {
}
break;
}

var argseq__29635__auto__ = ((((3) < args__29634__auto__.length))?(new cljs.core.IndexedSeq(args__29634__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29635__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36320){
var map__36321 = p__36320;
var map__36321__$1 = ((((!((map__36321 == null)))?((((map__36321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36321):map__36321);
var opts = map__36321__$1;
var statearr_36323_36329 = state;
(statearr_36323_36329[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__36321,map__36321__$1,opts){
return (function (val){
var statearr_36324_36330 = state;
(statearr_36324_36330[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36321,map__36321__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_36325_36331 = state;
(statearr_36325_36331[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36316){
var G__36317 = cljs.core.first.call(null,seq36316);
var seq36316__$1 = cljs.core.next.call(null,seq36316);
var G__36318 = cljs.core.first.call(null,seq36316__$1);
var seq36316__$2 = cljs.core.next.call(null,seq36316__$1);
var G__36319 = cljs.core.first.call(null,seq36316__$2);
var seq36316__$3 = cljs.core.next.call(null,seq36316__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36317,G__36318,G__36319,seq36316__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36332 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36333){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36333 = meta36333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36334,meta36333__$1){
var self__ = this;
var _36334__$1 = this;
return (new cljs.core.async.t_cljs$core$async36332(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36333__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36334){
var self__ = this;
var _36334__$1 = this;
return self__.meta36333;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36333","meta36333",596044259,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36332";

cljs.core.async.t_cljs$core$async36332.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36332");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36332 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36332(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36333){
return (new cljs.core.async.t_cljs$core$async36332(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36333));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36332(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35451__auto___36496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36436){
var state_val_36437 = (state_36436[(1)]);
if((state_val_36437 === (7))){
var inst_36351 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36438_36497 = state_36436__$1;
(statearr_36438_36497[(2)] = inst_36351);

(statearr_36438_36497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (20))){
var inst_36363 = (state_36436[(7)]);
var state_36436__$1 = state_36436;
var statearr_36439_36498 = state_36436__$1;
(statearr_36439_36498[(2)] = inst_36363);

(statearr_36439_36498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (27))){
var state_36436__$1 = state_36436;
var statearr_36440_36499 = state_36436__$1;
(statearr_36440_36499[(2)] = null);

(statearr_36440_36499[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (1))){
var inst_36338 = (state_36436[(8)]);
var inst_36338__$1 = calc_state.call(null);
var inst_36340 = (inst_36338__$1 == null);
var inst_36341 = cljs.core.not.call(null,inst_36340);
var state_36436__$1 = (function (){var statearr_36441 = state_36436;
(statearr_36441[(8)] = inst_36338__$1);

return statearr_36441;
})();
if(inst_36341){
var statearr_36442_36500 = state_36436__$1;
(statearr_36442_36500[(1)] = (2));

} else {
var statearr_36443_36501 = state_36436__$1;
(statearr_36443_36501[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (24))){
var inst_36396 = (state_36436[(9)]);
var inst_36410 = (state_36436[(10)]);
var inst_36387 = (state_36436[(11)]);
var inst_36410__$1 = inst_36387.call(null,inst_36396);
var state_36436__$1 = (function (){var statearr_36444 = state_36436;
(statearr_36444[(10)] = inst_36410__$1);

return statearr_36444;
})();
if(cljs.core.truth_(inst_36410__$1)){
var statearr_36445_36502 = state_36436__$1;
(statearr_36445_36502[(1)] = (29));

} else {
var statearr_36446_36503 = state_36436__$1;
(statearr_36446_36503[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (4))){
var inst_36354 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36354)){
var statearr_36447_36504 = state_36436__$1;
(statearr_36447_36504[(1)] = (8));

} else {
var statearr_36448_36505 = state_36436__$1;
(statearr_36448_36505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (15))){
var inst_36381 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36381)){
var statearr_36449_36506 = state_36436__$1;
(statearr_36449_36506[(1)] = (19));

} else {
var statearr_36450_36507 = state_36436__$1;
(statearr_36450_36507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (21))){
var inst_36386 = (state_36436[(12)]);
var inst_36386__$1 = (state_36436[(2)]);
var inst_36387 = cljs.core.get.call(null,inst_36386__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36388 = cljs.core.get.call(null,inst_36386__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36389 = cljs.core.get.call(null,inst_36386__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36436__$1 = (function (){var statearr_36451 = state_36436;
(statearr_36451[(12)] = inst_36386__$1);

(statearr_36451[(13)] = inst_36388);

(statearr_36451[(11)] = inst_36387);

return statearr_36451;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36436__$1,(22),inst_36389);
} else {
if((state_val_36437 === (31))){
var inst_36418 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36418)){
var statearr_36452_36508 = state_36436__$1;
(statearr_36452_36508[(1)] = (32));

} else {
var statearr_36453_36509 = state_36436__$1;
(statearr_36453_36509[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (32))){
var inst_36395 = (state_36436[(14)]);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36436__$1,(35),out,inst_36395);
} else {
if((state_val_36437 === (33))){
var inst_36386 = (state_36436[(12)]);
var inst_36363 = inst_36386;
var state_36436__$1 = (function (){var statearr_36454 = state_36436;
(statearr_36454[(7)] = inst_36363);

return statearr_36454;
})();
var statearr_36455_36510 = state_36436__$1;
(statearr_36455_36510[(2)] = null);

(statearr_36455_36510[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (13))){
var inst_36363 = (state_36436[(7)]);
var inst_36370 = inst_36363.cljs$lang$protocol_mask$partition0$;
var inst_36371 = (inst_36370 & (64));
var inst_36372 = inst_36363.cljs$core$ISeq$;
var inst_36373 = (cljs.core.PROTOCOL_SENTINEL === inst_36372);
var inst_36374 = (inst_36371) || (inst_36373);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36374)){
var statearr_36456_36511 = state_36436__$1;
(statearr_36456_36511[(1)] = (16));

} else {
var statearr_36457_36512 = state_36436__$1;
(statearr_36457_36512[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (22))){
var inst_36396 = (state_36436[(9)]);
var inst_36395 = (state_36436[(14)]);
var inst_36394 = (state_36436[(2)]);
var inst_36395__$1 = cljs.core.nth.call(null,inst_36394,(0),null);
var inst_36396__$1 = cljs.core.nth.call(null,inst_36394,(1),null);
var inst_36397 = (inst_36395__$1 == null);
var inst_36398 = cljs.core._EQ_.call(null,inst_36396__$1,change);
var inst_36399 = (inst_36397) || (inst_36398);
var state_36436__$1 = (function (){var statearr_36458 = state_36436;
(statearr_36458[(9)] = inst_36396__$1);

(statearr_36458[(14)] = inst_36395__$1);

return statearr_36458;
})();
if(cljs.core.truth_(inst_36399)){
var statearr_36459_36513 = state_36436__$1;
(statearr_36459_36513[(1)] = (23));

} else {
var statearr_36460_36514 = state_36436__$1;
(statearr_36460_36514[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (36))){
var inst_36386 = (state_36436[(12)]);
var inst_36363 = inst_36386;
var state_36436__$1 = (function (){var statearr_36461 = state_36436;
(statearr_36461[(7)] = inst_36363);

return statearr_36461;
})();
var statearr_36462_36515 = state_36436__$1;
(statearr_36462_36515[(2)] = null);

(statearr_36462_36515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (29))){
var inst_36410 = (state_36436[(10)]);
var state_36436__$1 = state_36436;
var statearr_36463_36516 = state_36436__$1;
(statearr_36463_36516[(2)] = inst_36410);

(statearr_36463_36516[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (6))){
var state_36436__$1 = state_36436;
var statearr_36464_36517 = state_36436__$1;
(statearr_36464_36517[(2)] = false);

(statearr_36464_36517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (28))){
var inst_36406 = (state_36436[(2)]);
var inst_36407 = calc_state.call(null);
var inst_36363 = inst_36407;
var state_36436__$1 = (function (){var statearr_36465 = state_36436;
(statearr_36465[(7)] = inst_36363);

(statearr_36465[(15)] = inst_36406);

return statearr_36465;
})();
var statearr_36466_36518 = state_36436__$1;
(statearr_36466_36518[(2)] = null);

(statearr_36466_36518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (25))){
var inst_36432 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36467_36519 = state_36436__$1;
(statearr_36467_36519[(2)] = inst_36432);

(statearr_36467_36519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (34))){
var inst_36430 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36468_36520 = state_36436__$1;
(statearr_36468_36520[(2)] = inst_36430);

(statearr_36468_36520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (17))){
var state_36436__$1 = state_36436;
var statearr_36469_36521 = state_36436__$1;
(statearr_36469_36521[(2)] = false);

(statearr_36469_36521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (3))){
var state_36436__$1 = state_36436;
var statearr_36470_36522 = state_36436__$1;
(statearr_36470_36522[(2)] = false);

(statearr_36470_36522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (12))){
var inst_36434 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36436__$1,inst_36434);
} else {
if((state_val_36437 === (2))){
var inst_36338 = (state_36436[(8)]);
var inst_36343 = inst_36338.cljs$lang$protocol_mask$partition0$;
var inst_36344 = (inst_36343 & (64));
var inst_36345 = inst_36338.cljs$core$ISeq$;
var inst_36346 = (cljs.core.PROTOCOL_SENTINEL === inst_36345);
var inst_36347 = (inst_36344) || (inst_36346);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36347)){
var statearr_36471_36523 = state_36436__$1;
(statearr_36471_36523[(1)] = (5));

} else {
var statearr_36472_36524 = state_36436__$1;
(statearr_36472_36524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (23))){
var inst_36395 = (state_36436[(14)]);
var inst_36401 = (inst_36395 == null);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36401)){
var statearr_36473_36525 = state_36436__$1;
(statearr_36473_36525[(1)] = (26));

} else {
var statearr_36474_36526 = state_36436__$1;
(statearr_36474_36526[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (35))){
var inst_36421 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36421)){
var statearr_36475_36527 = state_36436__$1;
(statearr_36475_36527[(1)] = (36));

} else {
var statearr_36476_36528 = state_36436__$1;
(statearr_36476_36528[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (19))){
var inst_36363 = (state_36436[(7)]);
var inst_36383 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36363);
var state_36436__$1 = state_36436;
var statearr_36477_36529 = state_36436__$1;
(statearr_36477_36529[(2)] = inst_36383);

(statearr_36477_36529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (11))){
var inst_36363 = (state_36436[(7)]);
var inst_36367 = (inst_36363 == null);
var inst_36368 = cljs.core.not.call(null,inst_36367);
var state_36436__$1 = state_36436;
if(inst_36368){
var statearr_36478_36530 = state_36436__$1;
(statearr_36478_36530[(1)] = (13));

} else {
var statearr_36479_36531 = state_36436__$1;
(statearr_36479_36531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (9))){
var inst_36338 = (state_36436[(8)]);
var state_36436__$1 = state_36436;
var statearr_36480_36532 = state_36436__$1;
(statearr_36480_36532[(2)] = inst_36338);

(statearr_36480_36532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (5))){
var state_36436__$1 = state_36436;
var statearr_36481_36533 = state_36436__$1;
(statearr_36481_36533[(2)] = true);

(statearr_36481_36533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (14))){
var state_36436__$1 = state_36436;
var statearr_36482_36534 = state_36436__$1;
(statearr_36482_36534[(2)] = false);

(statearr_36482_36534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (26))){
var inst_36396 = (state_36436[(9)]);
var inst_36403 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36396);
var state_36436__$1 = state_36436;
var statearr_36483_36535 = state_36436__$1;
(statearr_36483_36535[(2)] = inst_36403);

(statearr_36483_36535[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (16))){
var state_36436__$1 = state_36436;
var statearr_36484_36536 = state_36436__$1;
(statearr_36484_36536[(2)] = true);

(statearr_36484_36536[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (38))){
var inst_36426 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36485_36537 = state_36436__$1;
(statearr_36485_36537[(2)] = inst_36426);

(statearr_36485_36537[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (30))){
var inst_36396 = (state_36436[(9)]);
var inst_36388 = (state_36436[(13)]);
var inst_36387 = (state_36436[(11)]);
var inst_36413 = cljs.core.empty_QMARK_.call(null,inst_36387);
var inst_36414 = inst_36388.call(null,inst_36396);
var inst_36415 = cljs.core.not.call(null,inst_36414);
var inst_36416 = (inst_36413) && (inst_36415);
var state_36436__$1 = state_36436;
var statearr_36486_36538 = state_36436__$1;
(statearr_36486_36538[(2)] = inst_36416);

(statearr_36486_36538[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (10))){
var inst_36338 = (state_36436[(8)]);
var inst_36359 = (state_36436[(2)]);
var inst_36360 = cljs.core.get.call(null,inst_36359,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36361 = cljs.core.get.call(null,inst_36359,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36362 = cljs.core.get.call(null,inst_36359,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36363 = inst_36338;
var state_36436__$1 = (function (){var statearr_36487 = state_36436;
(statearr_36487[(16)] = inst_36360);

(statearr_36487[(7)] = inst_36363);

(statearr_36487[(17)] = inst_36362);

(statearr_36487[(18)] = inst_36361);

return statearr_36487;
})();
var statearr_36488_36539 = state_36436__$1;
(statearr_36488_36539[(2)] = null);

(statearr_36488_36539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (18))){
var inst_36378 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36489_36540 = state_36436__$1;
(statearr_36489_36540[(2)] = inst_36378);

(statearr_36489_36540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (37))){
var state_36436__$1 = state_36436;
var statearr_36490_36541 = state_36436__$1;
(statearr_36490_36541[(2)] = null);

(statearr_36490_36541[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (8))){
var inst_36338 = (state_36436[(8)]);
var inst_36356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36338);
var state_36436__$1 = state_36436;
var statearr_36491_36542 = state_36436__$1;
(statearr_36491_36542[(2)] = inst_36356);

(statearr_36491_36542[(1)] = (10));


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
});})(c__35451__auto___36496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35363__auto__,c__35451__auto___36496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35364__auto__ = null;
var cljs$core$async$mix_$_state_machine__35364__auto____0 = (function (){
var statearr_36492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36492[(0)] = cljs$core$async$mix_$_state_machine__35364__auto__);

(statearr_36492[(1)] = (1));

return statearr_36492;
});
var cljs$core$async$mix_$_state_machine__35364__auto____1 = (function (state_36436){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36493){if((e36493 instanceof Object)){
var ex__35367__auto__ = e36493;
var statearr_36494_36543 = state_36436;
(statearr_36494_36543[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36544 = state_36436;
state_36436 = G__36544;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35364__auto__ = function(state_36436){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35364__auto____1.call(this,state_36436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35364__auto____0;
cljs$core$async$mix_$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35364__auto____1;
return cljs$core$async$mix_$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35453__auto__ = (function (){var statearr_36495 = f__35452__auto__.call(null);
(statearr_36495[(6)] = c__35451__auto___36496);

return statearr_36495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36496,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29141__auto__ = (((p == null))?null:p);
var m__29142__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29142__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29141__auto__ = (((p == null))?null:p);
var m__29142__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,p,v,ch);
} else {
var m__29142__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36546 = arguments.length;
switch (G__36546) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29141__auto__ = (((p == null))?null:p);
var m__29142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,p);
} else {
var m__29142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29141__auto__ = (((p == null))?null:p);
var m__29142__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29141__auto__)]);
if(!((m__29142__auto__ == null))){
return m__29142__auto__.call(null,p,v);
} else {
var m__29142__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29142__auto____$1 == null))){
return m__29142__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36550 = arguments.length;
switch (G__36550) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28458__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28458__auto__)){
return or__28458__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28458__auto__,mults){
return (function (p1__36548_SHARP_){
if(cljs.core.truth_(p1__36548_SHARP_.call(null,topic))){
return p1__36548_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36548_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28458__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36551 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36552){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36552 = meta36552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36553,meta36552__$1){
var self__ = this;
var _36553__$1 = this;
return (new cljs.core.async.t_cljs$core$async36551(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36552__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36553){
var self__ = this;
var _36553__$1 = this;
return self__.meta36552;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36552","meta36552",1382892212,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36551";

cljs.core.async.t_cljs$core$async36551.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36551");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36551 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36552){
return (new cljs.core.async.t_cljs$core$async36551(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36552));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36551(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35451__auto___36671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36671,mults,ensure_mult,p){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36671,mults,ensure_mult,p){
return (function (state_36625){
var state_val_36626 = (state_36625[(1)]);
if((state_val_36626 === (7))){
var inst_36621 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36627_36672 = state_36625__$1;
(statearr_36627_36672[(2)] = inst_36621);

(statearr_36627_36672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (20))){
var state_36625__$1 = state_36625;
var statearr_36628_36673 = state_36625__$1;
(statearr_36628_36673[(2)] = null);

(statearr_36628_36673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (1))){
var state_36625__$1 = state_36625;
var statearr_36629_36674 = state_36625__$1;
(statearr_36629_36674[(2)] = null);

(statearr_36629_36674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (24))){
var inst_36604 = (state_36625[(7)]);
var inst_36613 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36604);
var state_36625__$1 = state_36625;
var statearr_36630_36675 = state_36625__$1;
(statearr_36630_36675[(2)] = inst_36613);

(statearr_36630_36675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (4))){
var inst_36556 = (state_36625[(8)]);
var inst_36556__$1 = (state_36625[(2)]);
var inst_36557 = (inst_36556__$1 == null);
var state_36625__$1 = (function (){var statearr_36631 = state_36625;
(statearr_36631[(8)] = inst_36556__$1);

return statearr_36631;
})();
if(cljs.core.truth_(inst_36557)){
var statearr_36632_36676 = state_36625__$1;
(statearr_36632_36676[(1)] = (5));

} else {
var statearr_36633_36677 = state_36625__$1;
(statearr_36633_36677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (15))){
var inst_36598 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36634_36678 = state_36625__$1;
(statearr_36634_36678[(2)] = inst_36598);

(statearr_36634_36678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (21))){
var inst_36618 = (state_36625[(2)]);
var state_36625__$1 = (function (){var statearr_36635 = state_36625;
(statearr_36635[(9)] = inst_36618);

return statearr_36635;
})();
var statearr_36636_36679 = state_36625__$1;
(statearr_36636_36679[(2)] = null);

(statearr_36636_36679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (13))){
var inst_36580 = (state_36625[(10)]);
var inst_36582 = cljs.core.chunked_seq_QMARK_.call(null,inst_36580);
var state_36625__$1 = state_36625;
if(inst_36582){
var statearr_36637_36680 = state_36625__$1;
(statearr_36637_36680[(1)] = (16));

} else {
var statearr_36638_36681 = state_36625__$1;
(statearr_36638_36681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (22))){
var inst_36610 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
if(cljs.core.truth_(inst_36610)){
var statearr_36639_36682 = state_36625__$1;
(statearr_36639_36682[(1)] = (23));

} else {
var statearr_36640_36683 = state_36625__$1;
(statearr_36640_36683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (6))){
var inst_36606 = (state_36625[(11)]);
var inst_36604 = (state_36625[(7)]);
var inst_36556 = (state_36625[(8)]);
var inst_36604__$1 = topic_fn.call(null,inst_36556);
var inst_36605 = cljs.core.deref.call(null,mults);
var inst_36606__$1 = cljs.core.get.call(null,inst_36605,inst_36604__$1);
var state_36625__$1 = (function (){var statearr_36641 = state_36625;
(statearr_36641[(11)] = inst_36606__$1);

(statearr_36641[(7)] = inst_36604__$1);

return statearr_36641;
})();
if(cljs.core.truth_(inst_36606__$1)){
var statearr_36642_36684 = state_36625__$1;
(statearr_36642_36684[(1)] = (19));

} else {
var statearr_36643_36685 = state_36625__$1;
(statearr_36643_36685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (25))){
var inst_36615 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36644_36686 = state_36625__$1;
(statearr_36644_36686[(2)] = inst_36615);

(statearr_36644_36686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (17))){
var inst_36580 = (state_36625[(10)]);
var inst_36589 = cljs.core.first.call(null,inst_36580);
var inst_36590 = cljs.core.async.muxch_STAR_.call(null,inst_36589);
var inst_36591 = cljs.core.async.close_BANG_.call(null,inst_36590);
var inst_36592 = cljs.core.next.call(null,inst_36580);
var inst_36566 = inst_36592;
var inst_36567 = null;
var inst_36568 = (0);
var inst_36569 = (0);
var state_36625__$1 = (function (){var statearr_36645 = state_36625;
(statearr_36645[(12)] = inst_36569);

(statearr_36645[(13)] = inst_36591);

(statearr_36645[(14)] = inst_36568);

(statearr_36645[(15)] = inst_36567);

(statearr_36645[(16)] = inst_36566);

return statearr_36645;
})();
var statearr_36646_36687 = state_36625__$1;
(statearr_36646_36687[(2)] = null);

(statearr_36646_36687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (3))){
var inst_36623 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36625__$1,inst_36623);
} else {
if((state_val_36626 === (12))){
var inst_36600 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36647_36688 = state_36625__$1;
(statearr_36647_36688[(2)] = inst_36600);

(statearr_36647_36688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (2))){
var state_36625__$1 = state_36625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36625__$1,(4),ch);
} else {
if((state_val_36626 === (23))){
var state_36625__$1 = state_36625;
var statearr_36648_36689 = state_36625__$1;
(statearr_36648_36689[(2)] = null);

(statearr_36648_36689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (19))){
var inst_36606 = (state_36625[(11)]);
var inst_36556 = (state_36625[(8)]);
var inst_36608 = cljs.core.async.muxch_STAR_.call(null,inst_36606);
var state_36625__$1 = state_36625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36625__$1,(22),inst_36608,inst_36556);
} else {
if((state_val_36626 === (11))){
var inst_36580 = (state_36625[(10)]);
var inst_36566 = (state_36625[(16)]);
var inst_36580__$1 = cljs.core.seq.call(null,inst_36566);
var state_36625__$1 = (function (){var statearr_36649 = state_36625;
(statearr_36649[(10)] = inst_36580__$1);

return statearr_36649;
})();
if(inst_36580__$1){
var statearr_36650_36690 = state_36625__$1;
(statearr_36650_36690[(1)] = (13));

} else {
var statearr_36651_36691 = state_36625__$1;
(statearr_36651_36691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (9))){
var inst_36602 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36652_36692 = state_36625__$1;
(statearr_36652_36692[(2)] = inst_36602);

(statearr_36652_36692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (5))){
var inst_36563 = cljs.core.deref.call(null,mults);
var inst_36564 = cljs.core.vals.call(null,inst_36563);
var inst_36565 = cljs.core.seq.call(null,inst_36564);
var inst_36566 = inst_36565;
var inst_36567 = null;
var inst_36568 = (0);
var inst_36569 = (0);
var state_36625__$1 = (function (){var statearr_36653 = state_36625;
(statearr_36653[(12)] = inst_36569);

(statearr_36653[(14)] = inst_36568);

(statearr_36653[(15)] = inst_36567);

(statearr_36653[(16)] = inst_36566);

return statearr_36653;
})();
var statearr_36654_36693 = state_36625__$1;
(statearr_36654_36693[(2)] = null);

(statearr_36654_36693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (14))){
var state_36625__$1 = state_36625;
var statearr_36658_36694 = state_36625__$1;
(statearr_36658_36694[(2)] = null);

(statearr_36658_36694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (16))){
var inst_36580 = (state_36625[(10)]);
var inst_36584 = cljs.core.chunk_first.call(null,inst_36580);
var inst_36585 = cljs.core.chunk_rest.call(null,inst_36580);
var inst_36586 = cljs.core.count.call(null,inst_36584);
var inst_36566 = inst_36585;
var inst_36567 = inst_36584;
var inst_36568 = inst_36586;
var inst_36569 = (0);
var state_36625__$1 = (function (){var statearr_36659 = state_36625;
(statearr_36659[(12)] = inst_36569);

(statearr_36659[(14)] = inst_36568);

(statearr_36659[(15)] = inst_36567);

(statearr_36659[(16)] = inst_36566);

return statearr_36659;
})();
var statearr_36660_36695 = state_36625__$1;
(statearr_36660_36695[(2)] = null);

(statearr_36660_36695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (10))){
var inst_36569 = (state_36625[(12)]);
var inst_36568 = (state_36625[(14)]);
var inst_36567 = (state_36625[(15)]);
var inst_36566 = (state_36625[(16)]);
var inst_36574 = cljs.core._nth.call(null,inst_36567,inst_36569);
var inst_36575 = cljs.core.async.muxch_STAR_.call(null,inst_36574);
var inst_36576 = cljs.core.async.close_BANG_.call(null,inst_36575);
var inst_36577 = (inst_36569 + (1));
var tmp36655 = inst_36568;
var tmp36656 = inst_36567;
var tmp36657 = inst_36566;
var inst_36566__$1 = tmp36657;
var inst_36567__$1 = tmp36656;
var inst_36568__$1 = tmp36655;
var inst_36569__$1 = inst_36577;
var state_36625__$1 = (function (){var statearr_36661 = state_36625;
(statearr_36661[(17)] = inst_36576);

(statearr_36661[(12)] = inst_36569__$1);

(statearr_36661[(14)] = inst_36568__$1);

(statearr_36661[(15)] = inst_36567__$1);

(statearr_36661[(16)] = inst_36566__$1);

return statearr_36661;
})();
var statearr_36662_36696 = state_36625__$1;
(statearr_36662_36696[(2)] = null);

(statearr_36662_36696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (18))){
var inst_36595 = (state_36625[(2)]);
var state_36625__$1 = state_36625;
var statearr_36663_36697 = state_36625__$1;
(statearr_36663_36697[(2)] = inst_36595);

(statearr_36663_36697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36626 === (8))){
var inst_36569 = (state_36625[(12)]);
var inst_36568 = (state_36625[(14)]);
var inst_36571 = (inst_36569 < inst_36568);
var inst_36572 = inst_36571;
var state_36625__$1 = state_36625;
if(cljs.core.truth_(inst_36572)){
var statearr_36664_36698 = state_36625__$1;
(statearr_36664_36698[(1)] = (10));

} else {
var statearr_36665_36699 = state_36625__$1;
(statearr_36665_36699[(1)] = (11));

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
});})(c__35451__auto___36671,mults,ensure_mult,p))
;
return ((function (switch__35363__auto__,c__35451__auto___36671,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_36666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36666[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_36666[(1)] = (1));

return statearr_36666;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_36625){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36667){if((e36667 instanceof Object)){
var ex__35367__auto__ = e36667;
var statearr_36668_36700 = state_36625;
(statearr_36668_36700[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36701 = state_36625;
state_36625 = G__36701;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_36625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_36625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36671,mults,ensure_mult,p))
})();
var state__35453__auto__ = (function (){var statearr_36669 = f__35452__auto__.call(null);
(statearr_36669[(6)] = c__35451__auto___36671);

return statearr_36669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36671,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36703 = arguments.length;
switch (G__36703) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36706 = arguments.length;
switch (G__36706) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36709 = arguments.length;
switch (G__36709) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35451__auto___36776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36748){
var state_val_36749 = (state_36748[(1)]);
if((state_val_36749 === (7))){
var state_36748__$1 = state_36748;
var statearr_36750_36777 = state_36748__$1;
(statearr_36750_36777[(2)] = null);

(statearr_36750_36777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (1))){
var state_36748__$1 = state_36748;
var statearr_36751_36778 = state_36748__$1;
(statearr_36751_36778[(2)] = null);

(statearr_36751_36778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (4))){
var inst_36712 = (state_36748[(7)]);
var inst_36714 = (inst_36712 < cnt);
var state_36748__$1 = state_36748;
if(cljs.core.truth_(inst_36714)){
var statearr_36752_36779 = state_36748__$1;
(statearr_36752_36779[(1)] = (6));

} else {
var statearr_36753_36780 = state_36748__$1;
(statearr_36753_36780[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (15))){
var inst_36744 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36754_36781 = state_36748__$1;
(statearr_36754_36781[(2)] = inst_36744);

(statearr_36754_36781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (13))){
var inst_36737 = cljs.core.async.close_BANG_.call(null,out);
var state_36748__$1 = state_36748;
var statearr_36755_36782 = state_36748__$1;
(statearr_36755_36782[(2)] = inst_36737);

(statearr_36755_36782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (6))){
var state_36748__$1 = state_36748;
var statearr_36756_36783 = state_36748__$1;
(statearr_36756_36783[(2)] = null);

(statearr_36756_36783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (3))){
var inst_36746 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36748__$1,inst_36746);
} else {
if((state_val_36749 === (12))){
var inst_36734 = (state_36748[(8)]);
var inst_36734__$1 = (state_36748[(2)]);
var inst_36735 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36734__$1);
var state_36748__$1 = (function (){var statearr_36757 = state_36748;
(statearr_36757[(8)] = inst_36734__$1);

return statearr_36757;
})();
if(cljs.core.truth_(inst_36735)){
var statearr_36758_36784 = state_36748__$1;
(statearr_36758_36784[(1)] = (13));

} else {
var statearr_36759_36785 = state_36748__$1;
(statearr_36759_36785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (2))){
var inst_36711 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36712 = (0);
var state_36748__$1 = (function (){var statearr_36760 = state_36748;
(statearr_36760[(9)] = inst_36711);

(statearr_36760[(7)] = inst_36712);

return statearr_36760;
})();
var statearr_36761_36786 = state_36748__$1;
(statearr_36761_36786[(2)] = null);

(statearr_36761_36786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (11))){
var inst_36712 = (state_36748[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36748,(10),Object,null,(9));
var inst_36721 = chs__$1.call(null,inst_36712);
var inst_36722 = done.call(null,inst_36712);
var inst_36723 = cljs.core.async.take_BANG_.call(null,inst_36721,inst_36722);
var state_36748__$1 = state_36748;
var statearr_36762_36787 = state_36748__$1;
(statearr_36762_36787[(2)] = inst_36723);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (9))){
var inst_36712 = (state_36748[(7)]);
var inst_36725 = (state_36748[(2)]);
var inst_36726 = (inst_36712 + (1));
var inst_36712__$1 = inst_36726;
var state_36748__$1 = (function (){var statearr_36763 = state_36748;
(statearr_36763[(10)] = inst_36725);

(statearr_36763[(7)] = inst_36712__$1);

return statearr_36763;
})();
var statearr_36764_36788 = state_36748__$1;
(statearr_36764_36788[(2)] = null);

(statearr_36764_36788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (5))){
var inst_36732 = (state_36748[(2)]);
var state_36748__$1 = (function (){var statearr_36765 = state_36748;
(statearr_36765[(11)] = inst_36732);

return statearr_36765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36748__$1,(12),dchan);
} else {
if((state_val_36749 === (14))){
var inst_36734 = (state_36748[(8)]);
var inst_36739 = cljs.core.apply.call(null,f,inst_36734);
var state_36748__$1 = state_36748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36748__$1,(16),out,inst_36739);
} else {
if((state_val_36749 === (16))){
var inst_36741 = (state_36748[(2)]);
var state_36748__$1 = (function (){var statearr_36766 = state_36748;
(statearr_36766[(12)] = inst_36741);

return statearr_36766;
})();
var statearr_36767_36789 = state_36748__$1;
(statearr_36767_36789[(2)] = null);

(statearr_36767_36789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (10))){
var inst_36716 = (state_36748[(2)]);
var inst_36717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36748__$1 = (function (){var statearr_36768 = state_36748;
(statearr_36768[(13)] = inst_36716);

return statearr_36768;
})();
var statearr_36769_36790 = state_36748__$1;
(statearr_36769_36790[(2)] = inst_36717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36748__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36749 === (8))){
var inst_36730 = (state_36748[(2)]);
var state_36748__$1 = state_36748;
var statearr_36770_36791 = state_36748__$1;
(statearr_36770_36791[(2)] = inst_36730);

(statearr_36770_36791[(1)] = (5));


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
});})(c__35451__auto___36776,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35363__auto__,c__35451__auto___36776,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_36771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36771[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_36771[(1)] = (1));

return statearr_36771;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_36748){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36772){if((e36772 instanceof Object)){
var ex__35367__auto__ = e36772;
var statearr_36773_36792 = state_36748;
(statearr_36773_36792[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36793 = state_36748;
state_36748 = G__36793;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_36748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_36748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36776,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35453__auto__ = (function (){var statearr_36774 = f__35452__auto__.call(null);
(statearr_36774[(6)] = c__35451__auto___36776);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36776,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36796 = arguments.length;
switch (G__36796) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35451__auto___36850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36850,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36850,out){
return (function (state_36828){
var state_val_36829 = (state_36828[(1)]);
if((state_val_36829 === (7))){
var inst_36807 = (state_36828[(7)]);
var inst_36808 = (state_36828[(8)]);
var inst_36807__$1 = (state_36828[(2)]);
var inst_36808__$1 = cljs.core.nth.call(null,inst_36807__$1,(0),null);
var inst_36809 = cljs.core.nth.call(null,inst_36807__$1,(1),null);
var inst_36810 = (inst_36808__$1 == null);
var state_36828__$1 = (function (){var statearr_36830 = state_36828;
(statearr_36830[(7)] = inst_36807__$1);

(statearr_36830[(8)] = inst_36808__$1);

(statearr_36830[(9)] = inst_36809);

return statearr_36830;
})();
if(cljs.core.truth_(inst_36810)){
var statearr_36831_36851 = state_36828__$1;
(statearr_36831_36851[(1)] = (8));

} else {
var statearr_36832_36852 = state_36828__$1;
(statearr_36832_36852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (1))){
var inst_36797 = cljs.core.vec.call(null,chs);
var inst_36798 = inst_36797;
var state_36828__$1 = (function (){var statearr_36833 = state_36828;
(statearr_36833[(10)] = inst_36798);

return statearr_36833;
})();
var statearr_36834_36853 = state_36828__$1;
(statearr_36834_36853[(2)] = null);

(statearr_36834_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (4))){
var inst_36798 = (state_36828[(10)]);
var state_36828__$1 = state_36828;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36828__$1,(7),inst_36798);
} else {
if((state_val_36829 === (6))){
var inst_36824 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36835_36854 = state_36828__$1;
(statearr_36835_36854[(2)] = inst_36824);

(statearr_36835_36854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (3))){
var inst_36826 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36828__$1,inst_36826);
} else {
if((state_val_36829 === (2))){
var inst_36798 = (state_36828[(10)]);
var inst_36800 = cljs.core.count.call(null,inst_36798);
var inst_36801 = (inst_36800 > (0));
var state_36828__$1 = state_36828;
if(cljs.core.truth_(inst_36801)){
var statearr_36837_36855 = state_36828__$1;
(statearr_36837_36855[(1)] = (4));

} else {
var statearr_36838_36856 = state_36828__$1;
(statearr_36838_36856[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (11))){
var inst_36798 = (state_36828[(10)]);
var inst_36817 = (state_36828[(2)]);
var tmp36836 = inst_36798;
var inst_36798__$1 = tmp36836;
var state_36828__$1 = (function (){var statearr_36839 = state_36828;
(statearr_36839[(10)] = inst_36798__$1);

(statearr_36839[(11)] = inst_36817);

return statearr_36839;
})();
var statearr_36840_36857 = state_36828__$1;
(statearr_36840_36857[(2)] = null);

(statearr_36840_36857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (9))){
var inst_36808 = (state_36828[(8)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36828__$1,(11),out,inst_36808);
} else {
if((state_val_36829 === (5))){
var inst_36822 = cljs.core.async.close_BANG_.call(null,out);
var state_36828__$1 = state_36828;
var statearr_36841_36858 = state_36828__$1;
(statearr_36841_36858[(2)] = inst_36822);

(statearr_36841_36858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (10))){
var inst_36820 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36842_36859 = state_36828__$1;
(statearr_36842_36859[(2)] = inst_36820);

(statearr_36842_36859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (8))){
var inst_36798 = (state_36828[(10)]);
var inst_36807 = (state_36828[(7)]);
var inst_36808 = (state_36828[(8)]);
var inst_36809 = (state_36828[(9)]);
var inst_36812 = (function (){var cs = inst_36798;
var vec__36803 = inst_36807;
var v = inst_36808;
var c = inst_36809;
return ((function (cs,vec__36803,v,c,inst_36798,inst_36807,inst_36808,inst_36809,state_val_36829,c__35451__auto___36850,out){
return (function (p1__36794_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36794_SHARP_);
});
;})(cs,vec__36803,v,c,inst_36798,inst_36807,inst_36808,inst_36809,state_val_36829,c__35451__auto___36850,out))
})();
var inst_36813 = cljs.core.filterv.call(null,inst_36812,inst_36798);
var inst_36798__$1 = inst_36813;
var state_36828__$1 = (function (){var statearr_36843 = state_36828;
(statearr_36843[(10)] = inst_36798__$1);

return statearr_36843;
})();
var statearr_36844_36860 = state_36828__$1;
(statearr_36844_36860[(2)] = null);

(statearr_36844_36860[(1)] = (2));


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
});})(c__35451__auto___36850,out))
;
return ((function (switch__35363__auto__,c__35451__auto___36850,out){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_36845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36845[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_36845[(1)] = (1));

return statearr_36845;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_36828){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36846){if((e36846 instanceof Object)){
var ex__35367__auto__ = e36846;
var statearr_36847_36861 = state_36828;
(statearr_36847_36861[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36862 = state_36828;
state_36828 = G__36862;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_36828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_36828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36850,out))
})();
var state__35453__auto__ = (function (){var statearr_36848 = f__35452__auto__.call(null);
(statearr_36848[(6)] = c__35451__auto___36850);

return statearr_36848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36850,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36864 = arguments.length;
switch (G__36864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35451__auto___36909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36909,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36909,out){
return (function (state_36888){
var state_val_36889 = (state_36888[(1)]);
if((state_val_36889 === (7))){
var inst_36870 = (state_36888[(7)]);
var inst_36870__$1 = (state_36888[(2)]);
var inst_36871 = (inst_36870__$1 == null);
var inst_36872 = cljs.core.not.call(null,inst_36871);
var state_36888__$1 = (function (){var statearr_36890 = state_36888;
(statearr_36890[(7)] = inst_36870__$1);

return statearr_36890;
})();
if(inst_36872){
var statearr_36891_36910 = state_36888__$1;
(statearr_36891_36910[(1)] = (8));

} else {
var statearr_36892_36911 = state_36888__$1;
(statearr_36892_36911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (1))){
var inst_36865 = (0);
var state_36888__$1 = (function (){var statearr_36893 = state_36888;
(statearr_36893[(8)] = inst_36865);

return statearr_36893;
})();
var statearr_36894_36912 = state_36888__$1;
(statearr_36894_36912[(2)] = null);

(statearr_36894_36912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (4))){
var state_36888__$1 = state_36888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36888__$1,(7),ch);
} else {
if((state_val_36889 === (6))){
var inst_36883 = (state_36888[(2)]);
var state_36888__$1 = state_36888;
var statearr_36895_36913 = state_36888__$1;
(statearr_36895_36913[(2)] = inst_36883);

(statearr_36895_36913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (3))){
var inst_36885 = (state_36888[(2)]);
var inst_36886 = cljs.core.async.close_BANG_.call(null,out);
var state_36888__$1 = (function (){var statearr_36896 = state_36888;
(statearr_36896[(9)] = inst_36885);

return statearr_36896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36888__$1,inst_36886);
} else {
if((state_val_36889 === (2))){
var inst_36865 = (state_36888[(8)]);
var inst_36867 = (inst_36865 < n);
var state_36888__$1 = state_36888;
if(cljs.core.truth_(inst_36867)){
var statearr_36897_36914 = state_36888__$1;
(statearr_36897_36914[(1)] = (4));

} else {
var statearr_36898_36915 = state_36888__$1;
(statearr_36898_36915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (11))){
var inst_36865 = (state_36888[(8)]);
var inst_36875 = (state_36888[(2)]);
var inst_36876 = (inst_36865 + (1));
var inst_36865__$1 = inst_36876;
var state_36888__$1 = (function (){var statearr_36899 = state_36888;
(statearr_36899[(10)] = inst_36875);

(statearr_36899[(8)] = inst_36865__$1);

return statearr_36899;
})();
var statearr_36900_36916 = state_36888__$1;
(statearr_36900_36916[(2)] = null);

(statearr_36900_36916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (9))){
var state_36888__$1 = state_36888;
var statearr_36901_36917 = state_36888__$1;
(statearr_36901_36917[(2)] = null);

(statearr_36901_36917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (5))){
var state_36888__$1 = state_36888;
var statearr_36902_36918 = state_36888__$1;
(statearr_36902_36918[(2)] = null);

(statearr_36902_36918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (10))){
var inst_36880 = (state_36888[(2)]);
var state_36888__$1 = state_36888;
var statearr_36903_36919 = state_36888__$1;
(statearr_36903_36919[(2)] = inst_36880);

(statearr_36903_36919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36889 === (8))){
var inst_36870 = (state_36888[(7)]);
var state_36888__$1 = state_36888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36888__$1,(11),out,inst_36870);
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
});})(c__35451__auto___36909,out))
;
return ((function (switch__35363__auto__,c__35451__auto___36909,out){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_36904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36904[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_36904[(1)] = (1));

return statearr_36904;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_36888){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36905){if((e36905 instanceof Object)){
var ex__35367__auto__ = e36905;
var statearr_36906_36920 = state_36888;
(statearr_36906_36920[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36921 = state_36888;
state_36888 = G__36921;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_36888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_36888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36909,out))
})();
var state__35453__auto__ = (function (){var statearr_36907 = f__35452__auto__.call(null);
(statearr_36907[(6)] = c__35451__auto___36909);

return statearr_36907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36909,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36923 = (function (f,ch,meta36924){
this.f = f;
this.ch = ch;
this.meta36924 = meta36924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36925,meta36924__$1){
var self__ = this;
var _36925__$1 = this;
return (new cljs.core.async.t_cljs$core$async36923(self__.f,self__.ch,meta36924__$1));
});

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36925){
var self__ = this;
var _36925__$1 = this;
return self__.meta36924;
});

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36926 = (function (f,ch,meta36924,_,fn1,meta36927){
this.f = f;
this.ch = ch;
this.meta36924 = meta36924;
this._ = _;
this.fn1 = fn1;
this.meta36927 = meta36927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36928,meta36927__$1){
var self__ = this;
var _36928__$1 = this;
return (new cljs.core.async.t_cljs$core$async36926(self__.f,self__.ch,self__.meta36924,self__._,self__.fn1,meta36927__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36928){
var self__ = this;
var _36928__$1 = this;
return self__.meta36927;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36922_SHARP_){
return f1.call(null,(((p1__36922_SHARP_ == null))?null:self__.f.call(null,p1__36922_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36926.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36924","meta36924",665230858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36923","cljs.core.async/t_cljs$core$async36923",-245649540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36927","meta36927",-1891111962,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36926";

cljs.core.async.t_cljs$core$async36926.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36926");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36926 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36926(f__$1,ch__$1,meta36924__$1,___$2,fn1__$1,meta36927){
return (new cljs.core.async.t_cljs$core$async36926(f__$1,ch__$1,meta36924__$1,___$2,fn1__$1,meta36927));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36926(self__.f,self__.ch,self__.meta36924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28446__auto__ = ret;
if(cljs.core.truth_(and__28446__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28446__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36924","meta36924",665230858,null)], null);
});

cljs.core.async.t_cljs$core$async36923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36923";

cljs.core.async.t_cljs$core$async36923.cljs$lang$ctorPrWriter = (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36923");
});

cljs.core.async.__GT_t_cljs$core$async36923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36923(f__$1,ch__$1,meta36924){
return (new cljs.core.async.t_cljs$core$async36923(f__$1,ch__$1,meta36924));
});

}

return (new cljs.core.async.t_cljs$core$async36923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36929 = (function (f,ch,meta36930){
this.f = f;
this.ch = ch;
this.meta36930 = meta36930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36931,meta36930__$1){
var self__ = this;
var _36931__$1 = this;
return (new cljs.core.async.t_cljs$core$async36929(self__.f,self__.ch,meta36930__$1));
});

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36931){
var self__ = this;
var _36931__$1 = this;
return self__.meta36930;
});

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36930","meta36930",-1097172633,null)], null);
});

cljs.core.async.t_cljs$core$async36929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36929";

cljs.core.async.t_cljs$core$async36929.cljs$lang$ctorPrWriter = (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36929");
});

cljs.core.async.__GT_t_cljs$core$async36929 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36929(f__$1,ch__$1,meta36930){
return (new cljs.core.async.t_cljs$core$async36929(f__$1,ch__$1,meta36930));
});

}

return (new cljs.core.async.t_cljs$core$async36929(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36932 = (function (p,ch,meta36933){
this.p = p;
this.ch = ch;
this.meta36933 = meta36933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36934,meta36933__$1){
var self__ = this;
var _36934__$1 = this;
return (new cljs.core.async.t_cljs$core$async36932(self__.p,self__.ch,meta36933__$1));
});

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36934){
var self__ = this;
var _36934__$1 = this;
return self__.meta36933;
});

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36933","meta36933",1246654127,null)], null);
});

cljs.core.async.t_cljs$core$async36932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36932";

cljs.core.async.t_cljs$core$async36932.cljs$lang$ctorPrWriter = (function (this__29083__auto__,writer__29084__auto__,opt__29085__auto__){
return cljs.core._write.call(null,writer__29084__auto__,"cljs.core.async/t_cljs$core$async36932");
});

cljs.core.async.__GT_t_cljs$core$async36932 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36932(p__$1,ch__$1,meta36933){
return (new cljs.core.async.t_cljs$core$async36932(p__$1,ch__$1,meta36933));
});

}

return (new cljs.core.async.t_cljs$core$async36932(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36936 = arguments.length;
switch (G__36936) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35451__auto___36976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___36976,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___36976,out){
return (function (state_36957){
var state_val_36958 = (state_36957[(1)]);
if((state_val_36958 === (7))){
var inst_36953 = (state_36957[(2)]);
var state_36957__$1 = state_36957;
var statearr_36959_36977 = state_36957__$1;
(statearr_36959_36977[(2)] = inst_36953);

(statearr_36959_36977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (1))){
var state_36957__$1 = state_36957;
var statearr_36960_36978 = state_36957__$1;
(statearr_36960_36978[(2)] = null);

(statearr_36960_36978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (4))){
var inst_36939 = (state_36957[(7)]);
var inst_36939__$1 = (state_36957[(2)]);
var inst_36940 = (inst_36939__$1 == null);
var state_36957__$1 = (function (){var statearr_36961 = state_36957;
(statearr_36961[(7)] = inst_36939__$1);

return statearr_36961;
})();
if(cljs.core.truth_(inst_36940)){
var statearr_36962_36979 = state_36957__$1;
(statearr_36962_36979[(1)] = (5));

} else {
var statearr_36963_36980 = state_36957__$1;
(statearr_36963_36980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (6))){
var inst_36939 = (state_36957[(7)]);
var inst_36944 = p.call(null,inst_36939);
var state_36957__$1 = state_36957;
if(cljs.core.truth_(inst_36944)){
var statearr_36964_36981 = state_36957__$1;
(statearr_36964_36981[(1)] = (8));

} else {
var statearr_36965_36982 = state_36957__$1;
(statearr_36965_36982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (3))){
var inst_36955 = (state_36957[(2)]);
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36957__$1,inst_36955);
} else {
if((state_val_36958 === (2))){
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36957__$1,(4),ch);
} else {
if((state_val_36958 === (11))){
var inst_36947 = (state_36957[(2)]);
var state_36957__$1 = state_36957;
var statearr_36966_36983 = state_36957__$1;
(statearr_36966_36983[(2)] = inst_36947);

(statearr_36966_36983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (9))){
var state_36957__$1 = state_36957;
var statearr_36967_36984 = state_36957__$1;
(statearr_36967_36984[(2)] = null);

(statearr_36967_36984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (5))){
var inst_36942 = cljs.core.async.close_BANG_.call(null,out);
var state_36957__$1 = state_36957;
var statearr_36968_36985 = state_36957__$1;
(statearr_36968_36985[(2)] = inst_36942);

(statearr_36968_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (10))){
var inst_36950 = (state_36957[(2)]);
var state_36957__$1 = (function (){var statearr_36969 = state_36957;
(statearr_36969[(8)] = inst_36950);

return statearr_36969;
})();
var statearr_36970_36986 = state_36957__$1;
(statearr_36970_36986[(2)] = null);

(statearr_36970_36986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (8))){
var inst_36939 = (state_36957[(7)]);
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36957__$1,(11),out,inst_36939);
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
});})(c__35451__auto___36976,out))
;
return ((function (switch__35363__auto__,c__35451__auto___36976,out){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_36971 = [null,null,null,null,null,null,null,null,null];
(statearr_36971[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_36971[(1)] = (1));

return statearr_36971;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_36957){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_36957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e36972){if((e36972 instanceof Object)){
var ex__35367__auto__ = e36972;
var statearr_36973_36987 = state_36957;
(statearr_36973_36987[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36988 = state_36957;
state_36957 = G__36988;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_36957){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_36957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___36976,out))
})();
var state__35453__auto__ = (function (){var statearr_36974 = f__35452__auto__.call(null);
(statearr_36974[(6)] = c__35451__auto___36976);

return statearr_36974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___36976,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36990 = arguments.length;
switch (G__36990) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35451__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto__){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto__){
return (function (state_37053){
var state_val_37054 = (state_37053[(1)]);
if((state_val_37054 === (7))){
var inst_37049 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37055_37093 = state_37053__$1;
(statearr_37055_37093[(2)] = inst_37049);

(statearr_37055_37093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (20))){
var inst_37019 = (state_37053[(7)]);
var inst_37030 = (state_37053[(2)]);
var inst_37031 = cljs.core.next.call(null,inst_37019);
var inst_37005 = inst_37031;
var inst_37006 = null;
var inst_37007 = (0);
var inst_37008 = (0);
var state_37053__$1 = (function (){var statearr_37056 = state_37053;
(statearr_37056[(8)] = inst_37006);

(statearr_37056[(9)] = inst_37008);

(statearr_37056[(10)] = inst_37005);

(statearr_37056[(11)] = inst_37030);

(statearr_37056[(12)] = inst_37007);

return statearr_37056;
})();
var statearr_37057_37094 = state_37053__$1;
(statearr_37057_37094[(2)] = null);

(statearr_37057_37094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (1))){
var state_37053__$1 = state_37053;
var statearr_37058_37095 = state_37053__$1;
(statearr_37058_37095[(2)] = null);

(statearr_37058_37095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (4))){
var inst_36994 = (state_37053[(13)]);
var inst_36994__$1 = (state_37053[(2)]);
var inst_36995 = (inst_36994__$1 == null);
var state_37053__$1 = (function (){var statearr_37059 = state_37053;
(statearr_37059[(13)] = inst_36994__$1);

return statearr_37059;
})();
if(cljs.core.truth_(inst_36995)){
var statearr_37060_37096 = state_37053__$1;
(statearr_37060_37096[(1)] = (5));

} else {
var statearr_37061_37097 = state_37053__$1;
(statearr_37061_37097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (15))){
var state_37053__$1 = state_37053;
var statearr_37065_37098 = state_37053__$1;
(statearr_37065_37098[(2)] = null);

(statearr_37065_37098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (21))){
var state_37053__$1 = state_37053;
var statearr_37066_37099 = state_37053__$1;
(statearr_37066_37099[(2)] = null);

(statearr_37066_37099[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (13))){
var inst_37006 = (state_37053[(8)]);
var inst_37008 = (state_37053[(9)]);
var inst_37005 = (state_37053[(10)]);
var inst_37007 = (state_37053[(12)]);
var inst_37015 = (state_37053[(2)]);
var inst_37016 = (inst_37008 + (1));
var tmp37062 = inst_37006;
var tmp37063 = inst_37005;
var tmp37064 = inst_37007;
var inst_37005__$1 = tmp37063;
var inst_37006__$1 = tmp37062;
var inst_37007__$1 = tmp37064;
var inst_37008__$1 = inst_37016;
var state_37053__$1 = (function (){var statearr_37067 = state_37053;
(statearr_37067[(8)] = inst_37006__$1);

(statearr_37067[(9)] = inst_37008__$1);

(statearr_37067[(10)] = inst_37005__$1);

(statearr_37067[(14)] = inst_37015);

(statearr_37067[(12)] = inst_37007__$1);

return statearr_37067;
})();
var statearr_37068_37100 = state_37053__$1;
(statearr_37068_37100[(2)] = null);

(statearr_37068_37100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (22))){
var state_37053__$1 = state_37053;
var statearr_37069_37101 = state_37053__$1;
(statearr_37069_37101[(2)] = null);

(statearr_37069_37101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (6))){
var inst_36994 = (state_37053[(13)]);
var inst_37003 = f.call(null,inst_36994);
var inst_37004 = cljs.core.seq.call(null,inst_37003);
var inst_37005 = inst_37004;
var inst_37006 = null;
var inst_37007 = (0);
var inst_37008 = (0);
var state_37053__$1 = (function (){var statearr_37070 = state_37053;
(statearr_37070[(8)] = inst_37006);

(statearr_37070[(9)] = inst_37008);

(statearr_37070[(10)] = inst_37005);

(statearr_37070[(12)] = inst_37007);

return statearr_37070;
})();
var statearr_37071_37102 = state_37053__$1;
(statearr_37071_37102[(2)] = null);

(statearr_37071_37102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (17))){
var inst_37019 = (state_37053[(7)]);
var inst_37023 = cljs.core.chunk_first.call(null,inst_37019);
var inst_37024 = cljs.core.chunk_rest.call(null,inst_37019);
var inst_37025 = cljs.core.count.call(null,inst_37023);
var inst_37005 = inst_37024;
var inst_37006 = inst_37023;
var inst_37007 = inst_37025;
var inst_37008 = (0);
var state_37053__$1 = (function (){var statearr_37072 = state_37053;
(statearr_37072[(8)] = inst_37006);

(statearr_37072[(9)] = inst_37008);

(statearr_37072[(10)] = inst_37005);

(statearr_37072[(12)] = inst_37007);

return statearr_37072;
})();
var statearr_37073_37103 = state_37053__$1;
(statearr_37073_37103[(2)] = null);

(statearr_37073_37103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (3))){
var inst_37051 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37053__$1,inst_37051);
} else {
if((state_val_37054 === (12))){
var inst_37039 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37074_37104 = state_37053__$1;
(statearr_37074_37104[(2)] = inst_37039);

(statearr_37074_37104[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (2))){
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37053__$1,(4),in$);
} else {
if((state_val_37054 === (23))){
var inst_37047 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37075_37105 = state_37053__$1;
(statearr_37075_37105[(2)] = inst_37047);

(statearr_37075_37105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (19))){
var inst_37034 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37076_37106 = state_37053__$1;
(statearr_37076_37106[(2)] = inst_37034);

(statearr_37076_37106[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (11))){
var inst_37005 = (state_37053[(10)]);
var inst_37019 = (state_37053[(7)]);
var inst_37019__$1 = cljs.core.seq.call(null,inst_37005);
var state_37053__$1 = (function (){var statearr_37077 = state_37053;
(statearr_37077[(7)] = inst_37019__$1);

return statearr_37077;
})();
if(inst_37019__$1){
var statearr_37078_37107 = state_37053__$1;
(statearr_37078_37107[(1)] = (14));

} else {
var statearr_37079_37108 = state_37053__$1;
(statearr_37079_37108[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (9))){
var inst_37041 = (state_37053[(2)]);
var inst_37042 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37053__$1 = (function (){var statearr_37080 = state_37053;
(statearr_37080[(15)] = inst_37041);

return statearr_37080;
})();
if(cljs.core.truth_(inst_37042)){
var statearr_37081_37109 = state_37053__$1;
(statearr_37081_37109[(1)] = (21));

} else {
var statearr_37082_37110 = state_37053__$1;
(statearr_37082_37110[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (5))){
var inst_36997 = cljs.core.async.close_BANG_.call(null,out);
var state_37053__$1 = state_37053;
var statearr_37083_37111 = state_37053__$1;
(statearr_37083_37111[(2)] = inst_36997);

(statearr_37083_37111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (14))){
var inst_37019 = (state_37053[(7)]);
var inst_37021 = cljs.core.chunked_seq_QMARK_.call(null,inst_37019);
var state_37053__$1 = state_37053;
if(inst_37021){
var statearr_37084_37112 = state_37053__$1;
(statearr_37084_37112[(1)] = (17));

} else {
var statearr_37085_37113 = state_37053__$1;
(statearr_37085_37113[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (16))){
var inst_37037 = (state_37053[(2)]);
var state_37053__$1 = state_37053;
var statearr_37086_37114 = state_37053__$1;
(statearr_37086_37114[(2)] = inst_37037);

(statearr_37086_37114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37054 === (10))){
var inst_37006 = (state_37053[(8)]);
var inst_37008 = (state_37053[(9)]);
var inst_37013 = cljs.core._nth.call(null,inst_37006,inst_37008);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37053__$1,(13),out,inst_37013);
} else {
if((state_val_37054 === (18))){
var inst_37019 = (state_37053[(7)]);
var inst_37028 = cljs.core.first.call(null,inst_37019);
var state_37053__$1 = state_37053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37053__$1,(20),out,inst_37028);
} else {
if((state_val_37054 === (8))){
var inst_37008 = (state_37053[(9)]);
var inst_37007 = (state_37053[(12)]);
var inst_37010 = (inst_37008 < inst_37007);
var inst_37011 = inst_37010;
var state_37053__$1 = state_37053;
if(cljs.core.truth_(inst_37011)){
var statearr_37087_37115 = state_37053__$1;
(statearr_37087_37115[(1)] = (10));

} else {
var statearr_37088_37116 = state_37053__$1;
(statearr_37088_37116[(1)] = (11));

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
});})(c__35451__auto__))
;
return ((function (switch__35363__auto__,c__35451__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35364__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35364__auto____0 = (function (){
var statearr_37089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37089[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35364__auto__);

(statearr_37089[(1)] = (1));

return statearr_37089;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35364__auto____1 = (function (state_37053){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_37053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e37090){if((e37090 instanceof Object)){
var ex__35367__auto__ = e37090;
var statearr_37091_37117 = state_37053;
(statearr_37091_37117[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37118 = state_37053;
state_37053 = G__37118;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35364__auto__ = function(state_37053){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35364__auto____1.call(this,state_37053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35364__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35364__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto__))
})();
var state__35453__auto__ = (function (){var statearr_37092 = f__35452__auto__.call(null);
(statearr_37092[(6)] = c__35451__auto__);

return statearr_37092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto__))
);

return c__35451__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37120 = arguments.length;
switch (G__37120) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37123 = arguments.length;
switch (G__37123) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37126 = arguments.length;
switch (G__37126) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35451__auto___37173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___37173,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___37173,out){
return (function (state_37150){
var state_val_37151 = (state_37150[(1)]);
if((state_val_37151 === (7))){
var inst_37145 = (state_37150[(2)]);
var state_37150__$1 = state_37150;
var statearr_37152_37174 = state_37150__$1;
(statearr_37152_37174[(2)] = inst_37145);

(statearr_37152_37174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (1))){
var inst_37127 = null;
var state_37150__$1 = (function (){var statearr_37153 = state_37150;
(statearr_37153[(7)] = inst_37127);

return statearr_37153;
})();
var statearr_37154_37175 = state_37150__$1;
(statearr_37154_37175[(2)] = null);

(statearr_37154_37175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (4))){
var inst_37130 = (state_37150[(8)]);
var inst_37130__$1 = (state_37150[(2)]);
var inst_37131 = (inst_37130__$1 == null);
var inst_37132 = cljs.core.not.call(null,inst_37131);
var state_37150__$1 = (function (){var statearr_37155 = state_37150;
(statearr_37155[(8)] = inst_37130__$1);

return statearr_37155;
})();
if(inst_37132){
var statearr_37156_37176 = state_37150__$1;
(statearr_37156_37176[(1)] = (5));

} else {
var statearr_37157_37177 = state_37150__$1;
(statearr_37157_37177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (6))){
var state_37150__$1 = state_37150;
var statearr_37158_37178 = state_37150__$1;
(statearr_37158_37178[(2)] = null);

(statearr_37158_37178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (3))){
var inst_37147 = (state_37150[(2)]);
var inst_37148 = cljs.core.async.close_BANG_.call(null,out);
var state_37150__$1 = (function (){var statearr_37159 = state_37150;
(statearr_37159[(9)] = inst_37147);

return statearr_37159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37150__$1,inst_37148);
} else {
if((state_val_37151 === (2))){
var state_37150__$1 = state_37150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37150__$1,(4),ch);
} else {
if((state_val_37151 === (11))){
var inst_37130 = (state_37150[(8)]);
var inst_37139 = (state_37150[(2)]);
var inst_37127 = inst_37130;
var state_37150__$1 = (function (){var statearr_37160 = state_37150;
(statearr_37160[(10)] = inst_37139);

(statearr_37160[(7)] = inst_37127);

return statearr_37160;
})();
var statearr_37161_37179 = state_37150__$1;
(statearr_37161_37179[(2)] = null);

(statearr_37161_37179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (9))){
var inst_37130 = (state_37150[(8)]);
var state_37150__$1 = state_37150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37150__$1,(11),out,inst_37130);
} else {
if((state_val_37151 === (5))){
var inst_37130 = (state_37150[(8)]);
var inst_37127 = (state_37150[(7)]);
var inst_37134 = cljs.core._EQ_.call(null,inst_37130,inst_37127);
var state_37150__$1 = state_37150;
if(inst_37134){
var statearr_37163_37180 = state_37150__$1;
(statearr_37163_37180[(1)] = (8));

} else {
var statearr_37164_37181 = state_37150__$1;
(statearr_37164_37181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (10))){
var inst_37142 = (state_37150[(2)]);
var state_37150__$1 = state_37150;
var statearr_37165_37182 = state_37150__$1;
(statearr_37165_37182[(2)] = inst_37142);

(statearr_37165_37182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37151 === (8))){
var inst_37127 = (state_37150[(7)]);
var tmp37162 = inst_37127;
var inst_37127__$1 = tmp37162;
var state_37150__$1 = (function (){var statearr_37166 = state_37150;
(statearr_37166[(7)] = inst_37127__$1);

return statearr_37166;
})();
var statearr_37167_37183 = state_37150__$1;
(statearr_37167_37183[(2)] = null);

(statearr_37167_37183[(1)] = (2));


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
});})(c__35451__auto___37173,out))
;
return ((function (switch__35363__auto__,c__35451__auto___37173,out){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_37168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37168[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_37168[(1)] = (1));

return statearr_37168;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_37150){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_37150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e37169){if((e37169 instanceof Object)){
var ex__35367__auto__ = e37169;
var statearr_37170_37184 = state_37150;
(statearr_37170_37184[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37185 = state_37150;
state_37150 = G__37185;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_37150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_37150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___37173,out))
})();
var state__35453__auto__ = (function (){var statearr_37171 = f__35452__auto__.call(null);
(statearr_37171[(6)] = c__35451__auto___37173);

return statearr_37171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___37173,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37187 = arguments.length;
switch (G__37187) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35451__auto___37253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___37253,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___37253,out){
return (function (state_37225){
var state_val_37226 = (state_37225[(1)]);
if((state_val_37226 === (7))){
var inst_37221 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
var statearr_37227_37254 = state_37225__$1;
(statearr_37227_37254[(2)] = inst_37221);

(statearr_37227_37254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (1))){
var inst_37188 = (new Array(n));
var inst_37189 = inst_37188;
var inst_37190 = (0);
var state_37225__$1 = (function (){var statearr_37228 = state_37225;
(statearr_37228[(7)] = inst_37190);

(statearr_37228[(8)] = inst_37189);

return statearr_37228;
})();
var statearr_37229_37255 = state_37225__$1;
(statearr_37229_37255[(2)] = null);

(statearr_37229_37255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (4))){
var inst_37193 = (state_37225[(9)]);
var inst_37193__$1 = (state_37225[(2)]);
var inst_37194 = (inst_37193__$1 == null);
var inst_37195 = cljs.core.not.call(null,inst_37194);
var state_37225__$1 = (function (){var statearr_37230 = state_37225;
(statearr_37230[(9)] = inst_37193__$1);

return statearr_37230;
})();
if(inst_37195){
var statearr_37231_37256 = state_37225__$1;
(statearr_37231_37256[(1)] = (5));

} else {
var statearr_37232_37257 = state_37225__$1;
(statearr_37232_37257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (15))){
var inst_37215 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
var statearr_37233_37258 = state_37225__$1;
(statearr_37233_37258[(2)] = inst_37215);

(statearr_37233_37258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (13))){
var state_37225__$1 = state_37225;
var statearr_37234_37259 = state_37225__$1;
(statearr_37234_37259[(2)] = null);

(statearr_37234_37259[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (6))){
var inst_37190 = (state_37225[(7)]);
var inst_37211 = (inst_37190 > (0));
var state_37225__$1 = state_37225;
if(cljs.core.truth_(inst_37211)){
var statearr_37235_37260 = state_37225__$1;
(statearr_37235_37260[(1)] = (12));

} else {
var statearr_37236_37261 = state_37225__$1;
(statearr_37236_37261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (3))){
var inst_37223 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37225__$1,inst_37223);
} else {
if((state_val_37226 === (12))){
var inst_37189 = (state_37225[(8)]);
var inst_37213 = cljs.core.vec.call(null,inst_37189);
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37225__$1,(15),out,inst_37213);
} else {
if((state_val_37226 === (2))){
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37225__$1,(4),ch);
} else {
if((state_val_37226 === (11))){
var inst_37205 = (state_37225[(2)]);
var inst_37206 = (new Array(n));
var inst_37189 = inst_37206;
var inst_37190 = (0);
var state_37225__$1 = (function (){var statearr_37237 = state_37225;
(statearr_37237[(7)] = inst_37190);

(statearr_37237[(10)] = inst_37205);

(statearr_37237[(8)] = inst_37189);

return statearr_37237;
})();
var statearr_37238_37262 = state_37225__$1;
(statearr_37238_37262[(2)] = null);

(statearr_37238_37262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (9))){
var inst_37189 = (state_37225[(8)]);
var inst_37203 = cljs.core.vec.call(null,inst_37189);
var state_37225__$1 = state_37225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37225__$1,(11),out,inst_37203);
} else {
if((state_val_37226 === (5))){
var inst_37190 = (state_37225[(7)]);
var inst_37198 = (state_37225[(11)]);
var inst_37193 = (state_37225[(9)]);
var inst_37189 = (state_37225[(8)]);
var inst_37197 = (inst_37189[inst_37190] = inst_37193);
var inst_37198__$1 = (inst_37190 + (1));
var inst_37199 = (inst_37198__$1 < n);
var state_37225__$1 = (function (){var statearr_37239 = state_37225;
(statearr_37239[(11)] = inst_37198__$1);

(statearr_37239[(12)] = inst_37197);

return statearr_37239;
})();
if(cljs.core.truth_(inst_37199)){
var statearr_37240_37263 = state_37225__$1;
(statearr_37240_37263[(1)] = (8));

} else {
var statearr_37241_37264 = state_37225__$1;
(statearr_37241_37264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (14))){
var inst_37218 = (state_37225[(2)]);
var inst_37219 = cljs.core.async.close_BANG_.call(null,out);
var state_37225__$1 = (function (){var statearr_37243 = state_37225;
(statearr_37243[(13)] = inst_37218);

return statearr_37243;
})();
var statearr_37244_37265 = state_37225__$1;
(statearr_37244_37265[(2)] = inst_37219);

(statearr_37244_37265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (10))){
var inst_37209 = (state_37225[(2)]);
var state_37225__$1 = state_37225;
var statearr_37245_37266 = state_37225__$1;
(statearr_37245_37266[(2)] = inst_37209);

(statearr_37245_37266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37226 === (8))){
var inst_37198 = (state_37225[(11)]);
var inst_37189 = (state_37225[(8)]);
var tmp37242 = inst_37189;
var inst_37189__$1 = tmp37242;
var inst_37190 = inst_37198;
var state_37225__$1 = (function (){var statearr_37246 = state_37225;
(statearr_37246[(7)] = inst_37190);

(statearr_37246[(8)] = inst_37189__$1);

return statearr_37246;
})();
var statearr_37247_37267 = state_37225__$1;
(statearr_37247_37267[(2)] = null);

(statearr_37247_37267[(1)] = (2));


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
});})(c__35451__auto___37253,out))
;
return ((function (switch__35363__auto__,c__35451__auto___37253,out){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_37248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37248[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_37248[(1)] = (1));

return statearr_37248;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_37225){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_37225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e37249){if((e37249 instanceof Object)){
var ex__35367__auto__ = e37249;
var statearr_37250_37268 = state_37225;
(statearr_37250_37268[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37269 = state_37225;
state_37225 = G__37269;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_37225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_37225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___37253,out))
})();
var state__35453__auto__ = (function (){var statearr_37251 = f__35452__auto__.call(null);
(statearr_37251[(6)] = c__35451__auto___37253);

return statearr_37251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___37253,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37271 = arguments.length;
switch (G__37271) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35451__auto___37341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35451__auto___37341,out){
return (function (){
var f__35452__auto__ = (function (){var switch__35363__auto__ = ((function (c__35451__auto___37341,out){
return (function (state_37313){
var state_val_37314 = (state_37313[(1)]);
if((state_val_37314 === (7))){
var inst_37309 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37315_37342 = state_37313__$1;
(statearr_37315_37342[(2)] = inst_37309);

(statearr_37315_37342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (1))){
var inst_37272 = [];
var inst_37273 = inst_37272;
var inst_37274 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37313__$1 = (function (){var statearr_37316 = state_37313;
(statearr_37316[(7)] = inst_37274);

(statearr_37316[(8)] = inst_37273);

return statearr_37316;
})();
var statearr_37317_37343 = state_37313__$1;
(statearr_37317_37343[(2)] = null);

(statearr_37317_37343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (4))){
var inst_37277 = (state_37313[(9)]);
var inst_37277__$1 = (state_37313[(2)]);
var inst_37278 = (inst_37277__$1 == null);
var inst_37279 = cljs.core.not.call(null,inst_37278);
var state_37313__$1 = (function (){var statearr_37318 = state_37313;
(statearr_37318[(9)] = inst_37277__$1);

return statearr_37318;
})();
if(inst_37279){
var statearr_37319_37344 = state_37313__$1;
(statearr_37319_37344[(1)] = (5));

} else {
var statearr_37320_37345 = state_37313__$1;
(statearr_37320_37345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (15))){
var inst_37303 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37321_37346 = state_37313__$1;
(statearr_37321_37346[(2)] = inst_37303);

(statearr_37321_37346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (13))){
var state_37313__$1 = state_37313;
var statearr_37322_37347 = state_37313__$1;
(statearr_37322_37347[(2)] = null);

(statearr_37322_37347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (6))){
var inst_37273 = (state_37313[(8)]);
var inst_37298 = inst_37273.length;
var inst_37299 = (inst_37298 > (0));
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37299)){
var statearr_37323_37348 = state_37313__$1;
(statearr_37323_37348[(1)] = (12));

} else {
var statearr_37324_37349 = state_37313__$1;
(statearr_37324_37349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (3))){
var inst_37311 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37313__$1,inst_37311);
} else {
if((state_val_37314 === (12))){
var inst_37273 = (state_37313[(8)]);
var inst_37301 = cljs.core.vec.call(null,inst_37273);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37313__$1,(15),out,inst_37301);
} else {
if((state_val_37314 === (2))){
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(4),ch);
} else {
if((state_val_37314 === (11))){
var inst_37281 = (state_37313[(10)]);
var inst_37277 = (state_37313[(9)]);
var inst_37291 = (state_37313[(2)]);
var inst_37292 = [];
var inst_37293 = inst_37292.push(inst_37277);
var inst_37273 = inst_37292;
var inst_37274 = inst_37281;
var state_37313__$1 = (function (){var statearr_37325 = state_37313;
(statearr_37325[(7)] = inst_37274);

(statearr_37325[(11)] = inst_37293);

(statearr_37325[(8)] = inst_37273);

(statearr_37325[(12)] = inst_37291);

return statearr_37325;
})();
var statearr_37326_37350 = state_37313__$1;
(statearr_37326_37350[(2)] = null);

(statearr_37326_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (9))){
var inst_37273 = (state_37313[(8)]);
var inst_37289 = cljs.core.vec.call(null,inst_37273);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37313__$1,(11),out,inst_37289);
} else {
if((state_val_37314 === (5))){
var inst_37274 = (state_37313[(7)]);
var inst_37281 = (state_37313[(10)]);
var inst_37277 = (state_37313[(9)]);
var inst_37281__$1 = f.call(null,inst_37277);
var inst_37282 = cljs.core._EQ_.call(null,inst_37281__$1,inst_37274);
var inst_37283 = cljs.core.keyword_identical_QMARK_.call(null,inst_37274,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37284 = (inst_37282) || (inst_37283);
var state_37313__$1 = (function (){var statearr_37327 = state_37313;
(statearr_37327[(10)] = inst_37281__$1);

return statearr_37327;
})();
if(cljs.core.truth_(inst_37284)){
var statearr_37328_37351 = state_37313__$1;
(statearr_37328_37351[(1)] = (8));

} else {
var statearr_37329_37352 = state_37313__$1;
(statearr_37329_37352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (14))){
var inst_37306 = (state_37313[(2)]);
var inst_37307 = cljs.core.async.close_BANG_.call(null,out);
var state_37313__$1 = (function (){var statearr_37331 = state_37313;
(statearr_37331[(13)] = inst_37306);

return statearr_37331;
})();
var statearr_37332_37353 = state_37313__$1;
(statearr_37332_37353[(2)] = inst_37307);

(statearr_37332_37353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (10))){
var inst_37296 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37333_37354 = state_37313__$1;
(statearr_37333_37354[(2)] = inst_37296);

(statearr_37333_37354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (8))){
var inst_37281 = (state_37313[(10)]);
var inst_37273 = (state_37313[(8)]);
var inst_37277 = (state_37313[(9)]);
var inst_37286 = inst_37273.push(inst_37277);
var tmp37330 = inst_37273;
var inst_37273__$1 = tmp37330;
var inst_37274 = inst_37281;
var state_37313__$1 = (function (){var statearr_37334 = state_37313;
(statearr_37334[(7)] = inst_37274);

(statearr_37334[(14)] = inst_37286);

(statearr_37334[(8)] = inst_37273__$1);

return statearr_37334;
})();
var statearr_37335_37355 = state_37313__$1;
(statearr_37335_37355[(2)] = null);

(statearr_37335_37355[(1)] = (2));


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
});})(c__35451__auto___37341,out))
;
return ((function (switch__35363__auto__,c__35451__auto___37341,out){
return (function() {
var cljs$core$async$state_machine__35364__auto__ = null;
var cljs$core$async$state_machine__35364__auto____0 = (function (){
var statearr_37336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37336[(0)] = cljs$core$async$state_machine__35364__auto__);

(statearr_37336[(1)] = (1));

return statearr_37336;
});
var cljs$core$async$state_machine__35364__auto____1 = (function (state_37313){
while(true){
var ret_value__35365__auto__ = (function (){try{while(true){
var result__35366__auto__ = switch__35363__auto__.call(null,state_37313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35366__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35366__auto__;
}
break;
}
}catch (e37337){if((e37337 instanceof Object)){
var ex__35367__auto__ = e37337;
var statearr_37338_37356 = state_37313;
(statearr_37338_37356[(5)] = ex__35367__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35365__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37357 = state_37313;
state_37313 = G__37357;
continue;
} else {
return ret_value__35365__auto__;
}
break;
}
});
cljs$core$async$state_machine__35364__auto__ = function(state_37313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35364__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35364__auto____1.call(this,state_37313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35364__auto____0;
cljs$core$async$state_machine__35364__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35364__auto____1;
return cljs$core$async$state_machine__35364__auto__;
})()
;})(switch__35363__auto__,c__35451__auto___37341,out))
})();
var state__35453__auto__ = (function (){var statearr_37339 = f__35452__auto__.call(null);
(statearr_37339[(6)] = c__35451__auto___37341);

return statearr_37339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35453__auto__);
});})(c__35451__auto___37341,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521903533290
