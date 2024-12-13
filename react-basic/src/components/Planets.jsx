import { useNavigate } from "react-router-dom";
import "../components/Planets.css";

function Planets() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/planets");
  };

  return (
    <>
      <div className="big-card-container" >
        <div className="big-card" onClick={handleCardClick}>
          <h1 className="big-card-title">
            PLANETS
          </h1>
        </div>
      </div>
    </>
  );
}

export default Planets;
