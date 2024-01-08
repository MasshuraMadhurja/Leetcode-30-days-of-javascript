// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the 
//original elements in arr, but consists of subarrays each of length size. The length of the last 
//subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

var chunk = function (arr, size) {
    let l = Object.keys(arr).length;
    let n = Math.ceil(l / size);
    if (size < l) {
      let result = [];
  
      for (let i = 0; i < n; i++) {
        let chunk = arr.slice(i * size, (i + 1) * size);
        result.push(chunk);
      }
  
      return result;
    } else if(l===0){
          return arr;
      } else {
          return [arr];
      }
  };
  
  const arr = [1, 9, 6, 3, 2];
  const size = 3;
  console.log(chunk(arr, size));