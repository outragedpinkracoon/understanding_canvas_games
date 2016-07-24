var Display = function(){
  this.canvas = document.createElement("canvas")
  this.ctx = this.canvas.getContext("2d")
  this.canvas.width = 512
  this.canvas.height = 480
  document.body.appendChild(this.canvas)
}
module.exports = Display
