//=========================================
// Variables
//=========================================
let handPose;   // ML5 Model

//=========================================
// Code
//=========================================

function preload() {
    // Model settings
    let options = {
        flipped: true,
        runtime: "tfjs",
        modelType: "full",
        detectorModeUrl: undefined,
        landmarkModeUrl: undefined,
    }

    // Load the model
    handPose = ml5.
}

function setup() {}

function draw() {}

//=========================================
// Function Created
//=========================================
