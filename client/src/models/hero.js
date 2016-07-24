var Hero = function(startX, startY) {
  this.speed = 256 //pixels per second
  this.x = startX
  this.y = startY

  this.moveUp = function(modifier){
    this.y -= this.speed * modifier
  }
  this.moveDown = function(modifier){
    this.y += this.speed * modifier
  }
  this.moveLeft = function(modifier){
    this.x -= this.speed * modifier
  }
  this.moveRight = function(modifier){
    this.x += this.speed * modifier
  }
}

module.exports = Hero