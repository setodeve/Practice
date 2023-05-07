import random

maxNumber = int(input('Enter Max Number : '))
minNumber = int(input('Enter Min Number : '))
randomNuber = random.randint(minNumber, maxNumber)
print(f'Guess the Number between {maxNumber} and {minNumber} ')
while(1):
  guessNumber = int(input())
  if(randomNuber == guessNumber):
    print("Numbers Matched. Congratulation!!")
    break


