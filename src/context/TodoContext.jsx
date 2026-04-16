import axios from "axios";
import { useEffect, useState } from "react";
import { TodoContext } from "./todoContext";

const API_URL = "http://localhost:3001/todos";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    void fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch {
      setError("Todo ma'lumotlarini olishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (title) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return false;
    }

    try {
      setError("");

      const response = await axios.post(API_URL, {
        title: trimmedTitle,
        completed: false,
      });

      setTodos((currentTodos) => [response.data, ...currentTodos]);
      return true;
    } catch {
      setError("Yangi todo qo'shishda xatolik yuz berdi.");
      return false;
    }
  };

  const toggleTodo = async (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);

    if (!selectedTodo) {
      return;
    }

    try {
      setError("");
      const nextCompleted = !selectedTodo.completed;

      await axios.patch(`${API_URL}/${id}`, {
        completed: nextCompleted,
      });

      setTodos((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: nextCompleted } : todo,
        ),
      );
    } catch {
      setError("Todo holatini yangilashda xatolik yuz berdi.");
    }
  };

  const deleteTodo = async (id) => {
    try {
      setError("");
      await axios.delete(`${API_URL}/${id}`);
      setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    } catch {
      setError("Todo o'chirishda xatolik yuz berdi.");
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        loading,
        error,
        addTodo,
        toggleTodo,
        deleteTodo,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
