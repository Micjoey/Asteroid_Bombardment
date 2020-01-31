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
  const timer = document.getElementsByClassName('timer')[0]
  const game = new Game(ctx);
  // timer.innerHTML(game.timer)
  const start = document.getElementById("start-game")
  const newGame = () => {
    new GameView(game, ctx).start();
    start.style = "display: none"
  } 
  start.addEventListener("click", newGame, { once: true,})


});
