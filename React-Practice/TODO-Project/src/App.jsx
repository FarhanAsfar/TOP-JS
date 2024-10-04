import { useState } from 'react'
import './App.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <center class = 'todo-container'>
      <AppName />
      <AddTodo />
    </center>
  )
}

export default App
