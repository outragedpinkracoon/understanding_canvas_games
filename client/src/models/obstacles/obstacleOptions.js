var ObstacleKind = require('./obstacleKind')

var obstacleOptions = {
  grass: {
    kind: ObstacleKind.GRASS,
    movementModifier: 2
  },
  pond: {
    kind: ObstacleKind.POND,
    movementModifier: 10
  }
}

module.exports = obstacleOptions