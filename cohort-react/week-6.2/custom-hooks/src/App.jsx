import { useEffect, useState } from 'react'

//custom hook
function useTodos(){
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try{
        const res =await fetch(`http://localhost:3000/todos/`);
        const json = await res.json();
        setTodos(json);
      }
      catch(error){
        console.log(error);
      }
    };

    fetchTodo();
  }, []);
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos}    
    </div>
  )
}

export default App
