# ruby is interpreted - no compiler needed!

# this is how you print a string
puts "hello world"

# this is how you write variables in ruby
my_num = 5
my_string = "Ruby"
puts my_num
puts my_string

# arithmetic in Ruby
puts 3 + 3 # addition
puts 3 - 3 # subtraction
puts 3 * 3 # multiplication
puts 3 / 3 # division
puts 3**3  # exponents
puts 5%3   # remainder division
puts -5 + 3 # negative numbers

# puts vs print
puts "What's up?" # adds \n to end of string
print "Oxnard" # doesn't add \n

# string methods
puts practice_string = "Check it out"
puts practice_string.length
puts practice_string.reverse
puts practice_string.upcase
puts practice_string.downcase
puts "captilizing".capitalize! # capitalizes first letter
# the ! will modify the value contained in a variable

# multiline comments
=begins
All of this stuff
is hidden
from you
=end

# here is how you get user input
print "Whats your name? "
first_name = gets.chomp # "gets" gets the value
favorite_food = gets.chomp # ...and "chomps" removes blank space

# ...and this is how you do string interpolation
puts "#{first_name} loves to eat #{favorite_food}!"
# NOTE: double quotes are used for string interpolation
# and single quotes are used for strict interpretation

# here is how you do conditionals (if/else statements) in Ruby
conditional_val = 5

if conditional_val > 0
  puts "this is a simple if"
end

if conditional_val < 0
  puts "negative number"
elsif condition_val > 0
  puts "positive number"
else
  puts "value is zero"
end

# unless
# unless is the anti-"if", and is equal to if (!false)
hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

# comparators
x = 2
y = 2
puts x == y # will print true
puts x != y # will print false
puts x < y # ...here are some others
puts x > y
puts x <= y
puts x >= y

# binary operators
puts true && true # and
puts true || false # or - inclusive (one or both check out)
