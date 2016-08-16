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
    collisionHandler: collisionHandler,
    controls: {
      up: 38,
      down: 40,
      left: 37,
      right: 39 //87 w 65 a 68 d S 83
    },
    x: worldDimensions.width / 2,
    y: worldDimensions.height / 2
  }

  var farmer = new Farmer(farmerOptions)
  farmerOptions.controls = {
      up: 87,
      down: 83,
      left: 65,
      right: 68 //87 w 65 a 68 d S 83
    }
  farmerOptions.x = (worldDimensions.width / 2) - sharedDimensions.width
  var farmer2 = new Farmer(farmerOptions)

  var farmers = [farmer,farmer2]
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


