import { useState } from 'react'

function App() {

  return (
    <div>
      <CardWrapper>
        <CardWrapper>
          <TextComponent />
        </CardWrapper>
      </CardWrapper>
    </div>
  )
}

function TextComponent(){
  return <div>
    hello from text component
  </div>
}

function CardWrapper({children}){
  return(
    <div style={{border: "2px solid cyan", padding:15, margin:20}}>
      {children}
    </div>
  );
}

export default App
