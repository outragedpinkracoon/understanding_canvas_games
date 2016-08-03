var CollisionHandler = function(){

}

CollisionHandler.prototype = {
  check: function(object1, object2) {
    return object1.x <= (object2.x + object1.dimensions.width)
    && object2.x <= (object1.x + object2.dimensions.width)
    && object1.y <= (object2.y + object1.dimensions.height)
    && object2.y <= (object1.y + object2.dimensions.height)
  }
}

module.exports = CollisionHandler