import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewButton from './Button'
import Hello from './Test'
import Random from './Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello Worldd!</h1>
      <NewButton />
      <Hello />

      <Random></Random>
    </div>
  )
}

export default App
