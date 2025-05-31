# main.py
import micropython
import mip
mip.install("pkg_resources")
mip.install("github:pfalcon/picoweb/picoweb/__init__.py", target="/lib/picoweb")
mip.install("github:pfalcon/picoweb/picoweb/utils.py", target="/lib/picoweb")

import picoweb
import machine
import time
import json

import ConnectToWifi
from secrets import ssid, password

ConnectToWifi.connect(ssid, password)

RESP_HEADER = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
data = {}

with open('drink_map.json', 'r') as file:
    data = json.load(file)

app = picoweb.WebApp("Drink Fridge v0.1")

@app.route("/")
def index(req, resp):
    yield from picoweb.start_response(resp)
    yield from resp.awrite("Hello from the Drink Fridge server!")

@app.route("/request-drink")
def request_drink(req, resp):
    if not req.qs:
        return
    
    params = picoweb.utils.parse_qs(req.qs)
    drink_id = int(params.get("id"))
    drink = next((d for d in data if d["id"] == drink_id), None)
    #print("Drink ID: " + drink_id)
    print("Data: ", data)
    
    yield from picoweb.start_response(resp, status="200", headers=RESP_HEADER)
    
    if drink:
        yield from resp.awrite("Making Drink ID: {}: {}".format(drink_id, drink["name"]))
    else:
        yield from resp.awrite("Drink not found.")


app.run(debug=True, host="10.0.0.14")