import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const filters = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

function FilterBar() {
  const { filter, setFilter } = useContext(TodoContext);

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((item) => {
        const isActive = filter === item.value;

        return (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive
                ? "bg-gray-200 text-gray-800 font-semibold"
                : "border border-gray-900 bg-gray-800 text-gray-300 font-semibold hover:border-gray-600"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBar;
