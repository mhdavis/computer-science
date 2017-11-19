/*
  Write a function that removes all falsy
  values from an array.
*/

function bouncer(arr) {
  return arr.filter(function (entry) {
    if (entry) {
      return entry;
    }
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
// => [7, "ate", 9]
