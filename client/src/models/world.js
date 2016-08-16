var Animal = require('./animal')
var World = function (options) {
  this.keyPressTracker = options.keyPressTracker
  this.farmers = options.farmers
  this.animals = options.animals
  this.dimensions = options.dimensions
  this.collisionHandler = options.collisionHandler
  this.animalDimensions = options.animals[0].dimensions
  this.stats = options.worldStats
  this.obstacles = options.obstacles
}

World.prototype = {  //73 is i 74 is j 76 is l
  update: function () {
    for (var farmer of this.farmers) {
      if (farmer.controls.up in this.keyPressTracker) {
        farmer.moveUp()
      }
      if (farmer.controls.down in this.keyPressTracker) {
        farmer.moveDown()
      }
      if (farmer.controls.left in this.keyPressTracker) {
        farmer.moveLeft()
      }
      if (farmer.controls.right in this.keyPressTracker) {
        farmer.moveRight()
      }
    }

    this.checkCollisons()
    this.checkForReset()

  },
  checkForReset: function () {
    if (!this.stats.allAnimalsCaught()) return
    this.stats.nextTurn()
    this.animals = []
    this.repopulateAnimals()
  },
  repopulateAnimals: function () {
    for (var i = 0; i < this.stats.animalsNeeded; i++) {
      var newAnimal = new Animal(this.animalDimensions, this.dimensions)
      this.animals.push(newAnimal)
    }
  },
  checkCollisons: function () {
    this.checkAnimalCollisions()
    this.checkObjectCollisions()
  },
  checkAnimalCollisions: function () {
    for (var farmer of this.farmers) {
      for (animal of this.animals) {
        if (animal.isHidden) continue

        var hasCollided = this.checkCollision(farmer, animal)
        if (!hasCollided) continue

        this.stats.animalCaught()
        farmer.catchAnimal(animal)
        animal.isHidden = true
      }
    }

  },
  checkObjectCollisions: function () {

    for (var farmer of this.farmers) {
      var collision = null
      for (var obstacle of this.obstacles) {
        var hasCollided = this.checkCollision(farmer, obstacle)
        if (hasCollided) collision = obstacle
      }
      if (collision) {
        farmer.speed = collision.movementModifier
      }
      else {
        farmer.speed = farmer.originalSpeed
      }
    }

  },
  checkCollision: function (object1, object2) {
    return this.collisionHandler.check(object1, object2)
  }
}

module.exports = World