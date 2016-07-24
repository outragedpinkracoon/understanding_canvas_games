var Hero = require('./models/hero')
require('./requestAnimationShim')

window.onload = function () {

  var display = createCanvas()

  var canvas = display.canvas
  var ctx = display.ctx

  var hero = new Hero(canvas.width / 2, canvas.height / 2)

  var bgImage = makeImage("images/background.png")
  var heroImage = makeImage("images/hero.png")

  keysDown = keyboardEvents(hero)

  var draw = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateHero(hero,keysDown, 0.02)
    ctx.drawImage(bgImage, 0, 0)
    ctx.drawImage(heroImage, hero.x, hero.y)
    requestAnimationFrame(draw);
  }

  draw()
  
}

function updateHero(hero, keysDown, modifier) {
  
  if (38 in keysDown) { //up
    hero.moveUp(modifier)
  }
  if (40 in keysDown) { //down
    hero.moveDown(modifier)
  }
  if (37 in keysDown) { //left
    hero.moveLeft(modifier)
  }
  if (39 in keysDown) { //right
    hero.moveRight(modifier)
  }
}

function createCanvas(){
  var canvas = document.createElement("canvas")
  var ctx = canvas.getContext("2d")
  canvas.width = 512
  canvas.height = 480
  document.body.appendChild(canvas)
  return {
    ctx: ctx,
    canvas: canvas
  }
}

function makeImage (path, callback) {
  var image = new Image()
  image.src = path
  image.onload = callback
  return image
}

function keyboardEvents(hero){
  keysDown ={}

  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true
  }, false)

   addEventListener("keyup", function (e) {
    delete this.keysDown[e.keyCode]
  }, false)

  return keysDown
}


