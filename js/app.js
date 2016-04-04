// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  this.increaseSpeed(dt);
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    if (this.x > 505) {
      this.x = 0;
    }
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Increase the enemy's speed when an event occurs
Enemy.prototype.increaseSpeed = function(dt) {
  if (this.speed < 500) {
    this.speed +=  10 * dt;
  }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
  this.resetTimer();
  this.score = 0;
};

// Draw the timer on the canvas and adjust the score if the timer runs out
Player.prototype.update = function(dt) {
  if (this.timer <= 0) {
    this.resetTimer();
    this.score -= 100;
    this.resetPosition();
  }
  this.timer -= 1;
  ctx.clearRect(0, 0, 505, 706);
  ctx.font = "16px Arial";
  ctx.fillText('Timer:', 10, 620);
  ctx.fillText(this.timer, 90, 620);
  ctx.fillText('Score:', 10, 660);
  ctx.fillText(this.score, 90, 660);
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The following functions control how the player character moves
Player.prototype.left = function() {
  if (this.x - 101 > -50) {
    this.x -= 101;
  }
};

Player.prototype.right = function() {
  if (this.x + 101 < 500) {
    this.x += 101;
  }
};

Player.prototype.up = function() {
  if (this.y - 85 > 0) {
    this.y -= 85;
  }  else {
    this.score += 100;
    this.resetTimer();
    this.resetPosition();
  }
};

Player.prototype.down = function() {
  if (this.y + 85 < 450) {
    this.y += 85;
  }
};

Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'left': this.left();
    break;
    case 'right': this.right();
    break;
    case 'up': this.up();
    break;
    case 'down': this.down();
    break;
  }
};

// Reset the timer if an event occurs
Player.prototype.resetTimer = function() {
  this.timer = 400;
};

// Reset the position if an event occurs
Player.prototype.resetPosition = function() {
  this.x = 200;
  this.y = 400;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [new Enemy(0, 62, 350), new Enemy(0, 146, 250),
              new Enemy(0, 230, 150)];
// Place the player object in a variable called player
player = new Player(200, 400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
