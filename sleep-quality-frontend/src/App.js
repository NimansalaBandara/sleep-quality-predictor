import React, { useState } from "react";
import { FaWalking, FaFireAlt, FaClock } from "react-icons/fa";

function App() {
  const [formData, setFormData] = useState({
    ModeratelyActiveDistance: "",
    LightActiveDistance: "",
    FairlyActiveMinutes: "",
    LightlyActiveMinutes: "",
    Calories: "",
  });

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction("");

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      setPrediction("Error: Could not connect to the backend.");
    }

    setLoading(false);
  };

  const iconMap = {
    ModeratelyActiveDistance: <FaWalking className="text-blue-500" />,
    LightActiveDistance: <FaWalking className="text-yellow-500" />,
    FairlyActiveMinutes: <FaClock className="text-purple-500" />,
    LightlyActiveMinutes: <FaClock className="text-pink-500" />,
    Calories: <FaFireAlt className="text-red-500" />,
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/sleep5.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-3xl shadow-2xl w-full max-w-3xl backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold mb-2 text-gray-800 text-center">
          💤 Sleep Quality Predictor
        </h1>
        <p className="mb-6 text-gray-600 text-center font-medium">
          Powered by FitBit activity data
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <label className="text-sm text-gray-700 font-semibold flex items-center mb-1">
                <span className="mr-2">{iconMap[key]}</span>
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                step="any"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-bold text-white transition ${
                loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? "Predicting..." : "Predict Sleep Quality"}
            </button>
          </div>
        </form>

        {prediction && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold text-center">
            Prediction: {prediction}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
