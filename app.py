from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/temperatura")
def temperatura():

    valor = round(random.uniform(20,35), 2)

    return jsonify({
        "temperatura": valor
    })


app.run()