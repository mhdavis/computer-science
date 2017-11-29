function spinalCase(str) {

  // Create a regex expression
  // for the white space
  // and underscores
  var expression = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  // (replace camelcase lettering with space
  // in between.)
  var newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and/or underscore with -
  return newStr.replace(expression, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
// => this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap"));
// => this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show"));
// => the-andy-griffith-show
