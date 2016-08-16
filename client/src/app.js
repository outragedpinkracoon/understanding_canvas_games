var Farmer = require('./models/farmer')
var Animal = require('./models/animal')
var Images = require('./models/images')
var ObstacleGenerator = require('./models/obstacles/obstacleGenerator')
var KeyboardEvents = require('./models/keyboardEvents')
var Display = require('./models/display')
var Dimensions = require('./models/spacial/dimensions')
var WorldStats = require('./models/worldStats')
var Renderer = require('./models/renderer')
var World = require('./models/world')
var CollisionHandler = require('./models/collisionHandler')

require('./requestAnimationShim')

window.onload = function () {

  var display = new Display()
  var canvas = display.canvas
  var ctx = display.ctx
  var images = new Images()

  var worldDimensionsOptions = {
    width: (function(){
      return canvas.width
    })(),
    height: (function(){
      return canvas.height
    })()
  }

  var worldDimensions = new Dimensions(worldDimensionsOptions)
  var sharedDimensions = new Dimensions({width: 32,height:32})

  var collisionHandler = new CollisionHandler()

  var animal = new Animal(sharedDimensions, worldDimensions)
  var farmerOptions = {
    objectDimensions: sharedDimensions, 
    worldDimensions: worldDimensions, 
    collisionHandler: collisionHandler
  }
  var farmer = new Farmer(farmerOptions)

  var farmers = [farmer]
  var obstacleGenerator = new ObstacleGenerator()
  var obstacles = obstacleGenerator.generate()

  var worldOptions = {
    farmers: farmers,
    animals: [animal],
    keyPressTracker: new KeyboardEvents().keyPressTracker,
    dimensions: worldDimensions,
    collisionHandler: collisionHandler,
    worldStats: new WorldStats(),
    obstacles: obstacles
  }

  var world = new World(worldOptions)
  renderer = new Renderer(display, world, images)

  renderer.draw()
  
}


