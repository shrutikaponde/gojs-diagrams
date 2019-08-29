from flask import Flask
from flask_cors import CORS
from schema_to_diagram_obj import schema_to_diagram_obj
import subprocess

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

@app.route('/model',methods=['GET','POST','OPTIONS'])
def run_tap_mysql():
    # try:
    command  = "python /home/shrutika/singer/tap-mysql/dev/tap-mysql/tap_mysql/__init__.py -c /home/shrutika/singer/tap-mysql/config.json -d > /home/shrutika/singer/tap-mysql/new_properties.json"
    subprocess.call(command, stdout=subprocess.PIPE, stderr=None, shell=True)
    diagram_obj = schema_to_diagram_obj('/home/shrutika/singer/tap-mysql/new_properties.json')
    return diagram_obj
    # process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=None, shell=True)
    # #Launch the shell command:
    # output = process.communicate())
    # return output[0].decode("utf-8")
    # except :
    #     return "ERROR"
    
    

if __name__ == '__main__':
    app.run()