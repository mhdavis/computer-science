/*

╔═╗┬─┐┌─┐┌─┐┬  ┬┬ ┬  ╔╦╗┌─┐┌─┐┌┬┐  ╔═╗┬┬  ┌─┐
║ ╦├┬┘│ ││ │└┐┌┘└┬┘   ║ ├┤ └─┐ │   ╠╣ ││  ├┤
╚═╝┴└─└─┘└─┘ └┘  ┴    ╩ └─┘└─┘ ┴   ╚  ┴┴─┘└─┘

Since groovy is an object-oriented language, this file
provides a location to copy and paste classes defined
in other groovy sections in order to execute their main
class function and see their output.

To run a groovy classe's main function simply copy and
paste the class below, then run `groovy groovy_test_file.groovy`
while in this directory to output to the command prompt.
*/

// ============== PASTE HERE ==============

class OOPExample {
  static void main(String[] args) {
    def king = new Animal('King', 'Growl');

    println("${king.name} says ${king.sound}");

    // Change an object attribute with a setter
    // *** Groovy automatically creates a setter for you ***
    king.setSound('Grrrr');
    println("${king.name} says ${king.sound}");

    king.run();

    println(king.toString());

    // With inheritance a class can inherit all fields
    // and methods of another class
    def grover = new Dog('Grover', 'Grrrrr', 'Derek');

    king.makeSound();
    grover.makeSound();

    // Mammal inherits from the abstract class Thing
    def hamster = new Mammal('Furry');
    hamster.getInfo();
  }
}

// ============== PASTE HERE ==============
