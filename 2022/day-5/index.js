const fs = require('fs');
let arr = fs.readFileSync('./day-5/data.txt', 'utf-8').toString().split("\n");

let testStack = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
]

let stack = [   
    ['B', 'P', 'N', 'Q', 'H', 'D', 'R', 'T'],
    ['W', 'G', 'B', 'J', 'T', 'V'],
    ['N', 'R', 'H', 'D', 'S', 'V', 'M', 'Q'],
    ['P', 'Z', 'N', 'M', 'C'],
    ['D', 'Z', 'B'],
    ['V', 'C', 'W', 'Z'],
    ['G', 'Z', 'N', 'C', 'V', 'Q', 'L', 'S'],
    ['L', 'G', 'J', 'M', 'D', 'N', 'V'],
    ['T', 'P', 'M', 'F', 'Z', 'C', 'G']]

for(let i = 0; i < arr.length; i++)
{
    // console.log(arr[i])
    // using stack1...9
    // iterate through instructions 
    //      use first number as QTY
    //      use second number as column
    //      use third number as final resting place
    // 
    let instructions = arr[i].split(" ")
    let quantity = instructions[1]
    let start = instructions[3]
    let finish = instructions[5]

}

exports.stack = stack
exports.testStack = testStack
exports.output = "'ZBDRNPMVH' & 'WDLPFNNNB'"