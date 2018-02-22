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
