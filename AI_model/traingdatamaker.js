

function datasorter(inputarray) {
    

    const wordsArray = inputarray.split(" ");



    //empty arrays to store bracket data -- start
    const arr1 = []; const arr2 = []; const arr3 = []; const arr4 = []; const arr5 = []; const arr6 = [];
    const arr7 = []; const arr8 = []; const arr9 = []; const arr10 = []; const arr11 = []; const arr12 = [];
    const arr13 = []; const arr14 = []; const arr15 = []; const arr16 = []; const arr17 = []; const arr18 = [];
    const arr19 = []; const arr20 = []; const arr21 = []; const arr22 = [];  const arr23 = []; const arr24 = [];
    const arr25 = []; const arr26 = []; const arr27 = []; const arr28 = []; const arr29 = []; const arr30 = []; 
    const arr31 = []; const arr32 = []; const arr33 = []; const arr34 = []; const arr35 = []; const arr36 = [];
    const arr37 = []; const arr38 = []; const arr39 = []; const arr40 = [];
    //empty arrays to store bracket data -- end


    //Bools for skipping internal ')' -- start
    const In1 = false; const In2 = false; const In3 = false; const In4 = false; const In5 = false;
    const In6 = false; const In7 = false; const In8 = false; const In9 = false; const In10 = false;
    const In11 = false; const In12 = false; const In13 = false; const In14 = false; const In15 = false;
    const In16 = false; const In17 = false; const In18 = false; const In19 = false; const In20 = false;
    const In21 = false; const In22 = false; const In23 = false; const In24 = false; const In25 = false;
    const In26 = false; const In27 = false; const In28 = false; const In29 = false; const In30 = false;
    const In31 = false; const In32 = false; const In33 = false; const In34 = false; const In35 = false;
    const In36 = false; const In37 = false; const In38 = false; const In39 = false; const In40 = false;
    //Bools for skipping internal ')' -- end


    var numofbracks = 0;
    for (var r = 0; r < wordsArray.length; r++) {
        if (inputarray[r] == '(') {
            numofbracks = numofbracks + 1;
        }
    }


    //pushes arr1, n times, n = number of '(' in the wordarray
    const arrayofarray = [];
    for (var y = 0; y < numofbracks.length; y++) {
        arrayofarray.push(arr1)
    }


    //make if to catch 1st '(' and then run loop till ')' is detected
    //if there is another '(' after opening '(' make a bol and set it to true, and use bool to skip next ')'
    // make 20 bools so that we can set those bools to true everytime we detect '(' after opening and use those bools to skip exiting the loop
    // stre all 20 bools in a array, and check if there is a true in that array along with closing ')', if there are not true in the arraay and there is a cloing ')', skip the loop


    for (var y = 0; y < inputarray.length; y++) {
        if (inputarray[y] == '(') {

        }

    }

}




















//==========================================
// break down the given shit, one time and returns the array of index 2
function breakbyslash(A) {

    if (A.split('').includes('/')) {
        const broken = A.slice(1, -1).split('/');
        return broken;
    }

}


// counts the number of slshes in the input
function countslash(ins) {

const forloop2 = ins.split('');
const numoflash2 = 0;
for(var s=0; s<forloop2.length; s++){
    if(forloop2[s] == '/'){
        numoflash2 = numoflash2 +1;
    }
}

const finalnum = numoflash2 + 1;
return finalnum;

}
//==========================================







//all the broken parts of the arry, broken by the '/' ==========================================
const equationarray = [];

const numofslashinnum = 0;
const numofslashindin = 0;
//all the broken parts of the arry, broken by the '/' ==========================================



//==========================================
// counting the number of /  to figureout size of the final array
const forloop = inputString.split('');
const numoflash = 0;
for(var s=0; s<frloop.length; s++){
    if(frloop[s] == '/'){
        numofslash = numofslash +1;
    }
}

const numofbrokenarray = numofslash + 1; //after first slash, eveery slash will need 1 array.

//making an empty array so to store the broken equetion
for (const u=0; u<numofbrokenarray; u++) {
    equationarray.push('');
}
//==========================================



//==========================================
// -- step 1 -- split 1st num and dem
//                              1                   2           3
const inputString = '( ( (Sig*F*Y*PD*D*D)/N ) / ( (PD*D)*pd ) ) / (F*Y)';


// Remove the parentheses and split the string by '/'
const equation = inputString.slice(1, -1).split('/');


//##############
if (!equation[1].split('').includes('/')) { //pushes the dino into array if no further divison is tehrer
    equationarray[numofbrokenarray-1] = equation[1];
} 

else if (!equation[0].split('').includes('/')) { //pushes the nume into array if no further divison is tehrer
    equationarray[0] = equation[0];
}
















//this is where we will use the function which will break down the array, figure how to run the for loop
//using the numofslashindin and numofslashinnum and then store the broken equation.


else if (equation[0].split('').includes('/')) { // fires then there is a slash in the numerator
    numofslashinnum = countslash(equation[0]); //counts number of parts
}

else if (equation[1].split('').includes('/')) { // fires then there is a slash in the denominator
    numofslashindin = countslash(equation[1]); //counts number of parts
}
//##############


//This will seperate the equation by ()/(), it will give array like this ['()', '()']
//it will give arr = ['( ( (Sig*F*Y*PD*D*D)/N ) / ((PD*D)*pd) )', '(F*Y)']
//this is proviide us the numerator and denominator then we will spit them further in next step
//==========================================



























// -- step 2 -- split and num and dem
//checks if the num and dem has further division and if yes, it breaks it further and stores them in a sperate array
if (equation[1].split('').includes('/') && equation[0].split('').includes('/')) {   
const innerNumerator = equation[0].slice(1, -1).split('/');
const innerDenominator = equation[1].slice(1, -1).split('/')
} 

else if (!equation[1].split('').includes('/') && equation[0].split('').includes('/')) { // if only num has further division
    const innerNumerator = equation[0].slice(1, -1).split('/');
} 

else if (equation[1].split('').includes('/') && !equation[0].split('').includes('/')) { // if only dem has further division 
    const innerDenominator = equation[1].slice(1, -1).split('/');
}




