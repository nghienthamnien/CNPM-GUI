from flask import Flask, request, jsonify
import json
import logging

app = Flask(__name__)



@app.route('/predict', methods=['POST'])
def predict():
    try:
        rq = json.loads(request.data)
        return jsonify({'result': rq})
    except Exception as e:
        return jsonify({'error': str(e)})
@app.route('/hehe', methods=['POST'])
def update_record():
    record = json.loads(request.data)
    print(record)
    
    return jsonify({'ans': record['sondeptrai']})
if __name__ == '__main__':
    app.run(port=5000)
