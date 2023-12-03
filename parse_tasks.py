import re
import json
import csv

content = ''
with open('tasks_v2.json') as f: content = f.read()

start_index = 0
break_value = 5
index = 0


seen_tasks = {}
task_rows = []
for m in re.finditer('}{', content):
    json_string = content[start_index:m.start()+1]
    print(" start_index: "+str(start_index))
    print(" end index: "+str(m.start()+1))
    start_index = m.start()+1
    #print(json_string)
    print("\n")
    task_json = json.loads(json_string)
    for task in task_json["result"]:
        task_id = task["id"]
        if not seen_tasks.get(task_id):
            print(task)
            task_name = task["task"]
            task_unit_id = task["unitId"]
            task_unit_name = task["unit"]
            task_unit_plural_name = task["unitPlural"]
            task_stage = task["stage"]
            task_stage_id = task["stageId"]
            task_sub_stage_id = task["elementId"]
            task_display_name = task["displayName"]
            task_component_area_id = task["componentAreaId"]
            if (task.get("ratio")):
                task_ratio = task["ratio"]
            else:
                task_ratio = ''
            task_material_category_id = ''
            task_material_category_name = ''
            if (len(task["materialCategories"]) > 0):
                task_material_category_id = task["materialCategories"][0]["id"]
                task_material_category_name= task["materialCategories"][0]["name"]
            task_row = [task_id, task_name, task_display_name, task_component_area_id, task_ratio, task_stage_id, task_stage, task_sub_stage_id, task_unit_id, task_unit_name, task_material_category_id, task_material_category_name ]
            task_rows.append(task_row)
            seen_tasks[task_id] = True
    index += 1


header = ['id', 'name', 'display_name','component_area_id','ratio','stage_id', 'stage_name','sub_stage_id', 'task_unit_id', "task_unit_name", "task_material_category_id", "task_material_category_name"]
with open('tasks_v3_1.csv', 'w', encoding='UTF8') as f:
    writer = csv.writer(f)
    writer.writerow(header)
    for row in task_rows:
        writer.writerow(row)