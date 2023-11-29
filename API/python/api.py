from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_api import status
from datetime import datetime
import os

curr_dir = os.path.dirname(os.path.realpath(__file__))

app = Flask(__name__)
cors = CORS(app)

def writeBytesToFile(bytes, file):
	with open(file, "wb+") as output_file:
		output_file.write(bytes)

@app.route("/", methods=['GET'])
def home():
	return "Server is Running."


@app.route("/recording", methods=['POST'])
def uploadRecording():
	data = request.data
	writeBytesToFile(request.data, curr_dir + "/test/recordings/test.h264")
	return "You made it"


if __name__ == "__main__":
	app.run()