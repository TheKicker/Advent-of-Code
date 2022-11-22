const fs = require('fs');

var file = fs.readFileSync('puzzle.txt').toString().split("\n");

var twoDimensional = []

for (var line = 0; line < file.length; line++)
{
    var oneDimensional = file[line].split()
    twoDimensional.push(oneDimensional)
}

console.log(twoDimensional)