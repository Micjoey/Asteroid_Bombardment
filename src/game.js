const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js")
const Ship = require("./ship.js");

function Game(DIM_X=1300, DIM_Y=900, NUM_ASTEROIDS=15) {
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.NUM_ASTEROIDS = NUM_ASTEROIDS;
  this.asteroids_arr = [];
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition());
}

Game.prototype.addAsteroids = function () {
// let asteroids_arr = [];
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids_arr.push(new Asteroid(
      { pos:[getRandomInt(this.DIM_X), getRandomInt(this.DIM_Y)],
      game: this }
    ));
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

Game.prototype.draw_game = function(ctx) {
  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);
  let allObs = this.allObjects();
  // this.asteroids_arr.forEach(function (ele) {
  //   ele.draw(ctx)
  // });
  allObs.forEach(function (ele) {
    ele.draw(ctx)
  });
}

Game.prototype.moveObjects = function() {
  this.asteroids_arr.forEach(function (ele) {
    ele.move()
  });
}
Game.prototype.wrap = function(pos) {
  let x = pos[0];
  let y = pos[1];
  if (y < 0) {
    x = this.DIM_X - x;
    y = this.DIM_Y;
  }
  if (y > this.DIM_Y) {
    x = this.DIM_X - x;
    y = 0;
  }
  if (x < 0) {
    x = this.DIM_X;
    y = this.DIM_Y - y;
  }
  if (x > this.DIM_X) {
    x = 0;
    y = this.DIM_Y - y;
  }
  return [x,y];
}

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids_arr.length-1; i++) {
    for (let j = i+1; j < this.asteroids_arr.length; j++) {
      if (this.asteroids_arr[i].isCollidedWith(this.asteroids_arr[j])) {
        this.asteroids_arr[i].collideWith(this.asteroids_arr[j])
      }
    }
  }
}

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.remove = function(asteroid){
  let idx = this.asteroids_arr.indexOf(asteroid);
  this.asteroids_arr.splice(idx,1);
}

Game.prototype.randomPosition = function() {
  return [getRandomInt(this.DIM_X), getRandomInt(this.DIM_Y)];
}

Game.prototype.allObjects = function() {
  let allObjectsArray = []
  for (let i = 0; i < this.asteroids_arr.length; i++) {
    allObjectsArray.push(this.asteroids_arr[i])
  }
  allObjectsArray.push(this.ship);
  return allObjectsArray;
}

module.exports = Game;