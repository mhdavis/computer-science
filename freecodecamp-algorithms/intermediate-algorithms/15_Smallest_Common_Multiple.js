/*
  Finding the smallest common multiple
  of the provided parameters that can
  be evenly divided by both, as well
  as by all sequential numbers in the
  range between these parameters.

  The range will be an array of two numbers
  that will not necessarily be in numerical
  order.
*/

function smallestCommons(arr) {

  var sorted = arr.sort(function(a, b) {
      return a - b;
  });

  var range = [];
  for (var i = sorted[0]; i <= sorted[1]; i++) {
    range.push(i);
  }

  var isNotlcm = true;
  var lcm = 0;
  while (isNotlcm) {
    lcm++;
    for (var j=range[0]; j <= range[range.length-1]; j++) {
      if (lcm % j !== 0) {
        break;
      } else if (j == range[range.length-1]) {
        isNotlcm = false;
      }
    }
  }

  return lcm;
}

console.log(smallestCommons([1,5]));
// => 60
console.log(smallestCommons([1,13]));
// => 360360
console.log(smallestCommons([23,18]));
// => 6056820
