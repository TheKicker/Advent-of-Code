//  gotta get better at importing / exporting in node
//
//  https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules
//

const figlet = require('figlet');

var dayOne = require('./day-1/index')
var dayTwo = require('./day-2/points')
var dayTwoTwo = require('./day-2/strats')
var dayThree = require('./day-3/index')
var dayFour = require('./day-4/index')
var dayFive = require('./day-5/index')

figlet('Advent of Code 2022', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log(dayOne.logger)

    console.log(`Day 02 - Score & Strats: ${dayTwo.logger} & ${dayTwoTwo.logger}`)

    console.log(`Day 03 - Sum One & Sum Two: ${dayThree.sum} & ${dayThree.sum2}`)

    console.log(`Day 04 - Overlapping Pairs: ${dayFour.overlapOne} & ${dayFour.overlapTwo}`)

    console.log(`Day 05 - Stack 1 & 2: ${dayFive.output}`)

    console.log("\n")
})