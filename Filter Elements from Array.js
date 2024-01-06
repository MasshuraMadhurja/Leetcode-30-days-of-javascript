// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var filteredArr = [];

    // return arr.filter(function (element, index) {
    //     return fn(element, index);
    // });
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};

// Example usage:
var arr = [0, 10, 20, 30];

var greaterThan10 = (n) => {
    return n > 10;
};

var firstIndex = (n, i) => {
    return i === 0;
};

var plusOne = (n) => {
    return n + 1;
};

const counter = filter(arr, greaterThan10);
console.log(counter);  // Output: [20, 30]
