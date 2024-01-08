/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (typeof obj === 'object' && Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
};

let obj = {"x": 5, "y": 42};
console.log(isEmpty(obj));  // Output: false
