/*
  Write a function that checks if a string (str)
  ends with the given target (target). Do so
  without using the ES2015 method .endsWith()
*/

function confirmEnding(str, target) {
  var index = str.length - target.length;
  var end = str.substr(index, target.length);

  if (end === target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "n")); // => true
console.log(confirmEnding("Open sesame", "same")); // => true
console.log(confirmEnding("he has to give a new name", "name")); // => true
