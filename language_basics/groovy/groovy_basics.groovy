
// ---------------- CLASSES -------------------
/*
In groovy, everything is a class (including strings and integers)
*/
class HelloController {
  def world = {
    render "Hello World it's " new.java.util.Date()
  }
}

// ---------------- ASSERATIONS -------------------
/*
Here we simply verify that the variable num has a value
of 1 at the point of execution in the code
*/
class AssertionsClass {
  def num = 1
  assert num == 1
}

// ---------------- GROOVY STRINGS -------------------
/* essentially string interpolation in groovy */
def person = "John"

println """
${new Date()}

Dear $person,

This is a Groovy Letter!

Sincerely,
Bob
"""

// ---------------- ARITHEMATIC -------------------
class ArithematicClass {
  // main is where execution starts
  static void main(String[] args) {
    println("Hello World");
  }

  /*
  Everything in Groovy is an object
  including numbers

  def is used when you define a variable
  Variables start with a letter and can
  contain numbers and _
  Variables are cynamically typed and can
  hold any value
  */
  def age = "Dog";
  age = 40;

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
  println("age++ = " + (age++));
  println("++age = " + (++age));
  println("age-- = " + (age--));
  println("--age = " + (--age));

  // Largest values
  println("Biggest Int " + Integer.MAX_VALUE);
  println("Smallest Int " + Integer.MIN_VALUE);

  println("Biggest Float " + Float.MAX_VALUE);
  println("Smallest Float " + Float.MIN_VALUE);

  println("Biggest Double " + Double.MAX_VALUE);
  println("Smallest Double " + Double.MIN_VALUE);

}
