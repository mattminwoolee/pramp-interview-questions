/*
  Merging 2 Packages
  Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

  Analyze the time and space complexities of your solution.

  Example:

  input:  arr = [4, 6, 10, 15, 16],  lim = 21

  output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21

  ******WORK******
  I: array (weights), limit
  O: tuple of indices [i, j]
  C: linear
  
  Ex: [4, 6, 10, 15, 16], 21
  
  dict = {4, 6, 11 }
   
   limit = 21 , needed = 21 -15
  
  1st, 2nd, 3rd
  pointer1: 4
  pointer2: 16
  sum = 20
  
*/

function getIndicesOfItemWeights(arr, limit) {
  let dict = {};
  for (var i = 0; i < arr.length; i++) {
    if (!dict[arr[i]]) {
      dict[arr[i]] = [i];  
    } else {
      dict[arr[i]].push(i);
    }
  }
  console.log(dict);
  arr.sort((a, b) => a-b);
  
  let start = 0;
  let end = arr.length-1;
  let sum;
  while (start < end) {
    sum  = arr[start] + arr[end];
    if (sum === limit){
      if (arr[end] === arr[start]) {
        let size = dict[arr[start]].length
        return [ dict[arr[start]][size-1], dict[arr[start]][0] ]
      } else {
        let first = dict[arr[end]][dict[arr[end]].length -1];
        let second = dict[arr[start]][dict[arr[start]].length -1];
        if (first < second) {
          return [second, first];
        } else {
          return [first, second];    
        }
        
      }      
    } else if (sum < limit) {
      start++;
    } else {
      end--;
    }
  }
  return [];
}