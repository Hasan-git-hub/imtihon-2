import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import TodoItem from "./TodoItem";

const filterHandlers = {
  all: () => true,
  active: (todo) => !todo.completed,
  completed: (todo) => todo.completed,
};

function TodoList() {
  const { todos, filter, loading, error } = useContext(TodoContext);

  const filteredTodos = todos.filter(filterHandlers[filter] ?? filterHandlers.all);

  if (loading) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center text-sm text-gray-500">
        loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center text-sm text-red-500">
        {error}
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-500">
        No tasks found
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
