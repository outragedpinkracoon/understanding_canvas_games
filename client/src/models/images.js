var Images = function(){

  function addImage (path) {
    var image = new Image()
    image.src = path
    return image
  }

  this.background = addImage("images/background.png")
  this.hero = addImage("images/hero.png")
  this.monster = addImage("images/monster.png")

}
module.exports = Images
