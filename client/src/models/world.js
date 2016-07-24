var World = function(hero, keysDown){
  this.hero = hero

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
  }
}

module.exports = World