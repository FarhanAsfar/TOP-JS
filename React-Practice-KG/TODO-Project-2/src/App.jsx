import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import "./App.css";
import TodoItem from './components/TodoItem';

function App() {

  return (
    <div>
      <center className = 'todo-container'>
        <AppName />
        <AddTodo />
      </center>
      <div className='todo-container'>
          <TodoItem todoName='something' todoDate='29/11/24'></TodoItem>
      </div>
    </div>
  )
}

export default App;
