import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  
  return (
    <div>
      <Todo id="66ebadc0740e2c7586675c8c"></Todo>
    </div>
  );
}

function Todo({id}){
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try{
        const res =await fetch(`http://localhost:3000/todos/${id}`);
        const json = await res.json();
        setTodos(json);
      }
      catch(error){
        console.log(error);
      }
    };

    fetchTodo();
  }, [id]);

  if (!todos) {
    return <div>Loading...</div>;
  }

  
  return(
    <div>
      <h1>{todos.title}</h1>
      <h3>{todos.description}</h3>
    </div>
  );
}

export default App
