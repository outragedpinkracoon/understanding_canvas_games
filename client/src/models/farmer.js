var Farmer = function(objectDimensions,worldDimensions) {
  this.speed = 4
  this.worldDimensions = worldDimensions
  this.setPosition()
  this.dimensions = objectDimensions
  this.originalSpeed = this.speed
}

Farmer.prototype = {
  moveUp: function(){
    this.y -= this.speed
  },
  moveDown: function(){
    this.y += this.speed
  },
  moveLeft: function(){
    this.x -= this.speed
  },
  moveRight: function(){
    this.x += this.speed
  },
  setPosition: function(){
    this.x = this.worldDimensions.width / 2
    this.y = this.worldDimensions.height / 2
  }
}

module.exports = Farmer