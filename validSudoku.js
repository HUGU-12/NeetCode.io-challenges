// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false

// Note: A board does not need to be full or be solvable to be valid.
// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'
const board1 = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

const board2 = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

function isValidSudoku(board){
  if(board.length !== 9) return false;
  const rows = Array.from({length:9},()=>new Set());
  const cols = Array.from({length:9},()=>new Set());
  const grid = Array.from({length:9},()=>new Set());

  for(let i = 0; i < 9; i++){
    if(board[i].length !== 9) return false;
    for(let j = 0; j < 9; j++){
      const cell = board[i][j];
      const gridIndex = Math.floor(i/3)*3 + Math.floor(j/3);
      if(cell === '.') continue;
      else if(Number(cell) < 1 || Number(cell) > 9) return false;

      if(rows[i].has(cell) ||
         cols[j].has(cell) ||
         grid[gridIndex].has(cell)) return false;

      rows[i].add(cell);
      cols[j].add(cell);
      grid[gridIndex].add(cell);

    }
  }
  return true;
  
}

console.log(isValidSudoku(board1));

console.log(isValidSudoku(board2));
