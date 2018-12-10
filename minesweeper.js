document.addEventListener('DOMContentLoaded', startGame);
document.addEventListener('click', checkForWin);
document.addEventListener('contextmenu', checkForWin);

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: false, isMarked: false, hidden: true},
    {row: 1, col: 0, isMine: false, isMarked: false, hidden: true},
    {row: 2, col: 0, isMine: true, isMarked: false, hidden: true},
    {row: 0, col: 1, isMine: false, isMarked: false, hidden: true},
    {row: 1, col: 1, isMine: true, isMarked: false, hidden: true},
    {row: 2, col: 1, isMine: false, isMarked: false, hidden: true},
    {row: 0, col: 2, isMine: false, isMarked: false, hidden: true},
    {row: 1, col: 2, isMine: true, isMarked: false, hidden: true},
    {row: 2, col: 2, isMine: false, isMarked: false, hidden: true},
  ]
};



function startGame () {
  // Don't remove this function call: it makes the game work!
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);   
    //console.log(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  let counter = 0;
  for (i = 0; i < board.cells.length; i++) {
    if ((board.cells[i].isMine === false && board.cells[i].hidden === false) || (board.cells[i].isMine === true && board.cells[i].isMarked === true)) {
    counter++;
    }
  }
  console.log(counter)
  if (counter === board.cells.length) {
    lib.displayMessage('You win!')
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  //console.log(surroundingCells);
  var counter = 0;
  for (j = 0; j < surroundingCells.length; j++) {
  //console.log(surroundingCells[j].isMine);
  if (surroundingCells[j].isMine === true) {
    counter++;
    }
  }
  //console.log(counter);
  return counter;
}



