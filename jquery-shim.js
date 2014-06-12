//UMD shim to simplify loading jquery *with* a DOM in many environments
(function(root, factory){
    if (typeof define === 'function' && define.amd){
        define(['jquery'], factory);
    }else if(typeof exports === 'object'){
        var JQ;
        var onready = [];
        require('jsdom').env( '<html><head></head><body></body></html>', 
            ["http://code.jquery.com/jquery.js"],
            function(errors, window){
                JQ = window.$;
                if(onready.length) onready.forEach(function(cb){
                    cb(JQ);
                });
                onready = [];
            }
        );
        module.exports = factory({ready:function(cb){
            if(!JQ) onready.push(cb);
            else JQ.ready(cb);
        }});
    }else{
        root.jQuery = factory(root.$ || root.jQuery); //silly, yes
    }
}(this, function(jquery){
    return jquery;
}));