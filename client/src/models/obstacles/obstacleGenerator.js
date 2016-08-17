var ObstacleFactory = require('./obstacleFactory')
var Obstacle = require('./obstacle')
var ObstacleKind = require('./obstacleKind')
var Coords = require('../spacial/coords')
var Dimensions = require('../spacial/dimensions')

var ObstacleGenerator = function () {}

ObstacleGenerator.prototype = {
    generate: function () {

        var factory = new ObstacleFactory()

        var pondOptions = {
            coords: new Coords({ x: 328, y: 60 }),
            dimensions: new Dimensions({ width: 125, height: 90 }),
            kind: ObstacleKind.ICE,
        }

        var grassTopLeftOptions = {
            coords: new Coords({ x: 118, y: 65 }),
            dimensions: new Dimensions({ width: 48, height: 48 }),
            kind: ObstacleKind.GRASS,
        }

        var grassBottomRightOptions = {
            coords: new Coords({ x: 404, y: 351 }),
            dimensions: new Dimensions({ width: 48, height: 48 }),
            kind: ObstacleKind.GRASS,
        }

        var grassLeftBorderOptions = {
            coords: new Coords({ x: 2, y: 43 }),
            dimensions: new Dimensions({ width: 26, height: 399 }),
            kind: ObstacleKind.GRASS,
        }

        var grassRightBorderOptions = {
            coords: new Coords({ x: 490, y: 42 }),
            dimensions: new Dimensions({ width: 26, height: 399 }),
            kind: ObstacleKind.GRASS,
        }

        var treeRightBunchUpperOptions = {
            coords: new Coords({ x: 305, y: 204 }),
            dimensions: new Dimensions({ width: 99, height: 42 }),
            kind: ObstacleKind.TREE,
        }

        var treeRightBunchLowerOptions = {
            coords: new Coords({ x: 323, y: 245 }),
            dimensions: new Dimensions({ width: 62, height: 27 }),
            kind: ObstacleKind.TREE,
        }

        var treeLeftBunchUpperOptions = {
            coords: new Coords({ x: 101, y: 341 }),
            dimensions: new Dimensions({ width: 64, height: 44 }),
            kind: ObstacleKind.TREE,
        }

        var treeLeftBunchLowerOptions = {
            coords: new Coords({ x: 115, y: 383 }),
            dimensions: new Dimensions({ width: 33, height: 27 }),
            kind: ObstacleKind.TREE,
        }

        var topLeftLavaOptions = {
            coords: new Coords({ x: 29, y: 44 }),
            dimensions: new Dimensions({ width: 31, height: 34 }),
            kind: ObstacleKind.LAVA,
        }
        var middleLavaOptions = {
            coords: new Coords({ x: 336, y: 276 }),
            dimensions: new Dimensions({ width: 31, height: 34 }),
            kind: ObstacleKind.LAVA,
        }

        var options = [pondOptions, grassTopLeftOptions, grassBottomRightOptions, grassLeftBorderOptions,
            grassRightBorderOptions, treeRightBunchUpperOptions, treeRightBunchLowerOptions, treeLeftBunchUpperOptions,
            treeLeftBunchLowerOptions, topLeftLavaOptions, middleLavaOptions]

        var obstacles = []
        for (var option of options) {
            obstacles.push(factory.create(option))
        }

        return obstacles;
    }
}

module.exports = ObstacleGenerator