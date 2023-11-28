import os

# Constants

PI = 3.14159
GRAVITY = 9.81

# Functions

def fibonacci(n):
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    return fibonacci(n - 1) + fibonacci(n - 2)

# Classes

class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def say_hello(self):
    print("Hello, my name is {} and I am {} years old.".format(self.name, self.age))

# Main function

if __name__ == "__main__":
  # Do something here
    print("Hello {w}".format(w = "world"))

