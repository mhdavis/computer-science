/*
  Write a function which returns an
  array consisting of the largest
  number from each provided sub-array.
  For simplicity, the provided array will
  contain exactly 4 sub-arrays.
*/

function largestOfFour(arr) {
  largestArr = [];

  for (var i=0; i < arr.length; i++) {
    var largest = 0;
    var innerArr = arr[i];
    for (var j=0; j < innerArr.length; j++) {
      if (innerArr[j] >= largest) {
        largest = innerArr[j];
      }
    }
    largestArr.push(largest);
  }

  return largestArr;
}

console.log(largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]]
));
// => [5, 27, 39, 1001]
