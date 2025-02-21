import React, { useState } from 'react';

function Color_changer() {
  const [bgColor, setBgColor] = useState('bg-white');

  // Function to handle color change
  const handleChangeColor = (color) => {
    setBgColor(color);
  };
  return ( 
<div className={`h-screen ${bgColor} flex flex-col justify-center items-center`}>
      <h1 className="text-2xl font-bold mb-6">Background Color Changer</h1>
      <div className="space-x-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => handleChangeColor('bg-red-500')}
        >
          Red
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => handleChangeColor('bg-blue-500')}
        >
          Blue
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => handleChangeColor('bg-green-500')}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
          onClick={() => handleChangeColor('bg-yellow-500')}
        >
          Yellow
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={() => handleChangeColor('bg-purple-500')}
        >
          Purple
        </button>
      </div>
    </div>   
    
  );

}

export default Color_changer;
