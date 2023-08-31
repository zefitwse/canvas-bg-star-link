class Star {
  x: number;
  y: number;
  r: number;
  xSpeed: number;
  ySpeed: number;
  constructor(x: number, y: number, r: number, xSpeed: number, ySpeed: number) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  draw(ctx: any) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

  move() {
    this.x -= this.xSpeed;
    this.y -= this.ySpeed;
    if (this.x < 0 || this.x > 1000) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > 1000) {
      this.ySpeed *= -1;
    }
  }

  connectLine(endStarX: number, endStarY: number, ctx: any) {
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(endStarX, endStarY);
    ctx.stroke();
    ctx.closePath();
  }
}
export default Star;