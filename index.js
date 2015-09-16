var order = {
    'spring': 0,
    'sp': 0, // will handle a few short abbreviations
    'summer': 5,
    'su': 5,
    // can't do "s" here as it's ambiguous between spring/summer
    'fall': 10,
    'fa': 10,
    'f': 10,
    'autumn': 10, // treat as synonym for fall
    'au': 10,
    'a': 10,
    'winter': 15,
    'w': 15,
}

function parseSemStr (str) {
    // assume first matched numbers are year, matched letters are season
    return {
        // cast to integer so we can use numeric comparisons
        year: parseInt(str.match(/\d+/)[0]),
        // all order hash keys are lowercase
        season: str.match(/[a-zA-Z]+/)[0].toLowerCase()
    }
}

module.exports = function (first, second) {
    var firstSemester = parseSemStr(first)
    var secondSemester = parseSemStr(second)

    if (firstSemester.year < secondSemester.year) {
        return -1
    } else if (secondSemester.year < firstSemester.year) {
        return 1

        // implies years are the same
        // @TODO throws a reference error if season isn't in order hash
    } else if (order[firstSemester.season] < order[secondSemester.season]) {
        return -1
    } else {
        return 1
    }
}
