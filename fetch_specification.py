
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
processed = {0}
for steel in steels:
    try:
        # print(steel)
        material_category_id = steel['materialCategoryId']
        if (material_category_id not in processed):
            headers = {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1pQHRoZWhvbWVyZWZ1cmJpc2htZW50Y29tcGFueS5jby51ayIsInNjaGVkdWxlcl9pZCI6MTIxNiwiYXV0aCI6IlJPTEVfU0NIRURVTEVSIiwiYW5vdGhlckxvZ2luIjoic2FtaUB0aGVob21lcmVmdXJiaXNobWVudGNvbXBhbnkuY28udWsiLCJjb21wYW55IjoiVEhSQyBDb25zdHJ1Y3Rpb24gIiwiaW50cm9Ub3VyIjpmYWxzZSwidXNlcl9pZCI6MTUwMCwiZXhwIjoxNjkxOTUxODExfQ.XQUI8sGfu9GYExuzizcAYdSu9DZYmqMAQdkrQUdHqKGk9yGUZaHCul9Fputph8pewMvTgjICgtDZzsQjEcHqLQ"}
            url = 'https://prod-api.buildpartner.com/api/material-categories/'+str(material_category_id)+'/materials?projectId=4859'
            specification = requests.get(url, headers=headers)
            specifications.append(specification.json())

            # Writing to specifications.json
            with open("specifications.json", "w") as outfile:
                outfile.write(json.dumps(specifications))
            processed.add(material_category_id)
            print("Specifications retrieved and written to specifications.json for: "+str(material_category_id))
            time.sleep(3)
        else:
            print("Specifications already retrieved for: "+str(material_category_id))
    except Exception as e:
        print("specification called error occurred for steel: " + str(material_category_id))
        print(e)
# Closing file
f.close()