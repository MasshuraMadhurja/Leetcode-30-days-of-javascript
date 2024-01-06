// Given an integer n, return a counter function. This counter function initially returns n
// and then returns 1 more than the previous value every subsequent time
// it is called (n, n + 1, n + 2, etc).

function createCounter(n) {
  let counterValue = n;

  function counter() {
    const current = counterValue;
    counterValue += 1;
    return current;
  }

  return counter;
}

// Example usage:
const counter = createCounter(10);

console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12
