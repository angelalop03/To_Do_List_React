import { renderHook, act } from "@testing-library/react";
import { useTasks } from "../hooks/useTasks";

describe("useTasks", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("añade una nueva tarea", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Estudiar", "React");
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe("Estudiar");
    expect(result.current.tasks[0].description).toBe("React");
    expect(result.current.tasks[0].completed).toBe(false);
  });

  test("elimina una tarea", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Tarea", "Descripción");
    });

    const id = result.current.tasks[0].id;

    act(() => {
      result.current.deleteTask(id);
    });

    expect(result.current.tasks).toHaveLength(0);
  });

  test("marca una tarea como completada", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("Tarea", "Descripción");
    });

    const id = result.current.tasks[0].id;

    act(() => {
      result.current.toggleTask(id);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

 test("filtra tareas completadas", () => {
  const { result } = renderHook(() => useTasks());

  act(() => {
    result.current.addTask("Pendiente", "Una");
  });

  act(() => {
    result.current.addTask("Completada", "Dos");
  });

  const completedId = result.current.tasks[1].id;

  act(() => {
    result.current.toggleTask(completedId);
  });

  act(() => {
    result.current.setFilter("completed");
  });

  expect(result.current.filteredTasks).toHaveLength(1);
  expect(result.current.filteredTasks[0].title).toBe("Completada");
});
});