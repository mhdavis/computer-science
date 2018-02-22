# ---------------- FUNCTIONS -------------------
def add_nums (num_1, num_2)
  return num_1.to_i + num_2.to_i
end

puts add_nums(3,4)

# variables are passed by value
x = 1
def change_x(x)
  x = 4
end

puts change_x(x)
puts "x = #{x}"

# ---------------- EXCEPTIONS -------------------
print "Enter a number : "
first_num = gets.to_i
print "Enter Another num : "
second_num = gets.to_i

begin
  answer = first_num / second_num

rescue # You could use rescue ZeroDivision Error
  puts "You can't divide by zero"
  exit
end

# raising your own exceptions
def check_age(age)
  raise ArgumentError, "Enter Positive Number" unless age > 0
end

begin
  check_age(-1)
rescue ArgumentError
  puts "That is an impossible age"
end

# ---------------- CLASSES -------------------
class Animal
  # called when initialized
  # set default values here
  def initialize
    puts "Creating a new Animal"
  end

  def set_name(new_name)
    # Set value for instance variable
    @name = new_name
  end

  def get_name(name)
    @name
  end

  # this way we can use Animal.name to get name
  def name(name)
    @name
  end

  # define a new way to set the value for name
  def name=(new_name)
    if new_name.is_a>(Numeric)
      puts "Name Can't be a Number"
    else
      @name = new_name
    end
end

# Now lets make an instance of the Animal Class
cat = Animal.new
cat.set_name("Fluffy")
puts cat.get_name
puts cat.name
cat.name = "Snowball"
puts cat.name

# ---------------- CLASSES + INHERITANCE -------------------
class Dog
  # shortcut for creating all getter functions
  attr_reader :name, :height, :weight
  # shortcut for creating all setter functions
  attr_writer :name, :height, :weight
  # Creates setter and getter methods
  attr_accessor :name, :height, :weight

  def bark
    return "Woof"
  end
end

rover = Dog.new
rover.name = "Rover"
puts rover.name
puts rover.bark

class GermanShepard < Dog # how you extend a class in ruby
  def bark
    return "German Woof"
  end
end

max = GermanShepard.new
max.name = "Max"

printf "%s goes %s \n", max.name, max.bark()
