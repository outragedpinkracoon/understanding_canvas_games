var Renderer = function(display, world, images){
  this.canvas = display.canvas
  this.ctx = display.ctx
  this.world = world
  this.images = images
  this.imageSize = 32
}

Renderer.prototype = {
  draw: function() {
    var winner = this.world.winner()
    if(winner) {
      this.drawWinnerInfo(winner)
      return
    }
    this.clearCanvas()

    this.world.update()
    this.drawImages()

    this.drawMonsterCaughtCount()
    this.drawPlayerLabels()

    requestAnimationFrame(function(){
      this.draw()
    }.bind(this))
  },
  drawWinnerInfo: function(winner){
    var displayTag = document.getElementById("winner-info")
    displayTag.style.display = "block"
    displayTag = document.getElementById("winner-id")
    displayTag.innerText = winner.name
  },
  drawPlayerLabels: function(){
    var counter = 1;
    for(var farmer of this.world.farmers){
      this.ctx.font="15px Georgia"
      var x = farmer.coords.x + (farmer.dimensions.width * 0.35) 
      var y = farmer.coords.y + (farmer.dimensions.height * 0.8)
      this.ctx.fillText(counter.toString(),x,y)
      counter++
    }
    
  },
  drawMonsterCaughtCount: function(){
    //oh good grief fix this mess
    var displayTag = document.getElementById("player1-score")
    displayTag.innerText = this.world.farmers[0].score
    displayTag = document.getElementById("player2-score")
    displayTag.innerText = this.world.farmers[1].score
  },
  drawImages: function(){
    this.ctx.drawImage(this.images.background, 0, 0)
    for(var farmer of this.world.farmers){
      if(!farmer.isHidden) {
      this.ctx.drawImage(this.images.farmer, farmer.coords.x, farmer.coords.y)
      }
    }
    for(animal of this.world.animals){
      if(!animal.isHidden){
        this.ctx.drawImage(this.images.animal, animal.coords.x, animal.coords.y)
      }
    } 
  },
  clearCanvas: function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

module.exports = Renderer