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

    // console.log(`${char} and ur password is ${pass}`)

    const count = [...pass].filter((c) => c === char).length;

    if (count < min || count > max)
    {
        // continue tells the program skip this line in the forloop, and proceed
        invalid++;
        continue;
    } else {
        // if continue did not hit, then we add
        valid++;
    }
}

console.log(`Valid: ${valid} / Invalid: ${invalid} / ${valid/file.length}%`)