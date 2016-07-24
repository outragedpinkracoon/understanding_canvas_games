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
	var Images = __webpack_require__(3)
	var KeyboardEvents = __webpack_require__(4)
	var Display = __webpack_require__(5)
	var Renderer = __webpack_require__(6)
	
	__webpack_require__(2)
	
	window.onload = function () {
	
	  var display = new Display()
	  var canvas = display.canvas
	  var ctx = display.ctx
	
	  var hero = new Hero(canvas.width / 2, canvas.height / 2)
	
	  images = new Images();
	
	  keysDown = new KeyboardEvents().keysDown
	
	  renderer = new Renderer(display, hero, images, keysDown)
	
	  renderer.draw()
	  
	}
	
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Hero = function(startX, startY) {
	  this.speed = 4 //pixels per second
	  this.x = startX
	  this.y = startY
	
	  this.moveUp = function(){
	    this.y -= this.speed
	  }
	  this.moveDown = function(){
	    this.y += this.speed
	  }
	  this.moveLeft = function(){
	    this.x -= this.speed
	  }
	  this.moveRight = function(){
	    this.x += this.speed
	  }
	}
	
	module.exports = Hero

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports) {

	var Images = function(){
	
	  function addImage (path) {
	    var image = new Image()
	    image.src = path
	    return image
	  }
	
	  this.background = addImage("images/background.png")
	  this.hero = addImage("images/hero.png")
	  this.monster = addImage("images/monster.png")
	
	}
	module.exports = Images


/***/ },
/* 4 */
/***/ function(module, exports) {

	var KeyboardEvents = function(){
	  this.keysDown = {}
	
	  addEventListener("keydown", function (e) {
	    this.keysDown[e.keyCode] = true
	  }.bind(this), false)
	
	  addEventListener("keyup", function (e) {
	    delete this.keysDown[e.keyCode]
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

	var Renderer = function(display, hero, images, keysDown){
	  this.canvas = display.canvas
	  this.ctx = display.ctx
	  this.hero = hero
	  this.images = images
	  this.keysDown = keysDown
	
	  this.draw = function() {
	    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	    this.updateHero(this.hero,this.keysDown)
	
	    this.ctx.drawImage(images.background, 0, 0)
	    this.ctx.drawImage(images.hero, hero.x, hero.y)
	    requestAnimationFrame(function(){
	      this.draw()
	    }.bind(this));
	  }
	
	  this.updateHero = function() {
	    
	    if (38 in this.keysDown) { //up
	      this.hero.moveUp()
	    }
	    if (40 in keysDown) { //down
	      this.hero.moveDown()
	    }
	    if (37 in keysDown) { //left
	      this.hero.moveLeft()
	    }
	    if (39 in keysDown) { //right
	      this.hero.moveRight()
	    }
	  }
	}
	module.exports = Renderer

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map