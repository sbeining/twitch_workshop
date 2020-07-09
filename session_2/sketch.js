const canvasWidth = 400;
const canvasHeight = 400;
const ballSize = 10;
const blockWidth = 20;
const blockHeight = 10;
const paddleWidth = 80;

let ball = {
  x: canvasWidth / 2,
  y: canvasHeight - 30,
  xVel: 0,
  yVel: -3
};

let paddle = {
  x: canvasWidth / 2,
  width: paddleWidth
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  drawPaddle(paddle.x, paddle.width);
  drawBall(ball.x, ball.y)
  drawLevel(level);

  ball.x = ball.x + ball.xVel;
  ball.y = ball.y + ball.yVel;

  handleBorders(ball);
  handleBallHitPaddle(ball, paddle);
  handleBallHitBlock(ball, level);

  // Moving the paddle left
  if (keyIsDown(LEFT_ARROW)) {
    paddle.x = paddle.x - 5;
  }

  // Moving the paddle right
  if (keyIsDown(RIGHT_ARROW)) {
    paddle.x = paddle.x + 5;
  }
}

function drawBall(xpos, ypos) {
  fill(color("white"));
  ellipse(xpos, ypos, ballSize);
}

function drawPaddle(pos, width) {
  fill(color("white"));
  rect(pos - width / 2, canvasHeight - 20, width, 5);
}

function drawLevel(level) {
  for (i=0; i<level.length; i++) {
    drawBlock(level[i])
  }
}

function drawBlock(block) {
  let col;
  let hpCol = {
    1: "green",
    2: "yellow",
    3: "red",
  }

  if (block.hp == 0) {
    return;
  }

  fill(hpCol[block.hp]);
  rect(block.x, block.y, blockWidth, blockHeight);
}

function handleBallHitPaddle(ball, paddle) {
  // Ball is above the paddle
  if (ball.y < canvasHeight - 25) {
    return;
  }

  if (ball.x < paddle.x - paddle.width / 2) {
    return;
  }

  if (ball.x > paddle.x + paddle.width / 2) {
    return;
  }

  ball.xVel = (ball.x - paddle.x) / 10;
  ball.yVel = -ball.yVel;
}

function handleBallHitBlock(ball, level) {
  let block;

  for (var i = 0; i < level.length; i++) {
    block = level[i];
    if (block.hp <= 0) {
      continue;
    }

    let collision = collideRectCircle(
      block.x, block.y, blockWidth, blockHeight,
      ball.x, ball.y, ballSize
    );

    if (collision.intersect == false) {
      continue;
    }

    let correction = (ballSize / 2) + 1;

    switch (collision.side) {
      case "top":
        ball.y = collision.y - correction;
        ball.yVel = -ball.yVel;
        break;
      case "right":
        ball.x = collision.x + correction;
        ball.xVel = -ball.xVel;
        break;
      case "bottom":
        ball.y = collision.y + correction;
        ball.yVel = -ball.yVel;
        break;
      case "left":
        ball.x = collision.x - correction;
        ball.xVel = -ball.xVel;
        break;
    }

    block.hp = block.hp - 1;
  }
}

function handleBorders(ball) {
  if (ball.y < 0) {
    ball.yVel = -ball.yVel;
  }

  if (ball.x < 0) {
    ball.xVel = -ball.xVel;
  }

  if (ball.x > canvasWidth) {
    ball.xVel = -ball.xVel;
  }

  if (ball.y > canvasHeight) {
    console.log("You Lose");
    noLoop();
  }
}
