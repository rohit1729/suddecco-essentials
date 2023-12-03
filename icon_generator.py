import requests
import csv
import time
import base64

names = ''
with open('./build-partner/assets/image_names.txt', mode ='r') as file:
    csvFile = csv.reader(file)
    for line in csvFile:
        names = line
sanitised_names = []
for name in names:
    temp = name.replace("'", "").replace("/", "_").replace(" ", "").replace("[","").replace("]","")
    sanitised_names.append(temp)


file = open('./build-partner/assets/images.log', 'r')

#read text file into list
data = file.read()
images = data.split("\",")

index = 0
for image in images:
    file_name = "./build-partner/assets/images/areas/"+sanitised_names[index]+".png"
    temp = image.split(",")[1]
    base64_str = temp[:len(temp)-3]
    image = base64.b64decode(base64_str, validate=True)
    with open(file_name, "wb") as fh:
        fh.write(image)
    index = index+1