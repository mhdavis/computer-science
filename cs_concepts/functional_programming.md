### Higher Order Functions

**Higher Order Functions** (also known as **Callback Functions**),
are functions that can call other functions as arguments.

```javascript
// JS example

function double(x) {
  return x * 2;
}

function add(y, func) {
  return y + func;
}

console.log(add(2, double(3))); // => 8
```

As you can see in the above example, inside the `console.log` statement is where the higher order function `add` is passed the `double` function call as an argument

---

### Hoisting

**Hoisting** is a facet of a language such that the language takes variable definitions and "hoists" or brings them up to the top of a particular block of code.

Consider the following example in javascript:

```javascript
// JS example

function addNums() {
  var a = 2;
  return a + b;
  var b = 3;
}

console.log(addNums());
```

In the given example, even though the `return` statement comes _before_ variable `b` is defined, javascript will hoist the `b` variable to the top of the function scope, thus producing something like this:

```javascript
// JS example

function addNums() {
  var a = 2; // notice that variables have been moved to the top
  var b = 3;
  return a + b;
}

console.log(addNums());
```

Notably, this is a particular feature of javascript.

---

### Closures

**Closures** are reusable code blocks that contain necessary execution data stored within their scope (see _First Class Functions_):

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

**Closures** vary slightly from language to language, but maintain their essence in that they are reusable chunks of code. Here are two examples of a closure in Groovy:

```java
// Groovy Example
class ClosureExample {

  def square = { it * it }
  assert [1,4,9] == [1,2,3].collect(square) // => true

  def lastVal = 0.9
  0.1.step(lastVal, 0.1) { current -> println (current) }

}
```

A closure here is described as an open anonymous block of code that can take arguments (second groovy), return values (second groovy example), and be assigned to variables (first groovy example). **Note:** for Groovy, `it` is used as an implicit parameter unless otherwise specified.
