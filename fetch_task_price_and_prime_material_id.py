import requests
import csv
import time

seen_task_id = {}
with open('prices.csv', mode ='r') as file:
    csvFile = csv.reader(file)
    for line in csvFile:
        seen_task_id[line[0]] = True


with open('tasks_v3.csv', mode ='r') as file:
    csvFile = csv.reader(file)
    for line in csvFile:
        try:
            result = []
            task_id = line[0]
            task_id_str = str(task_id)
            if (task_id_str not in seen_task_id):
                m_category_id = line[10]
                status_code = ''
                headers = {"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb2hpdHJhbmphbjE3MjlAZ21haWwuY29tIiwic2NoZWR1bGVyX2lkIjozMDUzLCJxdW90ZXJfaWQiOjE0NDEsImF1dGgiOiJST0xFX1FVT1RFUixST0xFX1NDSEVEVUxFUiIsImFub3RoZXJMb2dpbiI6InVubmFtZWRfXzUwODhmZWMyLWNhYTUtNDYwZi05YzNjLTM4MjUxZjc2OWVhYiIsImNvbXBhbnkiOiJDb2RlWXVnYSIsImludHJvVG91ciI6dHJ1ZSwidXNlcl9pZCI6MzQ3NCwiZXhwIjoxNzAyNTc3MDc4fQ.zMTWkQPkVMHYHPcagO0fGgMzg2c2dtPMlhf9Q5xYjW-k4eE45iQJDuqWUtlitd5tsg91sqdewFXyPPp8gn-bkA"}
                if m_category_id:
                    url = 'https://prod-api.buildpartner.com/api/material-categories/'+m_category_id+'/spec/2/material'
                    print(url)
                    response = requests.get(url, headers=headers)
                    prime_material_id = response.json()
                    status_code = 200
                else:
                    prime_material_id = -1
                    status_code = 999
                if (status_code == 200 or status_code == 999):
                    result.append(task_id)
                    result.append(prime_material_id)
                    time.sleep(1.5)
                    if (prime_material_id != -1):
                        url = 'https://prod-api.buildpartner.com/api/quoters/1441/task-cost/'+str(task_id)+"?ratio=1&qty=1&primeId="+str(prime_material_id)
                    else:
                        url = 'https://prod-api.buildpartner.com/api/quoters/1441/task-cost/'+str(task_id)+"?ratio=1&qty=1"
                    print(url)
                    response = requests.get(url, headers=headers)
                    response = response.json()
                    material_cost = response['materialCost']
                    labor_cost = response['laborCost']
                    quantity = response['qty']
                    result.append(material_cost)
                    result.append(labor_cost)
                    result.append(quantity)
                    row_data = ','.join(map(str, result))
                    print(row_data)
                    with open("prices.csv", "a") as outfile:
                            outfile.write(row_data)
                            outfile.write("\n")
                    time.sleep(1.5)
        except Exception as e:
            print(" Fetching failed for task id: "+str(task_id))
            print(e)
