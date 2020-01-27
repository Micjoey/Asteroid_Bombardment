const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js")
const Game = require("./game.js")

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.animate.bind(this), 20);
}

GameView.prototype.animate = function() {
  // this.game.moveObjects();
  this.game.step();
  this.game.draw_game(this.ctx);
}

module.exports = GameView;