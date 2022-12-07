const fs = require('fs');
let data = fs.readFileSync('./day-6/data.txt', 'utf-8').toString();

let matches = []

for(let i = 4; i < data.length; i++)
{
    checkRelativesFour(i)
}

function checkRelativesFour(currentIndex)
{   
    let minusThree = currentIndex - 4
    let str = data.slice(minusThree, currentIndex)

    if (uniqueCharacters(str) == true)
    {
        matches.push(`${str}(${currentIndex})`)
    } else {
        // console.log("The string " + str + " has duplicate characters");
    }
}

function uniqueCharacters(str)
{
    // If at any time we encounter 2
    // same characters, return false
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
    // If no duplicate characters
    // encountered, return true
    return true;
}

exports.four = matches[0]