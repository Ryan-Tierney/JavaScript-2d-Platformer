var canvas = document.getElementById("myCanvas");
var render = canvas.getContext("2d");
var width;
var height;
width = window.innerWidth;
height = winder.innerHeight;

canvas.width = width;
canvas.height = height;
canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

background(25, 25, 25);

fillColor(155, 50, 255);
strokeColor(0, 255, 0);
strokeSize(2);
rectangle(25, 25, 50, 100);
