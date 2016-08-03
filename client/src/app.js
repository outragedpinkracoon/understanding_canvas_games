var Farmer = require('./models/farmer')
var Animal = require('./models/animal')
var Images = require('./models/images')
var Pond = require('./models/obstacles/pond')
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

  var worldDimensions = new Dimensions(canvas.width,canvas.height)
  var sharedDimensions = new Dimensions(32,32);

  var animal = new Animal(sharedDimensions, worldDimensions)
  var farmer = new Farmer(sharedDimensions, worldDimensions)

  var obstacles = generateObstacles();

  var worldOptions = {
    farmer: farmer,
    animals: [animal],
    keyPressTracker: new KeyboardEvents().keyPressTracker,
    dimensions: worldDimensions,
    collisionHandler: new CollisionHandler(),
    worldStats: new WorldStats(),
    obstacles: obstacles
  }

  var world = new World(worldOptions)
  renderer = new Renderer(display, world, images)

  renderer.draw()
  
}

function generateObstacles(){
  return [new Pond(328, 60, new Dimensions(125,90))]
}


