# New array
driving_instructions = []
aim = 0
forward = 0
depth = 0
digit = 0

# Open dataset, append each line of the text file to our array, remove white space and \n from each element
with open('data.txt', 'r') as di:
    for line in di:
        driving_instructions.append(line.strip())

# For each line in the driving instructions, extract the command and digit
for line in driving_instructions:
    if "forward" in line:
        digit = [int(s) for s in line.split() if s.isdigit()]
        forward += digit[0]
        depth += (aim * digit[0])
    if "up" in line:
        digit = [int(s) for s in line.split() if s.isdigit()]
        aim = aim - digit[0]
    if "down" in line:
        digit = [int(s) for s in line.split() if s.isdigit()]
        aim += digit[0]

print(forward, depth)
print(forward*depth)