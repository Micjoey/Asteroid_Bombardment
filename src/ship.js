const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
Util.inherits(Ship, MovingObject);

function Ship(pos) {
  this.pos = pos;
  this.radius = 10;
  this.color = 'green';
  this.vel = [0,0];
}

module.exports = Ship;