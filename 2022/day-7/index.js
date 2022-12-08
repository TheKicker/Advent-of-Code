// This day was too advanced for me... I tried but I can't take it anymore.  Not submitting until I comment everything and understand how it works.  
//      Reddit Day 7 Solutions 
//      https://www.reddit.com/r/adventofcode/comments/zesk40/2022_day_7_solutions/
//
//      Original Code from Barraka
//      https://gist.github.com/Barraka/3b87dc48aac2a0ff8bab394448ab0b17
//
//

// Import library and read the data file line by line
const fs = require('fs');
let data = fs.readFileSync('./day-7/data.txt', 'utf-8').toString();
const d = data.split(/\r?\n/);

// Variable to hold the answer for Part One
let sum = 0;
// Variable to hold the answer for Part Two
let closestSize = 70000000;
// Variable to hold the amount of times LS is used
let lsCount = 0;

// Where we store all of the directories for debugging
let directory= {'/':{size:0}};
//Current working directory
let cwd = ['/']; 

// For each line in the file
d.forEach( x => {
    // Turn it into an array
    x = x.split(' ');
    // console.log(x)

    // For 'command line' interaction
    if(x[0] === '$') {
        // If the 'command line' interaction begins with CD        
        if(x[1] === 'cd') 
        {
            // And the next is .. then just like in real life go back one level
            if(x[2] === '..') { cwd.pop();}
            // Else, go into the directory
            else {
                // Set the directory name as whatever the folder is called
                const dirname=x[2];
                // Add it to our current working directory 
                // So cd fooBar begins /fooBar
                cwd.push(dirname);
                // Then set the full path as an item
                const fullpath=cwd.join('/');
                // console.log(fullpath);
                // Add the fullpath as a new item to our directory object
                directory[fullpath]={};
                // Give it a size attribute of zero
                directory[fullpath].size=0;
                // So off our previous example
                // '//fooBar':{ size:0;}
                // gets added to our directory 
            }
        } 
        else if (x[1] === 'ls')
        {
            // Pass, it's just listing everything in the folder
            lsCount++;
            // console.log(`${lsCount} ls detected. `)
        }
    } 
    // Lists a folder, we (the human) can ignore until instruction is given to enter
    else if(x[0]==='dir')
    {
        return;
    } 
    else 
    {
        // if not $ or dir, then it has to be a file for us to count, so parse the file size
        const fileSize=parseInt(x[0]);
        // Create a temporary array
        const temp=[];        
        // For each file in the current directory 
        cwd.forEach(d=> {
            // append to our temp array
            temp.push(d);            
            // create a temporary variable for the filename
            const temp2=temp.join('/');
            // Increment the file size
            directory[temp2].size+=fileSize;    
        });
    }
});

// To begin, find all of the directories with a total size of at most 100000, then calculate the sum of their total sizes.
for(dir in directory) {
    if(directory[dir].size<=100000)
    {
        sum+=directory[dir].size;
    } 
}

// You need to find a directory you can delete that will free up enough space to run the update. 
// In the example above, the total size of the outermost directory (and thus the total amount of used space) is 48381165; this means that the size of the unused space must currently be 21618835, which isn't quite the 30000000 required by the update. 
// Therefore, the update still requires a directory with total size of at least 8381165 to be deleted before it can run.
// Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?
const sizeToFree=directory['/'].size-70000000+30000000
for(dir in directory) {
    if(directory[dir].size>sizeToFree && directory[dir].size<closestSize)
    {
        closestSize=directory[dir].size;
    }
}

// console.log(directory);
// console.log('Answer 1: ', sum);
// console.log('Answer 2: ', closestSize);
// console.log(`Expected: 1723892 & 8474158`);

exports.sum = sum;
exports.closestSize = closestSize;
exports.lsCount = lsCount;
exports.directory = directory;