import { useState } from 'react'
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
          return <Todo key={todo.title} title={todo.title} description={todo.description}></Todo>
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
