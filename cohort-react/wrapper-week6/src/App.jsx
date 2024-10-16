import { useState } from 'react'

function App() {

  return (
    <div>
      <CardWrapper>
        hello
      </CardWrapper>
    </div>
  )
}


function CardWrapper({children}){
  return(
    <div style={{border: "2px solid cyan"}}>
      {children}
    </div>
  );
}

export default App
