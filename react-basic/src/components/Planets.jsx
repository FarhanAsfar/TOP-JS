import { useNavigate } from "react-router-dom";
import "../components/Planets.css";
import PlanetsList from "./PlanetsList";

function Planets({ planets }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/planets");
  };

  return (
    <>
      <div className="big-card-container">
        <div className="big-card">
          <h1 
            className="big-card-title" 
            onClick={handleCardClick}
          >
            PLANETS
          </h1>
        </div>
      </div>
    </>
  );
}

export default Planets;
