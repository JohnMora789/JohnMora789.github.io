let rex;
let cImg;
let oImg;
let bImg;
let music;
let flames = [];


function preload() {
cImg = loadImage('character game.png');
oImg = loadImage('obstacle game.png');
bImg = loadImage('background game.jpg');
}

function setup() {
  createCanvas(800, 450);
  rex = new object();
  
}



function keyPressed() {
  if (key == ' ') {
    rex.jump();
  }
}

function draw() {
  if (random(1) < 0.01 ) {
    flames.push(new fire());
  }
  collideCircleCircle(200,200,100,150,mouseX,mouseY,50,75);

  background(bImg);
  for (let f of flames) {
    f.move();
    f.show();
    if (rex.hits(f)) {
       console.log('game over') 
      noLoop();
    }
  }
  
  
  
  rex.show();
  rex.move();
  
  
  
}





                          
                            

                            /*Credits*/
//The coding Train / Daniel Shiffman Tutorial
//p5 collide library 