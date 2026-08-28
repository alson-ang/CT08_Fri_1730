//=========================================
// Variables
//=========================================
let handPose;   // ML5 Model
let videoW = 640;
let videoH = 480;
let hands = [];

let fingerTip;
let balloon;

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
    world.gravity.y = 5;

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

    balloon = new Sprite();
    balloon.diameter = 60;
    balloon.collider = "dynamic";
    balloon.color = "rgb(255, 0, 0)";
    balloon.x = width / 2;
    balloon.y = height / 10;
    balloon.bounciness = 1;
    balloon.mass = 2;
    balloon.drag = 0.1;
}

function draw() {
    // Draw webcam video
    image(video, 0, 0, videoW, videoH);

    // Check if model detects a hand
    if (hands.length > 0) {
        console.log(hands);

        let currentHand = hands[0];
        let keypoint = currentHand.keypoints[8];
        // circle(keypoint.x, keypoint.y, 10);   // (x pos, y pos, diameter)

        // Make sprite follow finger tip
        fingerTip.x = keypoint.x;
        fingerTip.y = keypoint.y;
        fingerTip.visible = true;
    }
    else {
        // Hide sprite if there are no hands
        fingerTip.visible = false;
    }

}

//=========================================
// Function Created
//=========================================

function gotHands(results) {
    // Model detects hand and saves the output here
    hands = results;
}