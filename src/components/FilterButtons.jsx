import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function FilterButtons() {
  const { setFilter } = useContext(TaskContext);

  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("completed")}>Completadas</button>
      <button onClick={() => setFilter("pending")}>Pendientes</button>
    </div>
  );
}

export default FilterButtons;