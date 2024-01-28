import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <CreateTodo />
      <Todo />
    </div>
  );
}

export default App;
