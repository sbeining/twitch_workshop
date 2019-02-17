// Defining global variables
let backgroundColor = 0;
let canvasWidth = 600;
let canvasHeight = 400;
let paddleWidth = 5;
let paddleHeight = 100;
let leftPaddleY = canvasHeight / 2 - paddleHeight / 2;
let rightPaddleY = canvasHeight / 2 - paddleHeight / 2;
let ballY = 200;
let ballX = 300;
let xVelocity = 2;
let yVelocity = 0;
let leftPaddleX = 10;
let rightPaddleX = 585;

// setup() is called once when the programm starts
function setup() {
  // defines the area we can draw on
  createCanvas(canvasWidth, canvasHeight);
}

// draw() is called every frame
function draw() {
  // first draw the background
  background(backgroundColor);
  // draw a rectangle representing the left paddle
  rect(leftPaddleX,leftPaddleY,paddleWidth,paddleHeight);
  // draw another rectangle representing the right paddle
  rect(rightPaddleX,rightPaddleY,paddleWidth,paddleHeight);
  // draw an ellipse representing the ball
  ellipse(ballX,ballY,10);

  // Check if the ball his one of the paddles
  if (ballHitPaddle()) {
    // Reverse the horizontal (X) velocity of the ball
    xVelocity = -xVelocity;

    // Define a few helper variables
    let leftPaddleMiddle = leftPaddleY + paddleHeight / 2;
    let rightPaddleMiddle = rightPaddleY + paddleHeight / 2;

    // Set the vertical velocity depending on where the ball hit the paddle
    // The paddle should behave like it's convex

    // Did the ball hit the left...
    if (ballX < leftPaddleX) {
      // Rough approximation, the 6 is just guesswork
      yVelocity = (leftPaddleMiddle - ballY) / 6;
    // ..or the right paddle
    } else {
      // The same formula
      yVelocity = (rightPaddleMiddle - ballY) / 6;
    }
  }

  // Check if the ball hit the top or bottom of the canvas
  if (ballY < 0 || ballY > canvasHeight) {
    // Reverse the vertical (Y) velocity of the ball
    yVelocity = -yVelocity;
  }

  // Check if the ball passed the left paddle
  if (ballX < 0) {
    console.log("right wins!");
    // noLoop() stops the "draw()" function to be called again
    // effectivly stopping the programm
    noLoop();
  }

  // Check if the ball passed the right paddle
  if (ballX > canvasWidth) {
    console.log("left wins!");
    // noLoop() stops the "draw()" function to be called again
    // effectivly stopping the programm
    noLoop();
  }

  // Moving the right paddle up
  if (keyIsDown(UP_ARROW)) {
    rightPaddleY = rightPaddleY - 3;
  }

  // Moving the right paddle down
  if (keyIsDown(DOWN_ARROW)) {
    rightPaddleY = rightPaddleY + 3;
  }

  // Moving the left paddle up (81 is the "q" key)
  if (keyIsDown(81)) {
    leftPaddleY = leftPaddleY - 3;
  }

  // Moving the left paddle down (65 is the "a" key)
  if (keyIsDown(65)) {
    leftPaddleY = leftPaddleY + 3;
  }

  // Move the ball by the current velocity
  ballX = ballX - xVelocity;
  ballY = ballY - yVelocity;
}

// ballHitPaddle() determined if the ball hit any of the paddles
function ballHitPaddle() {
  // Is the y of the ball between the top and bottom of the left paddle?
  // And is the x of ball left of the left paddle?
  if (ballY > leftPaddleY &&
    ballY < leftPaddleY + paddleHeight &&
    ballX < leftPaddleX) {
    return true;
  }

  // Is the y of the ball between the top and bottom of the right paddle?
  // And is the x of ball right of the right paddle?
  if (ballY > rightPaddleY &&
    ballY < rightPaddleY + paddleHeight &&
    ballX > rightPaddleX) {
    return true;
  }

  // No paddle was hit
  return false;
}
