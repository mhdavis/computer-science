/*
  Create a function that sums two arguments
  together. If only one argument is provided,
  then return a function that expects one argument
  and returns the sum.
*/

function addTogether() {
  var first = arguments[0];
  var second = arguments[1];

  if (typeof(first) !== "number") {
    return undefined;
  }

  function addSecondArg(other) {
    if (typeof(other) !== "number") {
      return undefined;
    }
    return first + other;
  }

  if (second) {
    if (typeof(second) !== "number") {
      return undefined;
    }
    return first + second;
  } else {
      return addSecondArg;
  }
}

console.log(
  addTogether(2,3)
);
// => 5

console.log(
  addTogether(3)(3)
);
// => 6
