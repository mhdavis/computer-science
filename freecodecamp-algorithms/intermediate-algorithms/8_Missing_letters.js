/*
  Find the missing letter in the passed letter
  range and return it.

  If all letters are present in the range, return
  undefined.
*/

function fearNotLetter(str) {

  // populate the array of supposed
  // partial range of letters with
  // the corresponding charcodes
  var partialRange = [];
  for (var i=0; i < str.length; i++) {
    partialRange.push(str.charCodeAt(i));
  }

  // populate fullRange array and letters array
  // with charcodes.
  var fullRange = [];
  var start = partialRange[0];
  var end = partialRange[partialRange.length-1];
  for(var j=start; j <= end; j++) {
    fullRange.push(j);
  }

  // find the sum of the charcodes for the full range
  var fullTotal = fullRange.reduce(function (curr, val) {
    return curr + val;
  }, 0);

  // find the sum of the charcodes for the partial range
  var partialTotal = partialRange.reduce(function (curr, val) {
    return curr + val;
  }, 0);

  // calculate the difference, which corresponds to the
  // missing charcode in the range.
  var diff = fullTotal - partialTotal;

  // if there is no difference, return undefined,
  // otherwise convert the difference to the corresponding
  // missing letter via the charcode.
  if (diff === 0) {
    return undefined;
  } else {
    return String.fromCharCode(diff);
  }
}

console.log(fearNotLetter("abce"));
// => 'abcde'
