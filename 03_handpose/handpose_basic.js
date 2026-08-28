//=========================================
// Variables
//=========================================
let handPose;   // ML5 Model
let videoW = 640;
let videoH = 480;

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
        landmarkModeUrl: undefined
    }

    // Load the model
    handPose = ml5.handPose(options);
}

function setup() {
    createCanvas(videoW, videoH);

    // Setup webcam video
    let constraints = {
        mandatory: {
            minWidth: videoW,
            minHeight: videoH
        },
        optional: [{ minFrameRate: 60 }],
    }
}

function draw() {}

//=========================================
// Function Created
//=========================================
