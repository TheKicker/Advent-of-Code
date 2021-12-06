# New array
driving_instructions = []
forward = 0
depth = 0
digit = 0

# Open dataset, append each line of the text file to our array, remove white space and \n from each element
with open('data.txt', 'r') as di:
    for line in di:
        driving_instructions.append(line.strip())

for line in driving_instructions:
    if "forward" in line:
        digit = [int(s) for s in line.split() if s.isdigit()]
        forward += digit[0]
    if "up" in line:
        digit = [int(s) for s in line.split() if s.isdigit()]
        depth = depth - digit[0]
    if "down" in line:
        digit = [int(s) for s in line.split() if s.isdigit()]
        depth += digit[0]

print(forward, depth)