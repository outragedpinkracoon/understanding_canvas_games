var Hero = function(startX, startY) {
  this.speed = 4 //pixels per second
  this.x = startX
  this.y = startY

  this.moveUp = function(){
    this.y -= this.speed
  }
  this.moveDown = function(){
    this.y += this.speed
  }
  this.moveLeft = function(){
    this.x -= this.speed
  }
  this.moveRight = function(){
    this.x += this.speed
  }
}

module.exports = Hero