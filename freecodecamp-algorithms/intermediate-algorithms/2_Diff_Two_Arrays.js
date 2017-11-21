/*
  Compare two arrays and return a new array
  with any items only found on one of the
  the two given arrays, but not both.
  In other words, return the Symmetric
  Difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  var concat = arr1.concat(arr2);
  var filtered = concat.filter(function (item) {

    if (arr1.indexOf(item) === -1) {
      if (arr2.indexOf(item) !== -1) {
        return item;
      }
    }

    if (arr2.indexOf(item) === -1) {
      if (arr1.indexOf(item) !== -1) {
        return item;
      }
    }
  });

  return filtered;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// => [4]


/* ALTERNATIVE SOLUTION */
function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}
