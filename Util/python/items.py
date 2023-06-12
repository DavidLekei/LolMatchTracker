import json

raw_data = open('../../WebApp/lol-match-tracker/data/items.json')
formatted_items = open('../../WebApp/lol-match-tracker/data/formatted_items.txt', 'w+')

items = json.load(raw_data)

item_data = []


for item in items['data']:
    item_type = ""
    if (items['data'][item]['gold']['purchasable'] == True):
        if('Mythic' in items['data'][item]['description']):
            item_type = "Mythic"
        else:
            if('depth' not in items['data'][item]):
                item_type = "Starter"
            elif(items['data'][item]['depth'] >= 2):
                if('into' in items['data'][item]):
                    item_type = "Epic"
                else:
                    item_type = "Legendary"
        
        print(item_type, items['data'][item]['name'])
        item_data.append('{name: "' + items['data'][item]['name'] +'", id: "' + item + '", type: "' + item_type + '", effect: "' + items['data'][item]['description'] + '", img: "' + items['data'][item]['image']['full'] + '"},\n')


for item in item_data:
    formatted_items.write(item)

raw_data.close()
formatted_items.close()