class object {
  constructor() {
    this.r = 200;
    this.x = 20;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
    
  }
  
  jump() {
    if (this.y == height - this.r) {
      this.vy = -30;
    }
  }
  
  hits(flames) {
    let x1 = this.x + this.r * 0.3
    let y1 = this.y + this.r * 0.3 
    let x2 = flames.x + flames.r * 0.5
    let y2 = flames.y + flames.r * 0.5
    
     return collideCircleCircle(x1,y1,this.r,x2,y2,flames.r);

  }
  move() {
  this.y += this.vy;
  this.vy += this.gravity;
  this.y = constrain(this.y, 0, height - this.r);
  }
  
    show() {
     image(cImg, this.x, this.y, this.r, this.r);
      fill(255, 50);
      
    }
}