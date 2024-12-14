import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Planets from "./components/Planets";
// import PlanetsList from "./components/PlanetsList";
// import PlanetsDetail from "./components/PlanetsDetail";
import Form from "./components/Form";

import { lazy, Suspense } from 'react';
const Planets = lazy(() => import('./components/Planets'));
const PlanetsList = lazy(() => import('./components/PlanetsList'));
const PlanetsDetail = lazy(() => import('./components/PlanetsDetail'));

function App() {
  const planets = [
    {
      id: 1,
      name: "Earth",
      distanceFromSun: "149.6 million km",
      description: "The only planet known to support life, Earth has a balanced climate and abundant water resources.",
    },
    {
      id: 2,
      name: "Mars",
      distanceFromSun: "227.9 million km",
      description: "The Red Planet has a cold, desert-like climate and is famous for its massive dust storms.",
    },
    {
      id: 3,
      name: "Mercury",
      distanceFromSun: "57.91 million km",
      description: "The smallest planet and closest to the Sun, Mercury has extreme temperatures and no atmosphere to trap heat.",
    },
    {
      id: 4,
      name: "Jupiter",
      distanceFromSun: "778.5 million km",
      description: "The largest planet in the solar system, Jupiter is a gas giant with a cold, stormy atmosphere.",
    },
    {
      id: 5,
      name: "Venus",
      distanceFromSun: "108.2 million km",
      description: "Often called Earth’s twin, Venus is the hottest planet due to its thick atmosphere and runaway greenhouse effect.",
    },
    {
      id: 6,
      name: "Uranus",
      distanceFromSun: "2.87 billion km",
      description: "An ice giant with a bluish color, Uranus is tilted on its side and has a frigid atmosphere.",
    },
    {
      id: 7,
      name: "Saturn",
      distanceFromSun: "1.43 billion km",
      description: "Famous for its stunning ring system, Saturn is a cold gas giant located far from the Sun.",
    },
    {
      id: 8,
      name: "Neptune",
      distanceFromSun: "4.5 billion km",
      description: "The farthest planet from the Sun, Neptune is a cold ice giant with supersonic winds and a deep blue hue.",
    },
  ];

  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Planets />} />
          
          <Route path="/planets" element={<PlanetsList planets={planets} />} />

          
          <Route path="/details/:planetId" element={<PlanetsDetail planets={planets} />} />

        </Routes>
      </Suspense>
      </BrowserRouter>
      <Form />
    </>
  )
}


export default App
