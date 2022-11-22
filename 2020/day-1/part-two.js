const fs = require('fs');

var arr = fs.readFileSync('puzzle.txt').toString().split("\n");

// for each item in the array, add every other item in the array, if it equals 2020 stop and spit out the two parents
for (var x = 0; x < arr.length; x++)
{
    var parentOne = parseInt(arr[x]);
    for (var y = 0; y < arr.length; y++)
    {
        var parentTwo = parseInt(arr[y]);
        for (var z = 0; z < arr.length; z++)
        {
            var parentThree = parseInt(arr[z]);
            var calculationOne = parentOne + parentTwo + parentThree;
            if(calculationOne == 2020)
            {
                console.log(`PO: ${parentOne} / PT: ${parentTwo} / PTT: ${parentThree}`);
                var calculationTwo = parentOne * parentTwo * parentThree;
                console.log(`M: ${ calculationTwo}`)
            } else {
                // pass
            }
        }
    }

}