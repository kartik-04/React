const Heading = () => {
  return <h1>Todo List</h1>;
};

const List = (props) => {
  return (
    <ul>
      <li style={{ color: "yellow", backgroundColor: "dodgerblue" }}>
        {props.name}
      </li>
      <li>{props.name1}</li>
      <li>{props.name2}</li>
      <li>{props.name3}</li>
    </ul>
  );
};

const Summary = () => <h3>Summary Of Todo List</h3>;

const Todo = (props) => {
  return (
    <>
      {props.text}
      <Heading />
      <List name="mango" name1="peach" name2="Grapes" name3="juice" />
      <Summary />
    </>
  );
};

export default Todo;
