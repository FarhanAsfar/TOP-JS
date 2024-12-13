import "../components/PlanetsList.css";
import { useNavigate } from "react-router-dom";

function PlanetsList({ planets }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/details')
    }
    
    return (
        <div className="planets-container" onClick={handleCardClick}>
            {planets.map((planet, index) => (
                <div
                    key={index}
                    className={`planet-card ${planet.name.toLowerCase()}`}
                >
                    {planet.name}
                </div>
            ))}
        </div>
    );
}

export default PlanetsList;
