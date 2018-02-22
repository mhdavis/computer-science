# ruby is interpreted - no compiler needed!

# this is how you print a string
puts "hello world"

# ---------------- VARIABLES -------------------
my_num = 5
my_string = "Ruby"
A_CONSTANT = 3.14 # writing constant variables (all caps)
puts my_num
puts my_string

# ---------------- ARITHEMATIC OPERATIONS -------------------
puts 3 + 3 # addition
puts 3 - 3 # subtraction
puts 3 * 3 # multiplication
puts 3 / 3 # division
puts 3**3  # exponents
puts 5%3   # remainder division
puts -5 + 3 # negative numbers

# ---------------- PUT VS PRINT -------------------
puts "What's up?" # adds \n to end of string
print "Oxnard" # doesn't add \n

# ---------------- STRING METHODS -------------------
puts practice_string = "Check it out"
puts practice_string.length
puts practice_string.reverse
puts practice_string.upcase
puts practice_string.downcase
puts "captilizing".capitalize! # capitalizes first letter
# the ! will modify the value contained in a variable
5.to_s # converts to string

# multiline comments
=begins
All of this stuff
is hidden
from you
=end

# ---------------- USER INPUTS -------------------
# here is how you get user input
print "Whats your name? "
first_name = gets.chomp # "gets" gets the value
favorite_food = gets.chomp # ...and "chomps" removes blank space

# ---------------- STRING INTERPOLATION -------------------
puts "#{first_name} loves to eat #{favorite_food}!"
# NOTE: double quotes are used for string interpolation
# and single quotes are used for strict interpretation

# ---------------- IF / ELSIF / ELSE -------------------
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

# puts conditions to the output that proceeds it
age = 25
puts "You are younger than 30" if age < 30

# ---------------- UNLESS -------------------
# unless is the anti-"if", and is equal to if (!false)
hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
end

# ---------------- COMPARATORS -------------------
x = 2
y = 2
puts x == y # will print true
puts x != y # will print false
puts x < y # ...here are some others
puts x > y
puts x <= y
puts x >= y

# ---------------- BINARY OPERATORS -------------------

puts true && true # and
puts true || false # or - inclusive (one or both check out)
puts !(3 == 3) # not - returns false
puts (5 <=> 3)
# equal returns 0,
# returns 1 if first is greater
# returns -1 if first is less then

# ---------------- TERNARY OPERATORS -------------------
(3 == 3) ? puts 'they are equal' : puts 'not equal'

# ---------------- DO LOOP -------------------
loop_var = 1

# loops until you break out of loop
loop do
  loop_var += 1 # loop_var = loop_var + 1
  next unless (loop_var % 2) == 0
  break if loop_var >= 10
end

# ---------------- WHILE LOOP -------------------
