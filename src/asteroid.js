const MovingObject = require("./moving_object.js");
const Util = require("./util.js");


Util.inherits(Asteroid, MovingObject);

function Asteroid(options) {
  let hash = {};
  hash.pos = options['pos'];
  hash.vel = Util.randomVec(getRandomInt(10));
  hash.radius = 15;
  hash.color = 'orange';
  hash.game = options['game'];
  MovingObject.call(this, hash);
}

function getRandomInt(max) {
  let num = Math.floor(Math.random() * Math.floor(max));
  if (num<1) {num = 1}
  return num;
}

module.exports = Asteroid;

