/*
Decrypt Message
An infamous gang of cyber criminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking, has recently become a target for the FBI. After intercepting some of their messages, which looked like complete nonsense, the agency learned that they indeed encrypt their messages, and studied their method of encryption.

Their messages consist of lowercase latin letters only, and every word is encrypted separately as follows:

Convert every letter to its ASCII value. Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter. Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word “crime”

Decrypted message:  c r i m e
Step 1: 99  114 105 109 101
Step 2: 100 214 319 428 529
Step 3: 100 110 111 116 113
Encrypted message:  d n o t q
The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small latin letters only, and returns the decrypted word.

Explain your solution and analyze its time and space complexities.

Examples:

input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"

  I: string
  O: string (decrypted word)
  
  97-122 (a-z)
  
  100, 110, 111, 116, 113 
  100, 136, 137, 142, 149
       162  163
       188  189
       214  215
            241
            267
            293
            319
 n =   4     8    12    16
            
*/

function decrypt(word) {
  // 'a'.charCodeAt() => 97
  
  // Step 1:
  let wordArr = word.split('').map( el => el.charCodeAt());  
  // Step 2:
  let n = 0;
  for (var i = 0; i < wordArr.length; i++) {
    let add = n*26;
    wordArr[i] += add;
    n += 4;
  }
  


  // Step 3:
  for (var j = wordArr.length-1; j >= 1; j--) {
    wordArr[j] -= wordArr[j-1];
    if (wordArr[j] < 97) {
      wordArr[j] += 26;
    }
    if (wordArr[j] > 122) {
      wordArr[j] -= 26;
    }
  }
  wordArr[0] -= 1;
  
  console.log(wordArr);  
  // Step 4:
  // String.fromCharCode('a')
  let str = wordArr.map(el => String.fromCharCode(el)).join('');
  return str;
}
let input = 'flgxswdliefy';
console.log(decrypt(input));