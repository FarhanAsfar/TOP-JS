import { useState } from 'react'
import { CountContext } from './component/context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){
  return (
    <div>
      <CountRenderer count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

function CountRenderer(){
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({count, setCount}){
  return (
    <div>
      <button onClick={() => {
        setCount(count+1)
      }}>Increase</button>

      <button onClick={() => {
        setCount(count-1)
      }}>Decrease</button>
    </div>
  )
}

export default App
