/*
  Write a function that finds the longest
  word in a string and returns the length
  of said longest word.
*/

function findLongestWord(str) {
  var arr = str.split(' ');
  var longest = 0;
  for (var i=0; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// => 6
