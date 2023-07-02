import "./Task.css";

export default function Task({ title }) {
  return (
    <div className="task">
      <div>{title}</div>
      <div>
        <div></div>
        <div className="status">{status}</div>
      </div>
    </div>
  );
}
