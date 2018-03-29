# Reframe duplication of angular project  

This is just a project to practice clojure on more real world problems. It mimics another publically available angular site - also done by me.

Check out the tutorial to have a look around!


Steps:

1. Check it out
2. Get a command line
3. `cd` to the root of this sub project (where this README exists)
4. run "`lein do clean, figwheel`"  to compile the app and start up figwheel hot-reloading, 
5. open `http://localhost:3449/` to see the app

While step 4 is running, any changes you make to the ClojureScript 
source files (in `src`) will be re-compiled and reflected in the running 
page immediately.

### Production Version

Run "`lein do clean, with-profile prod compile`" to compile an optimised 
version, and then open `resources/public/index.html` in a browser.
