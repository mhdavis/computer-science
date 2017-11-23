/*
  Write a function that translates a string to
  pig latin.

  Pig Latin takes the first consonant (or consonant
  cluster) of an English word, moves it to the
  end of the word and suffixes an "ay".

  If a word begins with a vowel you just add "way"
  to the end.

  Input strings are guarenteed to be english words
  in all lowercase.
*/


function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var arr = str.split('');

  // if the first letter is a vowel
  if (vowels.indexOf(str[0]) !== -1) {
    return str + "way";
  }

  // if the first letter is NOT a vowel
  var indices = [];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        indices.push(arr.indexOf(arr[i]));
      }
    }
  }

  var pivot = indices[0];
  var front = str.slice(0, pivot);
  var back = str.slice(pivot, str.length);
  var latin = back + front + "ay";

  return latin;
}

console.log(translatePigLatin("eight"));
// => eightway
console.log(translatePigLatin("california"));
// => aliforniacay
