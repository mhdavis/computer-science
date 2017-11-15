/*
  Write a function that takes a sentence and title
  cases the words (captializes the first letter
  in each word, while lowercasing the rest.) The
  function should ignore any special characters.
*/

function titleCase(str) {
  var arr = str.split(' ');
  var tcArr = [];
  for (var i=0; i < arr.length; i++) {
    var word = arr[i];
    // the word is only one letter long
    if (word.length === 1) {
      tcArr.push(word.toUpperCase());
    // otherwise
    } else {
      var firstLetter = word.slice(0,1).toUpperCase();
      var remains = word.slice(1, word.length).toLowerCase();
      var casedWord = firstLetter + remains;
      tcArr.push(casedWord);
    }
  }
  var titleCaseSent = tcArr.join(' ');

  return titleCaseSent;
}

console.log(titleCase("I'm a little tea pot"));
// => "I'm A Little Tea Pot"
