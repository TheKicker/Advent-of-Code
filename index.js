const figlet = require('figlet');
const cliProgress = require('cli-progress');

figlet('Advent of Code', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log("\n")
    console.log(data)
    console.log("\n")
    // create new progress bar
    const firstYear = new cliProgress.SingleBar({
        format: '2020 Progress | Node.js |' + `{bar}` + '| {percentage}% || {value}/{total} Stars',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });
    // initialize the bar - defining payload token "speed" with the default value "N/A"
    firstYear.start(50, 6, {
        speed: "N/A"
    });
    // stop the bar
    firstYear.stop();

    const secondYear = new cliProgress.SingleBar({format: '2021 Progress | Python |' + `{bar}` + '| {percentage}% || {value}/{total} Stars',barCompleteChar: '\u2588',barIncompleteChar: '\u2591',hideCursor: true});
    secondYear.start(50, 6, {speed: "N/A"});
    secondYear.stop();

    const thirdYear = new cliProgress.SingleBar({format: '2022 Progress | Node.js |' + `{bar}` + '| {percentage}% || {value}/{total} Stars',barCompleteChar: '\u2588',barIncompleteChar: '\u2591',hideCursor: true});
    thirdYear.start(50, 2, {speed: "N/A"});
    thirdYear.stop();

    console.log("\n")
});