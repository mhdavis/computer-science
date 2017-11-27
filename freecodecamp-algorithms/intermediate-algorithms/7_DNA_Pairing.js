/*
  The DNA strand is missing the pairing
  element. Take each character, get its
  pair, and return the results as a
  2D array.

  Base pairs are a pair of AT and CG.
  Match the missing element to the provided
  character.

  REturn the provided chracter as the
  first element in each array.
*/

function pairElement(str) {
  var arr = [];

  // for each element in the string
  for (var i=0; i < str.length; i++) {
    // create a sub array
    var subArr = [];
    // push the ith base pair in the subarray
    subArr.push(str[i]);
    // then push the corresponding base pair
    // into the subarray
    switch (str[i]) {
      case "A":
        subArr.push("T");
        break;
      case "T":
        subArr.push("A");
        break;
      case "C":
        subArr.push("G");
        break;
      case "G":
        subArr.push("C");
        break;
    }
    // push the subarray into the main array
    arr.push(subArr);
  }
  // return the main array
  return arr;
}

console.log(pairElement("GCA"));
// => [["G","C"],["C","G"],["A","T"]]
