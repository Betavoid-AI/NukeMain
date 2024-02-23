//in the AI js file, define the path at the 2nd line --------------------

//to combine arrays ________________
function combineArrays(array1, array2, array3) {

    const finalshsh = [];

    const combinedArray = [...array1, ...array2, ...array3];
    const combinedString = combinedArray.map(item => `"${item}"`).join('/');

    finalshsh.push(combinedString);

    return [finalshsh];
}

function combineArraysforparttwo(array1, array2, array3) {


    const finalshsh = [];

    const a1 = array1.map(item => item.slice(1, -1));
    const a2 = array2.map(item => item.slice(1, -1));
    const a3 = array3.map(item => item.slice(1, -1));

    const combinedArray = [...a1, ...a2, ...a3];
    const combinedString = combinedArray.map(item => `"${item}"`).join('/');

    finalshsh.push(combinedString);

    return [finalshsh];


}












//part A of training data ______________________________________________________________________________

//converts the data in the array into the array formate we need
function convertArrayToString(inputArray) {
    const joinedString = inputArray.join('\n');
    return [joinedString.replace(/\n/g, '')];
}




//want AI to predict, data:
const Variations_for_when_user_wants_AI_to_take_it_from_here = [
    "feel free to predict rest of the variables",
    "you can predict rest of the variables",
    "predict rest of the variables",
    "predict the variables you need",
    "can you predit the variables you need",
    "can you preict the rest of the variables",
    "predict the remaining variables",
    "predict the variables",
    "predict the variables you want",
    "can you predict the variables you want",
    "can you predict rest of the variables you want",
    "can you predict rest of the variables you need",
    "you should predict the rest of the variables",
    "i don't know, you can predict rest of the variables",
    "i dont't know the variables, you can predict them",
    "i dont't know the variables, you can predict rest of the variables",
    "i dont't know the variables, feel free to predict them",
    "i dont't know the variables, feel free to predict rest of the variables",
    "please predict rest of the variables",
    "go ahread and predict rest of the variables",
    "predict rest of the variables",
    "sure, you can predict rest of the variables",
    "please predict rest of the variables",
    "no, predict rest of the variables",
    "no, feel free to predict rest of the variabels based on what you have so far",
    "feel free to predict rest of the variables",
    "please predict the rest of the varibale you need",
    "predict all the variblaes you want",
    "Feel free to predict all the remaining variables.",
    "Predict the rest of the variables without hesitation.",
    "Go ahead and predict the remaining variables with confidence.",
    "You're welcome to predict the variables that are left.",
    "Feel open to predict the remaining variables as you see fit.",
    "It's up to you to predict the rest of the variables in this context.",
    "Feel like predicting the remaining variables? Go for it!",
    "Don't hesitate; predict the variables that remain.",
    "Feel free to predict the remaining variables as part of this task.",
    "Predicting the rest of the variables is your opportunity.",
    "Feel free to predict the rest of the variables accurately.",
    "Go ahead and predict the remaining variables with precision.",
    "You can predict the variables that remain without reservation.",
    "It's within your power to predict the rest of the variables.",
    "Take a moment to predict the remaining variables correctly.",
    "Predict the rest of the variables confidently and effectively.",
    "Don't hesitate to predict all the remaining variables promptly.",
    "Feel confident in your ability to predict the variables that are left.",
    "You're welcome to predict the remaining variables as needed.",
    "Feel open to predict the variables that remain in this scenario.",
    "Predicting the rest of the variables is a valuable task.",
    "Feel free to predict the variables yet to be determined.",
    "Go ahead and predict the remaining variables based on the data.",
    "You have the freedom to predict the variables that remain uncertain.",
    "It's your chance to predict the rest of the variables accurately.",
    "Take the initiative to predict the remaining variables thoroughly.",
    "Predict the variables that are left with careful consideration.",
    "Don't hesitate to predict the rest of the variables thoughtfully.",
    "You're welcome to predict the variables that remain a mystery.",
    "Feel open to predict the rest of the variables intuitively.",
    "Predicting the variables that are left requires analysis.",
    "Feel free to predict the remaining variables as the situation unfolds.",
    "Go ahead and predict the variables that remain hidden.",
    "You can predict the rest of the variables with logical reasoning.",
    "It's within your capacity to predict the variables accurately.",
    "Take a moment to predict the remaining variables based on trends.",
    "Predict the rest of the variables using your expertise.",
    "Don't hesitate to predict the variables that remain elusive.",
    "You're welcome to predict the rest of the variables systematically.",
    "Feel open to predict the variables that remain ambiguous.",
    "Predicting the rest of the variables is an important task.",
    "Feel free to predict the variables that have yet to be identified.",
    "Go ahead and predict the remaining variables confidently.",
    "You have the freedom to predict the variables that remain uncertain.",
    "It's your opportunity to predict the rest of the variables.",
    "Take the initiative to predict the remaining variables accurately.",
    "Predict the variables that are left with careful analysis.",
    "Don't hesitate to predict the rest of the variables with insight.",
    "You're welcome to predict the variables that remain undisclosed.",
    "Feel open to predict the rest of the variables based on patterns.",
    "Predicting the variables that are left is a valuable skill.",
    "Feel free to predict the remaining variables based on available information.",
    "Go ahead and predict the variables that remain uncertain.",
    "You can predict the rest of the variables with a logical approach.",
    "It's within your capacity to predict the variables effectively.",
    "Take a moment to predict the remaining variables thoughtfully.",
    "Predict the rest of the variables using your understanding.",
    "Don't hesitate to predict the variables that remain unknown.",
    "You're welcome to predict the rest of the variables comprehensively.",
    "Feel free to predict the remaining variables accurately.",
    "You can predict the rest of the variables confidently.",
    "It's within your capability to predict the variables effectively.",
    "Predict the rest of the variables with careful analysis.",
    "Feel open to predict the variables that remain uncertain.",
    "Predicting the rest of the variables requires careful consideration.",
    "Feel free to predict the remaining variables based on patterns.",
    "Go ahead and predict the variables that are yet to be determined.",
    "You have the freedom to predict the rest of the variables intuitively.",
    "It's your opportunity to predict the variables accurately.",
    "Take the initiative to predict the remaining variables effectively.",
    "Predict the variables that are left with logical reasoning.",
    "You're welcome to predict the variables that remain ambiguous.",
    "Feel open to predict the rest of the variables with expertise.",
    "Predicting the variables that are left is a crucial task.",
    "Feel free to predict the remaining variables based on available data.",
    "You can predict the rest of the variables with a systematic approach.",
    "It's within your capacity to predict the variables comprehensively.",
    "Take a moment to predict the remaining variables analytically.",
    "Don't hesitate to predict the variables that remain undisclosed.",
    "You're welcome to predict the rest of the variables based on trends.",
    "Feel open to predict the variables that remain unpredictable.",
    "Predicting the variables that are left involves careful evaluation.",
    "Feel free to predict the remaining variables as accurately as possible.",
    "Go ahead and predict the variables that remain challenging.",
    "You have the freedom to predict the rest of the variables confidently.",
    "It's your chance to predict the variables with accuracy.",
    "Take the initiative to predict the remaining variables logically.",
    "Predict the variables that are left with precision.",
    "Feel confident in your ability to predict the remaining variables.",
    "You're welcome to predict the variables that remain undiscovered.",
    "Feel open to predict the rest of the variables based on insights.",
    "Predicting the variables that are left is a significant endeavor.",
    "Feel free to predict the remaining variables with careful analysis.",
    "You can predict the rest of the variables with confidence.",
    "Take a moment to predict the remaining variables systematically.",
    "Don't hesitate to predict the variables that remain hidden.",
    "Feel confident in your predictions for the variables that are left.",
    "You're welcome to predict the rest of the variables intuitively.",
    "Feel free to predict the remaining variables with accuracy.",
    "Predict the variables that are left using careful thought.",
    "It's within your capability to predict the variables adeptly.",
    "Take a moment to predict the remaining variables insightfully.",
    "Predict the rest of the variables with thorough analysis.",
    "Don't hesitate to predict the variables that remain obscure.",
    "Feel confident in your predictions for the variables yet to be determined.",
    "Feel open to predict the variables that remain indistinct.",
    "Predicting the rest of the variables necessitates thoughtful judgment.",
    "Feel free to predict the remaining variables based on observations.",
    "Go ahead and predict the variables that remain undisclosed.",
    "You have the freedom to predict the rest of the variables intelligently.",
    "It's your opportunity to predict the variables with precision.",
    "Predict the variables that are left using reasoned evaluation.",
    "Don't hesitate to predict the rest of the variables astutely.",
    "Feel confident in your ability to predict the remaining variables correctly.",
    "You're welcome to predict the variables that remain uncertain.",
    "Feel open to predict the rest of the variables creatively.",
    "Predicting the variables that are left involves strategic thinking.",
    "Feel free to predict the remaining variables based on data trends.",
    "Go ahead and predict the variables that are yet to be confirmed.",
    "You can predict the rest of the variables with systematic reasoning.",
    "Take a moment to predict the remaining variables with keen insight.",
    "Predict the rest of the variables using your specialized knowledge.",
    "Don't hesitate to predict the variables that remain enigmatic.",
    "Feel confident in your predictions for the variables that are yet revealed.",
    "You're welcome to predict the rest of the variables methodically.",
    "Feel open to predict the variables that remain hidden.",
    "Predicting the variables that are left requires strategic insight.",
    "Feel free to predict the remaining variables with precision.",
    "Go ahead and predict the variables that remain intricate.",
    "You have the freedom to predict the rest of the variables logically.",
    "Take the initiative to predict the remaining variables with careful analysis.",
    "Predict the variables that are left using your expert knowledge.",
    "Don't hesitate to predict the rest of the variables with skill.",
    "Feel confident in your ability to predict the remaining variables adeptly.",
    "You're welcome to predict the variables that remain puzzling.",
    "Feel open to predict the rest of the variables with insightful interpretation.",
    "Predicting the variables that are left demands strategic assessment.",
    "Feel free to predict the remaining variables through detailed analysis.",
    "Go ahead and predict the variables that remain speculative.",
    "You can predict the rest of the variables with precision.",
    "It's within your capacity to predict the variables adeptly.",
    "Take a moment to predict the remaining variables strategically.",
    "Predict the rest of the variables using your specialized expertise.",
    "Don't hesitate to predict the variables that remain mysterious.",
    "Feel confident in your predictions for the variables that are unrevealed."    
]

//want to provide rest vars, data (also will use for when user wants list of vars AI needs):
const user_wanna_give_rest_inputs_also_for_user_asking_for_var_names = [
    "ill give rest of the variables",
    "dont predict, ill gives the rest",
    "ill be giving the rest of the variables",
    "Ill provide the vairables",
    "i will give the variables",
    "let me give the variables you need",
    "ill be giving the variables",
    "no, ill provide the variables",
    "yes, ill give the variables",
    "Ill provide the vairables you need",
    "i will give the variables you need",
    "let me give the variables",
    "ill be giving the variables you need",
    "no, ill provide the variables you need",
    "yes, ill give the variables you need",
    "ill give whatever variables you need",
    "i will give the remaining variables",
    "ill give the rest of the variables",
    "hold on, i am giving the variables",
    "no, ill provide rest of the variables",
    "dont, ill provide rest of the variables",
    "ill give you the rest of the variables",
    "wait ill provide rest of the variables",
    "no ill give rets of the variables",
    "I'll provide the rest of the variables",
    "I'll give the remaining variables to you",
    "I can hand over the rest of the variables",
    "I have the remaining variables ready",
    "I'm holding the remaining variables",
    "Expect the remaining variables from me",
    "Count on me to share the remaining variables",
    "Rest assured, I'll give you the remaining variables",
    "The remaining variables are at your disposal",
    "You'll receive the remaining variables directly",
    "I'll prove the rest of the variables",
    "I'll give you the remaining variables",
    "I'll give the rest of the variables to you",
    "I can prove the remaining variables",
    "I can give you the rest of the variables",
    "I can give you the remaining variables",
    "I'll prove the remaining variables",
    "I can give the rest of the variables to you",
    "I'm ready to provide the remaining variables",
    "Count on me to give the rest of the variables",
    "It's within my capability to offer the remaining variables",
    "I assure you, I'll deliver the remaining variables",
    "Trust that I'll hand over the rest of the variables",
    "Rest assured, I'll provide the remaining variables",
    "I'm committed to giving you the remaining variables",
    "You can rely on me to furnish the rest of the variables",
    "I'm here to provide the remaining variables",
    "I'm fully capable of giving the rest of the variables",
    "I'll personally ensure you receive the remaining variables",
    "I guarantee the delivery of the remaining variables",
    "Count on me for the remaining variables you need",
    "Consider it done I'll provide the rest of the variables",
    "You can expect the remaining variables from me without fail",
    "I'm dedicated to giving you the remaining variables",
    "Rest assured, I'll hand over the rest of the variables",
    "You can trust me to deliver the remaining variables",
    "I'll stand by my word and give the rest of the variables",
    "I'm more than willing to provide the remaining variables",
    "You can rely on me to share the remaining variables",
    "I'm committed to delivering the remaining variables",
    "Count on me to hand over the rest of the variables",
    "I'll make sure you receive the remaining variables promptly",
    "I'm fully prepared to give the remaining variables",
    "Consider it done the remaining variables will be provided by me",
    "You can expect the remaining variables directly from me",
    "I'm dedicated to furnishing the rest of the variables",
    "Rest assured, I'll ensure you get the remaining variables",
    "You can trust me to provide the remaining variables as needed",
    "I'll stand by my commitment to deliver the remaining variables",
    "I'm more than willing to offer the remaining variables",
    "You can rely on me to supply the rest of the variables",
    "I'm committed to providing the remaining variables",
    "Count on me to deliver the rest of the variables",
    "I'll make sure you have access to the remaining variables",
    "I'm fully capable of handing over the remaining variables",
    "Consider it done I'll give the remaining variables",
    "You can expect the remaining variables to be given by me",
    "I'm dedicated to ensuring you receive the remaining variables.",
    "Rest assured, I'll provide the rest of the variables.",
    "You can trust me to furnish the remaining variables.",
    "I'm committed to giving you the remaining variables you require.",
    "Count on me to deliver the remaining variables promptly.",
    "I'll make sure you receive the rest of the variables.",
    "I'm fully prepared to provide the remaining variables.",
    "Consider it done I'll hand over the remaining variables.",
    "You can expect the remaining variables from me without any doubt.",
    "I'm dedicated to delivering the rest of the variables.",
    "You can trust me to offer the remaining variables.",
    "I'm committed to making sure you have the remaining variables.",
    "ill be giving the rest of the variables.",
    "no id like to provide rest of the variables.",
    "i will provide rest of the variables.",
    "i dont want you to predict, ill provide rest of the variables.",
    "let me provide rest of the variables.",
    "ill give rest of the variables you need."
];

//user asking AI for the list of vars it needs, data:
const provide_list_of_remaining_vars_needed = [
    "can you give me names of the variables you need",
    "provide me the names of the variables",
    "what variables you need",
    "van you let me know names of the variables",
    "what are the names of the variables you need",
    "ill need names of the variables",
    "tell me names of the variables",
    "can you tell me names of the variables",
    "what are names of variables",
    "what variables you need for calculations?",
    "list the variables you need",
    "give me the list of variables you need",
    "give me the list of variables you want",
    "can you give me a list of variables you need",
    "can you give me a list of variables you want",
    "list the variables you need for calculations",
    "list the variables you want",
    "make a list of variables",
    "make a list of variables you need",
    "make a list of variables you need for calculations",
    "make a list of variables you want",
    "make a list of variables you want for calculations",
    "please provide a list of variables you need",
    "please provide a list of variables you want",
    "please provide a list of variables",
    "please give me a list of variables",
    "give me a list of variables",
    "give me the list of variables you want",
    "give me the list of variables you want for calculations",
    "give me the list of variables you need",
    "give me the list of variables you need for calculations",
    "",
    "",
    "",
    "which variables you need",
    "can you list the varibales you need ofr the calculations",
    "list the names of the variables",
    "what variables do you need",
    "list the variables you need for me",
    "list all variables you need",
    "tell me what variables you need",
    "let me know what variables you need",
    "list all variables you need for calculations",
    "tell me what variables you want",
    "tell me which variables you want for calculations",
    "list the variables you want for calculations",
    "can you list the variables you want",
    "tell me names of varibales you want for the calculations",
    "Please give me the list of the variables required for the calculations.",
    "I need to know the variable names needed for the calculations.",
    "Share the variable names necessary for the calculations.",
    "Could you list the list of the variables we need for the calculations?",
    "What are the list of the variables we must have for the calculations?",
    "Kindly provide the list of the variables necessary for the calculations.",
    "I'm looking for the list of the variables needed to proceed with calculations.",
    "What variables are required for the calculations? Can you list their names?",
    "Can you let me know the list of the variables we'll use for calculations?",
    "To move forward, I require the specific list of the variables needed.",
    "Please provide me with the variables required to perform the calculations.",
    "I'm in need of the variable names necessary for the calculations.",
    "List down the list of the variables needed for the calculations, please.",
    "I'd appreciate it if you could share the variable names for the necessary calculations.",
    "Do you have the list of variable names we need for the calculations?",
    "Could you please let me have the list of the variables for the calculations?",
    "I'm trying to find out which variables are necessary for the calculations. Can you help?",
    "What would be the variable names that we'll be using for the calculations?",
    "I'm unable to proceed without knowing the specific variables required for the calculations.",
    "Please furnish me with the list of the variables essential for the calculations.",
    "I require the variable list to be able to carry out the calculations.",
    "If possible, please share the variable names needed for the calculations.",
    "I'm not sure about the variable names needed. Can you assist me?",
    "Let's ensure we have the correct variable names needed for the calculations.",
    "What's the list of variables we need to input for the calculations?",
    "Could you clue me in on the variable names necessary for the calculations?",
    "Share with me the list of the variables we must use for the calculations.",
    "Could you kindly share the list of the variables we need for the calculations?",
    "The variable names are a missing piece in these calculations. Can you provide them?",
    "I require the variable names to proceed with the calculations.",
    "Please provide me with the list of the variables needed for the calculations.",
    "Share the list of the variables essential for these calculations.",
    "What are the variable names necessary for performing the calculations?",
    "I'm interested in knowing the variable names required for these calculations.",
    "Could you please inform me of the variable names needed for the calculations?",
    "Listing the variable names needed for calculations would be appreciated.",
    "To move forward, I need the variable names necessary for the calculations.",
    "Let me know the list of the variables we should use for the calculations.",
    "Can you provide me with the variable names we'll utilize for calculations?",
    "I'd like to know the variable names that are essential for the calculations.",
    "I'm searching for the variable names that are mandatory for the calculations.",
    "It's necessary to have the variable names to proceed with the calculations.",
    "Could you give me the variable names required for the calculations?",
    "What are the specific variable names we need for these calculations?",
    "Kindly share the variable names necessary for carrying out the calculations.",
    "I need access to the variable names needed for these calculations.",
    "The calculations rely on having the accurate variable names. Can you help?",
    "I'm trying to locate the variable names essential for the calculations.",
    "Please let me know the variable names that are vital for the calculations.",
    "Can you please provide the list of the variables needed for the calculations?",
    "What variables do we need for the calculations? Can you list their names?",
    "I'm searching for the variable names that are essential to proceed.",
    "Could you please share the list of the variables needed for these calculations?",
    "To carry out the calculations, we require the list of the variables.",
    "The correct variable names are vital for the success of these calculations.",
    "I'm unsure about the variable names needed. Can you assist?",
    "What variable names should I input for the calculations?",
    "Can you provide me with the list of the variables we must use for calculations?",
    "To continue with the calculations, I need the variable names.",
    "I'm at a point where I need to know the list of the variables necessary.",
    "I'm seeking clarity on the variable names needed for accurate calculations.",
    "Could you provide me with the list of the variables essential for the calculations?",
    "I'm missing the list of the variables needed for these calculations. Can you help?",
    "I'm in need of the list of the variables required for these calculations.",
    "The calculations depend on having the correct variable names. Can you share them?",
    "I'm hoping to find out the variable names necessary for the calculations.",
    "It would be helpful if you could provide the variable names needed for calculations."
];





//combined array - FINAL ARRAY ________________
const initialarray = combineArrays(Variations_for_when_user_wants_AI_to_take_it_from_here, user_wanna_give_rest_inputs_also_for_user_asking_for_var_names, provide_list_of_remaining_vars_needed);
const partonefinalarray = convertArrayToString(initialarray);
//combined array - FINAL ARRAY ________________

//part A of training data ______________________________________________________________________________


















//part B of training data ______________________________________________________________________________
//here gonna genrate a the 2nd part of the training data

const lable1ini = "'Predict', 'UserWillGive', 'NeedNamesOfVariables'";
const lable2ini = "'UserWillGive', 'Predict', 'NeedNamesOfVariables'";
const lable3ini = "'NeedNamesOfVariables', 'UserWillGive', 'Predict'";

const lable1 = "`"+lable1ini+"`";
const lable2 = "`"+lable2ini+"`";
const lable3 = "`"+lable3ini+"`";

function make2ndpart(firstpartarray, whichone) {

    //when user asked to predict___________________________________
    const SecondPartArray_AIGonnaPredict = [];
    if (whichone == 'ai') {
        for (let y = 0; y < firstpartarray.length; y++) {
            SecondPartArray_AIGonnaPredict.push(lable1);
        }
        return SecondPartArray_AIGonnaPredict;
    }

    //when user is gonna give inputs________________________________
    const SecondPartArray_usergonnagive = [];
    if (whichone == 'user') {
        for (let u = 0; u < firstpartarray.length; u++) {
            SecondPartArray_usergonnagive.push(lable2);
        }
        return SecondPartArray_usergonnagive;
    }

    //when user asked for name of variables AI need__________________
    const SecondPartArray_needvarnames = [];
    if (whichone == 'varnames') {
        for (let y = 0; y < firstpartarray.length; y++) {
            SecondPartArray_needvarnames.push(lable3);
        }
        return SecondPartArray_needvarnames;
    }
    
}



//DATA_________________________________________
const AI_will_predict = make2ndpart(Variations_for_when_user_wants_AI_to_take_it_from_here, 'ai');
const user_will_give = make2ndpart(user_wanna_give_rest_inputs_also_for_user_asking_for_var_names, 'user');
const need_var_names = make2ndpart(provide_list_of_remaining_vars_needed, 'varnames');
//DATA_________________________________________



//combined array - FINAL ARRAY ________________
const parttwofinalarray = combineArraysforparttwo(AI_will_predict, user_will_give, need_var_names);
//combined array - FINAL ARRAY ________________

//part B of training data ______________________________________________________________________________














//need to calculate the length here
function lengthofdata() {

    const lengthofdata1 = Variations_for_when_user_wants_AI_to_take_it_from_here.length;
    const lengthofdata2 = user_wanna_give_rest_inputs_also_for_user_asking_for_var_names.length;
    const lengthofdata3 = provide_list_of_remaining_vars_needed.length;

    const alllengths = [lengthofdata1, lengthofdata2, lengthofdata3];

    return alllengths;

}

//for making the 2nd part of the training data, will use for getting lables for contructing output side of data
function lablefor2ndpart() {
    const labless = [lable1ini, lable2ini, lable3ini];
    return labless;
}

function trainingdata() {

    const trainingdata_for_spurgear_variable = partonefinalarray;

    return trainingdata_for_spurgear_variable;
}

function parttwo() { //index of sub arrays can not be more then 3 (example - 'yes', 'no', 'maybe'), old example - ["'yes', 'no', 'maybe'", "'no', 'yes', 'maybe'"]
    
    //whatever at index 0 inside the sub array will be set to 100% and index 1 and 2 will be set to 0
    const the2ndpart = parttwofinalarray; //in trainingdata_for_spurgear_variable at index, we need to get yes, so here the array at index 1 has 'yes' at index 1

    return the2ndpart;

}

// Export both functions
module.exports = {
    trainingdata,
    parttwo,
    lablefor2ndpart,
    lengthofdata
};