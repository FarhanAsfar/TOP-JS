import Item from "./item";

const FoodItems = () => {
  const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];

  return (
    <>
      <ul className="list-group">
        {fruits.map((item, index) => (
          <Item key={index} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
