class Enemies {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;

    //physics
    this.gravity = 0;
    this.yspd = 0;

    objects.push(this);
  }
  draw() {
    this.step();
    strokeColor(0, 255, 0);
    rectangle(this.x, this.y, this.size, this.size);
    this.bbx.draw;
  }
}
