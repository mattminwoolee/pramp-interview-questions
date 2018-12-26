/*
  Island Count
  Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

  An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

  Explain and code the most efficient solution possible and analyze its time and space complexities.

  Example:

  input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                           [0,    0,    1,    1,    1],
                           [1,    0,    0,    1,    0],
                           [0,    1,    1,    0,    0],
                           [1,    0,    1,    0,    1] ]

  output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.

  I = [ [0,    1,    0,    1,    0],
         [0,    0,    1,    1,    1],
         [1,    0,    0,    1,    0],
         [0,    1,    1,    0,    0],
         [1,    0,    1,    0,    1] ]
  O = 6
  
*/

function getNumberOfIslands(binaryMatrix) {
  let counter = 0;
  
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  
  let checkPosition = (row, col) => {
    if (!binaryMatrix[row]) {
      return;
    } else if (!binaryMatrix[row][col]){
      return;
    } else {
      var position = binaryMatrix[row][col];  
    }
    
    if (position === 0 || position === undefined) {
      return;
    }
    
    if (position === 1) { // island
      binaryMatrix[row][col] = 0; // toggle it to water
      
      
      for (let i=0; i<4; i++) {
        checkPosition(row+dx[i], col+dy[i]);
      }

      /*
      checkPosition(row-1, col);
      checkPosition(row, col-1);
      checkPosition(row+1, col);
      checkPosition(row, col+1);
      */
    }
  }
  
  for (let row = 0; row < binaryMatrix.length; row++) {
    for (let col = 0; col < binaryMatrix[0].length; col++ ) {
      if (binaryMatrix[row][col] === 1) {
        checkPosition(row, col)  
        counter++;
      }
    }
  }
  return counter;
}

var I = [ [0,    1,    0,    1,    0],
         [0,    0,    1,    1,    1],
         [1,    0,    0,    1,    0],
         [0,    1,    1,    0,    0],
         [1,    0,    1,    0,    1] ]
console.log(getNumberOfIslands(I));
