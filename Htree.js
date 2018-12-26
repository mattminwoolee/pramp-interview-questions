// drawline takes x y coord
// function drawLine(x1, y1, x2, y2):


/*
  Depth 1:
  length: 4
  
  top left: 4, 4
  top right:  8, 4
  bottom right: 4, 0
  bottom left: 4, 0
  
  
  0, 0
  top left: midX - length/2, midY + length /2
  top right: midX + length/2, midY + length /2
  bottom left: midX - length/2, midY - length/2
  bottom right: midX + length/2, midY - length/2
  
*/

function drawHTree (x, y, length, depth, counter = 0) {
  // base case
  if (counter === depth) {
    return;
  } 
  // draw all three lines
  let leftX = x - length/2,
      rightX = x + length/2,
      topY = y + length/2,
      bottomY = y - length/2;
  
  drawline(leftX, topY, leftX, bottomY); // left vertical
  drawline(leftX, y, rightX, y); // horizontal line
  drawline(rightX, topY, rightX, bottomY); // right vertical
  
  let newCounter = counter + 1;
  drawHTree(leftX, topY, Math.sqrt(length), depth, newCounter)
  drawHTree(leftX, bottomY, Math.sqrt(length), depth, newCounter)
  drawHTree(rightX, topY, Math.sqrt(length), depth, newCounter)
  drawHTree(rightX, bottomY, Math.sqrt(length), depth, newCounter)  
}

exponential time complexity for O(n) depth
call stack linear to depth
improvements on code s