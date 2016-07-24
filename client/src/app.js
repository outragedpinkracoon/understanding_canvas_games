var Hero = require('./models/hero')
var Monster = require('./models/monster')
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

  var monster = new Monster(worldDimensions)
  var hero = new Hero(worldDimensions)

  var world = new World(hero, monster, keyPressTracker)

  renderer = new Renderer(display, world, images)

  renderer.draw()
  
}



