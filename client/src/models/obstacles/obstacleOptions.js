var ObstacleKind = require('./obstacleKind')

var obstacleOptions = {
  grass: {
    kind: ObstacleKind.GRASS,
    movementModifier: 2
  },
  ice: {
    kind: ObstacleKind.ICE,
    movementModifier: 9
  },
  tree: {
    kind: ObstacleKind.TREE,
    movementModifier: 1
  },
  lava: {
    kind: ObstacleKind.LAVA,
    movementModifier: -1,
    killsPlayer: true
  }
}

module.exports = obstacleOptions