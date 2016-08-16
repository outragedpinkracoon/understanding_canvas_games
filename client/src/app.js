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
    kind: ObstacleKind.ICE,
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

  var treeRightBunchUpperOptions = {
    coords: new Coords({ x: 305, y: 204 }),
    dimensions: new Dimensions({ width: 99, height: 42 }),
    kind: ObstacleKind.TREE,
  }

  var treeRightBunchLowerOptions = {
    coords: new Coords({ x: 323, y: 245 }),
    dimensions: new Dimensions({ width: 62, height: 27 }),
    kind: ObstacleKind.TREE,
  }

  var treeLeftBunchUpperOptions = {
    coords: new Coords({ x: 101, y: 341 }),
    dimensions: new Dimensions({ width: 64, height: 44 }),
    kind: ObstacleKind.TREE,
  }

  var treeLeftBunchLowerOptions = {
    coords: new Coords({ x: 115, y: 383 }),
    dimensions: new Dimensions({ width: 33, height: 27 }),
    kind: ObstacleKind.TREE,
  }

  var options = [pondOptions, grassTopLeftOptions, grassBottomRightOptions, grassLeftBorderOptions,
  grassRightBorderOptions, treeRightBunchUpperOptions, treeRightBunchLowerOptions, treeLeftBunchUpperOptions,
  treeLeftBunchLowerOptions]

  var obstacles = []
  for(var option of options){
    obstacles.push(factory.create(option))
  }

  return obstacles;
}


