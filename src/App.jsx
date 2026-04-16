import FilterBar from "./components/FilterBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-xl bg-gray-800 p-6 shadow-sm sm:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold text-gray-100 sm:text-3xl">
            Todo-list
          </h1>
          <p className="text-sm text-gray-300">
            React Todo-list project
          </p>
        </div>

        <TodoForm />
        <FilterBar />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
