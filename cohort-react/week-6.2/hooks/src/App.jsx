import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.data);
    });
  }, []);

  return (
    <div>
      {todos.map(todo => <Todo key={todo._id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}

export default App
