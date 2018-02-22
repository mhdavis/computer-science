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
