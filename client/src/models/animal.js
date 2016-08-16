//TODO add fox
var Animal = function(objectDimensions, worldDimensions) {
  this.worldDimensions = worldDimensions
  this.imageSize = 32
  this.setPosition()
  this.isHidden = false
  this.dimensions = objectDimensions
  this.captureValue = 1;
}

Animal.prototype = {
  randomPos: function(dimension) {
    var limit = this.imageSize * 2
    var smallest = limit
    var largest = dimension - limit
    return this.randomIntFromInterval(smallest, largest)
  },
  setPosition: function(){
    this.x = this.randomPos(this.worldDimensions.width)
    this.y = this.randomPos(this.worldDimensions.height)
  },
  randomIntFromInterval: function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }
}

module.exports = Animal;