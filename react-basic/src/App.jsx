import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/list'


function App() {
  const [count, setCount] = useState(0);

  

  return (
    <div>
      {/* component name must Start with an Uppercase letter */}
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <div><List></List></div>
    </div>
  )
}

//component
function CustomButton(props){
  
  function onClickHandler(){
    props.setCount(props.count+1);
    //console.log(state.count); 
  }
  
  return <button onClick={onClickHandler}>
    Counter {props.count}
  </button>
}

export default App
