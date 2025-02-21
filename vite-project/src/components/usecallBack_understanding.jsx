import React, { useState, useCallback, memo } from 'react';

// function Child({ onClick }) {
//     console.log("Child rendered");
//     return <button onClick={onClick}>Child Button</button>;
//   }
  

// function Parent() {
//     const [count, setCount] = useState(0);
  
//     const handleClick = () => console.log("Clicked!");
  
//     return (
//       <div>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//         <Child onClick={handleClick} />
//       </div>
//     );
//   }
//   export default Parent
  
  
// With using useCallback()
// function Child({ onClick }) {
//     console.log("Child rendered");
//     return <button onClick={onClick}>Child Button</button>;
//   }

  // Memoizing the child component to prevent unnecessary renders
const Child = memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Child Button</button>;
  });

function Parent() {
    const [count, setCount] = useState(0);
  
    const handleClick = useCallback(() => console.log("Clicked!"), []);
   
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child onClick={handleClick} />
      </div>
    );
  }
  export default Parent
  
  
  