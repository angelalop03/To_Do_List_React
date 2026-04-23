import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const tasksData = useTasks();

  return (
    <TaskContext.Provider value={tasksData}>
      {children}
    </TaskContext.Provider>
  );
}