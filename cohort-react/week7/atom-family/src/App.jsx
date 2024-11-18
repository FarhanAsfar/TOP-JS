import { RecoilRoot } from 'recoil';

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </>
  )
}

function Todo({}){
  return(
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
