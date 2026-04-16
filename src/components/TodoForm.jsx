import { useContext, useState } from "react";
import { TodoContext } from "../context/todoContext";

function TodoForm() {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setFormError("Type something");
      return;
    }

    setFormError("");
    const isAdded = await addTodo(title);

    if (isAdded) {
      setTitle("");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type a new task"
          className="h-11 flex-1 rounded-lg border border-gray-300 px-4 text-sm outline-none transition text-gray-200 font-semibold focus:border-gray-500"
        />
        <button
          type="submit"
          className="h-11 rounded-lg bg-gray-900 px-5 text-sm font-bold text-white transition hover:bg-gray-200 hover:text-gray-800"
        >
          add
        </button>
      </div>
      {formError ? <p className="text-sm text-red-500">{formError}</p> : null}
    </form>
  );
}

export default TodoForm;
