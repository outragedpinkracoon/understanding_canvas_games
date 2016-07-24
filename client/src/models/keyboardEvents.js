var KeyboardEvents = function(){
  this.keysDown = {}

  addEventListener("keydown", function (e) {
    this.keysDown[e.keyCode] = true
  }.bind(this), false)

  addEventListener("keyup", function (e) {
    delete this.keysDown[e.keyCode]
  }.bind(this), false)
}
module.exports = KeyboardEvents