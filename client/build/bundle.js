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
	__webpack_require__(2)
	
	window.onload = function () {
	
	  var display = createCanvas()
	
	  var canvas = display.canvas
	  var ctx = display.ctx
	
	  var hero = new Hero(canvas.width / 2, canvas.height / 2)
	
	  var bgImage = makeImage("images/background.png")
	  var heroImage = makeImage("images/hero.png")
	
	  keysDown = keyboardEvents(hero)
	
	  var draw = function() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	    updateHero(hero,keysDown, 0.02)
	    ctx.drawImage(bgImage, 0, 0)
	    ctx.drawImage(heroImage, hero.x, hero.y)
	    requestAnimationFrame(draw);
	  }
	
	  draw()
	  
	}
	
	function updateHero(hero, keysDown, modifier) {
	  
	  if (38 in keysDown) { //up
	    hero.moveUp(modifier)
	  }
	  if (40 in keysDown) { //down
	    hero.moveDown(modifier)
	  }
	  if (37 in keysDown) { //left
	    hero.moveLeft(modifier)
	  }
	  if (39 in keysDown) { //right
	    hero.moveRight(modifier)
	  }
	}
	
	function createCanvas(){
	  var canvas = document.createElement("canvas")
	  var ctx = canvas.getContext("2d")
	  canvas.width = 512
	  canvas.height = 480
	  document.body.appendChild(canvas)
	  return {
	    ctx: ctx,
	    canvas: canvas
	  }
	}
	
	function makeImage (path, callback) {
	  var image = new Image()
	  image.src = path
	  image.onload = callback
	  return image
	}
	
	function keyboardEvents(hero){
	  keysDown ={}
	
	  addEventListener("keydown", function (e) {
	    keysDown[e.keyCode] = true
	  }, false)
	
	   addEventListener("keyup", function (e) {
	    delete this.keysDown[e.keyCode]
	  }, false)
	
	  return keysDown
	}
	
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Hero = function(startX, startY) {
	  this.speed = 256 //pixels per second
	  this.x = startX
	  this.y = startY
	
	  this.moveUp = function(modifier){
	    this.y -= this.speed * modifier
	  }
	  this.moveDown = function(modifier){
	    this.y += this.speed * modifier
	  }
	  this.moveLeft = function(modifier){
	    this.x -= this.speed * modifier
	  }
	  this.moveRight = function(modifier){
	    this.x += this.speed * modifier
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map