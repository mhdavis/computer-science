=begin
  _____       _             ____            _
 |  __ \     | |           |  _ \          (_)
 | |__) |   _| |__  _   _  | |_) | __ _ ___ _  ___ ___
 |  _  / | | | '_ \| | | | |  _ < / _` / __| |/ __/ __|
 | | \ \ |_| | |_) | |_| | | |_) | (_| \__ \ | (__\__ \
 |_|  \_\__,_|_.__/ \__, | |____/ \__,_|___/_|\___|___/
                     __/ |
                    |___/

---------------- CONTENTS -------------------
[ 36] VARIABLES
[ 43] ARITHEMATIC OPERATIONS
[ 52] PUT VS PRINT VS PRINTF
[ 57] STRING METHODS
[ 83] MULTILINE COMMENTS
[ 90] USER INPUTS
[ 96] STRING INTERPOLATION
[101] IF / ELSIF / ELSE
[121] UNLESS
[131] COMPARATORS
[141] BINARY OPERATORS
[150] TERNARY OPERATORS
[153] DO LOOP
[165] WHILE LOOP
[182] UNTIL LOOP
[190] FOR LOOPS
---------------------------------------------
=end

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

# ---------------- PUT VS PRINT VS PRINTF -------------------
puts "What's up?" # adds \n to end of string
print "Oxnard" # doesn't add \n
printf "Sir %s is a knight \n", 'Daniel' # string formatting

# ---------------- STRING METHODS -------------------
puts str = "Check it out"
puts str.length
puts str.reverse
puts str.upcase
puts str.downcase
puts str.include?("it")
puts str.size
puts str.count("aeiou").to_s # count number of vowels
puts str.count("^aeiou").to_s # count number of strings
puts str.lstrip # strips left whitespace
puts str.rstrip # strips right whitespace
puts str.strip # strips space
puts str.rjust(20, '.') # right justify
puts str.ljust(20, '.') # left justify
puts str.center(20, '.') # centers
puts str.chop # "Check it ou"
puts str.chomp # elminates whitespace
puts str.chomp('it') # "Check  out"
puts str.delete("t") # "Check i ou"
str_arr = str.split(//) # splits each character into array
str_arr = str.split(/ /) # splits each character into array w/ spaces removed
puts "captilizing".capitalize! # capitalizes first letter
# the ! will modify the value contained in a variable
5.to_s # converts to string

# ---------------- MULTILINE COMMENTS -------------------
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
  # skips this iteration of the loop
  next unless (loop_var % 2) == 0
  puts loop_var
  break if loop_var >= 10
end

# ---------------- WHILE LOOP -------------------
y = 1
while y <= 10
  y += 1
  next unless (y % 2) == 0
  puts y
  break if y >= 10
end

z = 1
begin
  z += 1
  next unless (z % 2) == 0
  puts z
  break if z >= 10
end while z <= 10

# ---------------- UNTIL LOOP -------------------
a = 1
until a >= 10
  a += 1
  next unless (a % 2) == 0
  puts a
end

# ---------------- FOR LOOPS -------------------
numbers = [1, 2, 3, 4, 5]

for number in numbers
  puts "for loop number: #{number}"
end

# Array each method
fruits = ['banana', 'apple', 'orange', 'pear']
fruits.each do |fruit|
  puts "I want to eat a #{fruit}"
end

# Cycles through numbers 0 to 5
(0..5).each do |i|
  puts "number #{i}"
end
