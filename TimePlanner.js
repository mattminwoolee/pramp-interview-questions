/*
Time Planner
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.



  I: arr1, arr2, duration
  O: tuple (availability start, start + duration);

  Ex:
    dur = 8;
    slotsA = [[10, 50], [60, 120], [140, 210]]
                   ^
                
    slotsB = [[0, 15], [60, 70]]
                         ^
    largest = 10
    neededMax = largest + duration = 18
if needMAx < min(arr1[1], arr2[1])
found!\\0
    if both arr[1] > neededMax, 
      we found solution
    else find minimum of the two and move pointer
    
    O = [10, 18]
*/    

function meetingPlanner(slotsA, slotsB, dur) {
  let pointerA = 0,
      pointerB = 0,
      largest,
      neededMax;
  
  while (pointerA < slotsA.length && pointerB < slotsB.length) {
    // find largesetStart
    largest = Math.max(slotsA[pointerA][0], slotsB[pointerB][0]);
    neededMax = largest + dur;
    if ( neededMax <= Math.min(slotsA[pointerA][1], slotsB[pointerB][1])) {
      return [largest, largest+dur];
    } else {
      if (slotsB[pointerB][1] < slotsA[pointerA][1]) {
        pointerB++;
      } else {
        pointerA++;
      }
    }
  }
  return [];
}

let slotsA = [[10, 50], [60, 120], [140, 210]],
        slotsB = [[0, 15], [60, 70]],
        dur = 8
console.log(meetingPlanner(slotsA, slotsB, dur))