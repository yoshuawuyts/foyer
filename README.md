# foyer
[![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url]
Execute async functions in parallel and trigger a callback when they're done.

## Installation
```bash
$ npm i --save foyer
```

## Example
```js
var foyer = require('foyer');

function callback(err, res) {
  return res;
  // => ['myRes2', 'myRes']
}

foyer([
  function(done) {setTimeout(function(){end('myError', 'myRes');}, 10)}, 
  function(done) {end('myError2', 'myRes2')}
], callback);
```

## API
#### foyer([functions], callback)
```js
var tasks = [
  function(done){done(null, 'hello')}, 
  function(done){done(null, 'world')}
];
var cb = function(err, res){return res};

foyer(tasks, cb);
// => ['hello', 'world']
```

## License
[MIT](https://tldrlegal.com/license/mit-license) © [Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/foyer.svg?style=flat
[npm-url]: https://npmjs.org/package/foyer
[travis-image]: https://img.shields.io/travis/yoshuawuyts/foyer.svg?style=flat
[travis-url]: https://travis-ci.org/yoshuawuyts/foyer
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/foyersvg?style=flat
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/foyer?branch=master