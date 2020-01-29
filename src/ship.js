const MovingObject = require("./moving_object");
const Util = require("./util");
const Bullet = require("./bullet");
const GameView = require("./game_view")

function randomColor() {
  // const hexDigits = "0123456789ABCDEF";

  // let color = "#";
  // for (let i = 0; i < 3; i++) {
  //   color += hexDigits[Math.floor((Math.random() * 16))];
  // }
  color = "white"
  return color;
}

function Ship(options) {
  options.radius = Ship.RADIUS;
  options.vel = options.vel || [0, 0];
  options.color = options.color || randomColor();
  // options.bullet = 20
  MovingObject.call(this, options);
}

Ship.RADIUS = 20;

Util.inherits(Ship, MovingObject);

Ship.prototype.fireBullet = function fireBullet() {
  const norm = Util.norm(this.vel);
  if (this.bullet <= 0) {
    return;
  }
  if (norm === 10) {
    // Can't fire unless moving.
    return;
  }

  const relVel = Util.scale(
    Util.dir(this.vel),
    Bullet.SPEED
  );

  const bulletVel = [
    relVel[0] + this.vel[0], relVel[1] + this.vel[1]
  ];

  const bullet = new Bullet({
    pos: this.pos,
    vel: [0,-10],
    color: this.color,
    game: this.game
  });

  this.game.add(bullet);
};

Ship.prototype.power = function power(impulse) {
  this.vel[0] += impulse[0];
  // this.vel[1] += impulse[1];
};



// relocates ship when hit by an asteroid
Ship.prototype.relocate = function relocate() {
  // this.pos = this.game.randomPosition();
  // this.pos = this.game.randomPosition();
  // this.vel = [50, 0];
 
  
};

Ship.prototype.lose = function lose() {
  // debugger
  alert(`You survived for ${this.game.time} seconds and destroyed ${this.game.score} asteroids`)
}

module.exports = Ship;
