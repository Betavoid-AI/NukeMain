const brain1 = require('brain.js');
const { trainingdata } = require('./AI_Reply/Trainingdata-Variablecheck');
const fs = require('fs');
const path = require('path');

// Create a Neural Network
const network = new brain1.NeuralNetwork();

//TRAINING DATA MAKER -----------------------
const finalarray = [];
const addedfinalarray = [];




// The functions for processing ===========================================
function getkeywordsfromthisfoker(keysws) {

    const currentkeys = [];
    const oldshit = [];

    //GEAR VARIABLES
    const keys = ['allowable stress',
        'tangible load',
        'module',
        'face width',
        'Lewis form factor',
        'pressure angle',
        'addendum',
        'dedendum',
        'clearance',
        'center distance',
        'pitch diameter',
        'base circle diameter',
        'outside diameter',
        'root diameter',
        'working depth of tooth',
        'whole depth of tooth',
        'gear ratio',
        'number of teeth',
        'circular pitch',
        'diametral pitch',
        'tensile strength',
        'factor of safety',
        'torque',
        'pitch',
        'stress',
        'module',
        'pitch diameter',
        'thickness',
        'material',
        'teeth',
        'torque',
        'force',
        'budget'];

    //PREPING ---------------------------------------------------
    // Remove symbols (/ and .) from the sentence
    const cleanedSentence = keysws.replace(/[/.]/g, '');

    // Split the cleaned sentence into an array of words
    const wordsArray = cleanedSentence.split(' ').filter((element) => {
        return element !== '';
    });

    //RESETTING EVERYTHING ------------------------
    currentkeys.length = 0;
    oldshit.length = 0;

    //MATCHING KEYWORDS ----------------------------
    //==> currentkeys, currentnums, oldshit, oldnunu
    for (var j = 0; j < wordsArray.length; j++) {

        if (keys.includes(wordsArray[j])) {

            currentkeys.push(wordsArray[j]);
            oldshit.push(wordsArray[j]);

        }

        if (keys.includes(wordsArray[j] + ' ' + wordsArray[j + 1])) {

            currentkeys.push(wordsArray[j] + ' ' + wordsArray[j + 1]);
            oldshit.push(wordsArray[j] + ' ' + wordsArray[j + 1]);

        }

        if (keys.includes(wordsArray[j] + ' ' + wordsArray[j + 1] + ' ' + wordsArray[j + 2])) {

            currentkeys.push(wordsArray[j] + ' ' + wordsArray[j + 1] + ' ' + wordsArray[j + 2]);
            oldshit.push(wordsArray[j] + ' ' + wordsArray[j + 1] + ' ' + wordsArray[j + 2]);

        }

        if (keys.includes(wordsArray[j] + ' ' + wordsArray[j + 1] + ' ' + wordsArray[j + 2] + ' ' + wordsArray[j + 3])) {

            currentkeys.push(wordsArray[j] + ' ' + wordsArray[j + 1] + ' ' + wordsArray[j + 2] + ' ' + wordsArray[j + 3]);
            oldshit.push(wordsArray[j] + ' ' + wordsArray[j + 1] + ' ' + wordsArray[j + 2] + ' ' + wordsArray[j + 3]);

        }

    }

    return currentkeys;

}

function lengthfix(wo) {
    const tempwords = [];
    if (wo.length < 80) {
        var dif = 80 - wo.length;

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

function convertArrayToObject(array) {
    const obj = {};

    array.forEach((item) => {
        const [key, value] = item.split(':').map((str) => str.trim());
        const formattedKey = key.replace(/\s+/g, '_');

        obj[formattedKey] = parseInt(value);
    });

    return obj;
}

function convertString(inputString, inorna) {

    const regex = /[^a-zA-Z0-9\s]/g; // Regular expression to match non-alphanumeric characters except spaces
    const words = inputString.replace(regex, '').split(' ').filter((element) => {
        return element !== '';
    }); // Remove non-alphanumeric characters and split into an array of words

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

    const outputvars = [];
    const varsinsentance = getkeywordsfromthisfoker(inputString);

    for (var w = 0; w < varsinsentance.length; w++) {

        if (!w == varsinsentance.length) {
            outputvars.push(varsinsentance[w] + ': 1, ');
        } else {
            outputvars.push(varsinsentance[w] + ': 1');
        }
    }



    const finaloutputst = convertArrayToObject(outputvars);

    var convertedInput;
    convertedInput = { input: result, output: finaloutputst }; //the template where we will push the processed data for training

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

        finalarray.push(convertString(resultArrayforspur[q], false));

    };

    for (var p = 0; p < finalarray.length; p++) {
        addedfinalarray.push(finalarray[p]);
    }

}

function inputprocesser(ino) { //processes the input statement and converts into numbers
    var theinput = convertString(ino, true);
    return theinput;
}
// The functions for processing ===========================================



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
            logPeriod: 5, // Display the progress every 10 iterations
            learningRate: 0.01,
        };

        console.log('');
        console.log('Training the AI that figures out the name of the part from the input statement');
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





        //B
        // converting the model to the string to save to DB ===========================================
        const serializedModel = network.toJSON();
        const modelString = JSON.stringify(serializedModel); //the model is here ++++++++++++++++
        // converting the model to the string to save to DB ===========================================




        //C
        // Saving the stingified model in a txt file ==================================================
        const folderPath = path.join(__dirname, 'Public'); // Specify the folder name here
        const filePath = path.join(folderPath, 'Variable_Extractor_Model.txt'); // Specify the file name here




        if (!trainagain) {
            // Check if the file already exists
            if (fs.existsSync(filePath)) {
                console.log('The Model Trained Already:', filePath);
                return;
            }
        }
        // Create the folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
            console.log('Folder created:', folderPath);
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
//HOW IT WORKS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//GET createJSFileInFolder TO TRUE AND COMMENT STUFF BELOW AND JUST SAVE THE FILE
//WHEN YOU SAVE IT WILL GENRATE THE DATA, TRAIN THE MODEL, AND SAVE AS TXT FILE IN PUBLIC FOLDER
//SET createJSFileInFolder TO FALSE AGAIN AND UNCOMMENT AND COMMNET STUFF BELOW
//RUN THE BROWERIFY CMD TO MAKE A BUNDLE FILE IN PUBLIC FOLDER

//HERE THE MODEL GETS TRAINED AND GETS SAVED AS TXT FILE, RUN IT FIRST AND WHEN GET createJSFileInFolder TO FALSE AGAIN

















//make sure the function createJSFileInFolder is either commented out or has false passed in it
//or it will create new model, train it, and save it everytime we save file or refresh
//############################################################################################################
//############################################################################################################

// Read how_models_are_saved_and_reused.txt to understand how this works, located in Trained_Mdels folder
//WHENEVER THE BUNDLE FILE IS LOADED INTO THE EJS FILE IT WILL GET THE INPUT AND GIVE RESPONSE
//WHENEVER WE NEED RESPOSENSE, WE HAVE TO LOAD THE BUNDLE SCRIPT AGAIN


//############################################################################################################
//############################################################################################################
// in code below, make sure to comment out all document.getelementbyid things when the public bundle is done



















//HOW IT WORKS +++++++++++++++++++++++++++++++
//HOW IT WORKS +++++++++++++++++++++++++++++++
// UNCOMMENT AND COMMENT STUFF BELOW AND RUN THE BROWSERIFY CMD TO MAKE THE BUNDLE IN PUBLIC
//THE TXT IS GENRATED, WE CAN USE IT BELOW TO GET THE RESPONSE.. AFTER MAKING A TXT FILE, WE UNCOMMENT STUFF
//TO GENRATE A BUNDLE FILE AND PUT IT IN PUBLIC FOLDER, WHICH WE LOAD WHEN WE INTO THE EJS FILE WHEN WE WANT A REPLY



//takes the trained model in txt file and injects it in a div (AI_Model_VarCheck) =====================
function readTextFile(filePath) {

    var fileContent;

    try {

        // Read the content of the file - good for running from here but wont work when bundled
        fileContent = fs.readFileSync(filePath, 'utf-8');
        
    } catch (error) {


        fetch('/Variable_Extractor_Model.txt')
        .then(response => response.text())
        .then(data => {

            // Process the file data here
            fileContent=data; //the model -----------
            document.getElementById('AI_Model_VarCheck').innerHTML = data;

        })
        .catch(error => {
            console.error('Error:', error);
        });
        
    }

    return fileContent;
}

const folderPath = path.join(__dirname, 'Public'); // Specify the folder name here
const filePath = path.join(folderPath, 'Variable_Extractor_Model.txt'); // Specify the file path here
readTextFile(filePath);




//const condi = document.querySelector('.getdataorna1').innerHTML;                  //uncomment this when making bundle
const condi = 1;                                                                    //comment this when making bundle


if ( !parseInt(condi) == 1) {


    //getting the trained model from the div element =================================================
    //const fileContent = document.getElementById('AI_Model_VarCheck').innerHTML; //uncomment this when making bundle
    const fileContent = readTextFile(filePath);                                   //comment this when making bundle


    //using the model, it was store in the txt file
    const serializedModelb = JSON.parse(fileContent);
    const model = new brain1.NeuralNetwork();
    model.fromJSON(serializedModelb);
    //here we pull the trained model stored in a txt file in the Train_Models filder and we put it in the model object



    //using the model recovered from txt file, here -
    function brainshit() {


        //const input = '/des design a spur gear with a gear ratio of 3.8:1, a pitch diameter of 48.8 mm, and a material with an allowable stress of 550 MPa, while maintaining a module of 1.6 mm and a face width of 3 mm.';
        const input = document.getElementById('userinputforai').innerHTML;


        //Input data here -------------------------------
        let result = model.run(inputprocesser(input));
        const respo = [result["allowable_stress"], result["tangible_load"], result["module"], result["face_width"], result["root_diameter"], result["pressure_angle"], result["addendum"], result["dedendum"], result["clearance"], result["center_distance"], result["pitch_diameter"], result["outside_diameter"], result["working_depth_of_tooth"], result["whole_depth_of_tooth"], result["gear_ratio"], result["material"], result["circular_pitch"], result["diametral_pitch"], result["tensile_strength"], result["teeth"], result["torque"], result["pitch"], result["torque"], result["stress"], result["force"], result["pitch_diameter"], result["Lewis_form_factor"], result["number_of_teeth"], result["factor_of_safety"], result["base_circle_diameter"], result["module"], result["budget"]];


        //making an output package ----------------------
        const varnam = ['allowable_stress', 'tangible_load', 'module', 'face_width', 'root_diameter', 'pressure_angle', 'addendum', 'dedendum', 'clearance', 'center_distance', 'pitch_diameter', 'outside_diameter', 'working_depth_of_tooth', 'whole_depth_of_tooth', 'gear_ratio', 'material', 'circular_pitch', 'diametral_pitch', 'tensile_strength', 'teeth', 'torque', 'pitch', 'torque', 'stress', 'force', 'pitch_diameter', 'Lewis_form_factor', 'number_of_teeth', 'factor_of_safety', 'base_circle_diameter', 'module', 'budget'];
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
        document.getElementById('tryshi').innerHTML = the_final_op;

        return console.log(resultObject);


    }
    //brainshit()                                                                //uncomment this when making bundle
    
    //      Uncomment the above comment before running the terminal command to genrate the public bundle
    //      to make the public bundle file, run this cmd - browserify bundle.js -o public/NAME.js
    //      put the name instead of the NAME.js



}
try {
    //document.querySelector('.getdataorna1').innerHTML = 0;        //uncomment this when making bundle
    console.log('VarCheck AI Loaded successfully --');
} catch (error) {
    console.log(error);
}
