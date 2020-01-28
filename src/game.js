const Asteroid = require("./asteroid");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");

function Game() {
  this.asteroids = [];
  this.bullets = [];
  this.ships = [];
  this.time = 1
  this.addAsteroids();
  this.score = 0
}

Game.prototype.scoreboard = function () {
  scoreboard = document.getElementById("scoreboard").innerHTML = `Score: ${this.game.score}`
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 8;

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

Game.prototype.addAsteroid = function addAsteroid(vel, num = 1) {
  // debugger
  if (this.time < 24) {
    if (this.asteroids.length < 20) {
      for (let i = 0; i < num; i++) {
        if (vel[1] > 4) {
          vel = 3
        }
        this.add(new Asteroid({
          vel: [0, vel],
          game: this
        }))
      }
    }
  } else if (this.time < 50 && this.time > 25) {
    if (this.asteroids.length < 30) {
      for (let i = 0; i < num; i++) {
        this.add(new Asteroid({
          vel: [0, vel],
          game: this
        }))
      }
    }
  } else if (this.time < 100 && this.time > 50) {
    if (this.asteroids.length < 60) {
      for (let i = 0; i < num; i++) {
        this.add(new Asteroid({
          vel: [0, vel],
          game: this
        }))
      }
    }
  } else {
    
  }
}

//ship position
Game.prototype.addShip = function addShip() {
  const ship = new Ship({
    pos: [400,550],
    // pos: this.randomPosition(),
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

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
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
    // debugger
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

Game.prototype.timeset = function() {
  setInterval(() => {
    this.time += 1
  }, 1000);
}

Game.prototype.lose = function lose() {
  alert(`You Survived for ${this.time/60} Minutes and destroyed x`)
}

module.exports = Game;
