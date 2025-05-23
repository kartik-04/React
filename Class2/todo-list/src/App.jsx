import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoList from "./component/TodoList";

function App() {
  const style = {
    width: "260px",
    color: "yellow",
    backgroundColor: "blue",
  };
  return (
    <>
      <TodoList myStyle={style} />
    </>
  );
}

export default App;
