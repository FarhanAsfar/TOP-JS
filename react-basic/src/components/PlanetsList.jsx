import { useEffect, useState } from "react";
import "../components/PlanetsList.css";
import { useNavigate } from "react-router-dom";

function PlanetsList({ planets }) {
    const navigate = useNavigate();
    const [currentPlanetId, setCurrentPlanetId] = useState(null);

    useEffect(() => {
        if(currentPlanetId){
            navigate(`/details/${currentPlanetId}`);
        }
    },[currentPlanetId, navigate])
    
    const handleCardClick = (planetId) => {
        // navigate(`/details/${planetId}`);
        setCurrentPlanetId(planetId);
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
