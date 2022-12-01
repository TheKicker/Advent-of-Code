//  gotta get better at importing / exporting in node
//
//  https://www.digitalocean.com/community/tutorials/nodejs-export-and-import-modules
//

const figlet = require('figlet');

figlet('Advent of Code 2020', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)

    console.log("\n")
})