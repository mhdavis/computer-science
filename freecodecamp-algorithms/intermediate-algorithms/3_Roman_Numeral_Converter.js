function convertToRoman(num) {
  // create empty string
  var product = "";
  var roman = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
  ];
  var arabic = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];

  // iterate for a length of arabic array
  for(var i=0; i < arabic.length; i++) {
    // while original number is larger than
    // our inputted arabic array
    while(num >= arabic[i]) {
      // add its equivalent roman numeral to our
      // product string
      product += roman[i];
      // subtract the value from the original number
      // to end the while loop eventually
      num -= arabic[i];
    }
  }

   return product;
}

console.log(convertToRoman(36));
// => XXXVI
console.log(convertToRoman(97));
// => XCVII
console.log(convertToRoman(891));
// => DCCCXCI
