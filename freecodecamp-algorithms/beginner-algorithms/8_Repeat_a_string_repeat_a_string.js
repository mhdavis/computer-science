/*
  Write a function that repeats a given
  string (first arg) num times (second arg).
  If the num is not positive, return an empty
  string.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num >= 0) {
   var arr = [];
   for (var i=0; i < num; i++) {
     arr.push(str);
   }
   return arr.join('');
  }
  return '';
}

console.log(repeatStringNumTimes("abc", 3));
// => 'abcabc'
console.log(repeatStringNumTimes("*", 3));
// => '***'
console.log(repeatStringNumTimes("*", -2));
// => ''

// Alternative Solution
function repeatTwo(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
