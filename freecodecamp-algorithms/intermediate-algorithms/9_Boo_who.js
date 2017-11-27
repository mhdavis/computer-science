/*
  Check if a value is classified as a boolean
  primative. return true or false.

  Boolean primitives are true or false.
*/

function booWho(bool) {

  if (typeof(bool) === "boolean") {
    return true;
  }
  return false;
}

booWho(null);
// => false
