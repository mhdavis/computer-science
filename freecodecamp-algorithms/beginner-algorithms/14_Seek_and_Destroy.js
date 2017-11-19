/*
  You will be provided an initial
  array (first arg in the destroyer function)
  followed by one or more arguments. Remove
  all elements from the initial array that are
  of the samve value as any of these arguments.
*/

function destroyer(arr) {
  // create array of args
  var args = [];
  for (var i=1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  var filtered = arr.filter(function (item) {
    // if item is not in args array,
    // return item
    if (args.indexOf(item) == -1) {
      return item;
    }
  });
  return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// => [1, 1]
