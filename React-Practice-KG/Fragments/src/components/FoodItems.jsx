const FoodItems = () => {
  const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];
  
  return (
    <ul className="list-group">
      {fruits.map((item, index) => (
        <li key={index} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
