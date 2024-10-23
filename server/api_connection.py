from flask import Flask, request, jsonify
import numpy as np
import joblib  # Import joblib instead of pickle

app = Flask(__name__)

# Load the model using joblib
model = joblib.load('rf_clf.pkl')  # Change the file extension if necessary

@app.route('/')
def home():
    return "Parkinson's Disease Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Ensure to provide all the features in the right order
    features = np.array([data['MDVP:Fo(Hz)'], data['MDVP:Fhi(Hz)'], data['MDVP:Flo(Hz)'], 
                         data['MDVP:Jitter(%)'], data['MDVP:Jitter(Abs)'], 
                         data['MDVP:RAP'], data['MDVP:PPQ'], 
                         data['Jitter:DDP'], data['MDVP:Shimmer'], 
                         data['MDVP:Shimmer(dB)'], data['Shimmer:APQ3'], 
                         data['Shimmer:APQ5'], data['MDVP:APQ'], 
                         data['Shimmer:DDA'], data['NHR'], 
                         data['HNR'], data['RPDE'], 
                         data['DFA'], data['spread1'], 
                         data['spread2'], data['D2'], 
                         data['PPE']])  # Include all necessary features
    
    prediction = model.predict([features])

    # Convert the prediction to a native Python type
    result = int(prediction[0])  # Convert to Python native type
    
    return jsonify({'prediction': result})

if __name__ == "__main__":
    app.run(debug=True)
