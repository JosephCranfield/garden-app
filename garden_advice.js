// Refactored gardening advice app

// Prompt user for season and plant type
let season = prompt("Enter the season (summer, winter, etc.):").toLowerCase();
let plantType = prompt("Enter the plant type (flower, vegetable):").toLowerCase();

// Object to store advice
const adviceData = {
    summer: {
        flower: "Water your plants regularly and provide some shade.\nUse fertiliser to encourage blooms.",
        vegetable: "Water your plants regularly and provide some shade.\nKeep an eye out for pests!"
    },
    winter: {
        flower: "Protect your plants from frost with covers.\nUse fertiliser to encourage blooms.",
        vegetable: "Protect your plants from frost with covers.\nKeep an eye out for pests!"
    }
};

// Function to get advice
function getAdvice(season, plantType) {
    if (adviceData[season] && adviceData[season][plantType]) {
        return adviceData[season][plantType];
    } else {
        return "No advice available for this season or plant type.";
    }
}

// Log advice to console
console.log(getAdvice(season, plantType));


// TODO: Examples of possible features to add:
// - Add detailed comments explaining each block of code.
// - Refactor the code into functions for better readability and modularity.
// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.