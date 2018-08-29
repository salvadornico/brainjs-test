const brain = require("brain.js")

const network = new brain.NeuralNetwork()

network.train([
	// Inputs are fixtures between 4 teams
	// Output is the index of the winner in the input array
	{ input: [1, 2], output: [1] },
	{ input: [1, 3], output: [1] },
	{ input: [2, 3], output: [0] },
	{ input: [2, 4], output: [1] },
	{ input: [1, 2], output: [0] },
	{ input: [1, 3], output: [0] },
	{ input: [3, 4], output: [0] }
])

const output = network.run([1, 4])

console.log(`Probability of ${output * 100}% that the second team wins`)
