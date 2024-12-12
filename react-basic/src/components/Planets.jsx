import '../components/Planets.css';

function Planets({ planets }) {
    return (
        <div className="planets-container">
            {planets.map((planet, index) => (
                <div
                    key={index}
                    className={`planet-card ${planet.toLowerCase()}`}
                >
                    {planet}
                </div>
            ))}
        </div>
    );
}

export default Planets;
