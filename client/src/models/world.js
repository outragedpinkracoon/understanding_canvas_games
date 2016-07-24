var World = function(hero, monster, keyPressTracker){
  this.imageSize = 32
  this.monstersCaught = 0
  this.keyPressTracker = keyPressTracker

  this.hero = hero
  this.monster = monster
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

    var hasCollided = this.collisionTest(this.hero, this.monster)

    if(hasCollided){
      this.monstersCaught++
      this.hero.setPosition()
      this.monster.setPosition()
    }

  },
  collisionTest:function(object1, object2) {
    return object1.x <= (object2.x + this.imageSize)
    && object2.x <= (object1.x + this.imageSize)
    && object1.y <= (object2.y + this.imageSize)
    && object2.y <= (object1.y + this.imageSize)
  }
}

module.exports = World