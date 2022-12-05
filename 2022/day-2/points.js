const fs = require('fs');
let arr = fs.readFileSync('./day-2/data.txt', 'utf-8').toString().split("\n");

let score = 0;

for(let i = 0; i < arr.length; i++)
{
    let moves = arr[i].split(' ')
    let oppy = moves[0]
    let plyr = moves[1]
    plyr = plyr.replace(/(\r\n|\n|\r)/gm, "");

    // console.log(`OPP: ${oppy} / PLY: ${plyr}`)
    
    // Opponent             Player 
    // A = Rock             X = Rock
    // B = Paper            Y = Paper
    // C = Scissors         Z = Scissors
    // Scoring system (points)
    // 1 = Rock             0 = Loss
    // 2 = Paper            3 = Tie
    // 3 = Scissors         6 = Win
    
    if(oppy == "A") // Rock
    {
        // console.log("Oppy played Rock.")
        if(plyr == "X") // Rock
        {
            // console.log("Player played Rock.")
            score = score + 4
        } 
        else if (plyr == "Y") // Paper
        {
            // console.log("Player played Paper.")
            score = score + 8
        } 
        else if (plyr == "Z")
        {   
            // console.log("Player played Scissors.") 
            score = score + 3
        }
        else 
        {
            // console.log("Invalid player move.")
        }
    } 
    else if (oppy == "B") // Paper
    {
        // console.log("Oppy played Paper.")
        if(plyr == "X") // Rock
        {
            // console.log("Player played Rock.")
            score = score + 1
        } 
        else if (plyr == "Y") // Paper
        {
            // console.log("Player played Paper.")
            score = score + 5
        } 
        else if (plyr == "Z") // Scissors
        {    
            // console.log("Player played Scissors.") 
            score = score + 9
        }
        else 
        {
            // console.log("Invalid player move.")
        }
    } 
    else if (oppy == "C") // Scissors
    { 
        // console.log("Oppy played Scissors.")
        if(plyr == "X") // Rock
        {
            // console.log("Player played Rock.")
            score = score + 7
        } 
        else if (plyr == "Y") // Paper
        {
            // console.log("Player played Paper.")
            score = score + 2
        } 
        else if (plyr == "Z") // Scissors
        {    
            // console.log("Player played Scissors.") 
            score = score + 6
        }
        else 
        {
            // console.log("Invalid player move.")
        }
    }

    // console.log(score)
}

exports.logger = score