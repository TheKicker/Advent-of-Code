//  gotta get better at importing / exporting in node
//
//  https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules
//

const figlet = require('figlet');

const dayOne = require('./day-1/index')
const dayTwo = require('./day-2/points')
const dayTwoTwo = require('./day-2/strats')
const dayThree = require('./day-3/index')
const dayFour = require('./day-4/index')
const dayFive = require('./day-5/index')
const daySix = require('./day-6/four')
const daySixTwo = require('./day-6/fourteen')
const daySeven = require('./day-7/index')
const dayEight = require('./day-8/index')

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

    console.log(`Day 06 - Unique 4 & Unique 14: ${daySix.four} & ${daySixTwo.fourteen}`)

    console.log(`Day 07 - Sum & Closest Size: ${daySeven.sum} & ${daySeven.closestSize}`)

    console.log(`Day 08 - Tree Height: ${dayEight}`)

    console.log("\n")
})