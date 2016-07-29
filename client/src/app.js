var Farmer = require('./models/farmer')
var Animal = require('./models/animal')
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
  var images = new Images();

  var keyPressTracker = new KeyboardEvents().keyPressTracker

  var worldDimensions = {
    width: canvas.width,
    height: canvas.height
  }

  var animal = new Animal(worldDimensions)
  var hero = new Farmer(worldDimensions)

  var world = new World(hero, [animal], keyPressTracker)
  renderer = new Renderer(display, world, images)

  renderer.draw()
  
}



