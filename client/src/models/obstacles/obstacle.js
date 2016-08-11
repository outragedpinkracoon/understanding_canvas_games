var OBSTACLEKIND = require('./obstacleKind')
var Obstacle = function(options){
  this.x = options.xPos
  this.y = options.yPos
  this.movementModifier = options.movementModifier
  this.kind = options.kind
  this.dimensions = options.dimensions
}

module.exports = Obstacle