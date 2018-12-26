/*
 Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

// I: array 
// O: array (reversed words)
/**
  I: arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
  
*/
// let I = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
               // 'm', 'a', 'k', 'e', 's', '  ',
               // 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]
function reverseWords(arr) {
  // ['practice', 'makes', 'perfect']
  // ['perfect', 'makes', 'practice']
  
  let output = [];
  let word = [];  
  
  for (let i = arr.length-1; i >= 0; i-- ) {
    if (arr[i] != ' '){
      word.push(arr[i]) // [e, c, i, t, c, a, r, p]  
    }
    
    if (arr[i] === ' ' || i === 0) {

      word.reverse();
      output = output.concat(word)
      if (i > 0) output.push(' ');
      word = [];
    }
  }
  return output;
}

// Are you there
