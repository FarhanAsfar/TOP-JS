import { useState } from 'react'

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "React",
    description: "Do React"
  },
  {
    id:2,
    title: "TS",
    description: "Do TS"
  },
  {
    id:3,
    title: "Next.js",
    description: "Do Next.js"
  }])

  function addTodo(){
    setTodos([...todos, {
      id:counter++,
      title: Math.random(),
      description: "nothing"
    }])
  }
  
  return (
    <div>
      <button onClick={addTodo}>Add</button>

      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
}

function Todo({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
  )
}

export default App
