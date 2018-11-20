/**

Array of Array Products
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.
Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
**/


// I: array
// O: array
// C: n/a
// E: empty array

/**
  [8, 10, 2]
  
  0 => right: 2, 10 left: null
  1 => right: 2 left: 8
  2 => right: null left: 8, 10
  product = 1
  
  [1 (R: 2, 10), 1 (R: 2 L: 8), 1 (L: 8*10)]
  
  [20, 16, 80]
  [20, 16, 80]
  product = 80

  // iterate from the left side
  curr *= product
  product *= curr
  
  product = 20;
  // iterate from the right side
  curr *= product
  product *= curr

**/

function arrayOfArrayProducts(arr) {
  /*
  if (arr.length <= 1) {
    return [];
  }
  // stack number of for loops for how long the array is
  
  let store = {};
  for (let num = 0; num < arr.length; num++ ) {
    // arr[num] = 8
    store[num] = 1;
    for (let i = 0; i < arr.length; i++) {
      // first iteration which is 8
      if (i !== num) {
        store[num] *= arr[i];
      }
    }  
  }
  console.log(store);
  let output = [];
  for (var key in store) {
    output.push(store[key]);
  }
  return output;
  
  
  
  // iterate from the left side
  curr *= product
  product *= curr
  
  product = 20;
  // iterate from the right side
  curr *= product
  product *= curr
  */

  
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    arr[i] = 1;
    arr[i] *= product;
    product *= arr[i];
  }
  
  product = 1;
  for (var j = arr.length-1; j >= 0; j--) {
    
    arr[j] *= product;
    product *= arr[j];
  }
  
  return arr;
}