import "./App.css";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const TaskForm = lazy(() => import("./components/TaskForm"));
const FilterButtons = lazy(() => import("./components/FilterButtons"));

function App() {
  return (
    <div className="app-container">
      <Header />

      <Suspense fallback={<p className="loading">Cargando...</p>}>
        <TaskForm />
        <FilterButtons />
      </Suspense>

      <TaskList />
    </div>
  );
}

export default App;