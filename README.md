jquery-with-dom.js
==================

I don't want what the jquery npm gives me, and I don't want a custom install, so export an instance of jQuery from jsdom, so it can do dom manipulation and selection, this is much more what I need for building and testing UMD modules.

just include like this:


    (function (root, factory) {
        if (typeof define === 'function' && define.amd){
            define(['b'], factory);
        } else if (typeof exports === 'object'){
            module.exports = factory(require('b'));
        } else {
            root.returnExports = factory(root.b);
        }
    }(this, function ($) {
        $.ready(function(jQuery){
            $ = jQuery;
        });
        function aSafeAsyncFunctionThatNeedsJQuery(callback){
            $.ready(function(){
                //do stuff
                callback();
            });
        }
        function iPromiseToEnsureJQueryIsLoadedBeforeCalling(callback){
            // go crazy, use $ wherever
        }
        return {
            foo : aSafeAsyncFunctionThatNeedsJQuery,
            bar : iPromiseToEnsureJQueryIsLoadedBeforeCalling
        };
    }));
    
Enjoy,

-Abbey Hawk Sparrow