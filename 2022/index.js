//  gotta get better at importing / exporting in node
//
//  https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules
//

const figlet = require('figlet');

var dayOne = require('./day-1/index')
var dayTwo = require('./day-2/points')
var dayTwoTwo = require('./day-2/strats')

figlet('Advent of Code 2022', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log(dayOne.logger)

    console.log(`Day 02 - Score & Strats: ${dayTwo.logger} & ${dayTwoTwo.logger}`)

    console.log("\n")
})