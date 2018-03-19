/* This class it used in groovy_intermediate.groovy */

// Creates the toString method
@ToString(includeNames=true, includeFields=true)
class Animal {
  // Fields (Attributes)
  def name;
  def sound;

  // Methods (Capabilites)

  def run(){
    println("${name} runs");
  }

  def makeSound(){
    println("${name} says ${sound}");
  }

  // Constructor Method
  def Animal(name, sound){
    this.name = name;
    this.sound = sound;
  }


}
