function setup() {
    new Canvas (800, 400);
    background(220);    // Background colour
    textSize(16);   // Text size
    fill("red");    // Text colour

    let a = 5;
    let b = 10;
    let sum = a + b;
    let product = a * b;
    const pi = 3.14159;
    const gravity = 9.8;
    console.log("Sum of a and b:", sum);
    console.log("Product of a and b:", product);

    text(pi, 50, 50);   // (text, x, y)

    let base = 10;
    let height = 5;
    let area = 0.5 * base * height;

    console.log("Area:", area);
    text(area, 100, 100);

    let total = 0;

    for (let i = 2; i <= 20; i += 2) {
        console.log(i);
        total += i;
    }

    console.log("Sum:", total);

    let score = 100;

    if (score > 90) {
        console.log("Excellent");
    } else if (score > 70) {
        console.log("Good");
    } else {
        console.log("Noob");
    }

    number = 19;

    while (number >= 1) {
        number--;
        
    }
}

function draw() {
    
}