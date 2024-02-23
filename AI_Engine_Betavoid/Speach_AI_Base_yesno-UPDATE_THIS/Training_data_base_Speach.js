

//in the AI js file, define the path at the 2nd line --------------------


function trainingdata() {

    const trainingdata_for_spurgear_variable = `"ill do it.
    you do it."`;

    return trainingdata_for_spurgear_variable;
}

function parttwo() { //index of sub arrays can not be more then 2 (0 and 1.. can not be 0, 1, 2 ..).
    
    //whatever at index 0 inside the sub array is, will be set to 1 and index 1 will be set to 0
    const the2ndpart = ["'yes', 'no'", "'no', 'yes'"]; //in trainingdata_for_spurgear_variable at index, we need to get yes, so here the array at index 1 has 'yes' at index 1

    return the2ndpart;

}

function nameofAI() {

    const nameoftheAI = ''+'.txt'; //specify name of the AI here

    return nameoftheAIl
}

// Export both functions
module.exports = {
    trainingdata,
    parttwo,
    nameofAI
};