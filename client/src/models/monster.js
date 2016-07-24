var Monster = function(startX, startY) {
  this.x = startX
  this.y = startY
  
  this.reset = function(newX, newY){
    this.x = newX
    this.y = newY
  }
}
module.exports = Monster;