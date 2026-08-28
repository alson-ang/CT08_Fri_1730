//=========================================
// Variables
//=========================================
let handPose;   // ML5 Model
let videoW = 640;
let videoH = 480;
let hands = [];

let fingerTip;

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
        video : {
            mandatory: {
                minWidth: videoW,
                minHeight: videoH
            },
            optional: [{ minFrameRate: 60 }],
        },
        audio: false,
        flipped: true
    };

    video = createCapture(constraints);
    video.size(videoW, videoH);
    video.hide();
    // Send video to the model to start detecting hands
    handPose.detectStart(video, gotHands);

    // Game sprite
    fingerTip = new Sprite();
    fingerTip.diameter = 60;
    fingerTip.collider = "kinematic";
    fingerTip.color = "rgba(255, 255, 0, 0.1)";
}

function draw() {
    // Draw webcam video
    image(video, 0, 0, videoW, videoH);

    // Check if model detects a hand
    if (hands.length > 0) {
        console.log(hands);

        // Loop through all detected hands
        for (let i = 0; i < hands.length; i++) {
            let currentHand = hands[i];
            let keypoint = currentHand.keypoints[8];
            // circle(keypoint.x, keypoint.y, 10);   // (x pos, y pos, diameter)
        }
    }

}

//=========================================
// Function Created
//=========================================

function gotHands(results) {
    // Model detects hand and saves the output here
    hands = results;
}