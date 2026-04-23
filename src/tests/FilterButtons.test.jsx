import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterButtons from "../components/FilterButtons";
import { TaskContext } from "../context/TaskContext";

describe("FilterButtons", () => {
  test("cambia el filtro al pulsar los botones", async () => {
    const user = userEvent.setup();
    const setFilter = vi.fn();

    render(
      <TaskContext.Provider value={{ setFilter }}>
        <FilterButtons />
      </TaskContext.Provider>
    );

    await user.click(screen.getByRole("button", { name: /todas/i }));
    expect(setFilter).toHaveBeenCalledWith("all");

    await user.click(screen.getByRole("button", { name: /completadas/i }));
    expect(setFilter).toHaveBeenCalledWith("completed");

    await user.click(screen.getByRole("button", { name: /pendientes/i }));
    expect(setFilter).toHaveBeenCalledWith("pending");
  });
});