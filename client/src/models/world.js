var Animal = require('./animal')
var World = function(farmer, animals, keyPressTracker, dimensions, collisionHandler, worldStats){
  this.keyPressTracker = keyPressTracker
  this.farmer = farmer
  this.animals = animals
  this.dimensions = dimensions
  this.collisionHandler = collisionHandler
  this.animalDimensions = this.animals[0].dimensions
  this.stats = worldStats
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
  //pull out collision checker
  checkCollisons: function(){
    for(animal of this.animals) {
      if(animal.isHidden){
        continue;
      }
      var hasCollided = this.collisionHandler.check(this.farmer, animal)
      if(hasCollided){
        this.stats.animalCaught()
        animal.isHidden = true
      }
    }
  }
}

module.exports = World