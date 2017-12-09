/*
  Return an English translated sentence of
  the passed binary string.

  The Binary string will be space seperated.
*/

function binaryAgent(str) {

  // function that converts binary numbers to decimal numbers
  function convertToDecimal (binary) {
    // order a single binary entry from smallest power to highest
    var ordered = binary
    .split('')
    .reverse()
    .map((elem) => parseInt(elem));

    var total = 0;
    for (var i=0; i < ordered.length; i++) {
      if (ordered[i] === 1) {
        total += Math.pow(2, i);
      }
    }
    return total;
  }

  var arr = str.split(' ');
  var converted = arr
  .map(convertToDecimal)
  .map((num) => {
    return String.fromCharCode(num);
  });

  return converted.join('');
}

console.log(
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
);
// => "Aren't bonfires fun!?"
