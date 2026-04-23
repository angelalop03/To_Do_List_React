import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskItem from "../components/TaskItem";
import { TaskContext } from "../context/TaskContext";

describe("TaskItem", () => {
  const task = {
    id: 1,
    title: "Estudiar React",
    description: "Repasar hooks",
    completed: false,
  };

  test("muestra la información de la tarea", () => {
    render(
      <TaskContext.Provider value={{ deleteTask: vi.fn(), toggleTask: vi.fn() }}>
        <TaskItem task={task} />
      </TaskContext.Provider>
    );

    expect(screen.getByText("Estudiar React")).toBeInTheDocument();
    expect(screen.getByText("Repasar hooks")).toBeInTheDocument();
    expect(screen.getByText(/pendiente/i)).toBeInTheDocument();
  });

  test("llama a toggleTask al pulsar completar", async () => {
    const user = userEvent.setup();
    const toggleTask = vi.fn();

    render(
      <TaskContext.Provider value={{ deleteTask: vi.fn(), toggleTask }}>
        <TaskItem task={task} />
      </TaskContext.Provider>
    );

    await user.click(screen.getByRole("button", { name: /completar/i }));

    expect(toggleTask).toHaveBeenCalledWith(1);
  });

  test("llama a deleteTask al pulsar eliminar", async () => {
    const user = userEvent.setup();
    const deleteTask = vi.fn();

    render(
      <TaskContext.Provider value={{ deleteTask, toggleTask: vi.fn() }}>
        <TaskItem task={task} />
      </TaskContext.Provider>
    );

    await user.click(screen.getByRole("button", { name: /eliminar/i }));

    expect(deleteTask).toHaveBeenCalledWith(1);
  });
});