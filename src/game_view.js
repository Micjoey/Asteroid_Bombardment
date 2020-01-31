function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.ship = this.game.addShip();
}

GameView.MOVES = {
  w: [0, -1],
  a: [-1, 0],
  s: [0, 1],
  d: [1, 0],
};

GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
  const ship = this.ship;

  Object.keys(GameView.MOVES).forEach(function(k)  {
    const move = GameView.MOVES[k];
    key(k, function () { ship.power(move); });
  });

  key("space", function () { ship.fireBullet(); });
};


GameView.prototype.start = function start() {
  this.ctx.clearRect(0, 0, 1000, 600)
  this.bindKeyHandlers();
  this.lastTime = 0;
  this.game.timeset();
  // const mySound = new sound("")
  // const myMusic = new sound("../dist/SOUND30.WAV")
  // myMusic.play()
  this.game.score = 0;
  // start the animation
  requestAnimationFrame(this.animate.bind(this));
};
// GameView.prototype.sound = function (src) {
//   this.sound = document.createElement("audio");
//   this.sound.src = src
//   this.sound.setAttribute("preload", "auto");
//   this.sound.setAttribute("controls", "none");
//   this.sound.style.display = "none"
//   document.body.appendChild(this.sound);
//   this.play = function () {
//     this.sound.play();
//   }
//   this.stop = function () {
//     this.sound.pause();
//   }
// }

GameView.prototype.restart = function restart() {
  this.ctx.clearRect(0, 0, 1000, 600)
}


GameView.prototype.animate = function animate(time) {
  
  const timeDelta = time - this.lastTime;
  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  
  this.lastTime = time;
  // every call to animate requests causes another call to animate
  requestAnimationFrame(this.animate.bind(this));
};

module.exports = GameView;
