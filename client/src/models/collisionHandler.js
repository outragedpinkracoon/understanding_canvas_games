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
    return object1.x < object2.x + object2.dimensions.width
  },
  checkTwo: function(object1, object2){
    return object1.x + object1.dimensions.width > object2.x
  },
  checkThree: function(object1, object2){
    return object1.y < object2.y + object2.dimensions.height
  },
  checkFour: function(object1, object2){
    return object1.dimensions.height + object1.y > object2.y
  },
  atTop: function(collider){
    return collider.y - collider.dimensions.height <= 0
  },
  atBottom: function(collider){
    return collider.y + (collider.dimensions.height * 2) >= collider.worldDimensions.height
  },
  atLeft: function(collider){
    return collider.x <= 0
  },
  atRight: function(collider){
    return (collider.x + collider.dimensions.width) >= collider.worldDimensions.width
  }
}

module.exports = CollisionHandler
