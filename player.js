class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    this.bbx = new bbox(this.x, this.y, this.size, this.size);

    //physics
    this.gravity = 0;
    this.yspd = 0;

    objects.push(this);
  }

  step() {
    //this.x = mouseX;
    //this.y = mouseY;

    if (keyDown.W) this.y -= 10;
    if (keyDown.S) this.y += 10;
    if (keyDown.A) this.x -= 10;
    if (keyDown.D) this.x += 10;
    this.yspd += this.gravity;
    this.y += this.yspd;
    this.bbx.update(this.x, this.y);
  }

  draw() {
    this.step();
    strokeColor(255, 255, 255);
    rectangle(this.x, this.y, this.size, this.size);
    this.bbx.draw;
  }
}
