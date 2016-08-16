var ObstacleKind = require('./obstacleKind')
var Obstacle = require('./obstacle')

var ObstacleFactory = function(){}

ObstacleFactory.prototype = {
  create: function(options){
    var obstacle

    switch(options.kind) {
      case ObstacleKind.POND:
        obstacle = this.makePond()
    }
    this.addCommonProperties(obstacle, options)
    return obstacle
  },
  addCommonProperties: function(obstacle, options){
    obstacle.x = options.coords.xPos
    obstacle.y = options.coords.yPos
    obstacle.dimensions = options.dimensions
    return obstacle
  },
  makePond: function (obstacle) {
    var pondOptions = {
      kind: ObstacleKind.POND,
      movementModifier: 2
    }

    var obstacle = new Obstacle(pondOptions)
    return obstacle
  }
}

module.exports = ObstacleFactory