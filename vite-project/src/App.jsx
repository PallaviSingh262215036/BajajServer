// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './index.css'
// import Card from './components/Card.jsx'
// import Color_changer from './components/bg_colorChanger.jsx'
// import Passward_Generator from './components/passwardGenerator.jsx'
// import Parent from './components/usecallBack_understanding.jsx'
// import InputBox from './components/InputBox.jsx'
// import InputBoxCurrencyconverter from './components/InputBoxCurrencyconverter.jsx'

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


// function App() {
//   let count=1;
//   const addvalue= () => {
//     count= count+1;
//     console.log(count);
//   }
 
//   function Home() {
//     return <h1>Welcome to the Home Page</h1>;
//   }
  
//   function About() {
//     return <h1>About Us</h1>;
//   }
  
//   function Contact() {
//     return <h1>Contact Us</h1>;
//   }


//   return (
//     <>
//       {/* <h className='bg-green-400 text-black p-4 rounded-xl'> Talwind CSS </h>
//       <Card channel="RadhaKrishna"/>
//       <Card channel="RadhaKrishna"/>
//       <Color_changer/> */}
//       {/* <Passward_Generator /> */}
//       {/* <Parent/> */}
//       {/* <InputBoxCurrencyconverter/> */}
//       {/* <div class="p-4 bg-gray-200">
//       <div className="w-1">
//         <p className="text-gray-500 mb-2 inline-block">Radha Krishna</p>  
//   Hello, World!
// </div>
// </div> */}

// <Router>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>

 
   
      
     
//     </>
//   )
// }

// export default App

// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   // State for Register Form
//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");
  
//   // State for Login Form
//   const [usernameLogin, setUsernameLogin] = useState("");
//   const [passwordLogin, setPasswordLogin] = useState("");
  
//   // Handle Register
//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/auth/register", { username: usernameReg, password: passwordReg });
//       console.log(response.data);
//       alert("Registration successful!");
//     } catch (error) {
//       console.error(error.response.data);
//       alert("Error in registration");
//     }
//   };

//   // Handle Login
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/auth/login", { username: usernameLogin, password: passwordLogin });
//       console.log(response.data);
//       alert("Login successful!");
//     } catch (error) {
//       console.error(error.response.data);
//       alert("Error in login");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>Welcome to Our App</h1>

//       {/* Registration Form */}
//       <div style={styles.formContainer}>
//         <h2 style={styles.formHeading}>Register</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={usernameReg}
//           onChange={(e) => setUsernameReg(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={passwordReg}
//           onChange={(e) => setPasswordReg(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleRegister} style={styles.button}>Register</button>
//       </div>

//       {/* Login Form */}
//       <div style={styles.formContainer}>
//         <h2 style={styles.formHeading}>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={usernameLogin}
//           onChange={(e) => setUsernameLogin(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={passwordLogin}
//           onChange={(e) => setPasswordLogin(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleLogin} style={styles.button}>Login</button>
//       </div>
//     </div>
//   );
// };

// // Styling for the page
// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//     backgroundColor: "#f7f7f7",
//     minHeight: "100vh",
//   },
//   heading: {
//     color: "#333",
//     fontFamily: "'Arial', sans-serif",
//     fontSize: "2.5em",
//     marginBottom: "20px",
//   },
//   formContainer: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     margin: "10px 0",
//     width: "300px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   formHeading: {
//     fontFamily: "'Arial', sans-serif",
//     fontSize: "1.5em",
//     marginBottom: "15px",
//     color: "#555",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     margin: "8px 0",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     fontSize: "1em",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#28a745",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "1.2em",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//     width: "100%",
//   },
// };

// export default App;

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

      const response = await fetch("http://localhost:5001/bfhl", {
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
