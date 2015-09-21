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
    var year = str.match(/\d+/) && str.match(/\d+/)[0]
    var season = str.match(/[a-zA-Z]+/) && str.match(/[a-zA-Z]+/)[0]

    return {
        // cast to integer so we can use numeric comparisons
        year: parseInt(year),
        // all order hash keys are lowercase
        season: season.toLowerCase()
    }
}

module.exports = function (first, second) {
    var firstSemester = parseSemStr(first)
    var secondSemester = parseSemStr(second)

    // if one is missing a piece or has unrecognized season string, sort it first
    if (isNaN(firstSemester.year) || !order.hasOwnProperty(firstSemester.season)) {
        return -1
    } else if (isNaN(secondSemester.year) || !order.hasOwnProperty(secondSemester.season)) {
        return 1
    }

    if (firstSemester.year < secondSemester.year) {
        return -1
    } else if (secondSemester.year < firstSemester.year) {
        return 1

        // implies years are the same
    } else if (order[firstSemester.season] < order[secondSemester.season]) {
        return -1
    } else {
        return 1
    }
}
