var Hero = require('./models/hero')
var Images = require('./models/images')
var KeyboardEvents = require('./models/keyboardEvents')
var Display = require('./models/display')
var Renderer = require('./models/renderer')
var World = require('./models/world')

require('./requestAnimationShim')

window.onload = function () {

  var display = new Display()
  var canvas = display.canvas
  var ctx = display.ctx

  var hero = new Hero(canvas.width / 2, canvas.height / 2)

  var images = new Images();

  var keysDown = new KeyboardEvents().keysDown

  var world = new World(hero)

  renderer = new Renderer(display, world, images, keysDown)

  renderer.draw()
  
}



