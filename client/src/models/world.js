var Animal = require('./animal')
var World = function(farmer, animals, keyPressTracker, dimensions){
  this.animalsCaught = 0
  this.keyPressTracker = keyPressTracker
  this.farmer = farmer
  this.animals = animals
  this.dimensions = dimensions
  this.animalsNeeded = 1;
  this.total = 0;
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

    if(this.animalsCaught === this.animalsNeeded){
      console.log("before reset")
      console.log("animals needed:", this.animalsNeeded)
      console.log("animals caught:", this.animalsCaught)
      this.animalsCaught = 0
      console.log("animals caught:", this.animalsCaught)
      this.animalsNeeded++
      this.animals = []
      for(var i = 0; i < this.animalsNeeded; i++ ){
        var newAnimal = new Animal(this.dimensions)
        this.animals.push(newAnimal)
      }
      console.log("after reset")
      console.log("animals needed:", this.animalsNeeded)
      console.log("animals caught:", this.animalsCaught)

      console.log("**********************")
    }

  },
  checkCollisons: function(){
    for(animal of this.animals) {
      if(animal.isHidden){
        continue;
      }
      var hasCollided = this.collisionTest(this.farmer, animal)
      if(hasCollided){
        console.log("before collision")
        console.log("animals needed:", this.animalsNeeded)
        console.log("animals caught:", this.animalsCaught)
        this.animalsCaught++
        this.total++
        // this.farmer.setPosition()
        animal.isHidden = true
        console.log("after collision")
        console.log("animals needed:", this.animalsNeeded)
        console.log("animals caught:", this.animalsCaught)

        console.log("reset result :", this.animalsCaught === this.animalsNeeded)
        console.log("-------------------")
      }
    }
  },
  collisionTest: function(object1, object2) {
    var collisionTolerance = 20
    return object1.x <= (object2.x + collisionTolerance)
    && object2.x <= (object1.x + collisionTolerance)
    && object1.y <= (object2.y + collisionTolerance)
    && object2.y <= (object1.y + collisionTolerance)
  }
}

module.exports = World