/*
Award Budget Cuts
The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.

Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).

Analyze the time and space complexities of your solution.

Example:

input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190

output: 47 # and given this cap the new grants array would be
           # [2, 47, 47, 47, 47]. Notice that the sum of the
           # new grants is indeed 190
           
  S1: 25 => 20
  s2: 31 => 30
  
  cap = 30
  budget = 50
  
  I: array of original grants, new budget
  O: cap such that least num of recipients are affected
  
  190/5 = 38
  
  C = 38
  
  36/4 = 9
  C = 47
  iterating over the grants
*/
function findGrantsCap(grantsArray, newBudget) {
  let currentBudget = newBudget,
      counter = grantsArray.length,
      cap = newBudget/grantsArray.length;
  
  grantsArray.sort( (a, b) => a-b );
  for (var grant of grantsArray) {
    if (grant < cap) {
      counter--;
      let unusedGrant = cap - grant;
      let remaining = unusedGrant/counter;
      cap += remaining;
    }
  }
  
  return Number.isInteger(cap) ? cap : cap.toFixed(1);
}
//let grantsArray = [2, 100, 50, 120, 1000], newBudget = 190;
//console.log(findGrantsCap(grantsArray, newBudget))

// linear time
// constant space