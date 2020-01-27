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

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(options) {\n  let hash = {};\n  hash.pos = options['pos'];\n  hash.vel = Util.randomVec(getRandomInt(10));\n  hash.radius = 15;\n  hash.color = 'orange';\n  hash.game = options['game'];\n  MovingObject.call(this, hash);\n}\n\nfunction getRandomInt(max) {\n  let num = Math.floor(Math.random() * Math.floor(max));\n  if (num<1) {num = 1}\n  return num;\n}\n\nmodule.exports = Asteroid;\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game(DIM_X=1300, DIM_Y=900, NUM_ASTEROIDS=15) {\n  this.DIM_X = DIM_X;\n  this.DIM_Y = DIM_Y;\n  this.NUM_ASTEROIDS = NUM_ASTEROIDS;\n  this.asteroids_arr = [];\n  this.addAsteroids();\n  this.ship = new Ship(this.randomPosition());\n}\n\nGame.prototype.addAsteroids = function () {\n// let asteroids_arr = [];\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids_arr.push(new Asteroid(\n      { pos:[getRandomInt(this.DIM_X), getRandomInt(this.DIM_Y)],\n      game: this }\n    ));\n  }\n}\n\nfunction getRandomInt(max) {\n  return Math.floor(Math.random() * Math.floor(max));\n}\n\nGame.prototype.draw_game = function(ctx) {\n  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);\n  let allObs = this.allObjects();\n  // this.asteroids_arr.forEach(function (ele) {\n  //   ele.draw(ctx)\n  // });\n  allObs.forEach(function (ele) {\n    ele.draw(ctx)\n  });\n}\n\nGame.prototype.moveObjects = function() {\n  this.asteroids_arr.forEach(function (ele) {\n    ele.move()\n  });\n}\nGame.prototype.wrap = function(pos) {\n  let x = pos[0];\n  let y = pos[1];\n  if (y < 0) {\n    x = this.DIM_X - x;\n    y = this.DIM_Y;\n  }\n  if (y > this.DIM_Y) {\n    x = this.DIM_X - x;\n    y = 0;\n  }\n  if (x < 0) {\n    x = this.DIM_X;\n    y = this.DIM_Y - y;\n  }\n  if (x > this.DIM_X) {\n    x = 0;\n    y = this.DIM_Y - y;\n  }\n  return [x,y];\n}\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.asteroids_arr.length-1; i++) {\n    for (let j = i+1; j < this.asteroids_arr.length; j++) {\n      if (this.asteroids_arr[i].isCollidedWith(this.asteroids_arr[j])) {\n        this.asteroids_arr[i].collideWith(this.asteroids_arr[j])\n      }\n    }\n  }\n}\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid){\n  let idx = this.asteroids_arr.indexOf(asteroid);\n  this.asteroids_arr.splice(idx,1);\n}\n\nGame.prototype.randomPosition = function() {\n  return [getRandomInt(this.DIM_X), getRandomInt(this.DIM_Y)];\n}\n\nGame.prototype.allObjects = function() {\n  let allObjectsArray = []\n  for (let i = 0; i < this.asteroids_arr.length; i++) {\n    allObjectsArray.push(this.asteroids_arr[i])\n  }\n  allObjectsArray.push(this.ship);\n  return allObjectsArray;\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView(ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  setInterval(this.animate.bind(this), 20);\n}\n\nGameView.prototype.animate = function() {\n  // this.game.moveObjects();\n  this.game.step();\n  this.game.draw_game(this.ctx);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"webpack is working!\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\")\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  var canvas = document.getElementById('game-canvas');\n  var ctx = canvas.getContext('2d');\n  window.MovingObject = MovingObject;\n  window.Util = Util\n  window.Asteroid = Asteroid\n  window.ctx = ctx;\n  window.Game = Game;\n  window.GameView = GameView;\n  let g1 = new GameView(ctx);\n  g1.start();\n  \n  // const mo = new MovingObject({\n  //   pos: [30, 30],\n  //   vel: [10, 10],\n  //   radius: 5,\n  //   color: \"#00FF00\"\n  // });\n  // mo.draw(ctx);\n  // const ast = new Asteroid({\n  //   pos: [500,500]\n  // });\n  // ast.draw(ctx);\n  // window.ast = ast\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(hash) {\n  this.pos = hash['pos']; //[30,30]\n  this.vel = hash['vel']; //[10,10]\n  this.radius = hash['radius'];\n  this.color = hash['color'];\n  this.game = hash['game'];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.fillStyle = this.color;\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0 , Math.PI * 2, true );\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  this.pos = this.game.wrap(this.pos);\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let xSq = Math.pow(this.pos[0] - otherObject.pos[0],2);\n  let ySq = Math.pow(this.pos[1] - otherObject.pos[1],2);\n  let distance = Math.sqrt(xSq + ySq);\n  let radii_sum = this.radius + otherObject.radius;\n  if (distance < radii_sum) {\n    return true;\n  }\n  return false;\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  this.game.remove(otherObject);\n  this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nUtil.inherits(Ship, MovingObject);\n\nfunction Ship(pos) {\n  this.pos = pos;\n  this.radius = 10;\n  this.color = 'green';\n  this.vel = [0,0];\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits: function(childClass, parentClass) {\n    function Surrogate() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec: function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale: function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });