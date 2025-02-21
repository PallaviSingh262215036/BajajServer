// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// console.log("Starting server...");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const user_id = "john_doe_17091999";
// const email = "john@xyz.com";
// const roll_number = "ABCD123";

// // GET Endpoint
// app.get("/bfhl", (req, res) => {
//     res.status(200).json({ operation_code: 1 });
// });

// // POST Endpoint
// app.post("/bfhl", (req, res) => {
//     try {
//         const { data } = req.body;
//         if (!data || !Array.isArray(data)) {
//             return res.status(400).json({ is_success: false, message: "Invalid input" });
//         }

//         const numbers = data.filter(item => !isNaN(item));
//         const alphabets = data.filter(item => isNaN(item));
//         const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

//         res.status(200).json({
//             is_success: true,
//             user_id,
//             email,
//             roll_number,
//             numbers,
//             alphabets,
//             highest_alphabet
//         });
//     } catch (error) {
//         res.status(500).json({ is_success: false, message: "Server error" });
//     }
// });

// // Start server
// const PORT = 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

console.log("Starting server...");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const user_id = "PallaviSingh_26012005";
const email = "22BCS15036@cuchd.in";
const roll_number = "22BCS15036";

//  GET Endpoint (Returns hardcoded operation code)
app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

//  POST Endpoint (Processes input data)
app.post("/bfhl", (req, res) => {
    try {
        const { data } = req.body;
        
        // ❌ Invalid input handling
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format. Expected an array." });
        }

        let numbers = [];
        let alphabets = [];

        // ✅ Process each item in the array
        data.forEach(item => {
            if (typeof item !== "string") return;  // Ensure item is a string

            // 🔹 Extract numbers and alphabets separately
            let numPart = item.replace(/[^0-9]/g, "");  // Keep only digits
            let alphaPart = item.replace(/[^a-zA-Z]/g, "");  // Keep only letters

            if (numPart.length > 0) numbers.push(numPart); // Add numbers if digits exist
            if (alphaPart.length > 0) alphabets.push(...alphaPart.split("")); // Split letters into array
        });

        // ✅ Find highest alphabet (case insensitive)
        let highest_alphabet = alphabets.length > 0 
            ? [alphabets.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })).reverse()[0]] 
            : [];

        // ✅ Return response
        res.status(200).json({
            is_success: true,
            user_id,
            email,
            roll_number,
            numbers,
            alphabets,
            highest_alphabet
        });

    } catch (error) {
        res.status(500).json({ is_success: false, message: "Server error" });
    }
});

// ✅ Start Server on PORT 5001
const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
