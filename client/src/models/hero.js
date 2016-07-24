var Hero = function(worldDimensions) {
  this.speed = 4

  this.setPosition = function(newX, newY){
    this.x = worldDimensions.width / 2
    this.y = worldDimensions.height / 2
  }
  
  this.setPosition()

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