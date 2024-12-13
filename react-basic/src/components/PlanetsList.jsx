import "../components/PlanetsList.css";

function PlanetsList({ planets }) {
    return (
        <div className="planets-container">
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
