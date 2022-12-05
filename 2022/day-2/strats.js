const fs = require('fs');
let arr = fs.readFileSync('./day-2/data.txt').toString().split("\n");

let score = 0

for(let i = 0; i < arr.length; i++)
{
    let moves = arr[i].split(' ')
    let oppy = moves[0]
    let outcome = moves[1]
    outcome = outcome.replace(/(\r\n|\n|\r)/gm, "");

    // Opponent             Desired Outcome 
    // A = Rock             X = Lose
    // B = Paper            Y = Tie
    // C = Scissors         Z = Win

    if (oppy == "A") // Rock
    {
        if (outcome == "X")
        {
            score += 3
        }
        else if (outcome == "Y")
        {
            score += 4
        }
        else if (outcome == "Z")
        {
            score += 8
        }
    }
    else if (oppy == "B") // Paper
    {
        if (outcome == "X")
        {
            score += 1
        }
        else if (outcome == "Y")
        {
            score += 5
        }
        else if (outcome == "Z")
        {
            score += 9
        }
    }
    else if (oppy == "C") // Scissors
    {
        if (outcome == "X")
        {
            score += 2
        }
        else if (outcome == "Y")
        {
            score += 6
        }
        else if (outcome == "Z")
        {
            score += 7
        }
    }
    else { console.log("Invalid Oppy move")}

    // console.log(score)
}

exports.logger = score