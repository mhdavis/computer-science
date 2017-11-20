function sumAll(arr) {
  // sort the provided array to establish min
  // and max
  var sorted = arr.sort(function(a,b) {
    return a-b;
  });

  var diff = sorted[1] - sorted[0];

  // create the array of inbetween values
  var betweenVals = [sorted[0]];
  for (var i=0; i < diff; i++) {
    var item = betweenVals[i] + 1;
    betweenVals.push(item);
  }

  // sum all the values of the array
  var total = betweenVals.reduce(function(sum, val) {
    return sum + val;
  }, 0);

  return total;
}

console.log(sumAll([1, 4]));
// => 10
console.log(sumAll([4, 1]));
// => 10
console.log(sumAll([5, 10]));
// => 45
