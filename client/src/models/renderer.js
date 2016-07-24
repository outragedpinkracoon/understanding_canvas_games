var Renderer = function(display, world, images, keysDown){
  this.canvas = display.canvas
  this.ctx = display.ctx
  this.world = world
  this.images = images
  this.keysDown = keysDown

  this.draw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.world.update(this.keysDown)

    this.ctx.drawImage(images.background, 0, 0)
    this.ctx.drawImage(images.hero, world.hero.x, world.hero.y)
    requestAnimationFrame(function(){
      this.draw()
    }.bind(this));
  }
}
module.exports = Renderer