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
