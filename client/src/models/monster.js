var Monster = function(worldDimensions) {
  this.worldDimensions = worldDimensions
  this.imageSize = 32
  this.setPosition()
 
}

Monster.prototype = {
  //this doesn't belong in here
  randomPos: function(dimension) {
    var smallest = this.imageSize * 2;
    var largest = dimension - this.imageSize;
    return this.randomIntFromInterval(smallest, largest);
    
  },
  setPosition: function(){
    this.x = this.randomPos(this.worldDimensions.width)
    this.y = this.randomPos(this.worldDimensions.height)
    console.log("x: ",this.x)
    console.log("y: ",this.y)
  },
  randomIntFromInterval: function(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}

module.exports = Monster;