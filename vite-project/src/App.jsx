

// Bajaj frontened
import React, { useState, useEffect } from "react";
import "./App.css"; // Optional for styling

function App() {
  const [jsonInput, setJsonInput] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    document.title = "22BCS15036"; // Replace with your roll number
  }, []);

  // Handle API Request
  const handleSubmit = async () => {
    try {
      setError(""); // Clear previous errors
      const parsedInput = JSON.parse(jsonInput); // Validate JSON

      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        setError("Invalid JSON: 'data' key must contain an array.");
        return;
      }

      const response = await fetch("https://bajajserver-kbhr.onrender.com/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedInput),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result.message || "Server error");
        return;
      }

      setResponseData(result);
    } catch (err) {
      setError("Invalid JSON format. Please check your input.");
    }
  };

  // Handle Dropdown Change
  const handleFilterChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedFilters(options);
  };

  return (
    <div className="container">
      <h1>JSON Processor</h1>

      {/* JSON Input Box */}
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='Enter JSON: {"data": ["A", "C", "z"]}'
      />
      <button onClick={handleSubmit}>Submit</button>

      {error && <p className="error">{error}</p>}

      {/* Dropdown for filtering */}
      {responseData && (
        <>
          <label>Select Data to Display:</label>
          <select multiple onChange={handleFilterChange}>
            <option value="alphabets">Alphabets</option>
            <option value="numbers">Numbers</option>
            <option value="highest_alphabet">Highest Alphabet</option>
          </select>

          {/* Display Selected Data */}
          <div className="result">
            {selectedFilters.includes("alphabets") && (
              <p><strong>Alphabets:</strong> {responseData.alphabets.join(", ") || "None"}</p>
            )}
            {selectedFilters.includes("numbers") && (
              <p><strong>Numbers:</strong> {responseData.numbers.join(", ") || "None"}</p>
            )}
            {selectedFilters.includes("highest_alphabet") && (
              <p><strong>Highest Alphabet:</strong> {responseData.highest_alphabet.join(", ") || "None"}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
