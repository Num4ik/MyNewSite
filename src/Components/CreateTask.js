import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не повинно буди порожнім");
      return;
    }
    if (task.length > 16) {
      alert("Задача повинна бути меньше 16 букв");
      return;
    }
    // console.log(task);
    props.addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        type="text"
        placeholder="Напишіть задачу"
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="btn" type="submit">
        Додати
      </button>
    </form>
  );
}
