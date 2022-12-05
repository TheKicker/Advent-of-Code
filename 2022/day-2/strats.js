const fs = require('fs');
var arr = fs.readFileSync('./test-data.txt').toString().split("\n");

for(var i = 0; i < arr.length; i++)
{
    var moves = arr[i].split(' ')
    var oppy = moves[0]
    var outcome = moves[1]
    outcome = outcome.replace(/(\r\n|\n|\r)/gm, "");

    // Opponent             Desired Outcome 
    // A = Rock             X = Lose
    // B = Paper            Y = Tie
    // C = Scissors         Z = Win

    if (oppy == "A")
    {
        // Do Stuff
    }
    else if (oppy == "B")
    {
        // Do Stuff
    }
    else if (oppy == "C")
    {
        // Do Stuff
    }
    else { console.log("Invalid Oppy move")}
}