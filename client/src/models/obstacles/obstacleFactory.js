var ObstacleKind = require('./obstacleKind')
var Obstacle = require('./obstacle')
var obstacleOptions = require('./obstacleOptions')

var ObstacleFactory = function(){}

ObstacleFactory.prototype = {
  create: function(options){

    var optionsType = {}    
    optionsType[ObstacleKind.ICE] = obstacleOptions.ice
    optionsType[ObstacleKind.GRASS] = obstacleOptions.grass
    optionsType[ObstacleKind.TREE] = obstacleOptions.tree
    
    var obstacle = new Obstacle(optionsType[options.kind]);

    this.addCommonProperties(obstacle, options)
    return obstacle
  },
  addCommonProperties: function(obstacle, options){
    obstacle.x = options.coords.x
    obstacle.y = options.coords.y
    obstacle.dimensions = options.dimensions
    return obstacle
  }
}

module.exports = ObstacleFactory