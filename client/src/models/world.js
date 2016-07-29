var World = function(hero, animals, keyPressTracker){
  this.animalsCaught = 0
  this.keyPressTracker = keyPressTracker
  this.hero = hero
  this.animals = animals
}

World.prototype = {
  update: function() {
    if (38 in this.keyPressTracker) { //up
      this.hero.moveUp()
    }
    if (40 in this.keyPressTracker) { //down
      this.hero.moveDown()
    }
    if (37 in this.keyPressTracker) { //left
      this.hero.moveLeft()
    }
    if (39 in this.keyPressTracker) { //right
      this.hero.moveRight()
    }

    for(animal of this.animals) {
      var hasCollided = this.collisionTest(this.hero, animal)
      if(hasCollided){
        this.animalsCaught++
        this.hero.setPosition()
        animal.setPosition()
      }
    }

  },
  collisionTest:function(object1, object2) {
    var collisionTolerance = 20
    return object1.x <= (object2.x + collisionTolerance)
    && object2.x <= (object1.x + collisionTolerance)
    && object1.y <= (object2.y + collisionTolerance)
    && object2.y <= (object1.y + collisionTolerance)
  }
}

module.exports = World