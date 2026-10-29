// ANIMATION VARIABLES
// X-axis movers (pupils)
let leftPupilX = 0, leftPupilSpeed;
let rightPupilX = 0, rightPupilSpeed;

// Y-axis movers (eyebrows)
let leftBrowY = 0, leftBrowSpeed;
let rightBrowY = 0, rightBrowSpeed;

// Diagonal mover (nose: x and y together)
let noseOffset = 0, noseSpeed;

// Title growing/shrinking
let titleSize = 20;
let titleDir = 1;      // 1 = growing, -1 = shrinking
let titleSteps = 0;    // counts the 5 steps in each direction

function setup() {
  createCanvas(500, 600);

  // Different random speeds for each moving shape
  leftPupilSpeed  = random(0.3, 1.5);
  rightPupilSpeed = random(0.3, 1.5);
  leftBrowSpeed   = random(0.2, 1.2);
  rightBrowSpeed  = random(0.2, 1.2);
  noseSpeed       = random(0.2, 1.0);
}

function draw() {
  background(173, 216, 230); // redraw every frame so shapes don't smear

  // UPDATE MOVEMENT 
  // Pupils: back and forth along the x-axis
  leftPupilX += leftPupilSpeed;
  if (abs(leftPupilX) > 7) leftPupilSpeed *= -1;

  rightPupilX += rightPupilSpeed;
  if (abs(rightPupilX) > 7) rightPupilSpeed *= -1;

  // Eyebrows: back and forth along the y-axis
  leftBrowY += leftBrowSpeed;
  if (abs(leftBrowY) > 8) leftBrowSpeed *= -1;

  rightBrowY += rightBrowSpeed;
  if (abs(rightBrowY) > 8) rightBrowSpeed *= -1;

  // Nose: back and forth diagonally (same offset for x and y)
  noseOffset += noseSpeed;
  if (abs(noseOffset) > 6) noseSpeed *= -1;

  // Title: every 15 frames, change size one step.
  // 5 steps bigger, then 5 steps smaller, forever.
  if (frameCount % 15 === 0) {
    titleSize += 3 * titleDir;
    titleSteps++;
    if (titleSteps === 5) {
      titleSteps = 0;
      titleDir *= -1;
    }
  }

  // BODY (rect + square) 
  noStroke();
  fill(60, 90, 140);
  rect(150, 470, 200, 130, 20);      // shirt / shoulders
  fill(235, 190, 150);
  square(225, 420, 50);              // neck

  // CURLY HAIR (many circles) 
  fill(160, 110, 65);
  for (let x = 160; x <= 340; x += 30) {
    circle(x, 195, 55);
  }
  circle(155, 250, 50);
  circle(150, 300, 50);
  circle(345, 250, 50);
  circle(350, 300, 50);
  circle(200, 170, 50);
  circle(300, 170, 50);
  circle(250, 160, 60);

  // FACE (ellipse) 
  fill(235, 190, 150);
  ellipse(250, 300, 190, 240);

  // EARS (small ellipses) 
  ellipse(155, 305, 25, 45);
  ellipse(345, 305, 25, 45);

  // EYEBROWS (lines) - move up and down 
  stroke(160, 110, 65);
  strokeWeight(5);
  line(200, 265 + leftBrowY, 235, 260 + leftBrowY);
  line(265, 260 + rightBrowY, 300, 265 + rightBrowY);

  //EYES (circles) 
  stroke(0);
  strokeWeight(2);
  fill(255);
  circle(218, 285, 30);
  circle(282, 285, 30);

  // PUPILS (points) - move left and right 
  stroke(0);
  strokeWeight(12);
  point(218 + leftPupilX, 285);
  point(282 + rightPupilX, 285);

  // NOSE (triangle) - moves diagonally
  strokeWeight(2);
  stroke(0);
  fill(215, 165, 125);
  triangle(238 + noseOffset, 335 + noseOffset,
           262 + noseOffset, 335 + noseOffset,
           250 + noseOffset, 295 + noseOffset);

  // CHEEK POINTS 
  strokeWeight(4);
  stroke(190, 130, 100);
  point(205, 325);
  point(215, 332);
  point(285, 332);
  point(295, 325);

  //  MOUTH (line smile) 
  stroke(150, 50, 50);
  strokeWeight(4);
  line(220, 370, 235, 378);
  line(235, 378, 265, 378);
  line(265, 378, 280, 370);

  //  TITLE (grows 5x, shrinks 5x, repeat) 
  noStroke();
  fill(20);
  textSize(titleSize);
  textAlign(CENTER);
  text("A Self-Portrait", 250, 45);

  // SIGNATURE
  textSize(18);
  fill(255);
  text("Gabe Sager", 420, 580);
}