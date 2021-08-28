var walls = [];
class Wall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);
    objects.push(this);
    walls.push(this);
  }

  draw() {
    strokeColor(255, 255, 255);
    strokeSize(2);
    noFill();
    if (this.bbx.collision(Player.bbx)) {
      strokeColor(255, 0, 0);
    }
    this.bbx.draw();
    rectangle(this.x, this.y, this.size, this.size);
  }
}
