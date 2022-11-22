const fs = require('fs');
var file = fs.readFileSync('puzzle.txt').toString('utf-8').split("\n");

// regex to the rescue!
const regex = /^(\d+)-(\d+) (\w): (\w+)$/

// For later
let valid = 0
let invalid = 0

for (var line = 0; line < file.length; line++)
{
    const match = regex.exec(file[line]);

    const min = parseInt(match[1]);
    const max = parseInt(match[2]);
    const char = match[3];
    const pass = match[4];

    // do stuff
}
