const brain1 = require('brain.js');
const { trainingdata, parttwo, lablefor2ndpart, lengthofdata, validationdata } = require('./3_Hendle_questions_actions_Data');
const { nameofAI_3 } = require('../AI_Route/AI_Routes');
const fs = require('fs');
const path = require('path');
const { log } = require('console');

const natural = require('natural');
const winston = require('winston');

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


    const firstres = parttwoforindex2[0];                           //NEED CHANGES HERE WHEN MAKING NEW AI +, MAKE THESE FOR EACH OUTPUT WORD AI WILL GIVE
    const secres = parttwoforindex2[1];
    const thirdres = parttwoforindex2[2];
    const lable1 = parttwoforindex2[3];
    const lable2 = parttwoforindex2[4];
    const lable3 = parttwoforindex2[5];
    const lable4 = parttwoforindex2[6];

    let result = network.run(inputprocesser(TestStatement));
    const respo = [
        result[firstres],
        result[secres],
        result[thirdres],
        result[lable1],
        result[lable2],
        result[lable3],
        result[lable4]
    ];

    //making an output package ----------------------
    const varnam = [firstres, secres, thirdres, lable1, lable2, lable3, lable4];
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

    console.log('--------------------');
    console.log(TestStatement);
    console.log(resultObject);
    console.log('--------------------');
}

//Tokenizer - New
function BetaTokenizer(Inputpera, type, whattodo) {

    if (whattodo == 'encode') {

        //sending array of words
        if (type = 'array') {

            const tokens = Inputpera.filter(word => !/\d/.test(word));

            const outputTokens = [];
            tokens.forEach((Token) => {

                // Define the input text as a string
                const inputText = Token;

                // Find all unique characters in the input text
                const chars = [...new Set((' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z ! # $ % & + , - . / : ? @ \ ').split(''))];

                // Create a mapping from characters to integers (stoi)
                const stoi = {};
                chars.forEach((ch, i) => {
                    stoi[ch] = i;
                });

                // Create a mapping from integers to characters (itos)
                const itos = {};
                chars.forEach((ch, i) => {
                    itos[i] = ch;
                });

                // Define encoder and decoder functions
                const encode = (s) => s.split('').map((c) => stoi[c]);
                const decode = (l) => l.map((i) => itos[i]).join('');

                const encoded = encode(inputText);
                const decoded = decode(encoded);

                encoded.forEach((Val) => {
                    outputTokens.push(Val);
                })

                outputTokens.push(99);

            })

            return outputTokens;

        }

        //sending the sentances
        if (type = 'string') {
            const tokenizer = new natural.WordTokenizer();
            const tokens = tokenizer.tokenize(Inputpera);

            const outputTokens = [];
            tokens.forEach((Token) => {
                // Define the input text as a string
                const inputText = Token;

                // Find all unique characters in the input text
                const chars = [...new Set(('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z').split(''))];

                // Create a mapping from characters to integers (stoi)
                const stoi = {};
                chars.forEach((ch, i) => {
                    stoi[ch] = i;
                });

                // Create a mapping from integers to characters (itos)
                const itos = {};
                chars.forEach((ch, i) => {
                    itos[i] = ch;
                });

                // Define encoder and decoder functions
                const encode = (s) => s.split('').map((c) => stoi[c]);
                const decode = (l) => l.map((i) => itos[i]).join('');

                const encoded = encode(inputText);
                //const decoded = decode(encoded);

                encoded.forEach((Val) => {
                    outputTokens.push(Val);
                })

            })

            return outputTokens;
        }

    }

    if (whattodo == 'decode') {


        // Find all unique characters in the input text
        const chars = [...new Set((' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z ! # $ % & + , - . / : ? @ \ ').split(''))];

        // Create a mapping from integers to characters (itos)
        const itos = {};
        chars.forEach((ch, i) => {
            itos[i] = ch;
        });

        // Define encoder and decoder functions
        const decode = (l) => l.map((i) => (i === 99 ? ' ' : itos[i])).join('');

        const decoded = decode(Inputpera);
        return decoded

    }

}
//BetaTokenizer('Can you reduce the cost of lamborghini?');




//----4
function lengthfix(wo, type) {

    if (type == 'nums') {

        const tempwords = [];
        if (wo.length < 75) {
            var dif = 75 - wo.length;

            for (var f = 0; f < wo.length; f++) {
                tempwords.push(wo[f]); //pushses the current words in the new array
            }

            for (var y = 0; y < dif; y++) {
                const numnuts = 0;
                tempwords.push(numnuts) //push 'wfo after the sentance to make the lenth of the sentance 25'
            }

            return tempwords
        }

    }

    if (type == 'string') {

        const tempwords = [];
        if (wo.length < 90) {
            var dif = 90 - wo.length;

            for (var f = 0; f < wo.length; f++) {
                tempwords.push(wo[f]); //pushses the current words in the new array
            }

            for (var y = 0; y < dif; y++) {
                tempwords.push('a') //push 'wfo after the sentance to make the lenth of the sentance 25'
            }

            return tempwords
        }

    }

    if (wo.length>75) {
        console.log(wo.length);
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
    finalwords = lengthfix(words, 'string'); //this to to fix the length of the data point, the sentance should have teh same number of words, and ssame goes for the input












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

    const result2 = []; //finalconverted //multipliedarray parseInt
    for (const str of finalconverted) {
        result2.push(parseInt(str)); //the numbers are the string, converting the string number into the integers
    }

    const tempres = BetaTokenizer(words, 'array', 'encode');
    const result = lengthfix(tempres, 'nums');

    //______________________________________________________________________________________________













    //HENDLING 2ND PART OF THE TRAINING DATA________________________________________________________

    const labledataarray = lablefor2ndpart(); //here we have [ "'a', 'b', 'c'", "'b', 'a', 'c'" ], these are lables for output side of data and are in the order
    const lengthofdatas = lengthofdata(); //these are the array of the lengths of the three arryas we used for constructing the data
    const indexofthisloop = index + 1; //forknowing which dataset we are processing and matching it with thelength of data sets we used to assemble the final data set

    const lableset1 = [labledataarray[0]];
    const lableset2 = [labledataarray[1]];
    const lableset3 = [labledataarray[2]];
    const lableset4 = [labledataarray[3]];
    const lableset5 = [labledataarray[4]];
    const lableset6 = [labledataarray[5]];
    const lableset7 = [labledataarray[6]];
    const lableset8 = [labledataarray[7]];
    const lableset9 = [labledataarray[8]];
    const lableset10 = [labledataarray[9]];
    //const stringWithQuotes = lableset1[0];
    //const finalstiss = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    var thefinallookarray;
    if (indexofthisloop <= lengthofdatas[0]) {

        const stringWithQuotes = lableset1[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > lengthofdatas[0] && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0])) {
        
        const stringWithQuotes = lableset2[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2])) {
        
        const stringWithQuotes = lableset3[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3])) {
        
        const stringWithQuotes = lableset4[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4])) {
        
        const stringWithQuotes = lableset5[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5])) {
        
        const stringWithQuotes = lableset6[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6])) {
        
        const stringWithQuotes = lableset7[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6] + lengthofdatas[7])) {
        
        const stringWithQuotes = lableset8[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6] + lengthofdatas[7]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6] + lengthofdatas[7] + lengthofdatas[8])) {
        
        const stringWithQuotes = lableset9[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    if (indexofthisloop > (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6] + lengthofdatas[7] + lengthofdatas[9]) && indexofthisloop <= (lengthofdatas[1] + lengthofdatas[0] + lengthofdatas[2] + lengthofdatas[3] + lengthofdatas[4] + lengthofdatas[5] + lengthofdatas[6] + lengthofdatas[7] + lengthofdatas[8] + lengthofdatas[9])) {
        
        const stringWithQuotes = lableset10[0];
        thefinallookarray = stringWithQuotes.split(', ').map(str => str.replace(/'/g, ''));

    }

    const arrayforobj = []; //array for being converted to object

    if (thefinallookarray) {
        for (var w = 0; w < thefinallookarray.length; w++) {            //finalstiss

            arrayforobj.push(thefinallookarray[w] + ': 1, '); //if there is yes at index 0, it will be set to 1, if no it will be set to 1

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

    //training data
    const inputStringforsppur = trainingdata(); //training data here +
    const trimmedString = inputStringforsppur[0].trim(); // Remove leading/trailing spaces
    const splitArray = trimmedString.split('/'); // Split the string at '/'
    const resultArrayforspur = splitArray.map(item => item.trim()); // Remove extra spaces from each item

    for (var q = 0; q < resultArrayforspur.length; q++) {

        finalarray.push(convertString(resultArrayforspur[q], false, q));

    };

    for (var p = 0; p < finalarray.length; p++) {
        addedfinalarray.push(finalarray[p]);
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






        //Cutting data for validation and training__________________________
        const trainingdatafinal = addedfinalarray;
        const validationdata = [];

        const randomNumbers = [];
        for (let i = 0; i < 10; i++) {
            const randomNumber = Math.floor(Math.random() * (addedfinalarray.length + 1));
            randomNumbers.push(randomNumber);
        }

        randomNumbers.forEach((ind) => {
            validationdata.push(trainingdatafinal[ind]);
        })
        //___________________________________________________________________






        // Training__________________________________________________________
        // Logger
        const logger = winston.createLogger({
            level: 'info', // Set the log level
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console(), // Log to the console
                new winston.transports.File({ filename: 'training.log' }), // Log to a file
            ],
        });

        // Create a Bayes network with the specified training arguments
        const network = new natural.BayesClassifier();
        const trainingData = trainingdatafinal;
        
        // Train the network
        trainingData.forEach((data) => {
            const inputArray = data.input;
            const outputObject = data.output;

            // Convert inputArray to a string
            //const inputText = inputArray.join(' ');
            const inputText = BetaTokenizer(inputArray, 'no', 'decode');

            // Extract intent from the outputObject
            const intent = Object.keys(outputObject).find((key) => outputObject[key] === 1);

            // Add the document to the network
            network.addDocument(inputText, intent);

        });

        network.train();
        logger.info('Training completed.');
        //___________________________________________________________________






        // Test______________________________________________________________
        const userInput = 'can you give me names of the variables you need for calculations';
        const predictedIntent = network.classify(userInput);

        console.log('');
        console.log('__________________________________________________________');
        console.log(userInput);
        console.log(`Predicted intent: ${predictedIntent}`);
        console.log('__________________________________________________________');
        console.log('');
        //___________________________________________________________________






        //Validation_______________________________
        function validatethemodel() {

            let totalPredictions = 0;
            let correctPredictions = 0;

            //validation data 2 proceessing ________
            const Validationdataa = trainingdata(); //training data here +
            const validationdata2 = Validationdataa[0].trim(); // Remove leading/trailing spaces
            const validationdata3 = validationdata2.split('/'); // Split the string at '/'
            const Finalvalidationdata = validationdata3.map(item => item.trim()); // Remove extra spaces from each item

            const finaldatavalid = [];
            Finalvalidationdata.forEach((da) => {
                const cleanedStr = da.replace(/"([^"]*)"/g, '$1');
                finaldatavalid.push(cleanedStr);
            });
            //________


            finaldatavalid.forEach((da) => {

                const predictedIntent2 = network.classify(da);

                console.log('_____________________________');
                console.log(da);
                console.log('Predicted: ' + predictedIntent2);
                console.log('');

            });


            validationdata.forEach((data) => {
                if (data) {

                    const inputArray = data.input;
                    const outputObject = data.output;

                    const inputText = BetaTokenizer(inputArray, 'no', 'decode');
                    const trueIntent = Object.keys(outputObject).find((key) => outputObject[key] === 1);

                    const predictedIntent = network.classify(inputText);

                    console.log('_____________________________');
                    console.log(inputText);
                    console.log('trueIntent: ' + trueIntent);
                    console.log('Predicted: ' + predictedIntent);
                    console.log('');

                    totalPredictions++;

                    if (predictedIntent === trueIntent) {
                        correctPredictions++;
                    } else {
                        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
                    }

                }
            });

            const accuracy = (correctPredictions / totalPredictions) * 100;
            console.log(`Accuracy: ${accuracy.toFixed(2)}%`);

            accuracyofmodel = accuracy.toFixed(2);

        }
        //validatethemodel();
        //___________________________________________








        //B
        // converting the model to the string to save to DB __________________________________________
        const modelString = JSON.stringify(network); //the model is here ++++++++++++++++







        //C
        // Saving the stingified model in a txt file __________________________________________________

        //getting absolute path of the public folder 
        function getPublicFolderPath() {
            // Assuming your public folder is in the root directory
            const publicFolderRelativePath = '../public';  // Adjust the relative path accordingly
            const absolutePath = path.join(__dirname, publicFolderRelativePath);
            return absolutePath;
        }

        const nameofaifromtrainingdata = nameofAI_3(); //name of the txt file that will be saves as trained model
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
createJSFileInFolder(true);

//HOW IT WORKS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//GET createJSFileInFolder TO TRUE AND COMMENT STUFF BELOW AND JUST SAVE THE FILE
//WHEN YOU SAVE IT WILL GENRATE THE DATA, TRAIN THE MODEL, AND SAVE AS TXT FILE IN PUBLIC FOLDER
//SET createJSFileInFolder TO FALSE AGAIN AND UNCOMMENT AND COMMNET STUFF BELOW
//RUN THE BROWERIFY CMD TO MAKE A BUNDLE FILE IN PUBLIC FOLDER

//HERE THE MODEL GETS TRAINED AND GETS SAVED AS TXT FILE, RUN IT FIRST AND WHEN GET createJSFileInFolder TO FALSE AGAIN