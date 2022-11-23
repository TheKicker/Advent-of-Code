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
    var pos = []

    for(var i = 0; i < pass.length; i++)
    {
        if(pass[i] === char)
        {
            // Had to add +1 because these dorks have no concept of index 0
            pos.push(i + 1)
        }
    }

    // Debug
    // console.log("--------------")
    // console.log(min)
    // console.log(max)
    // console.log(char)
    // console.log(pass)
    // console.log(pos)

    if(pos.includes(min))
    {
        if(pos.includes(max))
        {
            // console.log("invalid")
            invalid++;
        } else {
            // console.log("valid")
            valid++;
        }
    } else if (pos.includes(max))
    {
        // console.log("valid")
        valid++;
    } else {
        // console.log("invalid")
        invalid++;
    }

    console.log(`Valid: ${valid} / Invalid: ${invalid} / ${valid/file.length}%`)
}
