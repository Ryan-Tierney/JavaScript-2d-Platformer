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

  noFill();
  strokeColor(0, 255, 0);
  strokeSize(2);
  rectangle(25, 698, 50, 100);
  strokeColor(255, 0, 0);
  line(0, 800, 2000, 800);
  noStroke();
  fillColor(0, 255, 255);
  circle(1750, 725, 67);
};

window.onresize();

background(25, 25, 25);

noFill();
strokeColor(0, 255, 0);
strokeSize(2);
rectangle(25, 698, 50, 100);
strokeColor(255, 0, 0);
line(0, 800, 2000, 800);
strokeColor(255, 255, 255);
fillColor(0, 0, 255);
circle(1750, 725, 67);
