import { useEffect, useState } from "react"

function App() {
const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async (res)=>{
      const json = await res.json();
      setTodos(json);
    })
  }, []);


  return (
    <div>
      
    </div>
  )
}

function Todo({title, description}){
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}


export default App
