# Semester Sort

[![Build Status](https://api.travis-ci.org/phette23/semester-sort.svg)](https://travis-ci.org/phette23/semester-sort)
[![NPM Version](https://img.shields.io/npm/v/semester-sort.svg?style=flat-square)](https://npmjs.org/package/semester-sort)

JavaScript comparison function, for use with `Array.prototype.sort`, for sorting strings that appear to be academic semesters, e.g. "F15" or "2020 Summer". It recognizes a variety of different ways of describing semesters or quarters, including single-letter abbreviations like "F" to full seasons such as "Autumn".

## Usage

```js
var semesterSort = require('semester-sort')

var sorted = ['F15', 'Su15', 'F14', 'F13', 'SP15', 'SP13'].sort(semesterSort)
// returns ['SP13', 'F13', 'F14', 'SP15', 'Su15', 'F15']
```

Unrecognized seasons or strings missing a year component will be sorted to the front of the array.

## Development

Write a test for it! The pattern should be easy enough to figure out from test/tests.js and `npm test` runs the test suite.

The code is written in ES6 & transpiled to ES5 via [Babel](http://babeljs.io). `npm run babel` will compile the code in the "src" directory to an index.js in the root, while you can build a minified, browser-ready version of semester-sort with `npm run browser`, which runs index.js through [browserify](https://github.com/substack/node-browserify) and uglifyJS2.

## License

![General Public License version 3](https://www.gnu.org/graphics/gplv3-127x51.png)

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
