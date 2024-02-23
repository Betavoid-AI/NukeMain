const brain1 = require('brain.js');
const { trainingdata } = require('./Trainingdata');


//the length of the data points should be same and so shold also be same for the input. or it will respond NuN


// Create a Neural Network
const network = new brain1.NeuralNetwork();


//TRAINING DATA MAKER -----------------------
const finalarray = [];
const finalarray2 = [];
const finalarray3 = [];
const addedfinalarray = [];


function lengthfix(wo) {
    const tempwords = [];
    if (wo.length < 50) {
        var dif = 50 - wo.length;

        for (var f = 0; f < wo.length; f++) {
            tempwords.push(wo[f]); //pushses the current words in the new array
        }

        for (var y = 0; y < dif; y++) {
            tempwords.push('UFO') //push 'wfo after the sentance to make the lenth of the sentance 25'
        }

        return tempwords
    }
}

function convertWordToNumber(word) {
    const letters = word.toUpperCase().split('');
    const letterToNumber = {};

    if (/\d/.test(word)) {
        var number = parseInt(word, 10);
        let string1 = number.toString();
        return string1;
    }

    // Generate mapping of letters to numbers
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        letterToNumber[letter] = i + 1;
    }

    const result = [];

    // Convert each letter to its corresponding number
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (letterToNumber.hasOwnProperty(letter)) {
            result.push(letterToNumber[letter]);
        }
    }

    const final = result.join('');
    return final;
}

function sumDigits(array) { //adds up the numbers, like 12 to 3, or 19 to 10
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        const digits = Array.from(String(number), Number);
        const sum = digits.reduce((a, b) => a + b, 0);
        result.push(sum);
    }

    return result;
}

function convertString(inputString, inorna, name) {

    const regex = /[^a-zA-Z0-9\s]/g; // Regular expression to match non-alphanumeric characters except spaces
    const words = inputString.replace(regex, '').split(' '); // Remove non-alphanumeric characters and split into an array of words

    var finalwords;
    finalwords = lengthfix(words); //this to to fix the length of the data point, the sentance should have teh same number of words, and ssame goes for the input

    const finalconverted = [];
    for (var w = 0; w < finalwords.length; w++) {

        finalconverted.push(sumDigits(convertWordToNumber(finalwords[w]))); //converting the words into numbers

    }

    const result = [];
    for (const str of finalconverted) {
        result.push(parseInt(str)); //the numbers are the string, converting the string number into the integers
    }

    var convertedInput;
    if (name == 'SG') {
        convertedInput = { input: result, output: { Spur_Gear: 1 } }; //the template where we will push the processed data for training
    } else if (name == 'SH') {
        convertedInput = { input: result, output: { Spur_Gear2: 1 } }; //the template where we will push the processed data for training
    } else if (name == 'B') {
        convertedInput = { input: result, output: { Bearing: 1 } }; //the template where we will push the processed data for training
    }

    if (inorna) {
        return result;
    } else {
        return convertedInput;
    }

}

function asshole() { // this is where the AI Model is ===========

    //const inputStringforsppur = trainingdataforspurgear;
    const inputStringforsppur = trainingdata();
    const resultArrayforspur = inputStringforsppur.split("\n");

    for (var q = 0; q < resultArrayforspur.length; q++) {

        if (q < 201) {
            finalarray.push(convertString(resultArrayforspur[q], false, 'SG'));
        }

        if (q > 200 && q < 398) {
            finalarray2.push(convertString(resultArrayforspur[q], false, 'SH'));
        }

        if (q > 400) {
            finalarray3.push(convertString(resultArrayforspur[q], false, 'B'));
        }

    };

    for (var p = 0; p < finalarray.length; p++) {
        addedfinalarray.push(finalarray[p]);
    }

    for (var s = 0; s < finalarray2.length; s++) {
        addedfinalarray.push(finalarray2[s]);
    }

    for (var z = 0; z < finalarray3.length; z++) {
        addedfinalarray.push(finalarray3[z]);
    }
}

function inputprocesser(ino) { //processes the input statement and converts into numbers
    var theinput = convertString(ino, true);
    return theinput;
}


asshole();
//TRAINING DATA MAKER -----------------------


// Define the training options
const trainingOptions = {
    iterations: 5,
    log: true,
    logPeriod: 10, // Display the progress every 10 iterations
    learningRate: 0.01,
};

console.log('==============================================================================');

//========================= Training data here
network.train(addedfinalarray, trainingOptions, (stats) => {
    console.log(`Iterations: ${stats.iterations}`);
    console.log(`Training Error: ${stats.error}`);
});


function brainshit(input) {
 
    //========================= Input data here
    let result = network.run(inputprocesser(input));
    const respo = [result["Spur_Gear"], result["Spur_Gear2"], result["Bearing"]];
    return respo;

}

function testai() {
    console.log('it soo worked!!!!!!');
}

module.exports = {
    solveshit: brainshit,
    testai: testai
};