var Renderer = function(display, world, images, keysDown){
  this.canvas = display.canvas
  this.ctx = display.ctx
  this.world = world
  this.images = images
  this.keysDown = keysDown

  this.draw = function() {
    this.clearCanvas()

    this.world.update(this.keysDown)
    this.drawImages()

    requestAnimationFrame(function(){
      this.draw()
    }.bind(this))
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