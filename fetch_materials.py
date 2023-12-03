
# Python program to read
# json file
import requests
import json
import time


material_category_id_limit = 2250
start_index = 2000
while start_index < material_category_id_limit:
    requested_material_ids = list(range(start_index,start_index+20))
    try:
        headers = {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdHJhbmphbjE3MjlAZ21haWwuY29tIiwic2NoZWR1bGVyX2lkIjozMDUzLCJxdW90ZXJfaWQiOjE0NDEsImF1dGgiOiJST0xFX1FVT1RFUixST0xFX1NDSEVEVUxFUiIsImFub3RoZXJMb2dpbiI6InVubmFtZWRfXzUwODhmZWMyLWNhYTUtNDYwZi05YzNjLTM4MjUxZjc2OWVhYiIsImludHJvVG91ciI6ZmFsc2UsInVzZXJfaWQiOjM0NzQsImV4cCI6MTY5ODgyNTYzMn0.KCdQ5Xds48ieHc3pUd7mqj3gawkcF-f5EITU3GTNWyhghA7Eqn3Mopu40GMaGEOsMD2Xcib3WRtENil9NRZs6Q"}
        url = 'https://prod-api.buildpartner.com/api/material-categories/materials?projectId=11'
        print("url")
        print(url)
        response = requests.post(url, headers = headers, json = requested_material_ids)

        # Writing to specifications.json
        if response.status_code == 200:
            response = response.json()
            with open("materials_dump.json", "a") as outfile:
                outfile.write(json.dumps(response))
            print("Materials retrieved and written to material_dumps.json for: "+ str(start_index)+" end index: "+ str(start_index+20))
        else:
            print("materials call not 200 : " + str(start_index) + " end index: "+ str(start_index+20))
            break
        time.sleep(5)
        start_index += 20
    except Exception as e:
        print("materials call failed for : " + str(start_index) + " end index: "+ str(start_index+20))
        break
# Closing file