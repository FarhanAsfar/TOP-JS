import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  // const fruits = [];
  const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];

  return (
    <>
      <h2>No extra div, using fragment</h2>

      <ErrorMsg items={fruits}></ErrorMsg>

      <FoodItems items={fruits}></FoodItems>
    </>
  )
}

export default App
