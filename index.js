/**
 * Module dependencies
 */

var assert = require('assert');

/**
 * Expose 'foyer'
 */

module.exports = foyer;

/**
 * Foyer
 *
 * @param {Function[]} tasks
 * @param {Function} cb
 * @api public
 */

function foyer(tasks, cb) {
  if (!(this instanceof foyer)) return new foyer(tasks, cb);
  assert('[object Array]' == Object.prototype.toString.call(tasks), 'Tasks must be an array of functions');

  cb = cb || function(){};
  var done = false;
  var results = [];
  var errors = [];
  var index = 0;

  function next() {
    var i = index++;
    var fn = tasks[i];
    if (!fn) return;
    
    try{
      fn(callback)
    } catch(err) {
      callback(err)
    }

    function callback(err, res) {
      if (done) return;
      if (err) {
        done = true; 
        return cb(err);
      }

      results[i] = res;
      errors[i] = err;
      if(index == tasks.length) cb(errors, results);
    }
  }

  for (var i = 0; i < tasks.length; i++) {
    next();
  }

  return this;
}