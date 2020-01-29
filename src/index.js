const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByClassName("game-board")[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.getElementsByClassName.backgroundImage = "url(moon_img.jpg)"
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;
  const game = new Game();
  // scoreboard = document.getElementById("scoreboard").innerHTML = `Score: ${Game.score}`
  new GameView(game, ctx).start();
});
