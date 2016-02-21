# [redux-storage-decorator-immutablejs][]

[![build](https://travis-ci.org/michaelcontento/redux-storage-decorator-immutablejs.svg?branch=master)](https://travis-ci.org/michaelcontento/redux-storage-decorator-immutablejs)
[![dependencies](https://david-dm.org/michaelcontento/redux-storage-decorator-immutablejs.svg)](https://david-dm.org/michaelcontento/redux-storage-decorator-immutablejs)
[![devDependencies](https://david-dm.org/michaelcontento/redux-storage-decorator-immutablejs/dev-status.svg)](https://david-dm.org/michaelcontento/redux-storage-decorator-immutablejs#info=devDependencies)

[![license](https://img.shields.io/npm/l/redux-storage-decorator-immutablejs.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-decorator-immutablejs)
[![npm version](https://img.shields.io/npm/v/redux-storage-decorator-immutablejs.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-decorator-immutablejs)
[![npm downloads](https://img.shields.io/npm/dm/redux-storage-decorator-immutablejs.svg?style=flat-square)](https://www.npmjs.com/package/redux-storage-decorator-immutablejs)
[![Code Climate](https://codeclimate.com/github/michaelcontento/redux-storage-decorator-immutablejs/badges/gpa.svg)](https://codeclimate.com/github/michaelcontento/redux-storage-decorator-immutablejs)

[ImmutableJS][] decorator for [redux-storage][]. Use this to convert the loaded
state tree (or parts of it) into a [ImmutableJS][] structure.

## Installation

    npm install --save redux-storage-decorator-immutablejs

## Usage

Simply wrap your engine in this decorator and list all keys (or key path) that
should be converted.

```js
import immutablejs from 'redux-storage-decorator-immutablejs'

engine = immutablejs(engine, [
    ['immutablejs-reducer'],
    ['plain-object-reducer', 'with-immutablejs-key']
]);
```

## License

    The MIT License (MIT)

    Copyright (c) 2015 Michael Contento

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [redux-storage]: https://github.com/michaelcontento/redux-storage
  [redux-storage-decorator-immutablejs]: https://github.com/michaelcontento/redux-storage-decorator-immutablejs
  [ImmutableJS]: https://github.com/facebook/immutable-js
