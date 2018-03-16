
// ---------------- CLASSES -------------------
/*
First and foremost:
In groovy, everything is a class
(including strings and integers).
This is how you write hello word.
*/
class HelloWorldExample {
  // static - accessible method
  // void - doesn't return a value
  // args - a String Array (String[])
  static void main(String[] args) {
    println("Hello World");
  }
}

// ---------------- VARIABLES -------------------
class VariablesExample {
  static void main(String[] args) {
    def age = "Dog";
    age = 40;
  }
}


// ---------------- ARITHEMATIC -------------------
class ArithematicExample {
  static void main(String[] args) {
    /*
    Everything in Groovy is an object
    including numbers
    */

    // The basic integer math operators
    println("5 + 4 = " + (5 + 4));
    println("5 - 4 = " + (5 - 4));
    println("5 * 4 = " + (5 * 4));
    println("5 / 4 = " + (5.intdiv(4)));
    println("5 % 4 = " + (5 % 4));

    // Floating point math operators
    println("5.2 + 4.4 = " + (5.2.plus(4.4)));
    println("5.2 - 4.4 = " + (5.2.minus(4.4)));
    println("5.2 * 4.4 = " + (5.2.multiply(4.4)));
    println("5.2 / 4.4 = " + (5.2 / 4.4));

    // Order of operations
    println("3 + 2 * 5 = " + (3 + 2 * 5));
    println("(3 + 2) * 5 = " + ((3 + 2) * 5));

    // Increment and decrement
    def age = 40;
    println("age++ = " + (age++)); // print then increment
    println("++age = " + (++age)); // increment then print
    println("age-- = " + (age--)); // print then decrement
    println("--age = " + (--age)); // decrement then print

    // Largest values
    println("Biggest Int " + Integer.MAX_VALUE);
    println("Smallest Int " + Integer.MIN_VALUE);

    println("Biggest Float " + Float.MAX_VALUE);
    println("Smallest Float " + Float.MIN_VALUE);

    println("Biggest Double " + Double.MAX_VALUE);
    println("Smallest Double " + Double.MIN_VALUE);

    // Largest values
    println("Biggest Int " + Integer.MAX_VALUE);
    println("Smallest Int " + Integer.MIN_VALUE);

    println("Biggest Float " + Float.MAX_VALUE);
    println("Smallest Float " + Float.MIN_VALUE);

    println("Biggest Double " + Double.MAX_VALUE);
    println("Smallest Double " + Double.MIN_VALUE);

    // Decimal Accuracy
    println("1.1000000000000001 + 1.1000000000000001 "
    + (1.1000000000000001111111111111111111111111111111111111 + 1.1000000000000001111111111111111111111111111111111111));

    // Math Functions
    def randNum = 2.0;
    println("Math.abs(-2.45) = " + (Math.abs(-2.45))); // => 2.45
    println("Math.round(2.45) = " + (Math.round(2.45))); // => 2
    println("randNum.pow(3) = " + (randNum.pow(3))); // => 8
    println("3.0.equals(2.0) = " + (3.0.equals(2.0))); // => false
    println("randNum.equals(Float.NaN) = " + (randNum.equals(Float.NaN))); // => false
    println("Math.sqrt(9) = " + (Math.sqrt(9))); // => 3
    println("Math.cbrt(27) = " + (Math.cbrt(27))); // => 3
    println("Math.ceil(2.45) = " + (Math.ceil(2.45))); // => 3
    println("Math.floor(2.45) = " + (Math.floor(2.45))); // => 2
    println("Math.min(2,3) = " + (Math.min(2,3))); // => 2
    println("Math.max(2,3) = " + (Math.max(2,3))); // => 3

    // Number to the power of e
    println("Math.log(2) = " + (Math.log(2)));

    // Base 10 logarithm
    println("Math.log10(2) = " + (Math.log10(2)));

    // Degrees and radians
    println("Math.toDegrees(Math.PI) = " + (Math.toDegrees(Math.PI)));
    println("Math.toRadians(90) = " + (Math.toRadians(90)));

    // sin, cos, tan, asin, acos, atan, sinh, cosh, tanh
    println("Math.sin(0.5 * Math.PI) = " + (Math.sin(0.5 * Math.PI)));

    // Generate random value from 1 to 100
    println("Math.abs(new Random().nextInt() % 100) + 1 = " + (Math.abs(new Random().nextInt() % 100) + 1))
  }
}

// ---------------- STRINGS -------------------
class StringsExample {
  static void main(String[] args) {
    def name = "Peter";

    // A string surrounded by single quotes is taken literally
    // but backslashed characters are recognized
    println('I am ${name}\n');
    println("I am $name\n");

    // Triple quoted strings continue over many lines
    def multString = '''I am
    a string
    that goes on
    for many lines''';

    println(multString);

    // You can access a string by index
    println("3rd Index of Name " + name[3]);
    println("Index of r " + name.indexOf('r'));

    // You can also get a slice
    println("1st 3 Characters " + name[0..2]);

    // Get specific Characters
    println("Every Other Character " + name[0,2,4]);

    // Get characters starting at index
    println("Substring at 1 " + name.substring(1));

    // Get characters at index up to another
    println("Substring at 1 to 4 " + name.substring(1,4));

    // Concatenate strings
    println("My Name " + name);
    println("My Name ".concat(name));

    // Repeat a string
    def repeatStr = "What I said is " * 2;
    println(repeatStr);

    // Check for equality
    println("Derek == Derek : " + ('Derek'.equals('Derek')));
    println("Derek == derek : " + ('Derek'.equalsIgnoreCase('derek')));

    // Get length of string
    println("Size " + repeatStr.length());

    // Remove first occurance
    println(repeatStr - "What");

    // Split the string
    println(repeatStr.split(' '));
    println(repeatStr.toList());

    // Replace all strings
    println(repeatStr.replaceAll('I', 'she'));

    // Uppercase and lowercase
    println("Uppercase " + name.toUpperCase());
    println("Lowercase " + name.toLowerCase());

    // <=> returns -1 if 1st string is before 2nd
    // 1 if the opposite and 0 if equal
    println("Ant <=> Banana " + ('Ant' <=> 'Banana'));
    println("Banana <=> Ant " + ('Banana' <=> 'Ant'));
    println("Ant <=> Ant " + ('Ant' <=> 'Ant'));
  }
}
// ---------------- OUTPUT -------------------
class OutputExample {
  static void main(String[] args) {
   // With double quotes we can insert variables
   def randString = "Random";
   println("A $randString string");

   // You can do the same thing with printf
   printf("A %s string \n", randString);

   // Use multiple values
   printf("%-10s %d %.2f %10s \n", ['Stuff', 10, 1.234, 'Random']);
  }
}

// ---------------- INPUT -------------------
class InputExample {
  static void main(String[] args) {
    print("Whats your name ");
    def fName = System.console().readLine();
    println("Hello " + fName);

    // You must cast to the right value
    // toInteger, toDouble
    print("Enter a number ");
    def num1 = System.console().readLine().toDouble();
    print("Enter another ");
    def num2 = System.console().readLine().toDouble();
    printf("%.2f + %.2f = %.2f \n", [num1, num2, (num1 + num2)]);
  }
}

// ---------------- GROOVY STRINGS -------------------
/* essentially string interpolation in groovy */
class GStringExample {
  static void main(String[] args) {
    def person = "John"

    println """
    ${new Date()}

    Dear $person,

    This is a Groovy Letter!

    Sincerely,
    Bob
    """
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

// ---------------- CONDITIONALS -------------------
  // Conditonal Operators : ==, !=, >, <, >=, <=

  // Logical Operators : && || !

  def ageOld = 6;

  if(ageOld == 5){
    println("Go to Kindergarten");
  } else if((ageOld > 5) && (ageOld < 18)) {
    printf("Go to grade %d \n", (ageOld - 5));
  } else {
    println("Go to College");
  }

  def canVote = true;

  // Ternary operator
  println(canVote ? "Can Vote" : "Can't Vote");

  // Switch statement
  switch(ageOld) {
    case 16: println("You can drive");
    case 18:
      println("You can vote");

      // Stops checking the rest if true
      break;
    default: println("Have Fun");
  }

  // Switch with list options
  switch(ageOld){
    case 0..6 : println("Toddler"); break;
    case 7..12 : println("Child"); break;
    case 13..18 : println("Teenager"); break;
    default : println("Adult");
  }
