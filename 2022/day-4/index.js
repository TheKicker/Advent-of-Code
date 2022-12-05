const fs = require('fs');
let arr = fs.readFileSync('./day-4/data.txt', 'utf-8').toString().split("\n");

let split = [];
let overlapOne = 0;
let overlapTwo = 0;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const firstSplit = element.split(",");
    const secondSplit = firstSplit.map((value) => {
    return value.split("-");
    });
    split.push(secondSplit);
}
for (let i = 0; i < split.length; i++) {
    const elfPair = split[i];
    const firstElf = elfPair[0];
    const secondElf = elfPair[1];

    // console.log(firstElf)
    // console.log(secondElf)

    //part1
    if (
    parseInt(firstElf[0]) <= parseInt(secondElf[0]) &&
    parseInt(firstElf[1]) >= parseInt(secondElf[1])
    ) {
    overlapOne++;
    } else if (
    parseInt(firstElf[0]) >= parseInt(secondElf[0]) &&
    parseInt(firstElf[1]) <= parseInt(secondElf[1])
    ) {
    overlapOne++;
    }
    //part 2
    if (
    parseInt(firstElf[0]) <= parseInt(secondElf[0]) &&
    parseInt(firstElf[1]) >= parseInt(secondElf[0])
    ) {
    overlapTwo++;
    } else if (
    parseInt(secondElf[0]) <= parseInt(firstElf[0]) &&
    parseInt(secondElf[1]) >= parseInt(firstElf[0])
    ) {
    overlapTwo++;
    }
}

exports.overlapOne = overlapOne
exports.overlapTwo = overlapTwo