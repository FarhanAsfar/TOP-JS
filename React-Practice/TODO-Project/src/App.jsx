import { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <center className = 'todo-container'>
      <AppName />
      <AddTodo />
    </center>
  )
}

export default App;
