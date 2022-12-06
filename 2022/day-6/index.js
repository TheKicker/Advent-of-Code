const fs = require('fs');
let data = fs.readFileSync('./test-data.txt', 'utf-8').toString();

for(let i = 4; i < data.length; i++)
{
    checkRelatives(i)
}

function checkRelatives(currentIndex)
{   
    let minusThree = currentIndex - 4
    console.log(data.slice(minusThree, currentIndex))
}