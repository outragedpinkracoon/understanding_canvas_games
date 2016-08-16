var ObstacleKind = require('./obstacleKind')

var obstacleOptions = {
  grass: {
    kind: ObstacleKind.GRASS,
    movementModifier: 0
  },
  pond: {
    kind: ObstacleKind.POND,
    movementModifier: 2
  }
}

module.exports = obstacleOptions