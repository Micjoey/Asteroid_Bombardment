const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");

const DEFAULTS = {
  COLOR: "#505050",
  RADIUS: 25,
  SPEED: 1
};

function Asteroid(options) {
  options = options;
  options.color = DEFAULTS.COLOR;
  options.pos = [1000 * Math.random(), 0]
  // options.pos = options.pos || options.game.fallingPosition();
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  // options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
  options.speed = DEFAULTS.SPEED
  MovingObject.call(this, options);
}



Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function collideWith(otherObject) {
  if (otherObject instanceof Ship) {
    // what happens when a asteroid hits the ship
    otherObject.relocate();
    return true;
  } else if (otherObject instanceof Bullet) {
    this.remove();
    otherObject.remove();
    return true;
  }
  return false;
};


module.exports = Asteroid;
