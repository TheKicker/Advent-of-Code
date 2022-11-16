# New array
ocean_floor = []
increases = 0

# Open dataset, append each line of the text file to our array
with open('data.txt', 'r') as of:
    for line in of:
        ocean_floor.append(int(line))

# Loop through the data set and count how many increses there are
for depth in range(0,len(ocean_floor)-3):
    # Using a three-depth sliding window for comparison now
    if(ocean_floor[depth]+ocean_floor[depth+1]+ocean_floor[depth+2] < ocean_floor[depth+1]+ocean_floor[depth+2]+ocean_floor[depth+3]):
        increases += 1

print(increases) # Prints out the correct answer of 1797