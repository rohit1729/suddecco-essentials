
# Python program to read
# json file
import requests
import json
import time
 
# Opening JSON file
f = open('steel.json')
 
# returns JSON object as
# a dictionary
steels = json.load(f)
specifications = []
# Iterating through the json
# list
materials = []
for steel in steels:
    try:
        if (steel.get('materialCategoryId')):
            material = {}
            material['name'] = steel['task']
            material['categoryId'] = steel['materialCategoryId']
            material['price'] = 0
            material['margin'] = 0
            materials.append(material)
    except Exception as e:
        print("specification called error occurred for steel: " + e)
        print(e)
# Closing file
            # Writing to specifications.json
with open("materials.json", "w") as outfile:
    outfile.write(json.dumps(materials))
f.close()