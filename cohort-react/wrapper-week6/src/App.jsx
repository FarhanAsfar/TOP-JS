import { useState } from 'react'

function App() {

  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
    </div>
  )
}

function TextComponent(){
  return (
    <div>
      hello
    </div>
  )
}

function CardWrapper({innerComponent}){
  return(
    <div style={{border: "2px solid cyan"}}>
      {innerComponent}
    </div>
  );
}

export default App
