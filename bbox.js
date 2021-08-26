class bbox {
  constructor(x, y, w, h) {
    this.x1 = x;
    this.y1 = y;
    this.w = w;
    this.h = h;
    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
  }

  update(x, y) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + this.w;
    this.y2 = y + this.h;
  }
  draw() {
    noStroke();
    fillColor(255, 0, 0);
    rectangle(this.x1, this.y1, this.w, this.h);
    this.bbx.draw;
  }
}
