//player box
let player; // Player sprite
let box;    // Player sprite image
let bg;     // Background image

// game variables
const TILE_SIZE = 50;

// world building groups
let tileMap1;
let ground;     // Ground sprite group
let spikes;     // Spike sprite group
let orb;        // Orb sprite group
let finishLine; // Finish line sprite group

// image sprites


// menu


// sound assets


function preload() {
    box = loadImage("assets/cube.png");
    bg = loadImage("assets/geobg.png");
    tileMap1 = loadStrings("stages/tiles1.txt");
}

function setup() {
    new Canvas(700, 600);   // (width, height)
    world.gravity.y = 32;

    // Player sprite
    player = new Sprite(TILE_SIZE, TILE_SIZE, TILE_SIZE, TILE_SIZE);  // (x, y, width, height)
    player.img = box;
    player.friction = 0;
    player.bounciness = 0;
    player.collider = "none";

    // Spawn point [x, y]
    startCoordinate = [TILE_SIZE, height - TILE_SIZE / 2];
    player.x = startCoordinate[0];
    player.y = startCoordinate[1];

    // Ground sprite group
    ground = new Group();
    ground.tile = "g";  // "g" represents a ground tile
    ground.w = TILE_SIZE;   // Width
    ground.h = TILE_SIZE;   // Height
    ground.color = "black"; // Tile colour
    ground.stroke = ""
}

function draw() {
    clear();    // Clear the previous frame before drawing
    image(bg, 0, 0, 800, 600);  // (image, x, y, width, height)
}











