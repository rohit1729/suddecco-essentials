
# Python program to read
# json file
import requests
import json
import time
 
# Opening JSON file
f = open('specifications.json')
 
# returns JSON object as
# a dictionary
steels = json.load(f)
prices = []
# Iterating through the json
# list
for steelA in steels:
    for steel in steelA:
        print(steel)
        material_id = steel['id']
        try:
            # print(steel)
            if (material_id):
                headers = {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1pQHRoZWhvbWVyZWZ1cmJpc2htZW50Y29tcGFueS5jby51ayIsInNjaGVkdWxlcl9pZCI6MTIxNiwiYXV0aCI6IlJPTEVfU0NIRURVTEVSIiwiYW5vdGhlckxvZ2luIjoic2FtaUB0aGVob21lcmVmdXJiaXNobWVudGNvbXBhbnkuY28udWsiLCJjb21wYW55IjoiVEhSQyBDb25zdHJ1Y3Rpb24gIiwiaW50cm9Ub3VyIjpmYWxzZSwidXNlcl9pZCI6MTUwMCwiZXhwIjoxNjk0Njg3Mjg0fQ.yITDZ8Xy9xmxTsb5_22DOxIon0BavV-qlSaS2eHmK9xC-2uTIOfibi_Rfmbq2lTOajPdaD_R_NPAJHlIhwALTg"}
                url = 'https://prod-api.buildpartner.com/api/quoters/56/task-cost/9201?ratio=1&qty=1&primeId='+str(material_id)
                print("url")
                print(url)
                print("hoh")
                response = requests.get(url, headers=headers)
                response = response.json()
                print("response")
                print(response)
                price = {}
                price['id'] = material_id
                price['material'] = steel['material']
                price['materialCost'] = response['materialCost']
                price['laborCost'] = response['laborCost']
                print("ajhh")
                prices.append(price)

                # Writing to specifications.json
                with open("prices.json", "w") as outfile:
                    outfile.write(json.dumps(prices))
                print("Specifications retrieved and written to specifications.json for: "+str(material_id))
                time.sleep(3)
            else:
                print("Specifications already retrieved for: "+str(material_id))
        except Exception as e:
            print("specification called error occurred for steel: " + str(material_id))
            print(e.s)
# Closing file
f.close()