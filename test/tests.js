var ss = require('../index')

exports['SEASON YYYY of different years'] = function (test) {
    var sorted = ['Fall 2016', 'Fall 2015', 'Fall 2014'].sort(ss)
    var correct = ['Fall 2014', 'Fall 2015', 'Fall 2016']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    sorted = ['Spring 2016', 'Spring 2013'].sort(ss)
    correct = ['Spring 2013', 'Spring 2016']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    test.done()
}

exports['YYYY SEASON of different years'] = function (test) {
    var sorted = ['2016 Fall', '2015 Fall'].sort(ss)
    var correct = ['2015 Fall', '2016 Fall']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    sorted = ['2016 Spring', '2013 Spring'].sort(ss)
    correct = ['2013 Spring', '2016 Spring']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    test.done()
}

exports['Spring before Summer before Fall'] = function (test) {
    var sorted = ['2016 Fall', '2016 Spring', '2016 Summer'].sort(ss)
    var correct = ['2016 Spring', '2016 Summer', '2016 Fall']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    sorted = ['Fall 2016', 'Spring 2016', 'Summer 2016'].sort(ss)
    correct = ['Spring 2016', 'Summer 2016', 'Fall 2016']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    test.done()
}

exports['SPYY < SUYY < FYY shorthand'] = function (test) {
    var sorted = ['F16', 'SU16', 'SP16'].sort(ss)
    var correct = ['SP16', 'SU16', 'F16',]
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    // try with year at beginning of string as well
    sorted = ['16F', '16SU', '16SP'].sort(ss)
    correct = ['16SP', '16SU', '16F',]
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    test.done()
}

exports['Unrecognizable season or missing year sorted to the front'] = function (test) {
    var sorted = ['Fall 2015', 'Zot zoot zoot', 'Spring 2014'].sort(ss)
    var correct = ['Zot zoot zoot', 'Spring 2014', 'Fall 2015']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    sorted = ['Fall 2015', 'Winter', 'Spring 2014'].sort(ss)
    correct = ['Winter', 'Spring 2014', 'Fall 2015']
    sorted.forEach(function(item, index) {
        test.strictEqual(item, correct[index])
    })

    test.done()
}
