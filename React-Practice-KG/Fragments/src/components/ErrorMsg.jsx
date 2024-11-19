const ErrorMsg = () => {
  const fruits = ["Apple", "Banana", "Grape", "Cherry", "Berry"];

  return (
    <>
      <h1>Fruit List</h1>
      {fruits.length === 0 ? <h3>Empty List</h3> : null}
    </>
  );
};

export default ErrorMsg;
