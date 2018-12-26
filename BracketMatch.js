/*
Bracket Match
A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.

Examples:

input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2

  I: string of brackets
  O: number of brackets

Case 1:
  input:  text = “())(”
                      ^
  
  stack: [")"] => size : 1
  
  if we come across a ")" and the current stack is empty, increment a counter
  
  at the end we take size of the stack and add counter
    output = size + counter
*/
function bracketMatch(text) {
  let output,
      stack = [],
      rightBracketCounter = 0;
 
  for (let i = 0; i < text.length; i++ ) {
    if ( text[i] === "(") {
      stack.push(")");
    } else {
      // 1st, check the stack for empty
      if ( stack.length < 1) {
        rightBracketCounter++;
      } else {
        stack.pop();
      }
    }
  }
  
  output = stack.length + rightBracketCounter;
  return output;
}


var test = (x) => {
  var x = 0;
  return {
    get: () => {
      console.log(x);
    }
  }
}

test().get();
