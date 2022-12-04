const fs = require('fs');
var arr = fs.readFileSync('./day-2/data.txt').toString().split("\n");

// Opponent             Player 
// A = Rock             X = Rock
// B = Paper            Y = Paper
// C = Scissors         Z = Scissors

var score = 0;

for(var i = 0; i < arr.length; i++)
{
    var moves = arr[i].split(' ')
    var oppy = moves[0]
    var plyr = moves[1]
    plyr = plyr.replace(/(\r\n|\n|\r)/gm, "");
    
    if(oppy == "A") // Rock
    {
        if(plyr == "X")
        {
            score = score + calculateScore("X", "T")
        } else if(plyr == "Y")
        {
            score = score + calculateScore("Y", "W")
        } else {
            score = score + calculateScore("Z", "L")
        }
    } else if (oppy = "B") // Paper
        if(plyr == "X")
        {
            score = score + calculateScore("X", "L")
        } else if(plyr == "Y")
        {
            score = score + calculateScore("Y", "T")
        } else {
            score = score + calculateScore("Z", "W")
        }
    else {  // Scissors
        if(plyr == "X")
        {
            score = score + calculateScore("X", "W")
        } else if(plyr == "Y")
        {
            score = score + calculateScore("Y", "L")
        } else {
            score = score + calculateScore("Z", "T")
        }
    }
}

// Scoring system (points)
// 1 = Rock             0 = Loss
// 2 = Paper            3 = Tie
// 3 = Scissors         6 = Win

function calculateScore(choice, outcome)
{
    if(choice == "X") // Rock
    {
        if(outcome == "W")
        {
            return 7
        } else if (outcome == "T")
        {
            return 4
        } else {
            return 1
        }
    } else if (choice == "Y") // Paper
    {
        if(outcome == "W")
        {
            return 8
        } else if (outcome == "T")
        {
            return 5
        } else {
            return 2
        }
    } else {    // Scissors
        if(outcome == "W")
        {
            return 9
        } else if (outcome == "T")
        {
            return 6
        } else {
            return 3
        }
    }
}

exports.logger = `Day 02 - Score is ${score}`