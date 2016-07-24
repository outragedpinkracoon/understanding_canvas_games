var Hero = require('./hero')
var Monster = require('./monster')

var World = function(canvas){
  this.canvas = canvas
  this.imageSize = 32
  this.hero = new Hero(canvas.width / 2, canvas.height / 2)

  this.randomPos = function(canvasDimension) {
    return this.imageSize + (Math.random() * (canvasDimension - (this.imageSize * 2)))
  }

  this.monster = new Monster(this.randomPos(canvas.width), this.randomPos(canvas.height))

  this.monstersCaught = 0

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
      this.hero.reset(this.canvas.width / 2, this.canvas.height / 2)
      this.monster.reset(this.randomPos(this.canvas.width), this.randomPos(this.canvas.height))
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