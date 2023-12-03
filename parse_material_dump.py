import re
import json
import csv

closings = []
openings = []
csv_params = []
prices_map = {}
all_rows = []
def find(str, ch):
    for i, ltr in enumerate(str):
        if ltr == ch:
            yield i

prices_file = open('material_prices.json', 'r')
Lines = prices_file.readlines()
for line in Lines:
    price_json = json.loads(line)
    id = price_json["id"]
    materialCost = price_json["materialCost"]
    prices_map[id] = materialCost

#print(prices_map)

with open("materials_dump.json", mode="r", encoding="utf-8") as docFile:
    doc = docFile.read()
    closings = list(find(doc, "]"))
    openings = list(find(doc, "["))
    for idx, x in enumerate(openings):
        start_index = openings[idx]
        end_index = closings[idx]
        response = doc[start_index: end_index+1]
        #print(response)
        try:
            print("cdcds")
            materials_array = json.loads(response)
            for material_json in materials_array:
                row_data = []
                row_data.append(material_json["id"])
                row_data.append(material_json["material"])
                if material_json.get("unit"):
                    row_data.append(material_json["unit"]["id"])
                else:
                    row_data.append("")
                
                row_data.append(material_json["materialCategory"]["id"])
                row_data.append(material_json["materialCategory"]["name"])
                if material_json.get("specification"):
                    row_data.append(material_json["specification"]["id"])
                    row_data.append(material_json["specification"]["name"])
                    row_data.append(material_json["specification"]["title"])
                    row_data.append(material_json["specification"]["description"])
                else:
                    row_data.append("")
                    row_data.append("")
                    row_data.append("")
                    row_data.append("")
                id = str(material_json["id"])
                row_data.append(prices_map.get(id))
                all_rows.append(row_data)
                print(row_data)
        except:
            print("An exception occured")

header = ['id', 'material', 'unit_id', 'material_category_id','material_category_name', 'material_specification_id', 'material_specification_name','material_specification_title', 'material_specification_description', "price"]
with open('material_details.csv', 'w', encoding='UTF8') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    for row in all_rows:
        writer.writerow(row)
