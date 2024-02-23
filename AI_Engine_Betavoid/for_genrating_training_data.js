
//DATA -
// Define base phrases, modifiers, and completions
const basePhrases = [
    "Continue the calculations from this point onward.",
    "Take it away, AI. Finish the calculations for me.",
    "You've got the green light to proceed with the calculations.",
    "Feel free to take control and complete the calculations.",
    "Go forth and wrap up the calculations from this stage.",
    // Add more base phrases here...
];

const modifiers = [
    "with precision",
    "with expertise",
    "with accuracy",
    "confidently",
    "without hesitation",
    // Add more modifiers here...
];

const completions = [
    "until you reach the end.",
    "until the task is done.",
    "until the final result is obtained.",
    "until everything is computed.",
    // Add more completion phrases here...
];




//FUNCTIONS -
//num is how many variations you want
function SentanceGnerator(num, basePhrases, modifiers, completions) {

    // Generate variations by combining different elements
    const variations = [];
    for (let i = 0; i < num; i++) {
        let phrase = basePhrases[Math.floor(Math.random() * basePhrases.length)];
        if (Math.random() < 0.6) {
            // Add a modifier about 60% of the time
            phrase += " " + modifiers[Math.floor(Math.random() * modifiers.length)];
        }
        if (Math.random() < 0.5) {
            // Add a completion phrase about 50% of the time
            phrase += " " + completions[Math.floor(Math.random() * completions.length)];
        }
        variations.push(phrase);
    }

    // Print the generated variations
    for (let i = 0; i < variations.length; i++) {
        console.log(`${i + 1}. ${variations[i]}`);
    }

    //variations is where all variations are stored____________________________________________________


}