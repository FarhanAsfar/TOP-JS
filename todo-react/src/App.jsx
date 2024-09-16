import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title: "TOP",
    description: "Full Stack",
    status: false
  },  {
    title: "Web3",
    description: "Blockchain",
    status: false
  }])

  return (
    <div>
      {/* <Todo title="TOP" description="Full Stack"></Todo> */}

      {
        todo.map(function(todo){
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
