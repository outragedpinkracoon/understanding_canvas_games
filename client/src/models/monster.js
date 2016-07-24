var Monster = function(worldDimensions) {
  this.worldDimensions = worldDimensions
  this.imageSize = 32
  this.setPosition()
 
}

Monster.prototype = {
  randomPos: function(position) {
    return this.imageSize + (Math.random() * (position - (this.imageSize * 2)))
  },
  setPosition: function(){
    this.x = this.randomPos(this.worldDimensions.width)
    this.y = this.randomPos(this.worldDimensions.height)
  }

}

module.exports = Monster;