var World = function(hero, monster){
  this.imageSize = 32
  this.monstersCaught = 0

  this.hero = hero
  this.monster = monster

  this.update = function(keysDown) {

    if (38 in keysDown) { //up
      this.hero.moveUp()
    }
    if (40 in keysDown) { //down
      this.hero.moveDown()
    }
    if (37 in keysDown) { //left
      this.hero.moveLeft()
    }
    if (39 in keysDown) { //right
      this.hero.moveRight()
    }

    var hasCollided = this.collisionTest(this.hero, this.monster)

    if(hasCollided){
      this.monstersCaught++
      this.hero.setPosition()
      this.monster.setPosition()
    }

  }

  this.collisionTest = function(object1, object2) {
    return object1.x <= (object2.x + this.imageSize)
    && object2.x <= (object1.x + this.imageSize)
    && object1.y <= (object2.y + this.imageSize)
    && object2.y <= (object1.y + this.imageSize)
  }
}

module.exports = World