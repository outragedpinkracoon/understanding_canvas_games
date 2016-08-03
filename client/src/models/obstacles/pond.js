var OBSTACLEKIND = require('./obstacleKind')
var Pond = function(xPos, yPos, dimensions){
  this.x = xPos
  this.y = yPos
  this.movementModifier = 2
  this.kind = OBSTACLEKIND.POND
  this.dimensions = dimensions
}

module.exports = Pond