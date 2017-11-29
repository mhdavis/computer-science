/*
  Given a positive integer num, return
  the sum of all odd Fibonacci numbers that
  are less than or equal to num.
*/

function sumFibs(num) {
  var fib = fibonacci(num);

  var total = 0;
  // add only odd values of fibonacci
  // array to total
  for (var i=0; i < fib.length; i++) {
    if (fib[i] % 2 !== 0 && fib[i] <= num) {
      total += fib[i];
    }
  }

  return total;
}

// helper function that generates
// an array with num terms of the
// fibonacci sequence
function fibonacci(num) {
  var arr = [];
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    arr.push(b);
    num--;
  }

  return arr;
}

console.log(sumFibs(4));
// => 5
console.log(sumFibs(75025));
// => 125721
