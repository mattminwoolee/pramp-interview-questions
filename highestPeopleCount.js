/*
  - array is sorted by timestamp
  
  I: an array of [timestamp, num visitors, exit/entrance]
  O: timestamp of busiest time
  
  data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]
   
  1487799425: 14 -> 10 -> 8
  1487800378: 18 
  1487801478: 0 -> 18
  1487901013: 17 
  1487901211: 24 -> 17
  
  
  Test:
  [[1487799425,14,1], 14
  [1487799425,4,0],   10
  [1487799425,2,0],   8
  [1487800378,10,1],   
  [1487801478,18,0],
  [1487801478,18,1],
  [1487901013,1,0],
  [1487901211,7,1],
  [1487901211,7,0]]
  

  
*/
function findBusiestPeriod(data) {
  let dict = {},
      currentTimeStamp, // 1487799425
      currentAmountOfPeople;
  
  if (data[0][2] === 1) {
    currentAmountOfPeople = data[0][1]
  } else {
    currentAmountOfPeople = -(data[0][1]);
  }
  
  for (let i = 0; i < data.length; i++) {
    currentTimeStamp = data[i][0];
    // first check if dict contains
    if ( !dict[currentTimeStamp] ) {
      dict[currentTimeStamp] = currentAmountOfPeople;
      if (data[i][2] === 1) {
        dict[currentTimeStamp] += data[i][1];
        currentAmountOfPeople += data[i][1];
      } else {
        currentAmountOfPeople -= data[i][1];
        dict[currentTimeStamp] -= data[i][1];
      }
    } else {
      if (data[i][2] === 1) {
        currentAmountOfPeople += data[i][1];
        dict[currentTimeStamp] += data[i][1];
      } else {
        currentAmountOfPeople -= data[i][1];
        dict[currentTimeStamp] -= data[i][1];
      }
    }
  }
  
  console.log(dict);
  // iterate over the dict
  let highestTimeStamp,
      highestPeopleCount = -5000;
  for (let timeStamp in dict) {
    if ( dict[timeStamp] > highestPeopleCount) {
      highestTimeStamp = Number(timeStamp);
      highestPeopleCount = dict[timeStamp];
    }
  }
  
  return highestTimeStamp
}