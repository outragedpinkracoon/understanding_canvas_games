var Display = function(){
  this.canvas = document.getElementsByTagName("canvas")[0]
  this.ctx = this.canvas.getContext("2d")
}
module.exports = Display
