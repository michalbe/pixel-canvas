'use strict';
/* global HTMLCanvasElement */

(function() {
  var contextName = 'pixel-2d';
  
  var pixelContext = function(context) {

  };
  var originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(name) {
      switch(name) {
        case contextName:
          var planeContext = originalGetContext.apply(this, arguments);
          return pixelContext(planeContext);
        default:
          return originalGetContext.apply(this, arguments);
      }
  };
});
