const Util = require("./util");
const MovingObject = require("./moving_object");

function Bullet(options) {
  options.radius = Bullet.RADIUS;

  MovingObject.call(this, options);
}

Bullet.RADIUS = 10;
Bullet.SPEED = 10;

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;
