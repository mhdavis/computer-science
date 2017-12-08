function dropElements(arr, func) {

  // need to define value of iterations
  // prior to running loop due to changing
  // array length.
  var iterations = arr.length;
  for (var i=0; i < iterations; i++) {
    // if the first item in the array
    // passes the callbacks test
    if (func(arr[0])) {
      // break out of the loop and stop
      // shifting elements from the beginning
      // of the array
      break;
    } else {
      // otherwise shift the array by one
      // and rerun the if clause
      arr.shift();
    }
  }

  return arr;
}

console.log(
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3; })
);
// => [7, 4]
console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})
);
// => [3, 9, 2]
console.log(
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})
);
// => [1,0,1]
