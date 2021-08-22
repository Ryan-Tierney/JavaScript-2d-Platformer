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
loop();

window.onresize = function () {};

function loop() {
  background(25, 25, 25);
  Player.draw();
}

var target_fps = 30;
setInterval(loop, 1000 / target_fps);
