//  gotta get better at importing / exporting in node
//
//  https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules
//

const figlet = require('figlet');

var dayOne = require('./day-1/index')

figlet('Advent of Code 2022', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    console.log(`Day 01 - Highest & Sum: ${dayOne.highest} / ${dayOne.combination}`)

    console.log("\n")
})