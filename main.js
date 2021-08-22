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
  drawLoop();
};

function loop() {
  stepLoop();
  drawLoop();
  keyEnd();
}

var objects = [];

for (var i = 0; i < 32; i++) {
  new Wall(i * 32, 400);
}

window.onresize();
var player = new Player(50, 50);

function stepLoop() {
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].draw) objects[i].draw();
  }
}

function drawLoop() {
  background(25, 25, 25);
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].draw) objects[i].draw();
  }
}

var target_fps = 30;
setInterval(loop, 1000 / target_fps);
