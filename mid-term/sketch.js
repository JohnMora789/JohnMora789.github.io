let music;
let mixColor = 10;


//These are place holders
let cells = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let currentPlayer = 'X';

function preload() {
  music = loadSound('firealarm.mp3');
}
//made a function 
function move(row, col) {
  if (cells[row][col] === '') {
    cells[row][col] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    return getWinner(cells);
  }
}

function sameNotEmpty(array) {
  return array.every(x => array[0] === x && x !== '');
}

function getWinner(cells) {
  const winningPositions = [
    // rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // cols
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  
  const valuesAtWinningPositions = winningPositions.map(
    pos => pos.map(cellPos => cells[cellPos[1]][cellPos[0]]));
  
  const winningRow = valuesAtWinningPositions.find(sameNotEmpty);
  const winner = winningRow ? winningRow[0] : null;
  const isTie = !winner && cells.flat().every(cell => cell != '');
  return isTie ? 'Nobody' : winner;
}


// *** Player interaction ***

const rows = cells.length;
const cols = cells[0].length;
const cellSize = 130;

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  var button = createButton("reset");
  button.mousePressed(resetSketch);
  music.play();
}

function resetSketch() {
cells = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];
  
  currentPlayer = 'X';
}


  
 function mouseClicked() {
  if(mouseY < height && mouseX < width) {
    const winner = move(floor(mouseY / cellSize), floor(mouseX / cellSize));
    if(winner) {
      console.log(winner + ' wins!');
    }
  }
}


// *** Drawing logic ***

function draw() {
  background(mixColor);
  drawCells(cells, rows, cols, cellSize);
  
  //horizontal and diagonals lines
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);
  
   if (mouseIsPressed) {
    mixColor = color(random(255), random(255), random(255));
		
  }
  
}

function drawCells(cells, rows, cols, cellSize) {
  for (let row = 0; row < rows; row++)
    for (let col = 0; col < cols; col++)
      drawCell(cells[row][col], row, col, cellSize);
}



function drawCell(cell, row, col, width) {
  textSize(width * 0.75);
  textAlign(CENTER, CENTER);
  text(cell, col * width + width / 2, row * width + width / 2);
  }

                          //Credits
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/149-tic-tac-toe.html

//David Dostal
  