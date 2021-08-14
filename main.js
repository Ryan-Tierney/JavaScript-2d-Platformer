var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d");
var width;
var height;
width = window.innerWidth;
height = window.innerHeight;

canvas.width = width;
canvas.height = height;
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function () {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  background(25, 25, 25);
  player.draw;
};

window.onresize();

background(25, 25, 25);
