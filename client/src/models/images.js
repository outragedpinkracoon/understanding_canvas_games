var Images = function(){
  this.background = this.addImage("images/background.png")
  this.hero = this.addImage("images/farmer.png")
  this.animal = this.addImage("images/chicken_left.png")
}

Images.prototype = {
  addImage: function(path) {
    var image = new Image()
    image.src = path
    return image
  }
}

module.exports = Images
