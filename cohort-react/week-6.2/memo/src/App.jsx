import { useMemo } from 'react';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function updateCount(){
    setCount(count+1);
  }
  return (
    <div>
      <Input></Input>

      <button onClick={updateCount}>Counter({count})</button>
    </div>
  )
}

function Input(){
  const [inputValue, setInputValue] = useState('');
  // console.log('memo')
  let count = useMemo(() => {
    let sum = 0;
    for(let i=1;i<=inputValue;i++){
      sum += i;
    }
    return sum;
  }, [inputValue]);
  
  // function updateSum(event){
  //   let value = event.target.value;
  //   let sum = 0;
  //   console.log('loop')
  //   for(let i=1;i<=value;i++){
  //     sum += i;
  //   }
  //   setInputValue(sum);
  // }

  return (
    <div>
    {/* <input type="number"  onChange={updateSum} /> */}
    <input type="number" onChange={(event) =>{
      setInputValue(event.target.value);
    }} />
    <h4>Sum: {count}</h4>
    </div>
  );
}

export default App
