//TODO add fox
var Coords = require('./spacial/coords')
var Animal = function(options) {
  this.worldDimensions = options.worldDimensions
  this.imageSize = 32
  this.isHidden = false
  this.dimensions = options.objectDimensions
  this.captureValue = 1;
  this.coords = new Coords(0,0)
  this.setPosition()
}

Animal.prototype = {
  randomPos: function(dimension) {
    var limit = this.imageSize * 2
    var smallest = limit
    var largest = dimension - limit
    return this.randomIntFromInterval(smallest, largest)
  },
  setPosition: function(){
    this.coords.x = this.randomPos(this.worldDimensions.width)
    this.coords.y = this.randomPos(this.worldDimensions.height)
  },
  randomIntFromInterval: function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }
}

module.exports = Animal;