let t = 'John Mora'
let x, y;
let n = 'NY'
let motion = 0;


  

function setup() {
  createCanvas(400, 400);
  background(20, 120, 140);
  textSize(35);
  rectMode(LEFT);
  
   x = width / 2;
   y = height;

  
 

  
 
 
 
}

function draw() {
  stroke(600);
  fill(240, 182, 137, 94);
  ellipse(width/1.4, height/2.3, 150, 200);
  
  /*mouse draws lines when pressed*/
  motion = constrain(map(mouseX, 0, width, -6, 6), -6, 6);

  push();
  /*Left Eye*/
   fill(255);
    translate(motion, 0);
    ellipse(width/1.6, height/2.7, 45, 70);
  /*Right Eye*/
   fill(255);
    ellipse(width/1.3, height/2.7, 45, 70);
  pop();
  
  push();
    /*Left Pupil*/
  fill(130, 90, 0);
    ellipse(width/1.6, height/2.7, 20, 30);
    /* Right Pupil*/
  fill(130, 90, 0);
    ellipse(width/1.3, height/2.7, 20, 30);
  pop();
    
    line(265, 200, 280, 150);
    line(240, 200, 260, 180);
    line(290, 210, 265, 200);
    line(310, 205, 290, 170);
  
  fill(240, 182, 137, 94);
    arc(260, 215, 110, 40, 0, HALF_PI);
  

  
  push();
    fill(244, 122, 158);
    rect(mouseX, height / 5, mouseY / 5 + 10, mouseY / 5 + 10);
    fill(237, 34, 93);
    let inverseX = width - mouseX;
    let inverseY = height - mouseY;
    rect(inverseX, height / 5, inverseY / 5 + 10, inverseY / 5 + 10);
  pop();
      

     fill(150);
  stroke(0);
  text(t, 60, 130, 70, 80);
 
  
  
  /* Animation 
   stroke(50);
  fill(200);
  ellipse(x, y, 20, 20);
 
     x = x + random(-1, 1);
    y = y - 2;
  if (y < 0) {
    y = height;
  }*/
  
  push();
  stroke(0);
  translate(86, 0 );
  arc(width/2, 110, 118, 90, PI, 0 );
  pop();
  console.log('x:'+ mouseX + " , y: " + mouseY);
  
    fill(0);
  text(n, 263, 76 , 100 , 150);
  
  push();
    stroke(0);
    arc(260, 215, 100 , 20 , 0, HALF_PI);
    arc(285, 275, 50 , 50 , PI, 0);
  pop();

  push();
    stroke(0); 
    translate(105, 190);
    triangle(width/ 2 - 30, 155, 130, 60, 120, 115);
    line(width/2 - 70, 210, 122, 115);
    line(width/2 - 30, 155, 173, 215);
  pop();
  
  
  push();
  stroke(0);
    translate(170, 217);
    fill(0);
    triangle(120, 130, 160, 40, 175, 90);
    line(width/2 - 80, 200, 122, 130);
    line(width/2 - 40, 300, 175, 90);
  push()
    noFill();
    stroke(255, 184, 1, 100);
    translate(5, 5);
     arc(110, 80, 53, 10, 0, PI);
  pop();
pop();
    
  
  
 
  
  
  
  
  
  
  
  
 
  
  
  
  
  
}