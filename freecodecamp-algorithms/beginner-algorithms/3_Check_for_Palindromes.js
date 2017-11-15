/*
Write a function that returns true if a string
is a palindrome. The function should also remove
special characters and disregard casing in letters
*/

function palindrome(str) {
  // The regex expression removes all non-alphanumeric characters
  var removedCharStr = str.replace(/[\W_]/g,'');
  console.log(removedCharStr);
  var lwr = removedCharStr.toLowerCase();
  if (lwr === lwr.split('').reverse().join('')) {
    return true;
  }
  return false;
}

console.log(palindrome("A man, a plan, a canal. Panama")); // => true
console.log(palindrome("eye")); // => true
console.log(palindrome("My age is 0, 0 si ega ym.")); // => true
console.log(palindrome("0_0 (: /-\ :) 0-0")); // => true
console.log(palindrome("five|\_/|four")); // => false
