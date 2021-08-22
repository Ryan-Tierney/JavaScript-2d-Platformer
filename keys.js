var mouseX = 0;
var mouseY = 0;
document.onMouseMove = function (event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
};

var keyPress = {};
var TkeyPress = {};
for (var i = 0; i < 255; i++) {
  var l = String.fromCharCode(i);
  keyPress[l] = false;
  TkeyPress[l] = false;
}

document.onkeypress = function (event) {
  var key = event.key.toUpperCase();
  if (!TkeyPress[key]) {
    TkeyPress[key] = true;
    keyPress[key] = true;
  }
};

document.onkeyup = function (event) {
  var key = event.key.toUpperCase();
  TkeyPress[key] = false;
};

function keyEnd() {
  for (var i in keyPress) {
    keyPress[i] = false;
  }
}
var keyDown = {};
var keyRelease = {};
