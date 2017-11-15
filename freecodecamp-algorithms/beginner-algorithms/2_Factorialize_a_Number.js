/*
Write a function that takes an
numbers and returns it's
factorial product
*/

function factorialize(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorialize(num-1);
}

console.log(factorialize(5)); // => 120
