const brain1 = require('brain.js');
const { trainingdata, parttwo, lablefor2ndpart, lengthofdata } = require('./1_user_responding_to_AI_Data');
const { nameofAI } = require('../AI_Route/AI_Routes');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

// Create a Neural Network
const network = new brain1.NeuralNetwork();

//TRAINING DATA MAKER -----------------------
const finalarray = [];
const addedfinalarray = [];


// The functions for processing ===========================================
function checkTrainedModel(TestStatement) {

    //Input data here -------------------------------
    //to remove `` from the data
    function removeBackticks(inputArray) {
        const outputArray = inputArray.map(element => element.slice(1, -1));
        return outputArray;
    }

    function parseValues(input) {
        // Remove single quotes and spaces, then split the input string by commas
        const values = input.replace(/'/g, '').split(', ');

        return values;
    }

    const train2ndpart2 = Trainingdata2ndpart();
    const traning2ndpartfinal = removeBackticks(train2ndpart2);
    const parttwoforindex2 = parseValues(traning2ndpartfinal[0]); // this is the OP - [ 'Predict', 'UserWillGive', 'NeedNamesOfVariables' ]


    const firstres = parttwoforindex2[0];
    const secres = parttwoforindex2[1];
    const thirdres = parttwoforindex2[2];

    let result = network.run(inputprocesser(TestStatement));
    const respo = [result[firstres], result[secres], result[thirdres]];

    //making an output package ----------------------
    const varnam = [firstres, secres, thirdres];
    const outputoftheai = [];
    for (var yu = 0; yu < varnam.length; yu++) {
        outputoftheai.push(varnam[yu] + ': ' + respo[yu]);
    }
    var resultObject = {};

    for (var i = 0; i < outputoftheai.length; i++) {

        var keyValue = outputoftheai[i].split(':');
        var key = keyValue[0].trim();
        var value = (parseFloat(keyValue[1]) * 100).toFixed(2);

        resultObject[key] = parseFloat(value);
    }

    console.log(resultObject);
}



//----4
function lengthfix(wo) {

    const tempwords = [];
    if (wo.length < 25) {
        var dif = 25 - wo.length;

        for (var f = 0; f < wo.length; f++) {
            tempwords.push(wo[f]); //pushses the current words in the new array
        }

        for (var y = 0; y < dif; y++) {
            tempwords.push('a') //push 'wfo after the sentance to make the lenth of the sentance 25'
        }

        return tempwords
    }

}

//----5
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

//----6
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

//----8
function convertArrayToObject(array) {
    const obj = {};

    array.forEach((item) => {
        const [key, value] = item.split(':').map((str) => str.trim());
        const formattedKey = key.replace(/\s+/g, '_');

        obj[formattedKey] = parseInt(value);
    });

    return obj;
}

//----7
function Trainingdata2ndpart() {
    const inputStringforsppur2 = parttwo(); //training data here +
    const initialstring = (inputStringforsppur2[0])[0];

    const trimmedString2 = initialstring.trim(); // Remove leading/trailing spaces
    const splitArray2 = trimmedString2.split('/'); // Split the string at '/'
    const resultArrayforspur2 = splitArray2.map(item => item.trim()); // Remove extra spaces from each item


    const sectrainingpart = [];
    for (var q = 0; q < resultArrayforspur2.length; q++) {

        sectrainingpart.push(resultArrayforspur2[q]);

    };

    return sectrainingpart;

}

//----3.1
function getArrayAtIndex(arr, index) {

    if (index >= 0 && index < arr.length) {
        // Removing the outer single quotes and splitting by comma and space
        const elements = arr[index].slice(1, -1).split(', ');
        return elements;
    } else {
        return null; // Index is out of bounds
    }
}

//----3 - needs edit when making new AI
function convertString(inputString, inorna, index) {

    //one senstance from the training data comes in
    //we break sentance into array of words
    //fix the length of the array by adding some random words
    //converts alphabets in all the words into numbers
    //sums up the numbers of the words and stores in finalconverted
    //converts the numbers into int and stores in result
    //gets the keywords in the sentance and uses that array to make the 'stress':1 things for training

    var words;

    const regex = /[^a-zA-Z0-9\s]/g; // Regular expression to match non-alphanumeric characters except spaces
    words = inputString.replace(regex, '').split(' ').filter((element) => {
        return element !== '';
    }); // Remove non-alphanumeric characters and split into an array of words

    var finalwords;
    finalwords = lengthfix(words); //this to to fix the length of the data point, the sentance should have teh same number of words, and ssame goes for the input















    //HENDLEING PART 1 OF THE TRAINING DATA______________________________________________________

    function multiplyArrayElements(array) {
        let product = 1;
        for (let i = 0; i < array.length; i++) {
          if (array[i] === 0) {
            product += 0; // Replace 0 with 1 before multiplying
          } else {
            product += array[i];
          }
        }
        return product;
    }

    const finalconverted = []; //the array of numbers
    for (var w = 0; w < finalwords.length; w++) {
        finalconverted.push(sumDigits(convertWordToNumber(finalwords[w]))); //converting the words into numbers
    }

    const multipliedarray = [];
    for (let r = 0; r < finalconverted.length; r++) {
        multipliedarray.push(multiplyArrayElements(finalconverted[r]));
    }

    const result = []; //finalconverted //multipliedarray parseInt
    for (const str of finalconverted) {
        result.push(parseInt(str)); //the numbers are the string, converting the string number into the integers
    }

    //______________________________________________________________________________________________










    //HENDLING 2ND PART OF THE TRAINING DATA________________________________________________________

    const labledataarray = lablefor2ndpart(); //here we have [ "'a', 'b', 'c'", "'b', 'a', 'c'" ], these are lables for output side of data and are in the order
    const lengthofdatas = lengthofdata(); //these are the array of the lengths of the three arryas we used for constructing the data
    const indexofthisloop = index + 1; //forknowing which dataset we are processing and matching it with thelength of data sets we used to assemble the final data set

    const lableset1 = [labledataarray[0]];
    const lableset2 = [labledataarray[1]];
    const lableset3 = [labledataarray[2]];
    //const stringWithQuotes = lableset1[0];
    //const finalstiss = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    //middle number
    const datasetlength1 = lengthofdatas[1] + lengthofdatas[0];

    var thefinallookarray;
    if (indexofthisloop <= lengthofdatas[0]) {

        const stringWithQuotes = lableset1[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }
    if (indexofthisloop > lengthofdatas[0] && indexofthisloop <= datasetlength1) {
        
        const stringWithQuotes = lableset2[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }
    if (indexofthisloop > datasetlength1) {

        const stringWithQuotes = lableset3[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    const arrayforobj = []; //array for being converted to object

    if (thefinallookarray) {
        for (var w = 0; w < thefinallookarray.length; w++) {            //finalstiss

            if (w == 0) {
                arrayforobj.push(thefinallookarray[w] + ': 1, '); //if there is yes at index 0, it will be set to 1, if no it will be set to 1
            }

            if (w == 1) {
                arrayforobj.push(thefinallookarray[w] + ': 0, ');
            }

            if (w == 2) {
                arrayforobj.push(thefinallookarray[w] + ': 0');
            }
        }
    }

    //______________________________________________________________________________________________









    const finaloutputst = convertArrayToObject(arrayforobj); // the arrayforobj will look like - ["yes: 1, ", "no: 0, ", "maybe: 0"], and will convert to - {yes: 1, no: 0, maybe: 0}

    var convertedInput;
    convertedInput = { input: result, output: finaloutputst }; //the template where we will push the processed data for training

    if (inorna) {
        return result; // this is fired when this function is called for processing the user input
    } else {
        return convertedInput; // this is fired when we need the training data
    }

}

//----2
function asshole() { // this is where the AI Model is ===========

    const inputStringforsppur = trainingdata(); //training data here +
    const trimmedString = inputStringforsppur[0].trim(); // Remove leading/trailing spaces
    const splitArray = trimmedString.split('/'); // Split the string at '/'
    const resultArrayforspur = splitArray.map(item => item.trim()); // Remove extra spaces from each item


    for (var q = 0; q < resultArrayforspur.length; q++) {

        finalarray.push(convertString(resultArrayforspur[q], false, q));

    };

    for (var p = 0; p < finalarray.length; p++) {
        addedfinalarray.push(finalarray[p]);
        //console.log(finalarray[p]);
        //console.log(resultArrayforspur[p]);
    }

}

//---- For User Input
function inputprocesser(ino) { //processes the input statement and converts into numbers
    var theinput = convertString(ino, true);
    return theinput;
}
// The functions for processing ===========================================


//----1
function createJSFileInFolder(trainagain) {

    if (trainagain) { //it will train only when we will pass false when calling the function

        //A
        // Trains the mode ========================================================================
        asshole();
        //TRAINING DATA MAKER -----------------------

        // Define the training options
        const trainingOptions = {
            iterations: 50000,
            log: true,
            logPeriod: 50, // Display the progress every 10 iterations
            learningRate: 0.01, //0.00000001
        };

        console.log('');
        console.log('Training the AI');
        console.log('==============================================================================');
        console.log('');
        console.log('LOG -');
        console.log('');

        //========================= Training data here
        network.train(addedfinalarray, trainingOptions, (stats) => {
            console.log(`Iterations: ${stats.iterations}`);
            console.log(`Training Error: ${stats.error}`);
        });
        //the trained model is stored in the network object 
        // Trains the mode ========================================================================    






        //just checking if the model is trained and working or not ++++++++++++++++++++++++++++++++
        checkTrainedModel('feel free to predict rest of the variables');
        //____________________________________________________






        //B
        // converting the model to the string to save to DB ===========================================
        const serializedModel = network.toJSON();
        const modelString = JSON.stringify(serializedModel); //the model is here ++++++++++++++++
        // converting the model to the string to save to DB ===========================================


        //C
        // Saving the stingified model in a txt file ==================================================

        //getting absolute path of the public folder 
        function getPublicFolderPath() {
            // Assuming your public folder is in the root directory
            const publicFolderRelativePath = '../public';  // Adjust the relative path accordingly
            const absolutePath = path.join(__dirname, publicFolderRelativePath);
            return absolutePath;
        }

        const nameofaifromtrainingdata = nameofAI(); //name of the txt file that will be saves as trained model
        const filePath = path.join(getPublicFolderPath(), nameofaifromtrainingdata); // Specify the file name here


        if (!trainagain) {
            // Check if the file already exists
            if (fs.existsSync(filePath)) {
                console.log('The '+nameofaifromtrainingdata+' Model Trained Already:', filePath);
                return;
            }
        }

        // Create the file
        const fileContent = modelString; // Contnet of the file here
        fs.writeFileSync(filePath, fileContent);
        console.log('Model Saved:', filePath);

        return console.log('DONE ============================');
        // Saving the stingified model in a txt file ==================================================
    }

}
createJSFileInFolder(false);

//HOW IT WORKS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//GET createJSFileInFolder TO TRUE AND COMMENT STUFF BELOW AND JUST SAVE THE FILE
//WHEN YOU SAVE IT WILL GENRATE THE DATA, TRAIN THE MODEL, AND SAVE AS TXT FILE IN PUBLIC FOLDER
//SET createJSFileInFolder TO FALSE AGAIN AND UNCOMMENT AND COMMNET STUFF BELOW
//RUN THE BROWERIFY CMD TO MAKE A BUNDLE FILE IN PUBLIC FOLDER

//HERE THE MODEL GETS TRAINED AND GETS SAVED AS TXT FILE, RUN IT FIRST AND WHEN GET createJSFileInFolder TO FALSE AGAIN





















//############################################################################################################
//############################################################################################################

// Read how_models_are_saved_and_reused.txt to understand how this works, located in Trained_Mdels folder
//WHENEVER THE BUNDLE FILE IS LOADED INTO THE EJS FILE IT WILL GET THE INPUT AND GIVE RESPONSE
//WHENEVER WE NEED RESPOSENSE, WE HAVE TO LOAD THE BUNDLE SCRIPT AGAIN


//############################################################################################################
//############################################################################################################






















//HOW IT WORKS +++++++++++++++++++++++++++++++
// UNCOMMENT AND COMMENT STUFF BELOW AND RUN THE BROWSERIFY CMD TO MAKE THE BUNDLE IN PUBLIC
//THE TXT IS GENRATED, WE CAN USE IT BELOW TO GET THE RESPONSE.. AFTER MAKING A TXT FILE, WE UNCOMMENT STUFF
//TO GENRATE A BUNDLE FILE AND PUT IT IN PUBLIC FOLDER, WHICH WE LOAD WHEN WE INTO THE EJS FILE WHEN WE WANT A REPLY


//takes the trained model in txt file and injects it in a div (AI_Model_VarCheck) =====================
function readTextFile(filePath, nameoftxt) {

    var fileContent;

    try {

        // Read the content of the file - good for running from here but wont work when bundled
        fileContent = fs.readFileSync(filePath, 'utf-8');
        
    } catch (error) {


        fetch('/' + nameoftxt)
        .then(response => response.text())
        .then(data => {

            // Process the file data here
            fileContent=data; //the model -----------
            document.getElementById('AI_Model_txt').innerHTML = data;

        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    return fileContent;
}

//gets absolute path of the public folder
function getPublicFolderPath() {
    // Assuming your public folder is in the root directory
    const publicFolderRelativePath = '../public';  // Adjust the relative path accordingly
    const absolutePath = path.join(__dirname, publicFolderRelativePath);
    return absolutePath;
}

const nameofaifromtrainingdata = nameofAI();
const filePath = path.join(getPublicFolderPath(), nameofaifromtrainingdata);                     // Specify the file path of the txt trained model in oubluc folder here so it can use
//readTextFile(filePath, nameofaifromtrainingdata);                                   //uncomment this when making bundle



//const condi = document.querySelector('.getdataorna1').innerHTML;                  //uncomment this when making bundle
const condi = 1;                                                                    //comment this when making bundle


if ( !parseInt(condi) == 1) {


    //getting the trained model from the div element =================================================
    //const fileContent = document.getElementById('AI_Model_txt').innerHTML; //uncomment this when making bundle
    const fileContent = readTextFile(filePath);                                   //comment this when making bundle


    //using the model, it was store in the txt file
    const serializedModelb = JSON.parse(fileContent);
    const model = new brain1.NeuralNetwork();
    model.fromJSON(serializedModelb);
    //here we pull the trained model stored in a txt file in the Train_Models filder and we put it in the model object



    //using the model recovered from txt file, here -
    function brainshit() {


        //INPUT DIV ID HERE
        const input = document.getElementById(GetUserInputFromHere).innerHTML;


        //to remove `` from the data
        function removeBackticks(inputArray) {
            const outputArray = inputArray.map(element => element.slice(1, -1));
            return outputArray;
        }

        function parseValues(input) {
            // Remove single quotes and spaces, then split the input string by commas
            const values = input.replace(/'/g, '').split(', ');
          
            return values;
        }

        //Input data here -------------------------------
        const train2ndpart2 = Trainingdata2ndpart();
        const traning2ndpartfinal = removeBackticks(train2ndpart2);
        const parttwoforindex2 = parseValues(traning2ndpartfinal[0]); // this is the OP - [ 'Predict', 'UserWillGive', 'NeedNamesOfVariables' ]


        const firstres = parttwoforindex2[0];
        const secres = parttwoforindex2[1];
        const thirdres = parttwoforindex2[2];

        let result = model.run(inputprocesser(input));
        const respo = [ result[firstres], result[secres], result[thirdres] ];






        //Getting the biggest intension____________________________________________
        var TheBiggestIntension;

        if(result[firstres] > result[secres] && result[firstres] > result[thirdres]){
            TheBiggestIntension = firstres;
        };

        if(result[secres] > result[firstres] && result[secres] > result[thirdres]){
            TheBiggestIntension = secres;
        };

        if(result[thirdres] > result[firstres] && result[thirdres] > result[secres]){
            TheBiggestIntension = thirdres;
        };

        heighvalue_fromAI = TheBiggestIntension;
        //__________________________________________________________________________







        //making an output package ----------------------
        const varnam = [firstres, secres, thirdres];
        const outputoftheai = [];
        for (var yu = 0; yu < varnam.length; yu++) {
            outputoftheai.push(varnam[yu] + ': ' + respo[yu]);
        }
        var resultObject = {};

        for (var i = 0; i < outputoftheai.length; i++) {

            var keyValue = outputoftheai[i].split(':');
            var key = keyValue[0].trim();
            var value = (parseFloat(keyValue[1]) * 100).toFixed(2);

            resultObject[key] = parseFloat(value);
        }










        //display the op package -----------------------
        //makes the response from AI more presentable
        function formatData(data) {
            let formattedData = '';
            for (const key in data) {
                formattedData += `${key.replace(/_/g, ' ')}: ${data[key]}\n`;
            }
            return formattedData;
        }
        const the_final_op = formatData(resultObject);

        //OUTPUT DIV ID HERE
        document.getElementById(PutResponseHere).innerHTML = the_final_op;
        return console.log(resultObject);


    }
    //brainshit()                                                                //uncomment this when making bundle
    
    //      Uncomment the above comment before running the terminal command to genrate the public bundle
    //      to make the public bundle file, run this cmd - browserify bundle.js -o public/NAME.js
    //      put the name instead of the NAME.js



}
try {
    //document.querySelector('.getdataorna1').innerHTML = 0;        //uncomment this when making bundle
    console.log(nameofaifromtrainingdata + ' AI Loaded successfully --');
} catch (error) {
    console.log(error);
}



//when making a public bundle, use this name as this is specified in ejs in line 121
//NAME OF THE PUBLIC BUNDLE - UserResponseHendle



module.exports = {                            //comment this when making bundle
    solveshit: readTextFile
};