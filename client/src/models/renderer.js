var Renderer = function(display, hero, images, keysDown){
  this.canvas = display.canvas
  this.ctx = display.ctx
  this.hero = hero
  this.images = images
  this.keysDown = keysDown

  this.draw = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updateHero(this.hero,this.keysDown)

    this.ctx.drawImage(images.background, 0, 0)
    this.ctx.drawImage(images.hero, hero.x, hero.y)
    requestAnimationFrame(function(){
      this.draw()
    }.bind(this));
  }

  this.updateHero = function() {
    
    if (38 in this.keysDown) { //up
      this.hero.moveUp()
    }
    if (40 in keysDown) { //down
      this.hero.moveDown()
    }
    if (37 in keysDown) { //left
      this.hero.moveLeft()
    }
    if (39 in keysDown) { //right
      this.hero.moveRight()
    }
  }
}
module.exports = Renderer