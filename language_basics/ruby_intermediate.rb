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

# raising your own errors
def check_age(age)
  raise ArgumentError, "Enter Positive Number" unless age > 0
end

begin
  check_age(-1)
rescue ArgumentError
  puts "That is an impossible age"
end
