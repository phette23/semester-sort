# Semester Sort

JavaScript comparison function, for use with `Array.prototype.sort`, for sorting strings that appear to be academic semesters, e.g. "F15" or "2020 Summer". It recognizes a variety of different ways of describing semesters or quarters, including single-letter abbreviations like "F" to full seasons such as "Autumn".

## Usage

```js
var semesterSort = require('semester-sort')

var sorted = ['F15', 'Su15', 'F14', 'F13', 'SP15', 'SP13'].sort(semesterSort)
// returns ['SP13', 'F13', 'F14', 'SP15', 'Su15', 'F15']
```

## Development

Write a test for it! The pattern should be easy enough to figure out from test/tests.js and `npm test` runs the test suite.

## License

![General Public License version 3](https://www.gnu.org/graphics/gplv3-127x51.png)

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
