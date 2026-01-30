// Garden Advice App - Enhanced Documentation
// This script provides gardening advice based on the season and plant type.
// Branch 2 enhancements:
// - Added detailed  explaining each code block
// - Expanded advice for spring and autumn
// - Included tips for herbs
// - Added TODOs for future improvements
comments
// Prompt user for inputs

// Ask user for the current season and plant type
let season = prompt("Enter the season (summer, winter, spring, autumn):").toLowerCase();
let plantType = prompt("Enter the plant type (flower, vegetable, herb):").toLowerCase();

// Advice data object

// Stores gardening advice for different seasons and plant types
// Using an object makes it easier to update or expand advice
const adviceData = {
    summer: {
        flower: "Water your plants regularly and provide some shade.\nUse fertiliser to encourage blooms.",
        vegetable: "Water your plants regularly and provide some shade.\nKeep an eye out for pests!",
        herb: "Ensure herbs get enough sunlight and moderate water."
    },
    winter: {
        flower: "Protect your plants from frost with covers.\nUse fertiliser to encourage blooms.",
        vegetable: "Protect your plants from frost with covers.\nKeep an eye out for pests!",
        herb: "Consider indoor planting or frost protection for herbs."
    },
    spring: {
        flower: "Spring is great for planting flowers.\nUse compost to enrich soil and encourage growth.",
        vegetable: "Plant early vegetables and monitor soil moisture.\nUse organic fertiliser for best results.",
        herb: "Start new herb seedlings and provide consistent water.\nRotate herbs to prevent overgrowth."
    },
    autumn: {
        flower: "Prune flowers and remove dead blooms.\nPrepare garden beds for winter.",
        vegetable: "Harvest late-season vegetables and prepare soil for next planting season.",
        herb: "Trim herbs and store seeds for next season.\nConsider indoor overwintering for sensitive herbs."
    }
};


// Function: getAdvice

// This function retrieves advice based on the season and plant type.
// If the combination is not available, it returns a default message.
function getAdvice(season, plantType) {
    if (adviceData[season]) {                   // Check if season exists
        if (adviceData[season][plantType]) {    // Check if plant type exists
            return adviceData[season][plantType]; // Return corresponding advice
        } else {
            return "No advice available for this type of plant.";
        }
    } else {
        return "No advice available for this season.";
    }
}


// Generate and display advice

let advice = getAdvice(season, plantType);
console.log("Gardening Advice:\n" + advice);

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