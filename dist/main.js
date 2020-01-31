/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nconst DEFAULTS = {\n  COLOR: \"white\",\n  RADIUS: 25,\n  SPEED: 3\n};\n\nfunction Asteroid(options) {\n  options = options;\n  options.color = DEFAULTS.COLOR;\n  options.pos = [1000 * Math.random(), 0]\n  // options.pos = options.pos || options.game.fallingPosition();\n  options.radius = options.radius || DEFAULTS.RADIUS;\n  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n  options.speed = DEFAULTS.SPEED\n  MovingObject.call(this, options);\n  this.isWrappable = false;\n}\n\n\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function collideWith(otherObject) {\n  if (otherObject instanceof Ship) {\n    // what happens when a asteroid hits the ship\n\n    otherObject.game.lose();\n    return true;\n  } else if (otherObject instanceof Bullet) {\n    this.game.score += 1\n    this.remove();\n    otherObject.remove();\n    return true;\n  }\n  return false;\n};\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Bullet(options) {\n  options.radius = Bullet.RADIUS;\n\n  MovingObject.call(this, options);\n}\n\nBullet.RADIUS = 5;\nBullet.SPEED = 15;\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\nfunction Game(ctx) {\n  this.ctx = ctx\n  this.asteroids = [];\n  this.bullets = [];\n  this.ships = [];\n  this.time = 1\n  this.score = 0\n}\n\nGame.prototype.scoreboard = function () {\n  scoreboard = document.getElementById(\"scoreboard\").innerHTML = `Score: ${this.game.score}`\n}\n\n\n\n\n// Game.BG_COLOR = \"#000000\";\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.FPS = 32;\nGame.NUM_ASTEROIDS = 0;\n// change this back to 8\n\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.globalAlpha = 1\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = 'black'\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.allObjects().forEach(function (object) {\n    object.draw(ctx);\n  });\n};\n\n\n\nGame.prototype.add = function add(object) {\n  if (object instanceof Asteroid) {\n    this.asteroids.push(object);\n  } else if (object instanceof Bullet) {\n    this.bullets.push(object);\n  } else if (object instanceof Ship) {\n    this.ships.push(object);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\n\n\nGame.prototype.addAsteroids = function addAsteroids() {\n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    this.add(new Asteroid({ game: this }));\n  }\n \n};\n\nGame.prototype.timeset = function () {\n  setInterval(() => {\n    this.time += 1\n    if (this.time > 0) {\n      this.addAsteroid()\n    }\n  }, 1000);\n}\n\n\n\nGame.prototype.addAsteroid = function addAsteroid(num = 1,vel = 2 ) {\n  range = [...Array(100).keys()]\n  range[0] = 1\n  sizes = [10,15,20,25]\n  vectors1 = [0]\n  vectors2 = [-0.25,.25,]\n  vectors3 = [-0.25,0.75,-1,0,.25,.5,.75,1]\n  speed1 = [1,2,3]\n  speed2 = [3,4,5,6,7,8]\n  speed3 = [6,7,8]\n  speed4 = [9,10,11]\n  speed5 = [1,2,3,4,5,6,]\n  \n  const levels = setInterval(() => {\n        if (this.time > 60) {\n          num = range[Math.floor(Math.random(30))]\n          if (this.asteroids.length < 90) {\n            for (let i = 0; i < num; i++) {\n              this.add(new Asteroid({\n                vel: [1, speed3[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 15\n              }))\n              this.add(new Asteroid({\n                vel: [Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 25\n              }))\n              this.add(new Asteroid({\n                vel: [Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 25\n              }))\n              this.add(new Asteroid({\n                vel: [0, speed3[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 30\n              }))\n              this.add(new Asteroid({\n                vel: [-Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 10\n              }))\n              this.add(new Asteroid({\n                vel: [Math.random(1), speed3[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 10\n              }))  \n            }\n          }\n        } else if (this.time > 29) {\n          // num = range[Math.floor(Math.random(30))]\n          if (this.asteroids.length < 50) {\n            for (let i = 0; i < num; i++) {\n              this.add(new Asteroid({\n                vel: [0, speed2[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 15\n              }))\n              this.add(new Asteroid({\n                vel: [-Math.random(1), speed2[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 20\n              }))\n              this.add(new Asteroid({\n                vel: [Math.random(1), speed2[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 10\n              }))\n            }\n          }\n        } \n        else if (this.time > 0) {\n          if (this.asteroids.length < 40) {\n            num = range[Math.floor(Math.random(40))]\n            for (let i = 0; i < num; i++) {\n              this.add(new Asteroid({\n                vel: [0, speed1[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 15\n              }))\n              this.add(new Asteroid({\n                vel: [.75, speed1[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 25\n              }))\n              this.add(new Asteroid({\n                vel: [-.75, speed1[Math.floor(Math.random(speed1.length))]],\n                game: this,\n                radius: 25\n              }))\n          }\n        }\n      } \n    }, 1000);\n  \n\n}\n\n//ship position\nGame.prototype.addShip = function addShip() {\n  const ship = new Ship({\n    pos: [514,550],\n    game: this\n  });\n\n  this.add(ship);\n\n  return ship;\n};\n\nGame.prototype.allObjects = function allObjects() {\n  return [].concat(this.ships, this.asteroids, this.bullets);\n};\n\nGame.prototype.checkCollisions = function checkCollisions() {\n  const allObjects = this.allObjects();\n  for (let i = 0; i < allObjects.length; i++) {\n    for (let j = 0; j < allObjects.length; j++) {\n      const obj1 = allObjects[i];\n      const obj2 = allObjects[j];\n\n      if (obj1.isCollidedWith(obj2)) {\n        const collision = obj1.collideWith(obj2);\n        // if (collision) return;\n        if (collision) return;\n      }\n    }\n  }\n};\n\n\n\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n  return (pos[0] < 0) || (pos[1] < 0) ||\n    (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);\n};\n\nGame.prototype.moveObjects = function moveObjects(delta) {\n  this.allObjects().forEach(function(object) {\n    object.move(delta);\n  });\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n  return [\n    Game.DIM_X * Math.random(),\n    Game.DIM_Y * Math.random()\n  ];\n};\nGame.prototype.fallingPosition = function fallingPosition() {\n  return [\n    Game.DIM_X * Math.random(),\n    Game.DIM_Y * Math.random()\n  ];\n};\n\nGame.prototype.remove = function remove(object) {\n  if (object instanceof Bullet) {\n    this.bullets.splice(this.bullets.indexOf(object), 1);\n  } else if (object instanceof Asteroid) {\n    this.asteroids.splice(this.asteroids.indexOf(object), 1);\n  } else if (object instanceof Ship) {\n    this.ships.splice(this.ships.indexOf(object), 1);\n  } else {\n    throw new Error(\"unknown type of object\");\n  }\n};\n\nGame.prototype.step = function step(delta) {\n  this.moveObjects(delta);\n  this.checkCollisions();\n};\n\nGame.prototype.wrap = function wrap(pos) {\n  return [\n    Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)\n  ];\n};\n\n\nGame.prototype.openModal = function openModal(time, score) {\n  let alertModal = document.getElementsByClassName(\"alert\")[0]\n  // alertModal.style = \"display: block \";\n  // alertModal.style = \"color: rgba(218,186,3,0.783)\"\n  alertModal.innerHTML = `You survived for ${time} seconds and destroyed ${score} asteroids`\n  alertModal.classList.remove(\"alert\");\n  alertModal.classList.toggle(\"alertShow\")\n}\n\nGame.prototype.closeModal = function closeModal(params) {\n  let alertModal = document.getElementsByClassName(\"alertShow\")[0]\n  alertModal.classList.remove(\"alertShow\");\n  alertModal.classList.toggle(\"alert\")\n  alertModal.style = \"display: none\";\n}\n\nGame.prototype.lose = function lose() {\n  const canvasEl = document.getElementsByClassName(\"game-board\")[0];\n  ctx = canvasEl.getContext(\"2d\");\n  time = this.time\n  score = this.score\n  this.asteroids = [];\n  this.openModal(time, score)\n  this.ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y)\n  this.time = -1000\n  clearInterval(this.addAsteroid.levels)\n  setTimeout(() => {\n    this.closeModal()\n    this.time = 0\n    this.score = 0\n  }, 10000);\n   \n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n  this.ship = this.game.addShip();\n}\n\nGameView.MOVES = {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0],\n};\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n  const ship = this.ship;\n\n  Object.keys(GameView.MOVES).forEach(function(k)  {\n    const move = GameView.MOVES[k];\n    key(k, function () { ship.power(move); });\n  });\n\n  key(\"space\", function () { ship.fireBullet(); });\n};\n\nGameView.prototype.start = function start() {\n  this.ctx.clearRect(0, 0, 1000, 600)\n  this.bindKeyHandlers();\n  this.lastTime = 0;\n  // start the animation\n  this.game.timeset()\n  this.game.score = 0\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nGameView.prototype.restart = function restart() {\n  this.ctx.clearRect(0, 0, 1000, 600)\n}\n\n\nGameView.prototype.animate = function animate(time) {\n  \n  const timeDelta = time - this.lastTime;\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n  \n  this.lastTime = time;\n  // every call to animate requests causes another call to animate\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var img = new Image();\n  img.onload = function() {\n    \n  }\n  const canvasEl = document.getElementsByClassName(\"game-board\")[0];\n  const ctx = canvasEl.getContext(\"2d\");\n  canvasEl.getElementsByClassName.backgroundImage = \"url(moon_img.jpg)\"\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n  const timer = document.getElementsByClassName('timer')[0]\n  const game = new Game(ctx);\n  // timer.innerHTML(game.timer)\n  const start = document.getElementById(\"start-game\")\n  const newGame = () => {\n    new GameView(game, ctx).start();\n    start.style = \"display: none\"\n  } \n  start.addEventListener(\"click\", newGame, { once: true,})\n\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.collideWith = function collideWith(otherObject) {\n  // default do nothing\n};\n\nMovingObject.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = this.color;\n\n  ctx.beginPath();\n  ctx.arc(\n    this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n  );\n  ctx.fill();\n};\n\nMovingObject.prototype.isCollidedWith = function isCollidedWith(otherObject) {\n  const centerDist = Util.dist(this.pos, otherObject.pos);\n  return centerDist < (this.radius + otherObject.radius);\n};\n\nMovingObject.prototype.isWrappable = true;\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nMovingObject.prototype.move = function move(timeDelta) {\n  // timeDelta is number of milliseconds since last move\n  // if the computer is busy the time delta will be larger\n  // in this case the MovingObject should move farther in this frame\n  // velocity of object is how far it should move in 1/60th of a second\n  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n      offsetX = this.vel[0] * velocityScale,\n      offsetY = this.vel[1] * velocityScale;\n\n  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n  if (this.game.isOutOfBounds(this.pos)) {\n    if (this.isWrappable) {\n      this.pos = this.game.wrap(this.pos);\n    } else {\n      // newVel = this.vel[1] + 1\n      // this.game.addAsteroid(newVel)\n      this.remove();\n    }\n  }\n};\n\nMovingObject.prototype.remove = function remove() {\n  this.game.remove(this);\n};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\n\nfunction randomColor() {\n  // const hexDigits = \"0123456789ABCDEF\";\n\n  // let color = \"#\";\n  // for (let i = 0; i < 3; i++) {\n  //   color += hexDigits[Math.floor((Math.random() * 16))];\n  // }\n  color = \"rgba(218, 186, 3, 0.783)\"\n  return color;\n}\n\n\nfunction Ship(options) {\n  options.radius = Ship.RADIUS;\n  options.vel = options.vel || [0, 0];\n  options.color = options.color || randomColor();\n  // options.bullet = 20\n  MovingObject.call(this, options);\n  this.type = \"ship\"\n}\n\n\nShip.RADIUS = 20;\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.fireBullet = function fireBullet() {\n  const norm = Util.norm(this.vel);\n  if (this.bullet <= 0) {\n    return;\n  }\n  if (norm === 10) {\n    // Can't fire unless moving.\n    return;\n  }\n\n  const relVel = Util.scale(\n    Util.dir(this.vel),\n    Bullet.SPEED\n  );\n\n  const bulletVel = [\n    relVel[0] + this.vel[0], relVel[1] + this.vel[1]\n  ];\n\n  const bullet = new Bullet({\n    pos: this.pos,\n    vel: [0,-10],\n    color: this.color,\n    game: this.game\n  });\n\n  this.game.add(bullet);\n};\n\nShip.prototype.power = function power(impulse) {\n  this.vel[0] += impulse[0];\n  // this.vel[0] = 0\n  // this.vel[1] += impulse[1];\n};\n\n\n\n// relocates ship when hit by an asteroid\nShip.prototype.relocate = function relocate() {\n  // this.pos = this.game.randomPosition();\n  // this.pos = this.game.randomPosition();\n  // this.vel = [50, 0];\n \n  \n};\n\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  // Normalize the length of the vector to 1, maintaining direction.\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  },\n  // Find distance between two points.\n  dist(pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  },\n  // Find the length of the vector.\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n\n  time(time) {\n    sec_num = parseInt(time, 10); // don't forget the second param\n    var hours = Math.floor(sec_num / 3600);\n    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);\n    var seconds = sec_num - (hours * 3600) - (minutes * 60);\n\n    if (hours < 10) { hours = \"0\" + hours; }\n    if (minutes < 10) { minutes = \"0\" + minutes; }\n    if (seconds < 10) { seconds = \"0\" + seconds; }\n    return hours + ':' + minutes + ':' + seconds;\n  },\n  \n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    // const deg = 2 * Math.PI * Math.random(90);\n    deg = 0\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    // return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n\n  },\n\n  \n  inherits(ChildClass, BaseClass) {\n    ChildClass.prototype = Object.create(BaseClass.prototype);\n    ChildClass.prototype.constructor = ChildClass;\n  },\n\n  wrap(coord, max) {\n    if (coord < 0) {\n      return max - (coord % max);\n    } else if (coord > max) {\n      return coord % max;\n    } else {\n      return coord;\n    }\n  }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });