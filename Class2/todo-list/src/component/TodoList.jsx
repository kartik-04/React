import { useState } from "react";

const TodoList = ({ title, myStyle }) => {
  const [Items, setItems] = useState([
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
  ]);

  const [newItem, setNewItem] = useState("");

  const handleAddTodo = (e) => {
    const newItems = [...Items, newItem];
    setItems(newItems);
  };
  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  return (
    <div style={myStyle}>
      <h1>{title ? title : "Todo List"}</h1>
      <div style={{ display: "flex", padding: "1rem", gap: "3px" }}>
        <input
          type="text"
          placeholder="Enter new Todo"
          onChange={handleChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul>
        {Items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
