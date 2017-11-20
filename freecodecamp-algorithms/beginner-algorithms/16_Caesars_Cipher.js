/*
  One of the simplest and most widely known
  ciphers is a Caesar cipher, also known as a
  shift cipher. In a shift cipher, the meanings
  of the letters are shifted by some set amount.

  A common mdern use is the ROT13 cipher, where
  the values of the letters are shifted by 13
  places.

  Write a function which takes a ROT13 encoded
  string as input and returns a decoded string.

  PARAMETERS:
  All letters will be uppercase. Do NOT transform
  non-alphabetic characters.
*/

function rot13(str) {
  /*
  - split the string into an array
  - map each character to its unicode value +/- 13
  depending on its position (if it is from A-Z)
  otherwise ignore special characters
  - join and return the decoded string
  */
  var decoded =
   str.split('')
      .map(function(char) {
        // get charcode of current string letter
        var x = char.charCodeAt(0);
        // is the charcode is of a non-alphabetic
        // character, return the character.
        if (x < 65 || x > 90) {
          return String.fromCharCode(x);
        }
        // otherwise get the charcode of the shifted
        // letter.
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
      })
      .join('');

  return decoded;
}

console.log(rot13("SERR PBQR PNZC"));
// => "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));
// => "FREE PIZZA!"
