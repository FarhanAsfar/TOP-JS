import "../components/PlanetsList.css";
import { useNavigate } from "react-router-dom";

function PlanetsList({ planets }) {
    const navigate = useNavigate();

    const handleCardClick = (planetId) => {
        navigate(`/details/${planetId}`)
    }
    
    return (
        <div className="planets-container" >
            {planets.map((planet) => (
                <div
                    key={planet.id}
                    className={`planet-card ${planet.name.toLowerCase()}`}
                    onClick={() => handleCardClick(planet.id)}
                >
                    {planet.name}
                </div>
            ))}
        </div>
    );
}

export default PlanetsList;
