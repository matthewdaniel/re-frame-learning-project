// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.helpers.misc');
goog.require('cljs.core');
goog.require('cljs.pprint');
simple.helpers.misc.browser_copy = (function simple$helpers$misc$browser_copy(txt){
var el = document.createElement("input");
el.setAttribute("value",txt);

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});

//# sourceMappingURL=misc.js.map?rel=1521835498619
