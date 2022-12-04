const fs = require('fs');
var arr = fs.readFileSync('./day-1/data.txt').toString().split("\n");

// iterate through array
// if it contains a number
// add to current calories
// set highest calorie count and location
// if it contains a space
// go to next elf

var currentCalories = 0;
var maxArr = [];

for(var i = 0; i < arr.length; i++)
{
    if(arr[i] != '')
    {
        currentCalories = currentCalories + parseInt(arr[i]);

    } else {
        maxArr.push(currentCalories)
        currentCalories = 0;
    }
}
maxArr = maxArr.sort((a,b)=>b-a)
// console.log(`Highest: ${maxArr[0]} / Top-3 Sum: ${maxArr[0]+maxArr[1]+maxArr[2]}`)

exports.highest = maxArr[0]
exports.sum = maxArr[0] + maxArr[1] + maxArr[2]
exports.logger = `Day 01 - Highest Count & Sum of Top Three: ${maxArr[0]} / ${maxArr[0] + maxArr[1] + maxArr[2]}`