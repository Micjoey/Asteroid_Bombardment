const Asteroid = require("./asteroid");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");

function Game(ctx) {
  this.ctx = ctx
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




// Game.BG_COLOR = "#000000";
Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 32;
Game.NUM_ASTEROIDS = 0;
// change this back to 8


Game.prototype.draw = function draw(ctx) {
  // debugger
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
  // debugger
  vectors1 = [0]
  vectors2 = [-0.25,0,.25,]
  vectors3 = [-0.25,0.75,-1,0,.25,.5,.75,1]
  speed1 = [1,2,3]
  speed2 = [1,2,3,4]
  speed3 = [1,2,3,4,5,6,]
  speed4 = [1,2,3,4,5,6,]
  speed5 = [1,2,3,4,5,6,]
  count = 0
  setInterval(() => {
    count += 1
    if (this.time < 30) {
      if(this.asteroids.length < 25) {
        num = Math.random(5)
        for (let i = 0; i < num; i++) {
          this.add(new Asteroid({
            vel: [vectors1[Math.floor(Math.random(vectors1.length))], speed1[Math.floor(Math.random(speed1.length))]],
            game: this
          }))
          this.add(new Asteroid({
            vel: [vectors1[Math.floor(Math.random(vectors1.length))], speed1[Math.floor(Math.random(speed1.length))]],
            game: this
          }))
        }
      }
    } else if (this.time < 70 && this.time >= 30) {
      num = Math.random(30)
      if (this.asteroids.length < 60) {
        for (let i = 0; i < num; i++) {
          this.add(new Asteroid({
            vel: [vectors1[Math.floor(Math.random(vectors1.length))], speed1[Math.floor(Math.random(speed2.length))]],
            game: this
          }))
          this.add(new Asteroid({
            vel: [vectors2[Math.floor(Math.random(vectors2.length))], 2.25],
            game: this
          }))
        }
      }
    } else if (this.time < 200 && this.time >= 70) {
      num = Math.random(count)
      if (this.asteroids.length < 80) {
        for (let i = 0; i < num; i++) {
          this.add(new Asteroid({
            vel: [vectors1[Math.floor(Math.random(vectors1.length))], speed1[Math.floor(Math.random(speed2.length))]],
            game: this
          }))
          this.add(new Asteroid({
            vel: [vectors2[Math.floor(Math.random(vectors2.length))], 2.25],
            game: this
          }))
        }
      }
    } else if (this.time < 250 && this.time >= 200) {
      num = Math.random(count)
      if (this.asteroids.length < 90) {
        for (let i = 0; i < num; i++) {
          this.add(new Asteroid({
            vel: [vectors1[Math.floor(Math.random(vectors1.length))], speed1[Math.floor(Math.random(speed2.length))]],
            game: this
          }))
          this.add(new Asteroid({
            vel: [vectors2[Math.floor(Math.random(vectors2.length))], 2.25],
            game: this
          }))
        }
      }
    } else if (this.time < 300 && this.time >= 250) {
      num = Math.random(30)
      if (this.asteroids.length < 150) {
        for (let i = 0; i < num; i++) {
          this.add(new Asteroid({
            vel: [vectors1[Math.floor(Math.random(vectors1.length))], speed1[Math.floor(Math.random(speed2.length))]],
            game: this
          }))
          this.add(new Asteroid({
            vel: [vectors2[Math.floor(Math.random(vectors2.length))], 2.25],
            game: this
          }))
        }
      }
    } else if (this.time >= 300) {
      alert("You Won")
    }
  }, 1000);
  

}

//ship position
Game.prototype.addShip = function addShip() {
  const ship = new Ship({
    pos: [400,550],
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




Game.prototype.lose = function lose() {
  this.asteroids = [];
  this.ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y)
  this.ship.game = new Game(ctx)
  
  alert(`You survived for ${this.time} and destroyed ${this.score} - asteroids`)
}

module.exports = Game;
