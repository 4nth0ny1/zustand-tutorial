import { useStore } from "../store";
import { useState } from "react";
import "./Column.css";
import Task from "./Task";

export default function Column({ state }) {
  const [text, setText] = useState("");
  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  const addTask = useStore((store) => store.addTask);

  return (
    <div
      className="column"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={() => {
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
        />
        <button
          onClick={() => {
            addTask(text, state);
            setText("");
          }}
        >
          add
        </button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}
