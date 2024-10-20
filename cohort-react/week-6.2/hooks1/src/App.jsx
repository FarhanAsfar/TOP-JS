import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [id, setId] = useState(null);

  function selectId(value){
    setId(value);
    console.log(value);
  }

  return (
    <div>
      <button onClick={() => selectId('66eb4b00f35b5b14781ec90f')}>1</button>
      <button onClick={() => selectId('66ebadc0740e2c7586675c8c')}>2</button>
      <button onClick={() => selectId('66ebae543fdaae290c7a9bbb')}>3</button>
      <Todo id={id}></Todo>
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
      <h3>ID: {id}</h3>
      <h1>{todos.title}</h1>
      <h3>{todos.description}</h3>
    </div>
  );
}

export default App
