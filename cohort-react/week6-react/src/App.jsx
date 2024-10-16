import { useState } from 'react'

function App(){
  const [title, setTitle] = useState(0);

  return (
    <>
      <Header title={title}></Header>
      <Header title="hello 2"></Header>
      <Header title="hello 3"></Header>
      <Header title="hello 4"></Header>
      <Header title="hello 5"></Header>
      <Header title="hello 6"></Header>

      <Button setTitle={setTitle}></Button>
    </>
  );

}

function Header({title}){
  return(
    <div>
      {title}
    </div>
  );
}

function Button({setTitle}){
  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }
  
  return (
    <button onClick={updateTitle}>Click me!</button>
  )
}

export default App
