var Animal = function(worldDimensions) {
  this.worldDimensions = worldDimensions
  this.imageSize = 32
  this.setPosition()
  this.isHidden = false
}

Animal.prototype = {
  //this doesn't belong in here
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
  //move me out
  randomIntFromInterval: function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }

}

module.exports = Animal;