'use strict';
/* global HTMLCanvasElement */

(function() {
  var contextName = 'pixel-2d';

  var pixelContext = function(context) {
    var currentPosition = {
      x: 0,
      y: 0
    };

    // draw single pixel.
    var p = function(x, y) {
      context.fillRect(x, y, 1, 1);
    };

    context.moveTo = function(x, y) {
      currentPosition = {
        x: x,
        y: y
      };
    };

    context.lineTo = function(x1, y1) {
      var x0 = currentPosition.x;
      var y0 = currentPosition.y;
      var dx = Math.abs(x1-x0);
       var dy = Math.abs(y1-y0);
       var sx = (x0 < x1) ? 1 : -1;
       var sy = (y0 < y1) ? 1 : -1;
       var err = dx-dy;

       while(true) {
         p(x0,y0);

         if ((x0 === x1) && (y0 === y1)) {
           break;
         }

         var e2 = err * 2;
         if (e2 >-dy) {
           err -= dy;
           x0 += sx;
         }
         if (e2 < dx) {
           err += dx;
           y0  += sy;
         }
       }

       currentPosition = {
         x: x1,
         y: y1
       };
    };

    context.point = p;

    return context;
  };

  var originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(name) {
      switch(name) {
        case contextName:
          var planeContext = originalGetContext.call(this, '2d');
          return pixelContext(planeContext);
        default:
          return originalGetContext.apply(this, arguments);
      }
  };
})();
