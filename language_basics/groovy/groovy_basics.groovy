
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
  // main is where execution starts
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

// ---------------- ASSERATIONS -------------------
/*
Here we simply verify that the variable num has a value
of 1 at the point of execution in the code
*/
class AssertionsExample {
  /*
  def is used when you define a variable
  Variables start with a letter and can
  contain numbers and _
  Variables are cynamically typed and can
  hold any value
  */
  def num = 1
  assert num == 1
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
