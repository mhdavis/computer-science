/*
  Perform a search and replace on
  the sentence using the arguments
  provided and return the new sentence.

  First argument is the sentence to
  perform the search and replace on.

  Second argument is the word that you will
  replace (before).

  Third argument is what you will be replacing
  the second argument with (after)
*/

function myReplace(str, before, after) {
  // if the first letter of before is uppercase
  if (before[0] === before[0].toUpperCase()) {
    var capAfter = after.slice(0,1).toUpperCase() + after.slice(1, after.length);
    return str.replace(before, capAfter);
  }
  return str.replace(before, after);
}

// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// );
// => "A quick brown fox leaped over the lazy dog"
console.log(
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
);
// => "He is Sitting on the couch"
