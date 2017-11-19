/*
  Write a function that returns true
  if the string in the first element of the
  array contains all of the letters of the
  string in the second element of the array.
*/

function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();

  var secondArr = second.split('');
  for (var i=0; i < secondArr.length; i++) {
    if (first.indexOf(secondArr[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));
// => false
console.log(mutation(["Mary", "Aarmy"]));
// => true
console.log(mutation(["Alien", "line"]));
// => true
