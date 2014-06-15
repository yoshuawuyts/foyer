/**
 * Module dependencies
 */

var should = require('should');
var foyer = require('./index');

/**
 * Test
 */

describe('Foyer', function () {
  it('should catch type errors', function () {
    foyer.bind(foyer, 123).should.throw('Tasks must be an array of functions');
    foyer.bind(foyer, [function(){}]).should.not.throw('Tasks must be an array of functions');
  });

  it('should execute functions asynchronously', function (done) {
    var callCount = 0;

    function checkIfEnded() {
      if (callCount == 2) done();
    }

    foyer([
      function(end) {setTimeout(function(){callCount++; end();}, 10)}, 
      function(end) {callCount++; end()}
    ], checkIfEnded);
  });
});