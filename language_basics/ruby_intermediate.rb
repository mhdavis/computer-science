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

# ---------------- MODULES -------------------
# Modules contain methods and variables but cannot
# be instantiated; used to act functionality to classes

# Allows you acces to the Human module (Ruby 2+)
require_relative "human"
require_relative "smart"

module Animal
  def make_sound
    puts "Grrr"
  end
end

# You can inherit a modules method with prepend or include
# You can inherit from numerous methods instead of one class

class Doggy
  include Animal
end

rover = Doggy.new
rover.make_sound

module Human
  attr_accessor :name, :height, :weight

  def run
    # here we use the self keyword to get the objects variable
    puts self.name + "runs"
  end

end

class Scientist
  include Human
  prepend Smart # Any methods in Smart will superseed those in class

  def act_smart
    return "E = mc^2"
  end
end

einstein = Scientist.new
einstein.name = "Albert"
puts einstein.name

einstein.run

puts einstein.name + "says" + einstein.act_smart

# ---------------- POLYMORPHISM -------------------
class Bird
  def tweet(bird_type)
    bird_type.tweet
  end
end

class Cardinal < Bird
  def tweet
    puts "Tweet Tweet"
  end
end

class Parrot < Bird
  def tweet
    puts "Squawk"
  end
end

# Statically typed languages use duck typing to achieve polymorphism
# Ruby pays less attention to the class type versus the methods that can
# be called on it

generic_bird = Bird.new
generic_bird.tweet(Cardinal.new)
generic_bird.tweet(Parrot.new)

# ---------------- SYMBOLS -------------------
# symbols are immutable strings
# they are used for memory conservation and speedy comparisons
# A symbol is a way to pass string data if:
# The string value won't change
# The string doesn't need access to string methods
# (remember, everything in ruby is a class)
:johnny

puts :johnny # returns "johnny"
puts :johnny.to_s # returns "johnny"
puts :johnny.class # returns Symbol
puts :johnny.object_id # returns a id number

# ---------------- ARRAYS -------------------
array_1 = Array.new
array_2 = Array.new(5) # Gets nil as default
array_3 = Array.new(5, "empty")
array_4 = [1, "two", 3, 5.5] # can store multiple object types
puts array_1 # returns nothing
puts array_2 # returns an array of 5 empty indices
puts array_3 # returns an array of 5 "empty"s
puts array_4 # returns elements in the array

puts array_4[2] # 3
puts array_4[2,2].join(", ") # returns 2 values starting at 2nd index
puts array_4.values_at(0,1,3).join(", ") # [1, "two", 5.5]

# Add 0 at beginning of array
array_4.unshift(0)
puts array_4.join(', ') # converts an array into a string

# remove the first item in the array
array_4.shift()
puts array_4.join(", ")

# add 100, 200 to the end of the array
array_4.push(100, 200)
puts array_4.join(", ")

# remove item at the end of the array
array_4.pop
puts array_4.join(", ")

# add one array to the end of another array
array_4.concat([10, 20, 30])
puts array_4.join(", ")

# ---------------- ARRAY METHODS -------------------
test_arr = [1,2,3,3,4,5]

puts test_arr.size().to_s # returns array size
puts test_arr.include?(3).to_s # returns true
puts test_arr.count(3).to_s # returns 2
puts test_arr..join(", ") # converts array to string
p test_arr # print and inspect the array

test_arr.each do |val|
  puts val
end

array = [1,2,3]

# array.map
added = array.map{ |x| x + 2 }

# array.select (functions like find in JS)
selected = array.select{|num| num > 1}

# array.reject (the opposite of select)
rejected = array.reject{|num| num > 1}

# array.reduce
reduced = array.reduce{|sum, x| sum + x} # => 6

# ---------------- HASHES -------------------
# hash is a collection of key/object pairs
number_hash = {
  "PI" => 3.14,
  "Golden" => 1.618,
  "e"=> 2.718
}

puts number_hash["PI"]

# other way of generating a hash
superheroes = Hash["Clark Kent", "Superman", "Bruce Wayne", "Batman"]
puts superheroes["Clark Kent"] # returns Superman

# adding to a hash
superheroes["Barry Allen"] = "Flash"
puts superheroes["Barry Allen"]

# Set a default key value
samp_hash = Hash.new("No Such Key")
puts samp_hash["Dog"]

# combine 2 hashes in a destructive way with update
# or with no overwritting via merge
superheroines = Hash["Lisa Morel", "Aquagirl", "Diana Prince", "Wonder Woman"]
superheroes.update(superheroines)

# Print out each key and value
superheroes.each do |key, value|
  puts "#{key.to_s} : #{value}"
end

# ---------------- HASH METHODS -------------------
# hash.has_key?
puts "Has Key Lisa Morel : " + superheroes.has_key?("Lisa Morel").to_s
# hash.has_value?
puts "Has Value Batman : " + superheroes.has_value?("Batman").to_s
# hash.empty?
puts "Is Hash Empty : " + superheroes.empty?.to_s
# hash.size?
puts "Size of Hash : " + superheroes.size.to_s
#hash.delete
superheroes.delete("Barry Allen")
