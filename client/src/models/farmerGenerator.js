var Farmer = require('./farmer')
var Coords = require('./spacial/coords')
var FarmerGenerator = function () { }

FarmerGenerator.prototype = {
  //todo this is grubby, make more dynamic
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
      coords: new Coords({
        x: options.worldDimensions.width / 2,
        y: options.worldDimensions.height / 2,
      }),
      name: "1"
    }

    var farmer = new Farmer(farmerOptions)

    var farmer2Options = {
      objectDimensions: options.objectDimensions,
      worldDimensions: options.worldDimensions,
      collisionHandler: options.collisionHandler,
      controls: {
        up: 87,
        down: 83,
        left: 65,
        right: 68 //87 w 65 a 68 d S 83
      },
      coords: new Coords({
        x: (options.worldDimensions.width / 2) -  options.objectDimensions.width,
        y: options.worldDimensions.height / 2,
      }),
      name: "2"
    }

    var farmer2 = new Farmer(farmer2Options)
    return [farmer, farmer2]
  }
}
module.exports = FarmerGenerator