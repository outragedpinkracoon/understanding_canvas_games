var Animal = require('./animal')
var World = function(farmer, animals, keyPressTracker, dimensions, collisionHandler){
  this.animalsCaught = 0
  this.keyPressTracker = keyPressTracker
  this.farmer = farmer
  this.animals = animals
  this.dimensions = dimensions
  this.animalsNeeded = 1;
  this.total = 0;
  this.collisionHandler = collisionHandler
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
    if(this.animalsCaught !== this.animalsNeeded) return
      this.animalsCaught = 0
    this.animalsNeeded++
    this.animals = []
    this.repopulateAnimals()
  },
  repopulateAnimals: function(){
    for(var i = 0; i < this.animalsNeeded; i++ ){
      var newAnimal = new Animal(this.dimensions)
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
        this.animalsCaught++
        this.total++
        animal.isHidden = true
      }
    }
  }
}

module.exports = World