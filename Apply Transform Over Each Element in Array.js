// Given an integer array arr and a mapping function fn, return a new array with a transformation
// applied to each element.
//The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//Please solve it without the built-in Array.map method.

//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
var map = function (arr, fn) {
  //return arr.map(fn);
  var resultArray = [];

  for (var i = 0; i < arr.length; i++) {
    resultArray.push(fn(arr[i], i));
  }

  return resultArray;
};

var arr = [1, 2, 3];
const plusone = (n) => {
  return n + 1;
};
var plusI = (n, i) => {
  return n + i;
};
var constant = () => {
  return 42;
};

const counter = map(arr, plusone);
console.log(counter);
