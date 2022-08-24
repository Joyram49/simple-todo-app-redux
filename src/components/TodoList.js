import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filtersByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    } else {
      return true;
    }
  };

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {todos
        .filter(filtersByStatus)
        .filter(filterByColors)
        .map((todo, index) => (
          <Todo todo={todo} key={todo.id + index} />
        ))}
    </div>
  );
};

export default TodoList;
