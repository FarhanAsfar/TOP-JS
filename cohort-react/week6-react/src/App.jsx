import React, { useState } from 'react'
// import { memo } from 'react';

function App(){
  const [title, setTitle] = useState(0);

  function updateTitle(){
    setTitle("my name is "+ Math.random());
  }

  return (
    <div>
    <button onClick={updateTitle}>Click me!</button>
      <Header title={title}></Header>
      <Header title="hello 2"></Header>
      <Header title="hello 3"></Header>
      <Header title="hello 4"></Header>
      <Header title={title}></Header>
      <Header title="hello 6"></Header>

      
    </div>
  );

}

const Header = React.memo(function Header({title}){
  return(
    <div>
      {title}
    </div>
  );
})

export default App
