
# Python program to read
# json file
import requests
import json
import time
 
# Opening JSON file
f = open('specifications.json')
 
# returns JSON object as
# a dictionary
specifications = json.load(f)
result = []
for specification in specifications:
    try:
        for item in specification:
            print(item)
            specification = {}
            specification['name'] = item['material']
            specification['categoryId'] = item['materialCategory']['id']
            specification['unit'] = ''
            if (item.get('unit')):
                specification['unit'] = item['unit']['unit']
            result.append(specification)
    except Exception as e:
        print("specification called error occurred for steel: " + e)
        print(e)
# Closing file
            # Writing to specifications.json
with open("specification_db.json", "w") as outfile:
    outfile.write(json.dumps(result))
f.close()