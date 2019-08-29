import json
import pandas as pd

def schema_to_diagram_obj (filename) :
    # filename = "./new_properties.json"
    database = "employees"
    nodeDataArray = []
    linkDataArray = []
    #Read JSON data into the datastore variable
    if filename:
        with open(filename, 'r') as f:
            db_tables = json.load(f)


    for table in db_tables['streams'] :
        if database in table['tap_stream_id']:
            node = {} 
            items = []
            node['key'] = table['table_name']
            for column in table['schema']['properties'].keys() :
                item = {}
                item['name'] = column
                item['type'] = table['schema']['properties'][column]['type']
                #item['size'] = [table['schema']['properties'][column]['maximum'], table['schema']['properties'][column]['maximum']]
                # item['isKey'] = [True for key_property in table['metadata']['metadata']['table-key-properties'] if key_property['key'] == column ]
                try :
                    for key_property in table['metadata'][0]['metadata']['table-key-properties'] :
                        if key_property['key'] == column :
                            item['isKey'] = True
                            item['keyType'] = 'FK' if key_property['ref-table-name'] and key_property['ref-column-name'] else 'PK'
                        if key_property['ref-table-name'] and key_property['ref-column-name']  :
                            link = {}
                            link['from'] = table['table_name']
                            link['to'] = key_property['ref-table-name']
                            linkDataArray.append(link)
                except KeyError:
                    item['isKey'] = False
                    item['keyType'] = ""
                item['figure'] = "Decision"
                item['color'] = ""
                items.append(item)
            node['items'] = items
            nodeDataArray.append(node)

    linkDataArray = pd.DataFrame(linkDataArray).drop_duplicates().to_dict('records')

    diagram_model = {
        'nodeDataArray' : nodeDataArray,
        'linkDataArray' : linkDataArray
    }
    # with open('node.json', 'w+') as f1:
    #     json.dump(nodeDataArray, f1)

    # with open('link.json', 'w+') as f2:
    #     json.dump(linkDataArray, f2)

    print("CONVERTED")
    return diagram_model
    # return "CONVERTED"