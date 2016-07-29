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
    displayTag.innerText = this.world.monstersCaught;
  },
  drawImages: function(){
    this.ctx.drawImage(this.images.background, 0, 0)
    this.ctx.drawImage(this.images.hero, this.world.hero.x, this.world.hero.y)
    this.ctx.drawImage(this.images.monster, this.world.monsters[0].x, this.world.monsters[0].y)
  },
  clearCanvas: function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

module.exports = Renderer