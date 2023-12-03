
# Python program to read
# json file
import requests
import json
import time
 
# Opening JSON file
f = open('material_id.json', 'r')
lines = f.readlines() 

prices = []

for line in lines:
    material_id = line.strip()
    try:
        if (material_id):
            headers = {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdHJhbmphbjE3MjlAZ21haWwuY29tIiwic2NoZWR1bGVyX2lkIjozMDUzLCJxdW90ZXJfaWQiOjE0NDEsImF1dGgiOiJST0xFX1FVT1RFUixST0xFX1NDSEVEVUxFUiIsImFub3RoZXJMb2dpbiI6InVubmFtZWRfXzUwODhmZWMyLWNhYTUtNDYwZi05YzNjLTM4MjUxZjc2OWVhYiIsImludHJvVG91ciI6ZmFsc2UsInVzZXJfaWQiOjM0NzQsImV4cCI6MTY5ODgyNTYzMn0.KCdQ5Xds48ieHc3pUd7mqj3gawkcF-f5EITU3GTNWyhghA7Eqn3Mopu40GMaGEOsMD2Xcib3WRtENil9NRZs6Q"}
            url = 'https://prod-api.buildpartner.com/api/quoters/56/task-cost/9201?ratio=1&qty=1&primeId='+str(material_id)
            response = requests.get(url, headers=headers)
            

            if response.status_code == 200:
                response = response.json()
                price = {}
                price['id'] = material_id
                price['materialCost'] = response['materialCost']
                price['laborCost'] = response['laborCost']

                # Writing to material_prices.json
                with open("material_prices.json", "a") as outfile:
                    outfile.write(json.dumps(price))
                    outfile.write("\n")
                print("Price retrieved and written to material_prices.json for: " + str(material_id))
            else:
                print("Price called error occurred for material_id: " + str(material_id))
                break
            time.sleep(3)
        else:
            print("Invalid material_id "+str(material_id))
    except Exception as e:
        print("Prices called error occurred for material_id: " + str(material_id))
        break
# Closing file
f.close()