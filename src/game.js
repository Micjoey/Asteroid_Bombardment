const Asteroid = require("./asteroid");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");
const GameView = require("./game_view")
function Game(ctx) {
  this.ctx = ctx
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];
  this.time = 1
  this.score = 0
}

Game.prototype.scoreboard = function () {
  scoreboard = document.getElementById("scoreboard").innerHTML = `Score: ${this.game.score}`
}




// Game.BG_COLOR = "#000000";
Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 0;
// change this back to 8


Game.prototype.draw = function draw(ctx) {
  ctx.globalAlpha = 1
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.allObjects().forEach(function (object) {
    object.draw(ctx);
  });
};



Game.prototype.add = function add(object) {
  if (object instanceof Asteroid) {
    this.asteroids.push(object);
  } else if (object instanceof Bullet) {
    this.bullets.push(object);
  } else if (object instanceof Ship) {
    this.ships.push(object);
  } else {
    throw new Error("unknown type of object");
  }
};



Game.prototype.addAsteroids = function addAsteroids() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.add(new Asteroid({ game: this }));
  }
 
};

Game.prototype.timeset = function () {
  setInterval(() => {
    this.time += 1
    if (this.time > 0) {
      this.addAsteroid()
    }
  }, 1000);
}



Game.prototype.addAsteroid = function addAsteroid(num = 1,vel = 2 ) {
  range = [...Array(100).keys()]
  range[0] = 1
  sizes = [10,15,20,25]
  vectors1 = [0]
  vectors2 = [-0.25,.25,]
  vectors3 = [-0.25,0.75,-1,0,.25,.5,.75,1]
  speed1 = [1,2,3]
  speed2 = [3,4,5,6,7,8]
  speed3 = [6,7,8]
  speed4 = [9,10,11]
  speed5 = [1,2,3,4,5,6,]
  
  const levels = setInterval(() => {
        if (this.time > 60) {
          num = range[Math.floor(Math.random(30))]
          if (this.asteroids.length < 90) {
            for (let i = 0; i < num; i++) {
              this.add(new Asteroid({
                vel: [1, speed3[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 15
              }))
              this.add(new Asteroid({
                vel: [Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 25
              }))
              this.add(new Asteroid({
                vel: [Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 25
              }))
              this.add(new Asteroid({
                vel: [0, speed3[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 30
              }))
              this.add(new Asteroid({
                vel: [-Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 10
              }))
              this.add(new Asteroid({
                vel: [Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 10
              }))  
            }
          }
        } else if (this.time > 29) {
          // num = range[Math.floor(Math.random(30))]
          if (this.asteroids.length < 50) {
            for (let i = 0; i < num; i++) {
              this.add(new Asteroid({
                vel: [0, speed2[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 15
              }))
              this.add(new Asteroid({
                vel: [-Math.random(1), speed2[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 20
              }))
              this.add(new Asteroid({
                vel: [Math.random(1), speed2[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 10
              }))
            }
          }
        } 
        else if (this.time > 0) {
          if (this.asteroids.length < 40) {
            num = range[Math.floor(Math.random(40))]
            for (let i = 0; i < num; i++) {
              this.add(new Asteroid({
                vel: [0, speed1[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 15
              }))
              this.add(new Asteroid({
                vel: [.75, speed1[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 25
              }))
              this.add(new Asteroid({
                vel: [-.75, speed1[Math.floor(Math.random(speed1.length))]],
                game: this,
                radius: 25
              }))
          }
        }
      } 
    }, 1000);
  

}

//ship position
Game.prototype.addShip = function addShip() {
  const ship = new Ship({
    pos: [514,550],
    game: this
  });

  this.add(ship);

  return ship;
};

Game.prototype.allObjects = function allObjects() {
  return [].concat(this.ships, this.asteroids, this.bullets);
};

Game.prototype.checkCollisions = function checkCollisions() {
  const allObjects = this.allObjects();
  for (let i = 0; i < allObjects.length; i++) {
    for (let j = 0; j < allObjects.length; j++) {
      const obj1 = allObjects[i];
      const obj2 = allObjects[j];

      if (obj1.isCollidedWith(obj2)) {
        const collision = obj1.collideWith(obj2);
        // if (collision) return;
        if (collision) return;
      }
    }
  }
};




Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
  return (pos[0] < 0) || (pos[1] < 0) ||
    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects().forEach(function(object) {
    object.move(delta);
  });
};

Game.prototype.randomPosition = function randomPosition() {
  return [
    Game.DIM_X * Math.random(),
    Game.DIM_Y * Math.random()
  ];
};
Game.prototype.fallingPosition = function fallingPosition() {
  return [
    Game.DIM_X * Math.random(),
    Game.DIM_Y * Math.random()
  ];
};

Game.prototype.remove = function remove(object) {
  if (object instanceof Bullet) {
    this.bullets.splice(this.bullets.indexOf(object), 1);
  } else if (object instanceof Asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(object), 1);
  } else if (object instanceof Ship) {
    this.ships.splice(this.ships.indexOf(object), 1);
  } else {
    throw new Error("unknown type of object");
  }
};

Game.prototype.step = function step(delta) {
  this.moveObjects(delta);
  this.checkCollisions();
};

Game.prototype.wrap = function wrap(pos) {
  return [
    Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
  ];
};


Game.prototype.openModal = function openModal(time, score) {
  let alertModal = document.getElementsByClassName("alert")[0]
  // alertModal.style = "display: block ";
  // alertModal.style = "color: rgba(218,186,3,0.783)"
  alertModal.innerHTML = `You survived for ${time} seconds and destroyed ${score} asteroids`
  alertModal.classList.remove("alert");
  alertModal.classList.toggle("alertShow")
}

Game.prototype.closeModal = function closeModal(params) {
  let alertModal = document.getElementsByClassName("alertShow")[0]
  alertModal.classList.remove("alertShow");
  alertModal.classList.toggle("alert")
  alertModal.style = "display: none";
}

Game.prototype.lose = function lose() {
  const canvasEl = document.getElementsByClassName("game-board")[0];
  ctx = canvasEl.getContext("2d");
  time = this.time
  score = this.score
  this.asteroids = [];
  this.openModal(time, score)
  this.ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y)
  this.time = -1000
  clearInterval(this.addAsteroid.levels)
  setTimeout(() => {
    this.closeModal()
    this.time = 0
    this.score = 0
  }, 10000);
   
}

module.exports = Game;
