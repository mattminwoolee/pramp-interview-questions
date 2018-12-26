/*
Smallest Substring of All Characters
Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.

Come up with an asymptotically optimal solution and analyze the time and space complexities.

Example:

input:  arr = ['x','y','z'], str = "xyyzyzyx"

output: "zyx"

  I: array, string
  O: shortest substring (of string with all the elements in array)
  
  input:  arr = ['x','y','z'], str = 
  
  arr = ['a','b','c']
  str = "abxvcxkadbc"
                 ^                    abxvc
                   ^                  
  substr = xyyz, xbcyyz

  Notes:
    - two pointers
    - creat dictionary to check constant look up
    - reduce the size by moving left pointer up
    - if you lose an arr element, move right pointer up to find the lost arr elem
  
*/
function getShortestUniqueSubstring(arr, str) {
  const dict = {};
  for (let char of arr) {
    dict[char] = true;
  }
  
  let output = '';

  for (var i = 0; i < str.length; i++) {
    let substr = '' // "A"
    let counter = 0;
    let j = i;
    while (counter < arr.length || j < str.length) {
      let char = str[j];
      substr += char

      if (dict[char]) {
        dict[char] = false
        counter++;
      }
      j++;
    }
    // reset the dictionary values to true
    for (let key in dict) {
      dict[key] = true;
    }
    if (counter === arr.length ) {
      if (output === '') {
        output = substr; 
      } else if (substr.length < output.length) {
        output = substr;
      }
    }
  } 
  
  return output;
}

