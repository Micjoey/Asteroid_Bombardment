const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");

const DEFAULTS = {
  COLOR: "white",
  RADIUS: 25,
  SPEED: 3
};

function Asteroid(options) {
  options = options;
  options.color = DEFAULTS.COLOR;
  options.pos = [1000 * Math.random(), 0]
  // options.pos = options.pos || options.game.fallingPosition();
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  options.speed = DEFAULTS.SPEED
  MovingObject.call(this, options);
}



Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function collideWith(otherObject) {
  if (otherObject instanceof Ship) {
    // what happens when a asteroid hits the ship
    
    otherObject.lose();
    return true;
  } else if (otherObject instanceof Bullet) {
    this.game.score += 1
    this.remove();
    otherObject.remove();
    return true;
  }
  return false;
};


module.exports = Asteroid;
