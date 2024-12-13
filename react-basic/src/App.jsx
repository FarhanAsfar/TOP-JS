import { BrowserRouter, Route, Routes } from "react-router-dom";
import Planets from "./components/Planets";
import PlanetsList from "./components/PlanetsList";
// import PlanetsDetail from "./components/PlanetsDetail";

function App() {
  const planets = ['Earth', 'Mars', 'Mercury', 'Jupiter', 'Venus',
    'Uranus', 'Saturn', 'Neptune'
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/planets" element={<PlanetsList planets={planets} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
