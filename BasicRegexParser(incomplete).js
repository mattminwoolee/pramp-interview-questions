/*
Basic Regex Parser
Implement a regular expression function isMatch that supports the '.' and '*' symbols. The function receives two strings - text and pattern - and should return true if the text matches the pattern as a regular expression. For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

In case you aren’t familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.' is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter (see fourth and fifth examples). For more information on regular expression matching, see the Regular Expression Wikipedia page.

Explain your algorithm, and analyze its time and space complexities.

Examples:

input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "abbb", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true

  I: string text, string pattern
  O: boolean
  
  'acd', '.b*cd' -> true
  
  text: acd
  pattern: .cd
  
*/
function isMatch(text, pattern) {
  /*
  let pointerText = 0,
      pointerPattern = 0;
  
  while (pointerText < text.length) {
    if (text[pointerText] != pattern[pointerPattern]) {
      if (text[pointerText] === '.' || pattern[pointerText] === '.'){
        
      } else if (text[pointerText] === '*' ||) {
        
      }
    }  
  }
  
  */
  
  let checkWord = (txt, pattrn, counter ) => {
    if (txt === text && txt === pattrn) {
      return true;
    }
  }
  
  checkWord('', '', 0)
  
}