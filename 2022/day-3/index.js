const fs = require('fs');
let arr = fs.readFileSync('./day-3/data.txt').toString().split("\n");

let priorities = [0, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
let sum = 0;

for(let i = 0; i < arr.length; i++)
{
    let sack = arr[i]
    let half = sack.length / 2
    let comOne = sack.slice(0,half)
    let comTwo = sack.slice(half, sack.length)

    // console.log(`Sack ${i} Compartment One: ${comOne}`)
    // console.log(`Sack ${i} Compartment Two: ${comTwo}`)

    let temp = []

    for (let i = 0; i < comTwo.length; i++)
    {
        if(comOne.includes(comTwo[i]))
        {
            // console.log(comTwo[i])
            // console.log(priorities.indexOf(comTwo[i]))
            temp.push(priorities.indexOf(comTwo[i]))
        } else {
            // Pass
        }
    }

    // To ignore duplicates if they exist
    if(temp.length != 0)
    {
        sum += temp[0]
    }

    // console.log(sum)
}

exports.sum = sum
