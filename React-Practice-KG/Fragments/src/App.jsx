import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const fruits = [];
  const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];

  return (
    <>
      <h2>No extra div, using fragment</h2>

      <h1>Fruit List</h1>
      {fruits.length===0 ? <h3>Empty List</h3>:null}

      <ul className="list-group">
        {fruits.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
