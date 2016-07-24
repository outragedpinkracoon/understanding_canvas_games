var KeyboardEvents = function(){
  this.keyPressTracker = {}

  addEventListener("keydown", function (e) {
    this.keyPressTracker[e.keyCode] = true
  }.bind(this), false)

  addEventListener("keyup", function (e) {
    delete this.keyPressTracker[e.keyCode]
  }.bind(this), false)
}
module.exports = KeyboardEvents