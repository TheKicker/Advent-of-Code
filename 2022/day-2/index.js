const fs = require('fs');
var arr = fs.readFileSync('./day-1/data.txt').toString().split("\n");

// Opponent             Player 
// A = Rock             X = Rock
// B = Paper            Y = Paper
// C = Scissors         Z = Scissors

exports.logger = `Day 02 - Hello World!`