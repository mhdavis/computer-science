/*
  Check if the predicate (second argument)
  is truthy on all elements of a collection
  (first argument). Remember, you can access
  object properties through either dot notation
  or [] notation.
*/

function truthCheck(collection, pre) {
  var total = 0;
  for (var i in collection) {
    if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
      total++;
    }
  }
  return total === collection.length;
}

console.log(
  truthCheck([{"single": "yes"}], "single")
);
// => true

console.log(
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
);
// => true
