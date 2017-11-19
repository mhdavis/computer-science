/*
  Write function that returns the remaining
  elements of an array after chopping off
  n elements from teh head of the array
  (the beginning of the array starting on
  the zeroth index)
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var slashed = arr.slice(howMany, arr.length);
  console.log(slashed);
  return slashed;
}

console.log(slasher([1, 2, 3], 2));
// => [3]
