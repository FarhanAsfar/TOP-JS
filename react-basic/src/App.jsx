import Planets from "./components/Planets";
// import PlanetsList from "./components/PlanetsList";
// import PlanetsDetail from "./components/PlanetsDetail";

function App() {
  const planets = ['Earth', 'Mars', 'Mercury', 'Jupiter', 'Venus',
    'Uranus', 'Saturn', 'Neptune'
  ];

  return (
    <>
      <div>
        <Planets planets={planets}/>
      </div>
    </>
  )
}


export default App
