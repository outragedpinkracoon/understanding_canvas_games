var Obstacle = function(options){
  this.x = options.x
  this.y = options.y
  this.movementModifier = options.movementModifier
  this.kind = options.kind
  this.dimensions = options.dimensions
}

module.exports = Obstacle