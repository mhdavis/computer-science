/*
  Flatten a nested array. You
  must account for varying levels
  of nesting.
*/

function steamrollArray(arr) {

  var flatArray = [];

  // check if an element is an Array
  // if it is NOT, we return it as is
  // otherwise we loop recursively further down
  // into a subarray until we hit another non-array
  // element that we push to our flatted array
  function flatten(elem) {
    if (!Array.isArray(elem)) {
      flatArray.push(elem);
    } else {
      for (var i in elem) {
        flatten(elem[i]);
      }
    }
  }

  arr.forEach(flatten);
  return flatArray;
}

console.log(
  steamrollArray([1, [2], [3, [[4]]]])
);
// => [1, 2, 3, 4]
