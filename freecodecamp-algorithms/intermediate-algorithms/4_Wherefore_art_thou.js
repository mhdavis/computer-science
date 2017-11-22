/*
  Make a function that looks through an array
  of objects (first arg) and returns an array
  of all objects that have the matching property
  and value pairs (second arg). Each property
  and value pair of the source object has to be
  present in the object from the collection if
  it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
  // Only change code below this line
  var srcKeys = Object.keys(source);

  var filtered = collection.filter(function (obj) {
    for (var i=0; i < srcKeys.length; i++) {
      if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });

  // Only change code above this line
  return filtered;
}

console.log(
  whatIsInAName([{
      first: "Romeo",
      last: "Montague"
    },
    {
      first: "Mercutio",
      last: null
    },
    {
      first: "Tybalt",
      last: "Capulet"
    }
  ], {
    last: "Capulet"
  })
);
// => [{ first:"Tybalt", last:"Capulet"}]
