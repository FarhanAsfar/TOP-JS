import { useEffect, useState } from "react"

function App() {
const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async (res)=>{
      const json = await res.json();
      console.log(json);
      setTodos(json.data);
    })
  }, []);


  return (
    <div>
      {todos.map(todo => <Todo key={todo._id} title={todo.title} description={todo.description}></Todo>)}
    </div>
  )
}

function Todo({title, description}){
  return (
    <div>
      <h1><i>{title}</i></h1>
      <h3>{description}</h3>
    </div>
  )
}


export default App
