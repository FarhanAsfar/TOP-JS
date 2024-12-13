import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planets from "./components/Planets";
import PlanetsList from "./components/PlanetsList";
import PlanetsDetail from "./components/PlanetsDetail";

function App() {
  const planets = [
    {id:1, name:'Earth'},
    {id:2, name:'Mars'},
    {id:3, name:'Mercury'},
    {id:4, name:'Jupiter'},
    {id:5, name:'Venus'},
    {id:6, name:'Uranus'},
    {id:7, name:'Saturn'},
    {id:8, name:'Neptune'},
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/planets" element={<PlanetsList planets={planets} />} />
          <Route path="/details/:id" element={<PlanetsDetail planets={planets} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
