const brain1 = require('brain.js');

function brainshit(input) {

    // Create a Neural Network
    const network = new brain1.NeuralNetwork();

    // Train the Network with 4 input objects
    // v1 = a2 * l3
    // a2 = 2* pi* r4
    // de5 = m6 / v1 
    // V1 = m6 / de5
    // de5 = m6 / a2 * l3
    // de5 = m6 / (2* pi* r4) * l3
    // de5 = m6 / (2p* r4) * l3
    // l3 = m6 / (2p* r4) * de5
    // l3 = m6 / (2* pi* r4) * de5
    // l3 = v1 / (2* pi* r4)
    // l3 = m6 / a2 * de5
    // 2p = 2* pi
    network.train([
        { input: [2, 3, 0, 0, 0], output: { one: 1 } },
        { input: [6, 5, 0, 0, 0], output: { one: 1 } },
        { input: [99, 100, 4, 0, 0], output: { two: 1 } },
        { input: [6, 1, 0, 0, 0], output: { five: 1 } },
        { input: [6, 2, 3, 0, 0], output: { five: 1 } },
        { input: [6, 99, 100, 4, 3], output: { five: 1 } },
        { input: [6, 0, 200, 4, 3], output: { five: 1 } },
        { input: [6, 0, 200, 4, 5], output: { three: 1 } },
        { input: [6, 99, 100, 4, 5], output: { three: 1 } },
        { input: [1, 99, 100, 4, 0], output: { three: 1 } },
        { input: [5, 2, 5, 0, 0], output: { three: 1 } },
        { input: [99, 100, 0, 0, 0], output: { h: 1 } },
    ]);



    // What is the expected output of [1,0]?
    let result = network.run(input);

    ///[6, 2, 5, 0, 0]

    //sending response back to the indes_market
    const respo = [result["one"], result["two"], result["five"], result["h"], result["three"]];
    return respo;

}


module.exports = {
    solveshit: brainshit
};


