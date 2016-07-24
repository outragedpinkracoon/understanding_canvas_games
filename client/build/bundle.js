/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Hero = __webpack_require__(1)
	var Monster = __webpack_require__(2)
	var Images = __webpack_require__(3)
	var KeyboardEvents = __webpack_require__(4)
	var Display = __webpack_require__(5)
	var Renderer = __webpack_require__(6)
	var World = __webpack_require__(7)
	
	__webpack_require__(8)
	
	window.onload = function () {
	
	  var display = new Display()
	  var canvas = display.canvas
	  var ctx = display.ctx
	  var images = new Images();
	
	  var keyPressTracker = new KeyboardEvents().keyPressTracker
	
	  var worldDimensions = {
	    width: canvas.width,
	    height: canvas.height
	  }
	
	  var monster = new Monster(worldDimensions)
	  var hero = new Hero(worldDimensions)
	
	  var world = new World(hero, monster, keyPressTracker)
	
	  renderer = new Renderer(display, world, images)
	
	  renderer.draw()
	  
	}
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Hero = function(worldDimensions) {
	  this.speed = 4
	  this.worldDimensions = worldDimensions
	  this.setPosition()
	}
	
	Hero.prototype = {
	  moveUp: function(){
	      this.y -= this.speed
	  },
	  moveDown: function(){
	    this.y += this.speed
	  },
	  moveLeft: function(){
	    this.x -= this.speed
	  },
	  moveRight: function(){
	    this.x += this.speed
	  },
	  setPosition: function(){
	    this.x = this.worldDimensions.width / 2
	    this.y = this.worldDimensions.height / 2
	  }
	}
	
	module.exports = Hero

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Monster = function(worldDimensions) {
	  this.worldDimensions = worldDimensions
	  this.imageSize = 32
	  this.setPosition()
	 
	}
	
	Monster.prototype = {
	  randomPos: function(position) {
	    return this.imageSize + (Math.random() * (position - (this.imageSize * 2)))
	  },
	  setPosition: function(){
	    this.x = this.randomPos(this.worldDimensions.width)
	    this.y = this.randomPos(this.worldDimensions.height)
	  }
	
	}
	
	module.exports = Monster;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Images = function(){
	  this.background = this.addImage("images/background.png")
	  this.hero = this.addImage("images/hero.png")
	  this.monster = this.addImage("images/monster.png")
	
	}
	
	Images.prototype = {
	  addImage: function(path) {
	    var image = new Image()
	    image.src = path
	    return image
	  }
	}
	
	module.exports = Images


/***/ },
/* 4 */
/***/ function(module, exports) {

	var KeyboardEvents = function(){
	  this.keyPressTracker = {}
	
	  addEventListener("keydown", function (e) {
	    this.keyPressTracker[e.keyCode] = true
	  }.bind(this), false)
	
	  addEventListener("keyup", function (e) {
	    delete this.keyPressTracker[e.keyCode]
	  }.bind(this), false)
	}
	module.exports = KeyboardEvents

/***/ },
/* 5 */
/***/ function(module, exports) {

	var Display = function(){
	  this.canvas = document.createElement("canvas")
	  this.ctx = this.canvas.getContext("2d")
	  this.canvas.width = 512
	  this.canvas.height = 480
	  document.body.appendChild(this.canvas)
	}
	module.exports = Display


/***/ },
/* 6 */
/***/ function(module, exports) {

	var Renderer = function(display, world, images){
	  this.canvas = display.canvas
	  this.ctx = display.ctx
	  this.world = world
	  this.images = images
	  this.imageSize = 32
	
	  this.draw = function() {
	    this.clearCanvas()
	
	    this.world.update()
	    this.drawImages()
	
	    this.drawMonsterCaughtCount()
	
	    requestAnimationFrame(function(){
	      this.draw()
	    }.bind(this))
	  }
	
	  this.drawMonsterCaughtCount = function(){
	    this.ctx.fillStyle = "rgb(250, 250, 250)"
	    this.ctx.font = "24px Helvetica"
	    this.ctx.textAlign = "left"
	    this.ctx.textBaseline = "top"
	    this.ctx.fillText("Monsters caught: " + world.monstersCaught, this.imageSize, this.imageSize)
	  }
	
	  this.drawImages = function(){
	    this.ctx.drawImage(images.background, 0, 0)
	    this.ctx.drawImage(images.hero, this.world.hero.x, this.world.hero.y)
	    this.ctx.drawImage(images.monster, this.world.monster.x, this.world.monster.y)
	  }
	  this.clearCanvas = function(){
	    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	  }
	}
	module.exports = Renderer

/***/ },
/* 7 */
/***/ function(module, exports) {

	var World = function(hero, monster, keyPressTracker){
	  this.imageSize = 32
	  this.monstersCaught = 0
	  this.keyPressTracker = keyPressTracker
	
	  this.hero = hero
	  this.monster = monster
	
	  this.update = function() {
	
	    if (38 in this.keyPressTracker) { //up
	      this.hero.moveUp()
	    }
	    if (40 in this.keyPressTracker) { //down
	      this.hero.moveDown()
	    }
	    if (37 in this.keyPressTracker) { //left
	      this.hero.moveLeft()
	    }
	    if (39 in this.keyPressTracker) { //right
	      this.hero.moveRight()
	    }
	
	    var hasCollided = this.collisionTest(this.hero, this.monster)
	
	    if(hasCollided){
	      this.monstersCaught++
	      this.hero.setPosition()
	      this.monster.setPosition()
	    }
	
	  }
	
	  this.collisionTest = function(object1, object2) {
	    return object1.x <= (object2.x + this.imageSize)
	    && object2.x <= (object1.x + this.imageSize)
	    && object1.y <= (object2.y + this.imageSize)
	    && object2.y <= (object1.y + this.imageSize)
	  }
	}
	
	module.exports = World

/***/ },
/* 8 */
/***/ function(module, exports) {

	(function() {
	    var lastTime = 0;
	    var vendors = ['ms', 'moz', 'webkit', 'o'];
	    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
	    }
	 
	    if (!window.requestAnimationFrame)
	        window.requestAnimationFrame = function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	              timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };
	 
	    if (!window.cancelAnimationFrame)
	        window.cancelAnimationFrame = function(id) {
	            clearTimeout(id);
	        };
	}());

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map