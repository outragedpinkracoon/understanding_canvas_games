var Farmer = require('./models/farmer')
var Animal = require('./models/animal')
var Images = require('./models/images')
var KeyboardEvents = require('./models/keyboardEvents')
var Display = require('./models/display')
var Dimensions = require('./models/dimensions')
var WorldStats = require('./models/worldStats')
var Renderer = require('./models/renderer')
var World = require('./models/world')
var CollisionHandler = require('./models/collisionHandler')

require('./requestAnimationShim')

window.onload = function () {

  var display = new Display()
  var canvas = display.canvas
  var ctx = display.ctx
  var images = new Images();

  var keyPressTracker = new KeyboardEvents().keyPressTracker

  var worldDimensions = new Dimensions(canvas.width,canvas.height)
  var sharedDimensions = new Dimensions(32,32);

  var animal = new Animal(sharedDimensions, worldDimensions)
  var hero = new Farmer(sharedDimensions, worldDimensions)

  var world = new World(hero, [animal], keyPressTracker, worldDimensions, new CollisionHandler(), new WorldStats())
  renderer = new Renderer(display, world, images)

  renderer.draw()
  
}



