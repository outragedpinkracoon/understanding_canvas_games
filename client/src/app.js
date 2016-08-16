var Farmer = require('./models/farmer')
var Animal = require('./models/animal')
var Images = require('./models/images')
var Obstacle = require('./models/obstacles/obstacle')
var ObstacleKind = require('./models/obstacles/obstacleKind')
var ObstacleFactory = require('./models/obstacles/obstacleFactory')
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

  var worldDimensions = new Dimensions(canvas.width,canvas.height)
  var sharedDimensions = new Dimensions(32,32);

  var animal = new Animal(sharedDimensions, worldDimensions)
  var farmer = new Farmer(sharedDimensions, worldDimensions)

  var farmers = [farmer]
  var obstacles = generateObstacles()

  var worldOptions = {
    farmers: farmers,
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
  var factory = new ObstacleFactory()

  var pondOptions = {
    coords: {
      xPos: 328,
      yPos: 60
    },
    dimensions: new Dimensions(125,90),
    kind: ObstacleKind.POND,
  }

  var pond = factory.create(pondOptions)
  return [pond]
}


