import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  function updateCount(){
    count++;
    setCount(count);
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

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  function updateSum(event){
    let value = event.target.value;
    let sum = 0;
    for(let i=1;i<=value;i++){
      sum += i;
    }
    setInputValue(sum);
  }

  return (
    <div>
    <input type="number"  onChange={updateSum} />
    <h4>Value: {inputValue}</h4>
    </div>
  );
}

export default App
