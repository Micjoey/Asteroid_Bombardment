const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function () {
  var img = new Image();
  img.onload = function() {
    
  }
  const canvasEl = document.getElementsByClassName("game-board")[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.getElementsByClassName.backgroundImage = "url(moon_img.jpg)"
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const game = new Game(ctx);
  new GameView(game, ctx).start();
  // const newGame = () => {

  //   debugger
  //   new GameView(game, ctx).start();
  // } 
  // const start = document.getElementById("start-game")
  // start.addEventListener("mousedown", newGame)
});
