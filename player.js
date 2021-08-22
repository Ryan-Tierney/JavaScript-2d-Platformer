class Player {
  constructor() {
    this.x = x;
    this.y = y;
    this.size = 32;
    objects.push(this);
  }
  draw() {
    this.y += 5;
    strokeColor(255, 255, 255);
    noFill();
    rectangle(this.x, this.y, this.size, this.size);
  }
}
