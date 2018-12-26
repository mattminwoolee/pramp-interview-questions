/* FINISHED

  Time: O(n^2)
  Space: O(n^2)

Number of Paths
You’re testing a new driverless car that is located at the Southwest (bottom-left) corner of an n×n grid. The car is supposed to get to the opposite, Northeast (top-right), corner of the grid. Given n, the size of the grid’s axes, write a function numOfPathsToDest that returns the number of the possible paths the driverless car can take.

alt the car may move only in the white squares

For convenience, let’s represent every square in the grid as a pair (i,j). The first coordinate in the pair denotes the east-to-west axis, and the second coordinate denotes the south-to-north axis. The initial state of the car is (0,0), and the destination is (n-1,n-1).

The car must abide by the following two rules: it cannot cross the diagonal border. In other words, in every step the position (i,j) needs to maintain i >= j. See the illustration above for n = 5. In every step, it may go one square North (up), or one square East (right), but not both. E.g. if the car is at (3,1), it may go to (3,2) or (4,1).

Explain the correctness of your function, and analyze its time and space complexities.


  I: n (the size of the matrix)
  O: number of paths possible
  
  Case 1:
  I: 4 -> 5
  
  
*/
function numOfPathsToDest(n) {
  let boundary = n -1;
  let counter = 0
  
  let findPath = (x, y) => {
    // base case
    if (x === n-1 && y === n-1) {
      counter++;
      return;
    }
    
    if (x === boundary) {
      let newY = y + 1;
      findPath(x, newY); // North
    } else if (x === y) {
      let newX = x+1;
      findPath(newX, y); // East
    } else {
      let newX = x+1;
      let newY = y+1;
      findPath(newX, y); // East
      findPath(x, newY); // North
    }
  }
  
  findPath(0, 0);
  return counter;
}