const ErrorMsg = ({ items }) => {

  return (
    <>
      <h1>Fruit List</h1>
      {items.length === 0 ? <h3>Empty List</h3> : null}
    </>
  );
};

export default ErrorMsg;