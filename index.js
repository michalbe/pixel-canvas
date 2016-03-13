'use strict';
/* global window, document */
window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var p = function(x, y) {
    ctx.fillRect(x, y, 1, 1);
  };

  //p(5, 5);

  var line = function(x0, y0, x1, y1) {
    // var dx = x2 - x1;
    // var dy = y2 - y1;
    // for (var x = x1; x<x2; x++) {
    //   var preY = y1 + dy * (x - x1) / dx;
    //   var y = Math.round(preY);
    //   var yDiff = y - preY;
    //   if (yDiff > 0) {
    //     //p(x, y - 1);
    //   } else if (yDiff < 0) {
    //     //p(x, y + 1);
    //   }
    //   console.log(x, y);
    //   p(x, y);
    // }
    var dx = Math.abs(x1-x0);
     var dy = Math.abs(y1-y0);
     var sx = (x0 < x1) ? 1 : -1;
     var sy = (y0 < y1) ? 1 : -1;
     var err = dx-dy;

     while(true){
       p(x0,y0);  // Do what you need to for this

       if ((x0==x1) && (y0==y1)) {
         break;
       }
       var e2 = 2*err;
       if (e2 >-dy){ err -= dy; x0  += sx; }
       if (e2 < dx){ err += dx; y0  += sy; }
     }
  };

  line(0, 0, 50, 25);
  line(50, 25, 30, 40);
  line(30, 40, 0, 0);

  // ctx.moveTo(0, 0);
  // ctx.lineTo(50, 25);
  // ctx.lineTo(30, 40);
  // ctx.lineTo(0, 0);
  // ctx.stroke();

  var finalCanvas = document.getElementById('final-canvas');
  var finalCtx = finalCanvas.getContext('2d');
  finalCtx.imageSmoothingEnabled = false;
  finalCtx.mozImageSmoothingEnabled = false;
  finalCtx.drawImage(canvas, 0, 0, 500, 500);
};
