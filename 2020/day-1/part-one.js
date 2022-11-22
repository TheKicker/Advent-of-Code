const fs = require('fs');

var arr = fs.readFileSync('../puzzle.txt').toString().split("\n");

// for each item in the array, add every other item in the array, if it equals 2020 stop and spit out the two parents
for (var i = 0; i < arr.length; i++)
{
    var parentOne = parseInt(arr[i]);
    for (var x = 0; x < arr.length; x++)
    {
        var parentTwo = parseInt(arr[x]);
        var calculationOne = parentOne + parentTwo;
        if(calculationOne == 2020)
        {
            console.log(`PO: ${parentOne} / PT: ${parentTwo}`);
            var calculationTwo = parentOne * parentTwo;
            console.log(`M: ${ calculationTwo}`)
        } else {
            // pass
        }
    }

}