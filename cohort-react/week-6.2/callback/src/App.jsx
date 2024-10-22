import { useCallback } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback(() => {
    console.log("inside function");
  }, []);
  
  return (
    <div>
      <button onClick={() => {
        setCount(count+1);
      }}>Count ({count})</button>      
    </div>
  )
}

export default App
