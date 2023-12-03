
# Python program to read
# json file
import requests
import json
import time

content = ''
with open('stages_temp.json') as f: content = f.read()

stages = json.loads(content)

for stage in stages:
    for element in stage["elements"]:
        try:
            headers = {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdHJhbmphbjE3MjlAZ21haWwuY29tIiwic2NoZWR1bGVyX2lkIjozMDUzLCJxdW90ZXJfaWQiOjE0NDEsImF1dGgiOiJST0xFX1FVT1RFUixST0xFX1NDSEVEVUxFUiIsImFub3RoZXJMb2dpbiI6InVubmFtZWRfXzUwODhmZWMyLWNhYTUtNDYwZi05YzNjLTM4MjUxZjc2OWVhYiIsImNvbXBhbnkiOiJDb2RlWXVnYSIsImludHJvVG91ciI6ZmFsc2UsInVzZXJfaWQiOjM0NzQsImV4cCI6MTcwMDM3NTA0N30.B2RR_S4oyLW46MK_ez7yY9mK_Njes3DUHGCd3eg3573Ba4a8y2SnephmarsCTeU4M6BbtYse20ACnk2XxH08Nw"}
            url = 'https://prod-api.buildpartner.com/api/stages/'+ str(stage["id"]) +'/elements/'+ str(element["id"]) + '/tasks?page=0&size=50&searchBy=task&searchValue='
            print("stage: "+ stage["stage"])
            print("sub-stage: " + element["element"])
            print(url)
            response = requests.get(url, headers = headers)

            # Writing to specifications.json
            if response.status_code == 200:
                response = response.json()
                with open("tasks_v2.json", "a") as outfile:
                    output = {}
                    output["stage_id"] = stage["id"]
                    output["stage_name"] = stage["stage"]
                    output["sub_stage_id"] = element["id"]
                    output["sub_stage_name"] = element["element"]
                    output["result"] = response
                    outfile.write(json.dumps(output))
                print("Tasks retrieved and written to taks.json for: "+ str(stage["id"])+" sub-stage: "+ str(element["id"]))
            else:
                print("Tasks call not 200 for: "+ str(stage["id"])+" sub-stage: "+ str(element["id"]))
            time.sleep(5)
        except Exception as e:
            print("Tasks failed for: "+ str(stage["id"])+" sub-stage: "+ str(element["id"]))
        

