const fs = require('fs');
var file = fs.readFileSync('puzzle.txt').toString('utf-8').split("\n");

// regex to the rescue!
const regex = /^(\d+)-(\d+) (\w): (\w+)$/

for (var line = 0; line < file.length; line++)
{
    const match = regex.exec(file[line]);

    const min = parseInt(match[1]);
    const max = parseInt(match[2]);
    const char = match[3];
    const pass = match[4];

    console.log(`${char} and ur password is ${pass}`)

    // Do stuff now with the variables
    
}