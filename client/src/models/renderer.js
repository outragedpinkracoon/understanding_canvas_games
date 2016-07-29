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
    displayTag = document.getElementById("score");
    displayTag.innerText = this.world.animalsCaught;
  },
  drawImages: function(){
    this.ctx.drawImage(this.images.background, 0, 0)
    this.ctx.drawImage(this.images.farmer, this.world.farmer.x, this.world.farmer.y)
    this.ctx.drawImage(this.images.animal, this.world.animals[0].x, this.world.animals[0].y)
  },
  clearCanvas: function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

module.exports = Renderer