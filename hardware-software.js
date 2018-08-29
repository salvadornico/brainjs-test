const brain = require("brain.js")
const data = require("./data.json")

const network = new brain.recurrent.LSTM()

const trainingData = data.map(item => ({
	input: item.text,
	output: item.category
}))

console.log("Processing..")
const startTime = new Date().getTime()

network.train(trainingData, { iterations: 2000 })

const output = network.run("Run the unit tests on the code")
console.log(output)

const endTime = new Date().getTime()
const processingTime = (endTime - startTime) / 1000
console.log(`Processed in ${processingTime} seconds`)
