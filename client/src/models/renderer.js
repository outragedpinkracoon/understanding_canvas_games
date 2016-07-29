var Renderer = function(display, world, images){
  this.canvas = display.canvas
  this.ctx = display.ctx
  this.world = world
  this.images = images
  this.imageSize = 32
}

Renderer.prototype = {
  draw: function() {
    this.clearCanvas()

    this.world.update()
    this.drawImages()

    this.drawMonsterCaughtCount()

    requestAnimationFrame(function(){
      this.draw()
    }.bind(this))
  },
  drawMonsterCaughtCount: function(){
    this.ctx.fillStyle = "rgb(255, 204, 0)"
    this.ctx.font = "24px Helvetica"
    this.ctx.textAlign = "left"
    this.ctx.textBaseline = "top"
    this.ctx.fillText("Chickens caught: " + this.world.monstersCaught, this.imageSize, this.imageSize)
  },
  drawImages: function(){
    this.ctx.drawImage(this.images.background, 0, 0)
    this.ctx.drawImage(this.images.hero, this.world.hero.x, this.world.hero.y)
    this.ctx.drawImage(this.images.monster, this.world.monster.x, this.world.monster.y)
  },
  clearCanvas: function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

module.exports = Renderer