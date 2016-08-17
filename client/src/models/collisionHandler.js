var CollisionHandler = function(){

}

CollisionHandler.prototype = {
  check: function(object1, object2) {
    var one = this.checkOne(object1,object2)
    var two = this.checkTwo(object1,object2)
    var three = this.checkThree(object1,object2)
    var four = this.checkFour(object1,object2)
    result = one && two && three && four
    return result
  },
  checkOne: function(object1, object2){
    return object1.coords.x < object2.coords.x + object2.dimensions.width
  },
  checkTwo: function(object1, object2){
    return object1.coords.x + object1.dimensions.width > object2.coords.x
  },
  checkThree: function(object1, object2){
    return object1.coords.y < object2.coords.y + object2.dimensions.height
  },
  checkFour: function(object1, object2){
    return object1.dimensions.height + object1.coords.y > object2.coords.y
  },
  atTop: function(collider){
    return collider.coords.y - collider.dimensions.height <= 0
  },
  atBottom: function(collider){
    return collider.coords.y + (collider.dimensions.height * 2) >= collider.worldDimensions.height
  },
  atLeft: function(collider){
    return collider.coords.x <= 0
  },
  atRight: function(collider){
    return (collider.coords.x + collider.dimensions.width) >= collider.worldDimensions.width
  }
}

module.exports = CollisionHandler
