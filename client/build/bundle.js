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

	var Farmer = __webpack_require__(10)
	var Animal = __webpack_require__(9)
	var Images = __webpack_require__(3)
	var KeyboardEvents = __webpack_require__(4)
	var Display = __webpack_require__(5)
	var Renderer = __webpack_require__(6)
	var World = __webpack_require__(7)
	var CollisionHandler = __webpack_require__(14)
	
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
	
	  var animal = new Animal(worldDimensions)
	  var hero = new Farmer(worldDimensions)
	
	  var world = new World(hero, [animal], keyPressTracker, worldDimensions, new CollisionHandler())
	  renderer = new Renderer(display, world, images)
	
	  renderer.draw()
	  
	}
	
	
	


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	var Images = function(){
	  this.background = this.addImage("images/background.png")
	  this.farmer = this.addImage("images/farmer.png")
	  this.animal = this.addImage("images/chicken_left.png")
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
	  this.canvas = document.getElementsByTagName("canvas")[0]
	  this.ctx = this.canvas.getContext("2d")
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
	}
	
	Renderer.prototype = {
	  draw: function() {
	    this.clearCanvas()
	
	    this.world.update()
	    this.drawImages()
	
	    this.drawMonsterCaughtCount()
	
	    requestAnimationFrame(function(){
	      this.draw()
	    }.bind(this))
	  },
	  drawMonsterCaughtCount: function(){
	    displayTag = document.getElementById("score");
	    displayTag.innerText = this.world.total;
	  },
	  drawImages: function(){
	    this.ctx.drawImage(this.images.background, 0, 0)
	    this.ctx.drawImage(this.images.farmer, this.world.farmer.x, this.world.farmer.y)
	    for(animal of this.world.animals){
	      if(!animal.isHidden){
	        this.ctx.drawImage(this.images.animal, animal.x, animal.y)
	      }
	    } 
	  },
	  clearCanvas: function(){
	    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
	  }
	}
	
	module.exports = Renderer

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Animal = __webpack_require__(9)
	var World = function(farmer, animals, keyPressTracker, dimensions, collisionHandler){
	  this.animalsCaught = 0
	  this.keyPressTracker = keyPressTracker
	  this.farmer = farmer
	  this.animals = animals
	  this.dimensions = dimensions
	  this.animalsNeeded = 1;
	  this.total = 0;
	  this.collisionHandler = collisionHandler
	}
	
	World.prototype = {
	  update: function() {
	    if (38 in this.keyPressTracker) { //up
	      this.farmer.moveUp()
	    }
	    if (40 in this.keyPressTracker) { //down
	      this.farmer.moveDown()
	    }
	    if (37 in this.keyPressTracker) { //left
	      this.farmer.moveLeft()
	    }
	    if (39 in this.keyPressTracker) { //right
	      this.farmer.moveRight()
	    }
	
	    this.checkCollisons()
	    this.checkForReset()
	
	  },
	  checkForReset:function(){
	    if(this.animalsCaught !== this.animalsNeeded) return
	      this.animalsCaught = 0
	    this.animalsNeeded++
	    this.animals = []
	    this.repopulateAnimals()
	  },
	  repopulateAnimals: function(){
	    for(var i = 0; i < this.animalsNeeded; i++ ){
	      var newAnimal = new Animal(this.dimensions)
	      this.animals.push(newAnimal)
	    }
	  },
	  //pull out collision checker
	  checkCollisons: function(){
	    for(animal of this.animals) {
	      if(animal.isHidden){
	        continue;
	      }
	      var hasCollided = this.collisionHandler.check(this.farmer, animal)
	      if(hasCollided){
	        this.animalsCaught++
	        this.total++
	        animal.isHidden = true
	      }
	    }
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

/***/ },
/* 9 */
/***/ function(module, exports) {

	var Animal = function(worldDimensions) {
	  this.worldDimensions = worldDimensions
	  this.imageSize = 32
	  this.setPosition()
	  this.isHidden = false
	}
	
	Animal.prototype = {
	  //this doesn't belong in here
	  randomPos: function(dimension) {
	    var limit = this.imageSize * 2
	    var smallest = limit
	    var largest = dimension - limit
	    return this.randomIntFromInterval(smallest, largest)
	  },
	  setPosition: function(){
	    this.x = this.randomPos(this.worldDimensions.width)
	    this.y = this.randomPos(this.worldDimensions.height)
	  },
	  //move me out
	  randomIntFromInterval: function(min,max){
	    return Math.floor(Math.random()*(max-min+1)+min)
	  }
	
	}
	
	module.exports = Animal;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var Farmer = function(worldDimensions) {
	  this.speed = 4
	  this.worldDimensions = worldDimensions
	  this.setPosition()
	}
	
	Farmer.prototype = {
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
	
	module.exports = Farmer

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	var CollisionHandler = function(){
	
	}
	
	CollisionHandler.prototype = {
	  check: function(object1, object2) {
	    var collisionTolerance = 20
	    return object1.x <= (object2.x + collisionTolerance)
	    && object2.x <= (object1.x + collisionTolerance)
	    && object1.y <= (object2.y + collisionTolerance)
	    && object2.y <= (object1.y + collisionTolerance)
	  }
	}
	
	module.exports = CollisionHandler

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map