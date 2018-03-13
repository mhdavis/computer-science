### Statically Typed vs. Dynamically Typed Languages

Languages that are **dynamically** typed do not have to be provided the data type of primitive data in advanced by the coder. This is because compiler intelligently determines what amount of memory is necessary for a particular data type.

```javascript
/*
JS example:
in this example you can see that a integer
is not specified as the variables data type.
*/

var item = 3;
```

Languages that are **statically** typed are the opposite. They required the coder to provide the type of data being provided to the compiler.

```java
/*
Java example:
in this example we have to specify the data type. Here we tell the compiler that we are dealing with an primitive data type of Integer
*/

int item = 3;
```

### First Class Functions

When a function is defined to be a _"first class citizen"_ in a language it means three essential things:

* The language allows for the passing of functions as arguments
* The language allows for functions to return other functions as values
* The language allows for functions to be assigned to variables or stored in data structures (objects, arrays, etc)

To put it simply, a language that contains first class functions means that functions are treated as values. A usually acronym is **RAPS** (Returned, Assigned, Passed, Stored.)

### Closures

**Closures** are reusable code blocks that contain needed data to be executed within their scope (see _First Class Functions_):

```javascript
// JS example:

function add(x) {
  return function addX(y) {
    return x + y;
  };
}

console.log(add(1)(2)); // => 3
// alternatively...
var addedOne = add(1);
var addedTwo = addedOne(2);
console.log(addedTwo); // => 3
```

In the example above we can see that `x` is called inside of `addX`. This is because `addX` is aware of `x` as it is defined in the one scope level above it. When the actual function call is preformed inside of `var addOne = add(1)`, we are providing `x` with the value of one.
