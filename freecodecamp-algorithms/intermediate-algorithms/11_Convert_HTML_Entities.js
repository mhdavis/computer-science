/*
  Convert the characters &, <, >, "
  (double quote), and ' (apostrophe)
  in a string to their corresponding HTML
  entities.
*/

function convertHTML(str) {
  var conversions = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  var splat = str.split('');

  for (var i=0; i < splat.length; i++) {
    if (conversions.hasOwnProperty(splat[i])) {
      splat[i] = conversions[splat[i]];
    }
  }

  return splat.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
// => Dolce &amp; Gabbana
