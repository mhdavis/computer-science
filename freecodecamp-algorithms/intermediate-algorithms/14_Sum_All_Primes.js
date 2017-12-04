/*
  Write a function that sums all
  the prime numbers of up to a given
  num
*/

/*
An integer is prime if it
is not divisible by any prime less
than or equal to its square root
*/
function isPrime (n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

function sumPrimes(num) {

  var total = 0;
  for (var i=0; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }

  return total;
}

console.log(sumPrimes(10));
// => 17
console.log(sumPrimes(977));
// => 73156
