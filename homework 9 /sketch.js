function setup() {
  createCanvas(500, 600);
  background(173, 216, 230); // light blue backdrop
}

function draw() {
  // ----- BODY (rect + square) -----
  noStroke();
  fill(60, 90, 140);
  rect(150, 470, 200, 130, 20);      // shirt / shoulders
  fill(235, 190, 150);
  square(225, 420, 50);              // neck

  // ----- CURLY HAIR (many circles) -----
  fill(160, 110, 65);                // lighter brown
  for (let x = 160; x <= 340; x += 30) {
    circle(x, 195, 55);              // top row of curls
  }
  circle(155, 250, 50);              // left side curls
  circle(150, 300, 50);
  circle(345, 250, 50);              // right side curls
  circle(350, 300, 50);
  circle(200, 170, 50);
  circle(300, 170, 50);
  circle(250, 160, 60);

  // ----- FACE (ellipse) -----
  fill(235, 190, 150);
  ellipse(250, 300, 190, 240);

  // ----- EARS (small ellipses) -----
  ellipse(155, 305, 25, 45);
  ellipse(345, 305, 25, 45);

  // ----- EYEBROWS (lines) -----
  stroke(160, 110, 65);
  strokeWeight(5);
  line(200, 265, 235, 260);
  line(265, 260, 300, 265);

  // ----- EYES (circles) -----
  stroke(0);
  strokeWeight(2);
  fill(255);
  circle(218, 285, 30);
  circle(282, 285, 30);

  // ----- PUPILS (points) -----
  stroke(0);
  strokeWeight(12);
  point(218, 285);                   // left pupil
  point(282, 285);                   // right pupil

  // ----- NOSE (triangle: first point is bottom-left) -----
  strokeWeight(2);
  stroke(0);
  fill(215, 165, 125);
  triangle(238, 335, 262, 335, 250, 295);

  // ----- CHEEK POINTS -----
  strokeWeight(4);
  stroke(190, 130, 100);
  point(205, 325);
  point(215, 332);
  point(285, 332);
  point(295, 325);

  // ----- MOUTH (line smile) -----
  stroke(150, 50, 50);
  strokeWeight(4);
  line(220, 370, 235, 378);
  line(235, 378, 265, 378);
  line(265, 378, 280, 370);

  // ----- TITLE -----
  noStroke();
  fill(20);
  textSize(26);
  textAlign(CENTER);
  text("A Self-Portrait", 250, 45);

  // ----- SIGNATURE -----
  textSize(18);
  fill(255);
  text("Gabe Sager", 420, 580);

  noLoop(); // draw once
}