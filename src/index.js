const Game = require("./game")
const GameView = require('./game_view')
const MovingObject = require('./moving_object').default
const Asteroid = require("./asteroid")

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementsByTagName('canvas')[0];
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid
    canvasEl.width = 1000;
    canvasEl.height = 1000;

    const ctx = canvasEl.getContext("2d");
    window.ctx = ctx
    // const game = new Game();
    // new GameView(game, ctx).start();
    
})
