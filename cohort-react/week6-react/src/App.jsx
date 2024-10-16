import { useState } from 'react'

function App(){

  return (
    <>
      <HeaderWithButton></HeaderWithButton>
      <Header title="Not Rerendering"></Header>
    </>
  );

}

function HeaderWithButton(){
  const [title, setTitle] = useState(0);

  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }

  return(
    <div>
      <button onClick={updateTitle}>Click me!</button>
      <Header title={title}></Header>
    </div>
  );
}

function Header({title}){  
  return (
    <div>
      {title}
    </div>
  )
}

export default App
