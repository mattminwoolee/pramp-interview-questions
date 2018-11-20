/**

Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

Example:

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

**/


function spiralCopy(inputMatrix) {
  let output = [];
  let leftMostCol = 0,
      rightMostCol = inputMatrix[0].length-1,
      topMostRow = 0,
      bottomMostRow = inputMatrix.length-1;
  let currRow, currCol;
  // iterate this pattern below for inputMatrix.length/2 amount of times
  for (let i = 0; i < Math.ceil(inputMatrix.length/2); i++) {
    // top border (iterating through the length of the row)
    currRow = topMostRow;
    for (let col = leftMostCol; col <= rightMostCol; col++) {
      output.push(inputMatrix[currRow][col]); // here
    }
    // right border col values excluding 1st and last row(col=rightMost)
    currCol = rightMostCol;
    for (let row = topMostRow+1; row <= bottomMostRow-1; row++) {
      output.push(inputMatrix[row][currCol]);    
    } 
    // bottom border (iterating through the length, start=length-1, end=0)
    currRow = bottomMostRow;
    if (bottomMostRow !== topMostRow) {
      for (let col = rightMostCol; col >= leftMostCol; col--) {
        output.push(inputMatrix[currRow][col]); // here
      }  
    }
    
    // left border col values excluding 1st and last row (col=leftMost)
    currCol = leftMostCol;
    for (let row = bottomMostRow-1; row >= topMostRow+1; row--) {
      output.push(inputMatrix[row][currCol]);    
    }  
    
    leftMostCol++;
    rightMostCol--;
    topMostRow++;
    bottomMostRow--;
  }
  
  console.log(output);
  return output;
}