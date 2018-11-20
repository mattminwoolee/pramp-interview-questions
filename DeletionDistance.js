/***
Deletion Distance
The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
We cannot get the same string from both strings by deleting 2 letters or fewer.
Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

Examples:

input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0

// y ello w, h ello 
// 'ello', [y, w, h]
// map = {y, e, l, l, o, w}
// eliminate = [h]
// ello -> 
***/


function deletionDistance(str1, str2) {
  // int[][] dp = new int[str1.length()+1][str2.length()+1];
  /*
  ex: dog, frog
  row i, column:j 
         0   1   2   3
             d   o   g
    0    0   1   2   3
    1 f  1   2   3
    2 r  2   3   4
    3 o  3   4   3
    4 g  4   5   4
          
    "", "f" -> 1
    "do", "fro" -> 3
          
  */
  
 
}