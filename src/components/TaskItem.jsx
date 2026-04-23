import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <li className={task.completed ? "completed-task" : ""}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>{task.completed ? "✅ Completada" : "❌ Pendiente"}</p>

      <div className="task-actions">
        <button onClick={() => toggleTask(task.id)}>Completar</button>
        <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      </div>
    </li>
  );
}

export default TaskItem;