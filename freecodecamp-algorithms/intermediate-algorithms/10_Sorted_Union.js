/*
  Write a function that takes two or
  more arrays and returns a new array of
  unique values in the order of the original
  provided arrays.

  In other words, all values present from
  all arrays should be included in their original
  order, but with no duplicates in the final array.

  The unique numbers should be sorted by their
  original order, but the final array should
  not be sorted in numerical order.
*/

function uniteUnique(arr) {
  var args = [];

  // push all arguments into args array
  for (var i=0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  // flatten args array if it contains
  // multipli-layered sub-arrays
  var flatten = args.reduce(function (acc, curr) {
    return acc.concat(curr);
  }, []);

  // Reduce the array to remove any duplicate
  // numerical entries
  var filter = flatten.reduce(function(finalArr, val) {
      if (finalArr.indexOf(val) === -1) {
        finalArr.push(val);
      }
      return finalArr;
  }, []);

  return filter;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// => [1, 3, 2, 5, 4]
