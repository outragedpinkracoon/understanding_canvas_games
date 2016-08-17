var Obstacle = function(options){
  this.coords = options.coords
  this.movementModifier = options.movementModifier
  this.kind = options.kind
  this.dimensions = options.dimensions
  this.killsPlayer = options.killsPlayer
}

module.exports = Obstacle