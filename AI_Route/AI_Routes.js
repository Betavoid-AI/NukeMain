

function nameofAI() { 

    //  NAME OF THE .JS FILE LIKED - 1_user_said_predict
    //  NAME OF THE TRANING DATA - 1_user_responding_to_AI_Data
    const nameoftheAI = 'UserResponseHendle'+'.txt'; //specify name of the AI here
    return nameoftheAI


    //when making a public bundle, use this name as this is specified in ejs in line 121
    //NAME OF THE PUBLIC BUNDLE - UserResponseHendle

}

function nameofAI_2() { 

    //  NAME OF THE .JS FILE LIKED - 2_Hendle_questions_AI
    //  NAME OF THE TRANING DATA - 2_Hendle_questions_AI_Data
    const nameoftheAI = 'allquestions_hendle'+'.txt'; //specify name of the AI here
    return nameoftheAI


    //when making a public bundle, use this name as this is specified in ejs in line 121
    //NAME OF THE PUBLIC BUNDLE - allquestions_hendle

}

function nameofAI_3() { 

    //  NAME OF THE .JS FILE LIKED - 2_Hendle_questions_AI
    //  NAME OF THE TRANING DATA - 2_Hendle_questions_AI_Data
    const nameoftheAI3 = 'allreqfordesign'+'.txt'; //specify name of the AI here
    return nameoftheAI3


    //when making a public bundle, use this name as this is specified in ejs in line 121
    //NAME OF THE PUBLIC BUNDLE - allreqfordesign

}

// Export both functions
module.exports = {
    nameofAI,
    nameofAI_2,
    nameofAI_3
};