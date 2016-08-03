var WorldStats = function(){
  this.animalsNeeded = 1;
  this.total = 0;
  this.animalsCaught = 0

  this.animalCaught = function(){
    this.animalsCaught++
    this.total++
  }

  this.nextTurn = function(){
    this.animalsNeeded++
    this.animalsCaught = 0
  }

  this.allAnimalsCaught = function(){
    return this.animalsCaught === this.animalsNeeded
  }
}

module.exports = WorldStats