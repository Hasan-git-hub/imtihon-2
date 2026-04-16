import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4 cursor-pointer accent-gray-900"
      />

      <p
        className={`flex-1 text-sm ${
          todo.completed ? "text-gray-400 line-through" : "text-gray-800"
        }`}
      >
        {todo.title}
      </p>

      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-500 transition hover:bg-red-50"
      >
        delite
      </button>
    </li>
  );
}

export default TodoItem;
