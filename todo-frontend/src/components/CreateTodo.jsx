import { useState } from "react";

export const CreateTodo = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  return (
    <>
      <input
        style={{
          padding: "10px",
          border: "1px solid black",
          borderRadius: "rounded",
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            const json = res.json();
            alert("todo added");
          });
        }}
      >
        Add a todo
      </button>
    </>
  );
};
