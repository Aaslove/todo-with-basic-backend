import React, { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  const handleCompleteClick = (todo) => {
    fetch("http://localhost:3000/completed", {
      method: "PUT",
      body: JSON.stringify({
        id: todo._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const json = res?.json();
        alert(json);
      })
      .catch((error) => {
        console.error("Error completing todo:", error);
      });
  };

  const fetchTodo = () => {
    fetch("http://localhost:3000/todos").then(async (res) => {
      const json = await res.json();
      setTodos(json.todoslist);
      console.log(json.todoslist);
    });
  };
  useEffect(() => {
    fetchTodo();
  }, [todos]);

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo._id}
              style={{
                backgroundColor: "grey",
                color: "white",
              }}
            >
              <h1>Hi there</h1>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <button onClick={() => handleCompleteClick(todo)}>
                {todo.completed ? "completed" : "complete it"}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
