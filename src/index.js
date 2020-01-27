console.log("webpack is working!");
const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js")
const Game = require("./game.js")
const GameView = require("./game_view.js")
const Ship = require("./ship.js")

window.addEventListener('DOMContentLoaded', () => {
  var canvas = document.getElementById('game-canvas');
  var ctx = canvas.getContext('2d');
  window.MovingObject = MovingObject;
  window.Util = Util
  window.Asteroid = Asteroid
  window.ctx = ctx;
  window.Game = Game;
  window.GameView = GameView;
  let g1 = new GameView(ctx);
  g1.start();
  
  // const mo = new MovingObject({
  //   pos: [30, 30],
  //   vel: [10, 10],
  //   radius: 5,
  //   color: "#00FF00"
  // });
  // mo.draw(ctx);
  // const ast = new Asteroid({
  //   pos: [500,500]
  // });
  // ast.draw(ctx);
  // window.ast = ast

});