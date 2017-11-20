/*
  Return the lowest index at which a value (second argument)
  should be inserted into an array (first argument) once it
  has been sorted. The returned value should be a number.
*/

function getIndexToIns(arr, num) {
  // sort the array from least to greatest.
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });

  var index;
  for (var i=0; i < sorted.length; i++) {
    // if the value in the array is bigger than target num
    if (sorted[i] >= num) {
      // return the index of the ith index in the array
      index = i;
      return index;
    }
  }
  // if the target num is bigger than any value in the array
  if (!index) {
    // suggest to place it last in the array
    return sorted.length;
  }
}

console.log(getIndexToIns([40, 60], 50));
// => 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// => 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// => 2
console.log(getIndexToIns([2, 5, 10], 15));
// => 2
