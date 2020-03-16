let t =  'When'
let m = 'Mickey Mouse gets punished by Mini Mouse and is vigalent just in case'

let sound;


function setup() {
  createCanvas(400, 400);
  sound = loadSound('assets/track 10.mp3');
}

function mousePressed() {
  if (sound.isPlaying()) {
    sound.stop();
    background(255, 0, 0);
  } else {
    sound.play();
    background(0, 100, 54);
  }
}


function draw() {
  motion = constrain(map(mouseX, 0, width, -2.6, 2.6), -2.6, 2.6);
  
 //BOTH EARS\\ 
push();
    fill(0);
    ellipse(160, 80, 70, 70);
    ellipse(240, 80, 70, 70);
pop();
  
push();
  fill(255);
  textSize(25);
  text(t, 165, 15, 155, 155);
pop();
//HEAD\\
push();
    fill(240, 170, 50);
    ellipse(200, 150, 120, 140);
pop();
//BOTH EYES\\
push();
    translate(motion, 0);
    fill(255);
    ellipse(180, 130, 30, 50);
    ellipse(220, 130, 30, 50);  
pop();
  
push();
  fill(0);
  ellipse(180, 135, 20, 40);
  ellipse(220, 135, 20, 40);
  noFill();
  arc(200, 187, 100, 70, 5*PI/ 4, 7*PI/ 4);
  fill(0);
  ellipse(200, 169, 35, 26);
pop();
  
push();
  fill(200, 0 , 40);
  arc(200, 196, 70, 25, 0, PI);
  arc(200, 230, 140, 80, 5*PI/ 4, 7*PI/ 4);
pop();
  
push();
  fill(255);
  textSize(12);
  textStyle(BOLD);
  text(m, 75, 250 , 260, 200);
pop();
  
   
  

  

}