import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center class = 'todo-container'>
      <h1>TODO App</h1>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder='Enter Todo' />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type='button' class="btn btn-success">Add</button>
          </div>
        </div>
      </div>
    </center>
  )
}

export default App
