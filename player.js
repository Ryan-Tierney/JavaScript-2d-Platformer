class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    objects.push(this);
  }

  step() {
    //this.x = mouseX;
    //this.y = mouseY;

    if (keyDown.W) this.y -= 10;
    if (keyDown.S) this.y += 10;
    if (keyDown.A) this.x -= 10;
    if (keyDown.D) this.x += 10;
  }

  draw() {
    this.step();
    strokeColor(255, 255, 255);
    noFill();
    rectangle(this.x, this.y, this.size, this.size);
  }
}
