'use strict';
/* global window, document */

window.onload = function() {
  var canvas = document.getElementById('canvas-px');
  var ctx = canvas.getContext('pixel-2d');
  var finalCanvas = document.getElementById('final-canvas-px');
  var finalCtx = finalCanvas.getContext('2d');

  var canvasN = document.getElementById('canvas');
  var ctxN = canvasN.getContext('2d');
  var finalCanvasN = document.getElementById('final-canvas');
  var finalCtxN = finalCanvasN.getContext('2d');

  var draw = function() {
    canvas.width = canvas.width;
    finalCanvas.width = finalCanvas.width;
    ctx.arc(25, 25, 9, 2, Math.PI*2);
    ctx.stroke();

    finalCtx.imageSmoothingEnabled = false;
    finalCtx.mozImageSmoothingEnabled = false;
    finalCtx.drawImage(canvas, 0, 0, 500, 500);

    canvasN.width = canvasN.width;
    finalCanvasN.width = finalCanvasN.width;

    ctxN.beginPath();
    ctxN.strokeStyle = 'black';
    ctxN.arc(25, 25, 9, 2, Math.PI*2);
    ctxN.stroke();

    finalCtxN.imageSmoothingEnabled = false;
    finalCtxN.mozImageSmoothingEnabled = false;
    finalCtxN.drawImage(canvasN, 0, 0, 500, 500);
  };

  draw();
};
