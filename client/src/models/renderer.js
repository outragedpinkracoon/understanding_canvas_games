var Renderer = function(display, world, images){
  this.canvas = display.canvas
  this.ctx = display.ctx
  this.world = world
  this.images = images
  this.imageSize = 32

  this.draw = function() {
    this.clearCanvas()

    this.world.update()
    this.drawImages()

    this.drawMonsterCaughtCount()

    requestAnimationFrame(function(){
      this.draw()
    }.bind(this))
  }

  this.drawMonsterCaughtCount = function(){
    this.ctx.fillStyle = "rgb(250, 250, 250)"
    this.ctx.font = "24px Helvetica"
    this.ctx.textAlign = "left"
    this.ctx.textBaseline = "top"
    this.ctx.fillText("Monsters caught: " + world.monstersCaught, this.imageSize, this.imageSize)
  }

  this.drawImages = function(){
    this.ctx.drawImage(images.background, 0, 0)
    this.ctx.drawImage(images.hero, this.world.hero.x, this.world.hero.y)
    this.ctx.drawImage(images.monster, this.world.monster.x, this.world.monster.y)
  }
  this.clearCanvas = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
module.exports = Renderer