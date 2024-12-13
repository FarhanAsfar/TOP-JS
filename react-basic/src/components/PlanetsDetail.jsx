import "../components/PlanetsDetail.css";

function PlanetsDetail() {
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
    <div className="card-container">
      {planets.map((planet) => (
        <div className="card" key={planet.id}>
          <h3 className="planet-name">{planet.name}</h3>
          <p className="distance">Distance from Sun: {planet.distanceFromSun}</p>
          <p className="description">{planet.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanetsDetail;
