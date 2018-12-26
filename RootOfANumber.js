/*
  Root of Number
Many times, we need to re-implement basic functions without using any standard library functions already implemented. For example, when designing a chip that requires very little memory space.

In this question we’ll implement a function root that calculates the n’th root of a number. The function takes a nonnegative number x and a positive integer n, and returns the positive n’th root of x within an error of 0.001 (i.e. suppose the real root is y, then the error is: |y-root(x,n)| and must satisfy |y-root(x,n)| < 0.001).

Don’t be intimidated by the question. While there are many algorithms to calculate roots that require prior knowledge in numerical analysis (some of them are mentioned here), there is also an elementary method which doesn’t require more than guessing-and-checking. Try to think more in terms of the latter.

Make sure your algorithm is efficient, and analyze its time and space complexities.

Examples:

input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3


  I: number, number
  O: double (0.001)
  
  3*3 = 9
  
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  5*5 = 25
  3*3 = 9
  
  [0, 1, 2, 3, 4, 5, 6, 7]
  
  3.5*3.5 = X
  0 - 3.5
  3.5/2 = 1.75
  1.75*1.75 = 

*/

function root(x, n) {
  let left = 0,
      right = x, // 4
      middle;
  let current;
  while (Math.abs(left - right) >= 0.001)  {
    middle = (right+left)/2;
    current = Math.pow(middle, n);
    if (current > x) {
      right = middle;
    } else if (current < x) {
      left = middle;
    } else {
      return middle;
    }
  }
  return middle;
}

/*
  time complexity: y+log(x) => log(x)
  space complexity: constant
*/

console.log(root(4, 2));