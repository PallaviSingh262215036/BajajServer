import React, { useState } from 'react';

function Passward_Generator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  // Characters to include in the password
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  // Password Generator Logic
  const generatePassword = () => {
    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    if (characters.length === 0) {
      setPassword('Please select options!');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Automatic Password Generator</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* Display Generated Password */}
        <div className="mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 border rounded text-center"
            placeholder="Generated Password"
          />
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Password Length: {length}
          </label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Options Checkboxes */}
        <div className="mb-4 flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            Include Special Characters
          </label>
        </div>

        {/* Generate Password Button */}
        <button
          onClick={generatePassword}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default Passward_Generator;
