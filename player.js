class Player {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = 32;
  }
  draw() {
    strokeColor(255, 255, 255);
    noFill();
    rectangle(this.x, this.y, this.size, this.size);
  }
}

var player = new Player(50, 50);
