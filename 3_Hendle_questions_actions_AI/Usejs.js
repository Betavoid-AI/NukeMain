const { nameofAI_3 } = require('../AI_Route/AI_Routes');
const fs = require('fs');
const path = require('path');
const natural = require('natural');




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
            document.getElementById('AI_Model_txt3').innerHTML = data;

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





const nameofaifromtrainingdata = nameofAI_3();
const filePath = path.join(getPublicFolderPath(), nameofaifromtrainingdata);        // Specify the file path of the txt trained model in oubluc folder here so it can use
readTextFile(filePath, nameofaifromtrainingdata);                                 
const condi = document.querySelector('.getdataorna1').innerHTML;                  





//AI-3----------------------------------------------
if ( !parseInt(condi) == 1) {

    //getting the trained model from the div element =================================================
    const fileContent = document.getElementById('AI_Model_txt3').innerHTML; 


    //using the model, it was store in the txt file
    const serializedModelb = JSON.parse(fileContent);
    const model = new natural.BayesClassifier();

    model.classifier.classFeatures = serializedModelb.classifier.classFeatures;
    model.classifier.classTotals = serializedModelb.classifier.classTotals;
    model.classifier.totalExamples = serializedModelb.classifier.totalExamples;
    model.classifier.smoothing = serializedModelb.classifier.smoothing;
    model.docs = serializedModelb.docs;
    model.features = serializedModelb.features;
    model.stemmer = serializedModelb.stemmer;
    model.lastAdded = serializedModelb.lastAdded;
    //here we pull the trained model stored in a txt file in the Train_Models filder and we put it in the model object



    //using the model recovered from txt file, here -
    function brainshit() {


        //INPUT DIV ID HERE
        const input = document.getElementById(GetUserInputFromHere).innerHTML;


        //Input data goes here __________________________________________________________
        const predictedIntent = model.classify(input);
        heighvalue_fromAI = predictedIntent;
        //__________________________________________________________________________



        //OUTPUT DIV ID HERE
        document.getElementById(PutResponseHere).innerHTML = predictedIntent;
        return console.log(predictedIntent);


    }
    brainshit()                                                                

} try {
    document.querySelector('.getdataorna1').innerHTML = 0;        
    console.log(nameofaifromtrainingdata + ' AI-3 Loaded successfully --');
} catch (error) {
    console.log(error);
}

//browserify 3_Hendle_questions_actions_AI/Usejs.js -o Public/allreqfordesign.js
//npm i webworker-threads

    

//NO NEED TO CHANGE ANYTHING HERE FOR NEW AI ---------------------------------