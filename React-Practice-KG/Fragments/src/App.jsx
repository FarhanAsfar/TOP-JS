import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];

  return (
    <>
      <h2>No extra div, using fragment</h2>
      <h1>Fruit List</h1>

      <ul class="list-group">
        {fruits.map(item => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}

export default App
