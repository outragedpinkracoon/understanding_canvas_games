var Farmer = require('./models/farmer')
var Animal = require('./models/animal')
var Images = require('./models/images')
var Obstacle = require('./models/obstacles/obstacle')
var ObstacleKind = require('./models/obstacles/obstacleKind')
var ObstacleFactory = require('./models/obstacles/obstacleFactory')
var KeyboardEvents = require('./models/keyboardEvents')
var Display = require('./models/display')
var Dimensions = require('./models/spacial/dimensions')
var Coords = require('./models/spacial/coords')
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
    coords: new Coords({x: 328, y:60}),
    dimensions: new Dimensions({width:125,height:90}),
    kind: ObstacleKind.POND,
  }

  var grassTopLeftOptions = {
    coords: new Coords({x: 118, y:65}),
    dimensions: new Dimensions({width:48,height:48}),
    kind: ObstacleKind.GRASS,
  }

  var grassBottomRightOptions = {
    coords: new Coords({ x: 404, y: 351 }),
    dimensions: new Dimensions({ width: 48, height: 48 }),
    kind: ObstacleKind.GRASS,
  }

  var grassLeftBorderOptions = {
    coords: new Coords({ x: 2, y: 43 }),
    dimensions: new Dimensions({ width: 26, height: 399 }),
    kind: ObstacleKind.GRASS,
  }


  var grassRightBorderOptions = {
    coords: new Coords({ x: 490, y: 42 }),
    dimensions: new Dimensions({ width: 26, height: 399 }),
    kind: ObstacleKind.GRASS,
  }

  var pond = factory.create(pondOptions)
  var grassTopLeft = factory.create(grassTopLeftOptions)
  var grassLowerRight = factory.create(grassBottomRightOptions)
  var grassLeftBorder = factory.create(grassLeftBorderOptions)
  var grassRightBorder = factory.create(grassRightBorderOptions)
  return [pond, grassTopLeft, grassLowerRight, grassLeftBorder, grassRightBorder]
}


