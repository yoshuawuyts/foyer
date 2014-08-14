# foyer
[![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url]

Execute async functions in parallel and trigger a callback when done. Sets the
context of the executed functions to itself.

## Installation
```bash
$ npm i --save foyer
```

## Example
```js
var foyer = require('foyer');

foyer([
  function(done) {setTimeout(function(){done('myError', 'myRes');}, 10)},
  function(done) {done('myError2', 'myRes2')}
], function callback(err, res) {return res;});
// => ['myRes2', 'myRes']
```

## API
#### foyer([functions], callback)
```js
// Define an array of async functions.
var tasks = [
  function(done){done(null, 'hello')},
  function(done){done(null, 'world')}
];

// Define the callback to be executed
var cb = function(err, res){return res};

// Run 'Foyer' to execute your tasks and run the callback when finished
foyer(tasks, cb);
// => ['hello', 'world']
```

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/foyer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/foyer
[travis-image]: https://img.shields.io/travis/yoshuawuyts/foyer.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/foyer
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/foyer.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/foyer?branch=master
