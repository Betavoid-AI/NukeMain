//in the AI js file, define the path at the 2nd line --------------------

//to combine arrays ________________
function combineArrays(array1, array2, array3, array4, array5, array6, array7, array8, array9, array10) {

    const finalshsh = [];

    const combinedArray = [...array1, ...array2, ...array3, ...array4, ...array5, ...array6, ...array7, ...array8, ...array9, ...array10];
    const combinedString = combinedArray.map(item => `"${item}"`).join('/');

    finalshsh.push(combinedString);

    return [finalshsh];
}

function combineArraysforparttwo(array1, array2, array3, array4, array5, array6, array7, array8, array9, array10) {


    const finalshsh = [];

    const a1 = array1.map(item => item.slice(1, -1));
    const a2 = array2.map(item => item.slice(1, -1));
    const a3 = array3.map(item => item.slice(1, -1));
    const a4 = array4.map(item => item.slice(1, -1));
    const a5 = array5.map(item => item.slice(1, -1));
    const a6 = array6.map(item => item.slice(1, -1));
    const a7 = array7.map(item => item.slice(1, -1));
    const a8 = array8.map(item => item.slice(1, -1));
    const a9 = array9.map(item => item.slice(1, -1));
    const a10 = array10.map(item => item.slice(1, -1));

    const combinedArray = [...a1, ...a2, ...a3, ...a4, ...a5, ...a6, ...a7, ...a8, ...a9, ...a10];
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

//DATA HERE ---------------------------------------------------------------------------

//1_____________________________
const costreduction = [
  "is cost reduction possible",
  "reduce the cost",
  "can you reduce the cost of the part",
  "do a cost reduction",
  "we need to reduce cost of this part",
  "is it vaiable to reduce cost of this part",
  "how can i reduce cost of this part",
  "please reduce the cost",
  "can you conduct a cost reduction",
  "i want you to reduce the cost",
];

const partreduction = [
    "can we remove more parts",
    "can you reduce the number of parts from this assembly",
    "is it possible to reduce number of parts from this assembly",
    "reduce the number of parts",
    "reduce number of parts from the assembly",
    "can you reduce the number of parts",
    "lets reduce number of parts from the assembly",
    "can you reduce the number of parts from this project",
    "lets reduce number of parts",
    "can you make the assembly smaller"
];

//1_____________________________
const weightreduction = [
  "Can you reduce weight?",
  "Is there a way to lower the weight?",
  "Could you minimize the weight of this part?",
  "Would it be possible to make it lighter?",
  "Would it be possible to make the part lighter?",
  "decrease the weight?",
  "reduce the weight here?",
  "optimized the weight of the part",
  "optimized the weight",
  "cut down on the weight?"
];

//1_____________________________
const howmuchwillitcost = [
    "what will it cost to manyfacture this",
    "calculate the cost of manufacturing this part",
    "i wanna know how expensive this part will be in terms of cost",
    "predict the cost of manufacturing",
    "how much will the manufacturing cost",
    "how much will it cost to manufacture this part",
    "how much will be the cost",
    "can you do a cost analysis",
    "do a cost analysis to figure what will it cost to manufacture",
    "determine the cost of manufacturing please"
];

//1_____________________________
const whatwillbeweight = [
    "calculate the weight of the part",
    "what will be the weight",
    "can you figure out what will be weight of this part",
    "estimate the weight",
    "how heavy will be this part?",
    "calculate the weight",
    "let me know how much will this part weight",
    "how heavy is this part",
    "i wanna know the weight of this part",
    "i wanna know the weight"
];

const howmanyparts = [
    "in this assbely, how many parts will be there",
    "how many parts will be in this assembly",
    "can you calculate number of parts",
    "estimate how many parts will be in this project",
    "analyse the number of parts needed",
    "i want to know how many parts we will need to design for this project",
    "do a analysis for how many parts we need for the assembly"
];

//1_____________________________
const strengthinc = [
    "can you increse the stregth of the part",
    "make the part stronger",
    "can you increase the strength of the part",
    "is it possible to increase the strength",
    "boost the part's strength",
    "enhance the assembly's strength to make it stronger",
    "improve the strength of the part",
    "amplify the strength of the part",
    "augment the part's strength",
    "augment the assembly's strength"
];

//want AI to predict, data:
const Predict_AI = [
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
    "go ahread and predict rest of the variables",
    "predict rest of the variables",
    "sure, you can predict rest of the variables",
    "please predict rest of the variables",
    "no, predict rest of the variables",
    "please predict the rest of the varibale you need",
    "predict all the variblaes you want",
    "Feel free to predict all the remaining variables."
]

//want to provide rest vars, data (also will use for when user wants list of vars AI needs):
const User_Willgive = [
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
    "I'll give you the remaining variables",
    "I'll give the rest of the variables to you",
    "I can prove the remaining variables",
    "I can give you the rest of the variables",
    "I can give you the remaining variables",
    "I'll prove the remaining variables"
];

//user asking AI for the list of vars it needs, data:
const Remaining_varsGive = [
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
    "please provide a list of variables you want",
    "please provide a list of variables",
    "please give me a list of variables",
    "give me a list of variables",
    "give me the list of variables you want",
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
];

//DATA HERE ---------------------------------------------------------------------------

//combined array - FINAL ARRAY ________________
const initialarray = combineArrays(costreduction, partreduction, weightreduction, howmuchwillitcost, whatwillbeweight, howmanyparts, strengthinc, Predict_AI, User_Willgive, Remaining_varsGive);
const partonefinalarray = convertArrayToString(initialarray);
//combined array - FINAL ARRAY ________________

//part A of training data ______________________________________________________________________________


















//part B of training data ______________________________________________________________________________
//here gonna genrate a the 2nd part of the training data

const lableini1 = "'costreduction'";
const lableini2 = "'partreduction'";
const lableini3 = "'weightreduction'";
const lableini4 = "'howmuchwillitcost'";
const lableini5 = "'whatwillbeweight'";
const lableini6 = "'howmanyparts'";
const lableini7 = "'strengthinc'";
const lableini8 = "'Predict'";
const lableini9 = "'UserWillGive'";
const lableini10 = "'NeedNamesOfVariables'";
const lable1 = "`"+lableini1+"`";
const lable2 = "`"+lableini2+"`";
const lable3 = "`"+lableini3+"`";
const lable4 = "`"+lableini4+"`";
const lable5 = "`"+lableini5+"`";
const lable6 = "`"+lableini6+"`";
const lable7 = "`"+lableini7+"`";
const lable8 = "`"+lableini8+"`";
const lable9 = "`"+lableini9+"`";
const lable10 = "`"+lableini10+"`";

function make2ndpart(firstpartarray, whichone) {

    const labelMap = {
        'costreduction': lable1,
        'partreduction': lable2,
        'strengthinc': lable7,
        'howmanyparts': lable6,
        'weightreduction': lable10,
        'whatwillbeweight': lable5,
        'howmuchwillitcost': lable4,
        'Predict': lable8,
        'UserWillGive': lable9,
        'NeedNamesOfVariables': lable3
    };

    const resultArray = [];
    const label = labelMap[whichone];

    firstpartarray.forEach(() => {
        resultArray.push(label);
    });

    return resultArray;

}


//DATA_________________________________________
const costreductiond = make2ndpart(costreduction, 'costreduction');
const partreductiond = make2ndpart(partreduction, 'partreduction');
const weightreductiond = make2ndpart(weightreduction, 'weightreduction');
const howmuchwillitcostd = make2ndpart(howmuchwillitcost, 'howmuchwillitcost');
const whatwillbeweightd = make2ndpart(whatwillbeweight, 'whatwillbeweight');
const howmanypartsd = make2ndpart(howmanyparts, 'howmanyparts');
const strengthincd = make2ndpart(strengthinc, 'strengthinc');
const predict = make2ndpart(Predict_AI, 'Predict');
const getfromuser = make2ndpart(User_Willgive, 'UserWillGive');
const remainingvars = make2ndpart(Remaining_varsGive, 'NeedNamesOfVariables');

//DATA_________________________________________



//combined array - FINAL ARRAY ________________
const parttwofinalarray = combineArraysforparttwo(costreductiond, partreductiond, weightreductiond, howmuchwillitcostd, whatwillbeweightd, howmanypartsd, strengthincd, predict, getfromuser, remainingvars);
//combined array - FINAL ARRAY ________________

//part B of training data ______________________________________________________________________________










//Validation data______________________________________________________________________________
const validationdata = [
    "can you reduce the manufactuing cost of the part",
    "can you reduce cost",
    "can we reduce cost",
    "can we reduce manufacturing cost of the part",
    "can we reduce the manufacturing cost of the part",
    "is it possible to reduce the cost",
    "is it possible to reduce the manufacturing cost",
    "is it possible for you to reduce cost",
    "is it posisble to reduce cost",
    "lets reduce the cost by 20%",
    "decrease the weight?",
    "reduce the weight here?",
    "optimized the weight of the part",
    "optimized the weight",
    "cut down on the weight?",
    "can you decrease the weight?",
    "can you reduce the weight here?",
    "can you optimized the weight of the part",
    "can you optimized the weight",
    "can you cut down on the weight?",
    "can we decrease the weight?",
    "can we reduce the weight here?",
    "can we optimized the weight of the part",
    "can we optimized the weight",
    "can we cut down on the weight?",
    "Could we find ways to decrease the weight?",
    "Could you find ways to decrease the weight?",
    "Can we work on reducing the part's weight?",
    "Can you work on reducing the part's weight?",
    "Can we make this part lighter?",
    "can you reduce the weight",
    "determine the weight of the part",
    "determine the weight of the assembly",
    "determine the weight",
    "can you calculate the weight",
    "can you calculate the weight of the part",
    "can you calculate the weight of the assembly",
    "is it possible to calculate weight of the part",
    "is it possible to calculate weight of the assembly",
    "is it possible to calculate weight",
    "tell me what will be the weight of the part",
    "tell me what will be the weight of the asssembly",
    "what is the weight of the part",
    "what is the weight of the assembly",
    "estimate the part's weight",
    "determine the assembly's weight",
    "calculate weight estimate",
    "weight calculation for the part",
    "projected weight of the assembly",
    "find the part's weight",
    "find the assembly's weight",
    "compute the weight",
    "figure out the weight of the part",
    "get the weight estimate",
    "how heavy is the part?",
    "what's the assembly's weight?",
    "provide the weight calculation",
    "weight estimation for the part",
    "determine the part's mass",
    "compute the assembly's mass",
    "make this stronger",
    "make it stronger",
    "can you increase the strength of the part",
    "can you increase the strength of the assembly",
    "increase the strength of the assembly",
    "increase the strength of the part",
    "can you increase the strength",
    "increase the strength",
    "boost the part's strength",
    "enhance the assembly's strength",
    "improve the strength of the part",
    "improve the strength of the assembly",
    "strengthen the assembly",
    "strengthen the part",
    "amplify the strength of the part",
    "amplify the strength of the assembly",
    "augment the part's strength",
    "augment the assembly's strength",
    "fortify the assembly",
    "fortify the part",
    "heighten the strength of the part",
    "heighten the strength of the assembly",
    "intensify the assembly's strength",
    "intensify the part's strength",
    "uplift the part's strength",
    "uplift the assembly's strength",
    "reinforce the assembly",
    "reinforce the part",
    "bolster the strength of the part",
    "bolster the strength of the assembly",
]
//Validation data______________________________________________________________________________











//need to calculate the length here
function lengthofdata() {

    const lengthofdata1 = costreduction.length;
    const lengthofdata2 = partreduction.length;
    const lengthofdata3 = weightreduction.length;
    const lengthofdata4 = howmuchwillitcost.length;
    const lengthofdata5 = whatwillbeweight.length;
    const lengthofdata6 = howmanyparts.length;
    const lengthofdata7 = strengthinc.length;
    const lengthofdata8 = Predict_AI.length;
    const lengthofdata9 = User_Willgive.length;
    const lengthofdata10 = Remaining_varsGive.length;


    const alllengths = [lengthofdata1, lengthofdata2, lengthofdata3, lengthofdata4, lengthofdata5, lengthofdata6, lengthofdata7, lengthofdata8, lengthofdata9, lengthofdata10];

    return alllengths;

}

//for making the 2nd part of the training data, will use for getting lables for contructing output side of data
function lablefor2ndpart() {
    const labless = [lableini1, lableini2, lableini3, lableini4, lableini5, lableini6, lableini7, lableini8, lableini9, lableini10];
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

function validationdataq() {
    const thedata = validationdata;
    return thedata;
}

// Export both functions
module.exports = {
    trainingdata,
    parttwo,
    lablefor2ndpart,
    lengthofdata,
    validationdataq
};