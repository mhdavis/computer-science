=begin
  _____       _                         _                               _
 |  __ \     | |               /\      | |                             | |
 | |__) |   _| |__  _   _     /  \   __| |_   ____ _ _ __   ___ ___  __| |
 |  _  / | | | '_ \| | | |   / /\ \ / _` \ \ / / _` | '_ \ / __/ _ \/ _` |
 | | \ \ |_| | |_) | |_| |  / ____ \ (_| |\ V / (_| | | | | (_|  __/ (_| |
 |_|  \_\__,_|_.__/ \__, | /_/    \_\__,_| \_/ \__,_|_| |_|\___\___|\__,_|
                     __/ |
                    |___/

---------------- CONTENTS -------------------
[ 21] ENUMERABLES
[ 78] BLOCKS
[107] LAMBDAS
[123] PROCS
[149] CLOSURES
[163] BINDINGS
---------------------------------------------
=end

# ---------------- ENUMERABLES -------------------
# Classes that include the Enumerable module gain collection capabilities
# but they must define a function called each

class Menu
  include Enumerable

  # Each provides items one at a time

  def each
    yield "pizza"
    yield "spaghetti"
    yield "salad"
    yield "bread"
    yield "water"
  end
end

menu_options = Menu.new

# We can cycle through all the options

menu_options.each do |item|
  puts "Would you like : #{item}"
end

# Check to see if we have pizza
p menu_options.find {|item| item == "pizza"}

# Return items 5 letters in length
p menu_options.select {|item| item.size <= 5}

# Reject items that meet the criteria
p menu_options.reject {|item| item.size <= 5}

# Return the first item
p menu_options.first

# Return the first 2
p menu_options.take(2)

# Return the everything except the first 2
p menu_options.drop(2)

# Return the minimum item
p menu_options.min

# Return the maximum item
p menu_options.max

# Sort the items
p menu_options.sort

# Return each item in reverse order
menu_options.reverse_each {|item| puts item}


# ---------------- BLOCKS -------------------
array = [1,2,3]

# One line blocks
array.each { |num| puts num }

# long form blocks
array.each do |num|
  puts num
end

# the yield command runs the block code
def print_twice
  yield
  yield
end

print_twice { puts "twice" }

# you can pass blocks arguments
def one_two_three
  yield 1
  yield 2
  yield 3
end

one_two_three { |number| puts number * 10 }
# 10, 20, 30

# ---------------- LAMBDAS -------------------
say_something = -> { puts "this is a lambda" }

# here's how we call the lambda
say_something.call

# there are alternative ways of calling it...
say_something.call
say_something.()
say_something[]
say_something.===

# lambdas can take multiple arguments
add_two_nums = ->(x, y) { x + y }
puts add_two_nums.call(2,3)

# ---------------- PROCS -------------------
# here is a proc
t = Proc.new { |x,y| puts "I don't care about arguments!" }
# procs don't care about arguments, unlike lambdas
t.call

# Should work
my_lambda = -> { return 1 }
puts "Lambda result: #{my_lambda.call}"

# Should raise exception
my_proc = Proc.new { return 1 }
puts "Proc result: #{my_proc.call}"

# this is because if the proc is inside a method,
# the return will act as the method's return
def call_proc
  puts "Before proc"
  my_proc = Proc.new { return 2 }
  my_proc.call
  puts "After proc"
end

p call_proc
# Prints "Before proc" but not "After proc"

# ---------------- CLOSURES -------------------
def call_proc(my_proc)
  count = 500
  my_proc.call
end

count   = 1
my_proc = Proc.new { puts count }

p call_proc(my_proc) # What does this print?
# it prints 1! call_proc is using the value passed to it
# by my_proc, and my_proc is getting its value from where
# its defined

# ---------------- BINDING -------------------
def return_binding
  foo = 100
  binding
end

# Foo is available thanks to the binding,
# even though we are outside of the method
# where it was defined.
puts return_binding.class
puts return_binding.eval('foo')

# If you try to print foo directly you will get an error.
# The reason is that foo was never defined outside of the method.
puts foo
