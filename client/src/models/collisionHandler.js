var CollisionHandler = function(){

}

CollisionHandler.prototype = {
  check: function(object1, object2) {
    var collisionTolerance = 20
    return object1.x <= (object2.x + collisionTolerance)
    && object2.x <= (object1.x + collisionTolerance)
    && object1.y <= (object2.y + collisionTolerance)
    && object2.y <= (object1.y + collisionTolerance)
  }
}

module.exports = CollisionHandler