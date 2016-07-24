var Hero = require('./models/hero')
var Images = require('./models/images')
var KeyboardEvents = require('./models/keyboardEvents')
var Display = require('./models/display')
var Renderer = require('./models/renderer')

require('./requestAnimationShim')

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


