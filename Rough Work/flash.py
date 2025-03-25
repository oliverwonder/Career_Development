import random

lower = "qwertyuiopasdfghjklzxcvbnm"
upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
numbers = "1234567890"
symbols = "`~!@#$%^&*()-_=+[]\|;:'<>.,"

allCharacters = lower + upper + symbols + numbers
lenght = int(input("Enter the length of your password : "))

password = ''.join(random.sample(allCharacters, lenght))
print(f"Your Generated password is : {password}")