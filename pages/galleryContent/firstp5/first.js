//colors
var r = 0;
var g = 0;
var b = 0;
//colors
var r2 = 0;
var g2 = 0;
var b2 = 0;
//allows for spinning and color change overtime
var counter = 0;
var counter2 = 0;
//allows for spinning and color change overtime
var counter3 = 260;
var counter4 = 0;


function setup() {
    createCanvas(800, 800);
    frameRate(30);
}

function draw() {
    background(220);
    //circle animation
    push();
    if (mouseIsPressed) {
        counter = counter + 5;
        counter2 = counter2 + 20;
    }


    if (counter == 260) { // reset your counter
        counter = 0;
    }
    //colors and interaction
    if (mouseY < 400) {
        r = r + 1;
        b = b + 3;
        g = g - 1;
    } else {
        r = r - .5;
        b = b + 3;
        g = g + 1;
    }

    translate(400, 400);
    fill(r, g, b, 25);

    stroke(0, 0, 0);
    strokeWeight(1);

    rotate(3 * PI + counter2 / 19); //circle pattern
    ellipse(0, 300, 150, 150);

    for (let y = 0; y < 37; y++) { //the circle loop
        rotate(3 * PI / 19);
        ellipse(0, 300, 150, 150);
    }
    pop();
    //square animation
    push();
    if (mouseIsPressed) {
        counter3 = counter3 - 5;
        counter4 = counter4 - 20;
    }


    if (counter == 0) { // reset your counter
        counter3 = 260;
    }
    //colors and color interaction
    if (mouseX < 400) {
        r2 = r2 + 1;
        b2 = b2 + 3;
        g2 = g2 - 1;
    } else {
        r2 = r2 - .5;
        b2 = b2 + 3;
        g2 = g2 + 1;
    }
    translate(400, 400);
    fill(r2, g2, b2, 25);

    stroke(0, 0, 0);
    strokeWeight(1);
    //rotation of squares
    rotate(3 * PI + counter4 / 19);
    square(0, 75, 100);
    //loop of squares
    for (let y = 0; y < 37; y++) {
        rotate(3 * PI / 19);
        square(0, 75, 100);
    }
    pop();

}
