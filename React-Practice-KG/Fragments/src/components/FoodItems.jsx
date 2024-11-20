import Item from "./item";

const FoodItems = ({items}) => {
//   const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <Item key={index} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
