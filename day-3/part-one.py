# New array
engine_readings = []

# Open dataset, append each line of the text file to our array, remove white space and \n from each element
with open('data.txt', 'r') as di:
    for line in di:
        engine_readings.append(line.strip())

for element in range(0,len(engine_readings)-1):
    print("Coming soon... ")