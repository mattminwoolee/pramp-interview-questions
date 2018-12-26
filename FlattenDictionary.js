/*
  I: dict
  O: dict (flattened)
  
  
*/
function flattenDictionary(dict) {
  let output = {}
  
  let traverse = (value, key) => {
    // base case
    if (typeof value === 'string' || typeof value === 'number') {
      output[key] = value;
      return;
    } else {
      let newDict = value; 
      for (let keys in newDict) {
        let newKey; 
        if (key === '') {
          newKey = keys;
        } else if (keys !== '') {
          newKey = key + '.' + keys;
        } else {
          newKey = key;
        }
        traverse(newDict[keys], newKey);
      }
    }
  }
  
  // for (var key in dict) {
  //   traverse(dict[key], key)
  // }
  traverse(dict, '')
  return output;
}
let dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

let dict2 = {"Key1" : "1"}
console.log(flattenDictionary(dict2));

/*
  Time Complexity: O(n) n being number of key value pairs
  Space complexity: O(n) n being the number of key value pairs
*/