# misha and zack, works
def p_times (statement, num)
  puts statement * num
end

# misha and zack, splits word
def letter_count (string)
  word = Hash.new(0)
  for i in 0..(string.length-1)
    p string[i]
end

# classmates works
def letter_count (string)
  taco = Hash.new(0)
	for i in 0..(string.length - 1)
		taco[string[i]] += 1
	end
	print taco
end

# misha and zack, repeats the input words but didn\t break the loop when the condition was met
def mock_me
  begin
  word = gets
  puts word
 end until "quit" == gets
  something happens here
 end

# classmates, works
 def mock_me
   puts "give me a word"
   statement = gets
   statement = statement.chomp
   if statement != "cool"
     mock_me
   elsif statement == "cool"
     puts "you did it, cool"
   end
 end

# misha and zack
 def print_contacts (some_hash)
   print some_hash
end

def print_contacts (contact)
  contact.each do |name, value|
    p name.to_s + " " + value
  end
end

my_contacts = {misha: "4157226594", alan: "4157867213"}
