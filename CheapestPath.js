/*
  I: rootNode
  O: number  (cheapest sales path) 
  
  cheapest = 7
  1: [0, 5, 4] = 9
  2: [0, 3, 2, 1, 1] = 7
  3: [0, 3, 0, 10] = 13
  4: [0, 6, 1] = 7
  5: [0, 6, 5] = 11
  
*/
function getCheapestCost(rootNode) {
  if (rootNode.children.length < 1) {
    // base case
    return rootNode.cost;
  } else (rootNode.children.length > 1) {
    var sum = null;
    for (var child of rootNode.children) {
      let newSum = getCheapestCost(child);
      
      if (newSum < sum) {
        sum = newSum;
      }
    }
    
  } 
  return sum + rootNode.cost;
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
}
