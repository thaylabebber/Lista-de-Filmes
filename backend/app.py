from flask import flask
from flask_cors import CORS 

app= flask(__name__)
CORS(app)

@app.route("/")
def home():