function sym(args) {
    var argArray = [].slice.call(arguments);

    function symDiff(arr1, arr2) {
      var uniqueArr = [];

      for (var i = 0; i < arr1.length; i++) {
        /* loops through the first array, if the the the ith value in
        arr1 is NOT inside of arr2 and is NOT in uniqueArr, then
        adds it to uniqueArr.
        */
        if (arr2.indexOf(arr1[i]) < 0 && uniqueArr.indexOf(arr1[i]) < 0) {
          uniqueArr.push(arr1[i]);
        }
      }

      /* loops through the first array, if the the the ith value in
      arr1 is NOT inside of arr2 and is NOT in uniqueArr, then
      adds it to uniqueArr.
      */
      for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) < 0 && uniqueArr.indexOf(arr2[j]) < 0) {
          uniqueArr.push(arr2[j]);
        }
      }
      return uniqueArr;
    }

    // reduces the array to an array of symmetric differences
    var symDiffArr = argArray.reduce(symDiff);
    // sorts the symmetric differences array from lowest to highest value
    var symDiffArrSorted = symDiffArr.sort((a,b) => a-b);
    return symDiffArrSorted;
  }

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
