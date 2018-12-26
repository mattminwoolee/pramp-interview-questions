/*
Pairs with Specific Difference
Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.

Note: the order of the pairs in the output array should maintain the order of the y element in the original array.

  I: arr, k
  O: arr of pairs 
  
  Ex:
   arr = [0, -1, -2, 2, 1], k = 1
                        ^
              
      target = element - k
      el = target + k
      target -> 0
      
      element: (element + k) <-- don't do this if key is in dict
      (element - k): (element) <-- check if corresp exists in dict already
  dict = { 
     0: 1 
    -1 : 0,
     -2: -1,
     -3: -2,
      2: 3,
      1: 2,
  }
   for each iteration you're storing the el as key and target as key
   
   [0, -1] [2, 1] [1, 0] []
*/

function findPairsWithGivenDifference(arr, k) {
  let dict = {};
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let corresp = element - k;
    
    if (dict[element]) {
      output.push([dict[element], element]);
    } else {
      dict[element] = element + k;
    }
    
    if (dict[corresp]) {
      output.push([dict[corresp], corresp]);
    } else {
      dict[corresp] = element;
    }
  }
  return output;
}