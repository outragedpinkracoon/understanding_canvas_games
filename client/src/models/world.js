var Animal = require('./animal')
var World = function(options){
  this.keyPressTracker = options.keyPressTracker
  this.farmer = options.farmer
  this.animals = options.animals
  this.dimensions = options.dimensions
  this.collisionHandler = options.collisionHandler
  this.animalDimensions = options.animals[0].dimensions
  this.stats = options.worldStats
  this.obstacles = options.obstacles
}

World.prototype = {
  update: function() {
    if (38 in this.keyPressTracker) { //up
      this.farmer.moveUp()
    }
    if (40 in this.keyPressTracker) { //down
      this.farmer.moveDown()
    }
    if (37 in this.keyPressTracker) { //left
      this.farmer.moveLeft()
    }
    if (39 in this.keyPressTracker) { //right
      this.farmer.moveRight()
    }

    this.checkCollisons()
    this.checkForReset()

  },
  checkForReset:function(){
    if(!this.stats.allAnimalsCaught()) return
    this.stats.nextTurn()
    this.animals = []
    this.repopulateAnimals()
  },
  repopulateAnimals: function(){
    for(var i = 0; i < this.stats.animalsNeeded; i++ ){
      var newAnimal = new Animal(this.animalDimensions,this.dimensions)
      this.animals.push(newAnimal)
    }
  },
  checkCollisons: function(){
    this.checkAnimalCollisions()
    this.checkObjectCollisions()
  },
  checkAnimalCollisions: function(){
    for(animal of this.animals) {
      if(animal.isHidden) continue

      var hasCollided = this.checkCollision(this.farmer, animal)
      if(!hasCollided) continue

      this.stats.animalCaught()
      animal.isHidden = true
    }
  },
  checkObjectCollisions: function(){
    for(var obstacle of this.obstacles) {
      var hasCollided = this.checkCollision(this.farmer, obstacle)
      if(!hasCollided) {
        this.farmer.speed = this.farmer.originalSpeed
      }
      else {
      this.farmer.speed = obstacle.movementModifier
      }
    }
  },
  checkCollision: function(object1, object2){
    return this.collisionHandler.check(object1, object2)
  }
}

module.exports = World