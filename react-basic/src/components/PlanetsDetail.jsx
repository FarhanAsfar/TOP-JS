import "../components/PlanetsDetail.css";
import { useParams } from 'react-router-dom';

function PlanetsDetail({ planets }) {

  const { planetId } = useParams();

  const planet = planets.find((p) => p.id === parseInt(planetId));
  console.log(planet);

  return (
    <>
        <div className="card-container">
            <div className="card" key={planet.id}>
            <h3 className="planet-name">{planet.name}</h3>
            <p className="distance">Distance from Sun: {planet.distanceFromSun}</p>
            <p className="description">{planet.description}</p>
            </div>
        </div>
    </>
  );
}

export default PlanetsDetail;
