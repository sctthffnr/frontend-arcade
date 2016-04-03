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

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
  this.time = 1000;
  this.score = 0;
};

Player.prototype.update = function(dt) {
  if (this.time <= 0) {
    this.time = 1000;
    this.score -= 100;
    this.x = 200;
    this.y = 400;
  }
  this.time -= 1;
  ctx.clearRect(0, 0, 505, 706);
  ctx.font = "16px Arial";
  ctx.fillText('Timer:', 10, 620);
  ctx.fillText(this.time, 90, 620);
  ctx.fillText('Score:', 10, 660);
  ctx.fillText(this.score, 90, 660);
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'left':
      if (this.x - 101 > -50) {
        this.x -= 101;
      } else {
        break;
      }
    break;
    case 'right':
      if (this.x + 101 < 500) {
        this.x += 101;
      } else {
        break;
      }
    break;
    case 'up':
      if (this.y - 85 > 0) {
        this.y -= 85;
      } else {
        this.score += 100;
        this.time = 1000;
        this.x = 200;
        this.y = 400;
      }
    break;
    case 'down':
      if (this.y + 85 < 450) {
        this.y += 85;
      } else {
        break;
      }
    break;
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
allEnemies = [new Enemy(0, 62, 150), new Enemy(0, 146, 250),
              new Enemy(0, 230, 350)];
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
