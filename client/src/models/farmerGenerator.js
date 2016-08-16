var Farmer = require('./farmer')
var FarmerGenerator = function () { }

FarmerGenerator.prototype = {
  generate: function (options) {
    var farmerOptions = {
      objectDimensions: options.objectDimensions,
      worldDimensions: options.worldDimensions,
      collisionHandler: options.collisionHandler,
      controls: {
        up: 38,
        down: 40,
        left: 37,
        right: 39 //87 w 65 a 68 d S 83
      },
      x: options.worldDimensions.width / 2,
      y: options.worldDimensions.height / 2
    }

    var farmer = new Farmer(farmerOptions)
    farmerOptions.controls = {
      up: 87,
      down: 83,
      left: 65,
      right: 68 //87 w 65 a 68 d S 83
    }
    farmerOptions.x = (options.worldDimensions.width / 2) - options.objectDimensions.width
    var farmer2 = new Farmer(farmerOptions)
    return [farmer, farmer2]
  }
}
module.exports = FarmerGenerator