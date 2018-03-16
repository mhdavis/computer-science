// ---------------- METHODS -------------------
class MethodsParentExample {
  // Define them with def and static which means it is shared
  // by all instances of the class
  static def sayHello() {
    println("Hello");
  }

  // Methods can receive parameters that have default values
  static def getSum(num1=0, num2=0){
    return num1 + num2;
  }

  // Any object passed to a method is pass by value
  static def passByValue(name){

    // name here is local to the function and can't
    // be accessed outside of it
    name = "In Function";
    println("Name : " + name);
  }

  // Receive and return a list
  static def doubleList(list){

    // Collect performs a calculation on every item in the list
    def newList = list.collect { it * 2};
    return newList;
  }

  // Pass unknown number of elements to a method
  static def sumAll(int... num){
    def sum = 0;

    // Performs a calculation on every item with each
    num.each { sum += it; }
    return sum;
  }

  // Calculate factorial (Recursion)
  static def factorial(num){
    if(num <= 1){
      return 1;
    } else {
      return (num * factorial(num - 1));
    }
  }

  // 1st: num = 4 * factorial(3) = 4 * 6 = 24
  // 2nd: num = 3 * factorial(2) = 3 * 2 = 6
  // 3rd: num = 2 * factorial(1) = 2 * 1 = 2
}

// WE CALL STATIC METHODS DEFINED IN MethodsParentExample
// IN AN INSTANCE OF MethodsExample

class MethodsExample {
  static void main(String[] args) {
    // Methods allow us to break our code into parts and also
    // allow us to reuse code
    sayHello();

    // Pass parameters
    println("5 + 4 = " + getSum(5,4));

    // Demonstrate pass by value
    def myName = "Peter";
    passByValue(myName);
    println("In Main : " + myName);

    // Pass a list for doubling
    def listToDouble = [1,2,3,4];
    listToDouble = doubleList(listToDouble);
    println(listToDouble);

    // Pass unknown number of elements to a method
    def nums = sumAll(1,2,3,4);
    println("Sum : " + nums);

    // Calculate factorial (Recursion)
    def fact4 = factorial(4);
    println("Factorial 4 : " + fact4);
  }
}

// ---------------- LISTS -------------------
/* Lists hold a list of objects with an index */
class ListExample {
  static void main(String[] args) {
    def primes = [2,3,5,7,11,13];

    // Get a value at an index
    println("2nd Prime " + primes[1]);
    println("3rd Prime " + primes.get(2));

    // They can hold anything
    def employee = ['Derek', 40, 6.25, [1,2,3]];

    println("2nd Number " + employee[3][1]);

    // Get the length
    println("Length " + primes.size());

    // Add an index
    primes.add(17);

    // Append to the right
    primes<<19;
    primes.add(23);

    // Concatenate 2 Lists
    primes + [29,31];

    // Remove the last item
    primes - [31];

    // Check if empty
    println("Is empty " + primes.isEmpty());

    // Get 1st 3
    println("1st 3 " + primes[0..2]);

    println(primes);

    // Get matches
    println("Matches " + primes.intersect([2,3,7]));

    // Reverse
    println("Reverse " + primes.reverse());

    // Sorted
    println("Sorted " + primes.sort());

    // Pop last item
    println("Last " + primes.pop());
  }
}

// ---------------- MAPS -------------------
/*
Maps in Groovy are commonly
known as Hashtables in other
languages
*/
class MapsExample {
  static void main(String[] args) {
    def paulMap = [
      'name' : 'Paul',
      'age' : 35,
      'address' : '123 Main St',
      'list' : [1,2,3]
    ];

    // Access with key
    println("Name " + paulMap['name']);
    println("Age " + paulMap.get('age'));
    println("List Item " + paulMap['list'][1]);

    // Add key value
    paulMap.put('city', 'Pittsburgh');

    // Check for key
    println("Has City " + paulMap.containsKey('city'));

    // Size
    println("Size " + paulMap.size());
  }
}

// ---------------- RANGES -------------------
// Ranges represent a range of values in shorthand notation
class RangeExample {
  static void main(String[] args) {
    def oneTo10 = 1..10;
    def aToZ = 'a'..'z';
    def zToA = 'z'..'a';

    println(oneTo10);
    println(aToZ);
    println(zToA);

    // Get size
    println("Size " + oneTo10.size());

    // get index
    println("2nd Item " + oneTo10.get(1));

    // Check if range contains
    println("Contains 11 " + oneTo10.contains(11));

    // Get last item
    println("Get Last " + oneTo10.getTo());

    println("Get First " + oneTo10.getFrom());
  }
}

// ---------------- CLASSES + INHERITENCE -------------------
