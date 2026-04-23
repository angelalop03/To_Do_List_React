import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";

describe("TaskForm", () => {
  test("permite escribir y añadir una tarea", async () => {
    const user = userEvent.setup();
    const addTask = vi.fn();

    render(
      <TaskContext.Provider value={{ addTask }}>
        <TaskForm />
      </TaskContext.Provider>
    );

    const titleInput = screen.getByPlaceholderText("Título");
    const descriptionInput = screen.getByPlaceholderText("Descripción");
    const button = screen.getByRole("button", { name: /añadir/i });

    await user.type(titleInput, "Estudiar React");
    await user.type(descriptionInput, "Repasar context");
    await user.click(button);

    expect(addTask).toHaveBeenCalledWith("Estudiar React", "Repasar context");
  });

  test("no añade tarea si el título está vacío", async () => {
    const user = userEvent.setup();
    const addTask = vi.fn();

    render(
      <TaskContext.Provider value={{ addTask }}>
        <TaskForm />
      </TaskContext.Provider>
    );

    const button = screen.getByRole("button", { name: /añadir/i });

    await user.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });
});