var Farmer = function(options) {
  this.speed = 5
  this.worldDimensions = options.worldDimensions
  this.setPosition()
  this.dimensions = options.objectDimensions
  this.originalSpeed = this.speed
  this.score = 0
  this.collisionHandler = options.collisionHandler
}

Farmer.prototype = {
  moveUp: function(){
    if(this.collisionHandler.atTop(this)) return
    this.y -= this.speed
  },
  moveDown: function(){
    if(this.collisionHandler.atBottom(this)) return
    this.y += this.speed
  },
  moveLeft: function(){
    if(this.collisionHandler.atLeft(this)) return
    this.x -= this.speed
  },
  moveRight: function(){
    if(this.collisionHandler.atRight(this)) return
    this.x += this.speed
  },
  setPosition: function(){
    this.x = this.worldDimensions.width / 2
    this.y = this.worldDimensions.height / 2
  },
  catchAnimal: function(animal){
    this.score += animal.captureValue
  }
}

module.exports = Farmer