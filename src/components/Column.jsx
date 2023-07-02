import "./Column.css";
import Task from "./Task";
// import classNames from "classnames";

export default function Column({ state }) {
  return (
    <div className="column">
      {state}
      <Task title="Task 1" />
    </div>
  );
}
