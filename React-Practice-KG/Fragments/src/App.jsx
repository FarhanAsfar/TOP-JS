import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>No extra div, using fragment</h2>
    </>
  )
}

export default App
