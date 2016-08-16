var ObstacleKind = require('./obstacleKind')

var obstacleOptions = {
  grass: {
    kind: ObstacleKind.GRASS,
    movementModifier: 3
  },
  ice: {
    kind: ObstacleKind.ICE,
    movementModifier: 9
  },
  tree: {
    kind: ObstacleKind.TREE,
    movementModifier: 1
  }
}

module.exports = obstacleOptions