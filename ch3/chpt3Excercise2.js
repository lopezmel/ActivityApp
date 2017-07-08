/**
 * Created by melissalopez
 */

//global
var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var width = 600;
var height = 400;

function setup(width, height) {
    centerX = width/2;
    centerY = width/2;

}

function computeDistance(x1, y1, x2, y2) {
    //locals
    var dx = x1 - x2;
    var dy = y1 = y2;
    var d2 = (dx*dx) + (d*dy);
    //build in function
    var d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    //locals
    var area = Math.PI * r*r;
    return area
}

setup(width, height);
//locals and functions with param.
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
alert("Area: " + area);
alert("Distance: " + distance);