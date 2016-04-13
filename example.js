'use strict';
/* global window, document */
var a1 = Math.round(Math.random()*50);
var b2 = Math.round(Math.random()*50);
var a = Math.round(Math.random()*50);
var b = Math.round(Math.random()*50);
var c = Math.round(Math.random()*50);
var d = Math.round(Math.random()*50);

window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('pixel-2d');


  // ctx.moveTo(0, 0);
  // ctx.lineTo(50, 25);
  // ctx.lineTo(30, 40);
  // ctx.lineTo(0, 0);
  //ctx.stroke();

  var finalCanvas = document.getElementById('final-canvas');
  var finalCtx = finalCanvas.getContext('2d');

  var time = 0;
  // var center1X = Math.round(Math.random()*50);
  // var center1Y = Math.round(Math.random()*50);
  // var center2X = Math.round(Math.random()*50);
  // var center2Y = Math.round(Math.random()*50);
  // var center3X = Math.round(Math.random()*50);
  // var center3Y = Math.round(Math.random()*50);
  //
  // var speed1 = Math.random();
  // var speed2 = Math.random();
  // var speed3 = Math.random();
  // var newCoords = function(x, y, or1, or2, radius, speed) {
  //   var origin = {
  //     x: or1,
  //     y: or2
  //   };
  //   return {
  //     x: Math.round((Math.cos(time*speed) * radius + origin.x)),
  //     y: Math.round((Math.sin(time*speed) * radius + origin.y))
  //   };
  // };

  // var r1 = ~~(Math.random()*25);
  // var r2 = ~~(Math.random()*25);
  // var r3 = ~~(Math.random()*25);

  var draw = function() {
    time++;
    canvas.width = canvas.width;
    finalCanvas.width = finalCanvas.width;

    // var nC = newCoords(a, b, center1X, center2Y, r1, speed1);
    // a = nC.x;
    // b = nC.y;
    //
    // nC = newCoords(a1, b2, center2X, center2Y, r2, speed2);
    // a1 = nC.x;
    // b2 = nC.y;
    //
    // nC = newCoords(c, d, center3X, center3Y, r3, speed3);
    // c = nC.x;
    // d = nC.y;
    console.log(a1, b2, a, b, c, d);
    ctx.moveTo(a1, b2);
    ctx.lineTo(a, b);
    ctx.lineTo(c, d);
    ctx.lineTo(a1, b2);
    ctx.stroke();
    
    finalCtx.imageSmoothingEnabled = false;
    finalCtx.mozImageSmoothingEnabled = false;
    finalCtx.drawImage(canvas, 0, 0, 500, 500);
  };

  // setInterval(draw, 1000/33);
  draw();
};
