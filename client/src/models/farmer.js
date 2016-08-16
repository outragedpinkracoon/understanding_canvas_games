var Farmer = function(objectDimensions,worldDimensions) {
  this.speed = 5
  this.worldDimensions = worldDimensions
  this.setPosition()
  this.dimensions = objectDimensions
  this.originalSpeed = this.speed
  this.score = 0
}

Farmer.prototype = {
  moveUp: function(){
    if(this.atTop()) return
    this.y -= this.speed
  },
  moveDown: function(){
    if(this.atBottom()) return
    this.y += this.speed
  },
  moveLeft: function(){
    if(this.atLeft()) return
    this.x -= this.speed
  },
  moveRight: function(){
    if(this.atRight()) return
    this.x += this.speed
  },
  setPosition: function(){
    this.x = this.worldDimensions.width / 2
    this.y = this.worldDimensions.height / 2
  },
  catchAnimal: function(animal){
    this.score += animal.captureValue
  },
  atTop: function(){
    return this.y - this.dimensions.height <= 0
  },
  atBottom: function(){
    return this.y + (this.dimensions.height * 2) >= this.worldDimensions.height
  },
  atLeft: function(){
    return this.x <= 0
  },
  atRight: function(){
    return (this.x + this.dimensions.width) >= this.worldDimensions.width
  }
}

module.exports = Farmer