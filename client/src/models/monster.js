var Monster = function(worldDimensions) {
  this.worldDimensions = worldDimensions
  this.imageSize = 3

  this.randomPos = function(position) {
    return this.imageSize + (Math.random() * (position - (this.imageSize * 2)))
  }

  this.setPosition = function(){
    this.x = this.randomPos(worldDimensions.width)
    this.y = this.randomPos(worldDimensions.height)
  }

  this.setPosition()
 
}
module.exports = Monster;