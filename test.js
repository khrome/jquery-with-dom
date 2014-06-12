var should = require("chai").should();
var $ = require('./jquery-shim');

describe('jquery-with-dom', function(){
    
    before(function(done){
        $.ready(function(jQuery){
            $ = jQuery;
            done();
        });
    });
    
    it('has a document and a window', function(done){
        var document = $('document');
        should.exist(document);
        should.exist(document.context['_parentWindow']);
        done();
    });
    
    it('can create an html snippet', function(done){
        var dom = $(
            '<ul>'+
                '<li id="foo">A</li>'+
                '<li id="bar">B</li>'+
            '</ul>'
        );
        should.exist(dom);
        var fooEl = $('#foo', dom);
        var barEl = $('#bar', dom)
        fooEl.length.should.equal(1);
        barEl.length.should.equal(1);
        fooEl.html().should.equal('A');
        barEl.html().should.equal('B');
        done();
    });
    
    it('has a working .parseHTML()', function(done){
        var dom = $.parseHTML(
            '<ul>'+
                '<li id="foo">A</li>'+
                '<li id="bar">B</li>'+
            '</ul>'
        );
        should.exist(dom);
        var fooEl = $('#foo', dom);
        var barEl = $('#bar', dom)
        fooEl.length.should.equal(1);
        barEl.length.should.equal(1);
        fooEl.html().should.equal('A');
        barEl.html().should.equal('B');
        done();
    });
});