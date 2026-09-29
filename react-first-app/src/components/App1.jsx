import React from 'react'
import { useState, useEffect } from 'react'

 const App1 = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect");
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
export default App1;