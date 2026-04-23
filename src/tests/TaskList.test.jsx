import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";

describe("TaskList", () => {
  test("renderiza las tareas filtradas", () => {
    const filteredTasks = [
      {
        id: 1,
        title: "Tarea 1",
        description: "Descripción 1",
        completed: false,
      },
      {
        id: 2,
        title: "Tarea 2",
        description: "Descripción 2",
        completed: true,
      },
    ];

    render(
      <TaskContext.Provider
        value={{
          filteredTasks,
          deleteTask: vi.fn(),
          toggleTask: vi.fn(),
        }}
      >
        <TaskList />
      </TaskContext.Provider>
    );

    expect(screen.getByText("Tarea 1")).toBeInTheDocument();
    expect(screen.getByText("Tarea 2")).toBeInTheDocument();
  });
});