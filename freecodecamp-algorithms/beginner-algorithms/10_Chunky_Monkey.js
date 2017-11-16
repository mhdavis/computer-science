/*
  Write a function that splits an array
  (first argument) into groups the length
  of size (second argument) and returns
  them as a two dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  var chunkyArr = [];
  for (var i=0; i < arr.length; i += size) {
    var sliced = arr.slice(i, i + size);
    chunkyArr.push(sliced);
  }
  return chunkyArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// => [ ['a', 'b'], ['c', 'd'] ]
