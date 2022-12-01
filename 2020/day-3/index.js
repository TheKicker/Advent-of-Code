const fs = require('fs');

const lines = fs.readFileSync('puzzle.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

class Map {
    constructor(map) {
        this.map = map;
    }

    // Once you reach the end of the x of the map, loop back to beginning
    // So the map repeats infinitely based on described pattern
    getPosition(x, y) {
        return this.map[y][x%this.map[0].length];
    }

    // returns the maps length, or in our case 323 lines
    getHeight() {
        return this.map.length;
    }
}

// ... is shorthand for array.concat
const map = new Map(lines.map(line => [...line]));


function trySlope(dx, dy) {
    let x = 0;
    let y = 0;
    let trees = 0;
    
    // until we reach the bottom of the mountain
    while(y < map.getHeight()) {
        // get the current position
        const current = map.getPosition(x, y);
        // if we pass a tree, count it
        if(current == '#') trees++;
        // increase position by our slope
        x += dx;
        y += dy;
    }

    return trees;
}

// Count the trees
console.log(trySlope(3, 1));

// An array of all the slopes we have to check
const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
let result = 1;
// loop over the slopes multiplying by each on each iteration
for (const slope of slopes) {
    result *= trySlope(...slope);
}

// Return all the slopes multiplied together
console.log(result);