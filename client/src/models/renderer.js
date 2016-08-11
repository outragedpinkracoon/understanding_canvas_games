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
    displayTag = document.getElementById("score")
    displayTag.innerText = this.world.stats.total
  },
  drawImages: function(){
    this.ctx.drawImage(this.images.background, 0, 0)
    this.ctx.drawImage(this.images.farmer, this.world.farmers[0].x, this.world.farmers[0].y)
    for(animal of this.world.animals){
      if(!animal.isHidden){
        this.ctx.drawImage(this.images.animal, animal.x, animal.y)
      }
    } 
  },
  clearCanvas: function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

module.exports = Renderer