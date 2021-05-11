const ss = require('../src/index')
const assert = require('assert')

describe('SEASON YYYY of different years', () => {
    it('sorts correctly', () => {
        let sorted = ['Fall 2016', 'Fall 2015', 'Fall 2014'].sort(ss)
        let correct = ['Fall 2014', 'Fall 2015', 'Fall 2016']
        assert.deepEqual(sorted, correct)

        sorted = ['Spring 2016', 'Spring 2013'].sort(ss)
        correct = ['Spring 2013', 'Spring 2016']
        assert.deepEqual(sorted, correct)
    })
})

describe('YYYY SEASON of different years', () => {
    it('sorts correctly', () => {
        let sorted = ['2016 Fall', '2015 Fall'].sort(ss)
        let correct = ['2015 Fall', '2016 Fall']
        assert.deepEqual(sorted, correct)

        sorted = ['2016 Spring', '2013 Spring'].sort(ss)
        correct = ['2013 Spring', '2016 Spring']
        assert.deepEqual(sorted, correct)
    })
})

describe('Spring before Summer before Fall', () => {
    it('sorts correctly', () => {
        let sorted = ['2016 Fall', '2016 Spring', '2016 Summer'].sort(ss)
        let correct = ['2016 Spring', '2016 Summer', '2016 Fall']
        assert.deepEqual(sorted, correct)

        sorted = ['Fall 2016', 'Spring 2016', 'Summer 2016'].sort(ss)
        correct = ['Spring 2016', 'Summer 2016', 'Fall 2016']
        assert.deepEqual(sorted, correct)
    })
})

describe('SPYY < SUYY < FYY shorthand', () => {
    it('sorts correctly', () => {
        let sorted = ['F16', 'SU16', 'SP16'].sort(ss)
        let correct = ['SP16', 'SU16', 'F16',]
        assert.deepEqual(sorted, correct)

        // try with year at beginning of string as well
        sorted = ['16F', '16SU', '16SP'].sort(ss)
        correct = ['16SP', '16SU', '16F',]
        assert.deepEqual(sorted, correct)
    })
})

describe('Unrecognizable season or missing year sorted to the front', () => {
    it('sorts correctly', () => {
        let sorted = ['Fall 2015', 'Zot zoot zoot', 'Spring 2014'].sort(ss)
        let correct = ['Zot zoot zoot', 'Spring 2014', 'Fall 2015']
        assert.deepEqual(sorted, correct)

        sorted = ['Fall 2015', 'Winter', 'Spring 2014'].sort(ss)
        correct = ['Winter', 'Spring 2014', 'Fall 2015']
        assert.deepEqual(sorted, correct)

        sorted = ['Fall 2015', 'Winter', 'Spring 2014', 'Beedle Beedle Boop', 'Summer 2010'].sort(ss)
        correct = ['Beedle Beedle Boop', 'Winter', 'Summer 2010', 'Spring 2014', 'Fall 2015']
        assert.deepEqual(sorted, correct)
    })
})
