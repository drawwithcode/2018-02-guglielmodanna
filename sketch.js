var radius = 220;
var increment = 1;
var speed = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    strokeWeight(2);
    if (width < radius * 2 || height < radius * 2) {
        radius = Math.min(width, height)/2 - 10;
    }
}

function draw() {
    background(0, 3, 10);
    noFill();
    noStroke();
    increment = (mouseX  * 4 / width) +1;
    speed = (mouseY * 3 / height) +1;
    for (var i = -90; i < 90; i+= increment) {
        stroke(175 * sin(i + frameCount * speed), 0, 240 * sin(i - frameCount * speed));
        line(width/2+radius, height/2,
            width/2+radius-(radius*2*cos(i)*cos(i)),
            height/2-(radius*2*cos(i)*sin(i)));
    }
}
