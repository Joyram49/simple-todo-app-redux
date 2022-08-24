import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChange, colorSelect } from "../redux/filters/actionCreators";

const getTodosNumber = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "No task";

    case 1:
      return "1 task";
    default:
      return `${no_of_todos} tasks`;
  }
};

const Footer = () => {
  const filters = useSelector((state) => state.filters);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todosRemaining = todos.filter((todo) => !todo.completed).length;

  const { status, colors } = filters;

  const statusChangeHandler = (status) => {
    dispatch(statusChange(status));
  };

  const colorSelectHandler = (color) => {
    if (colors.includes(color)) {
      dispatch(colorSelect(color, "removed"));
    } else {
      dispatch(colorSelect(color, "added"));
    }
  };

  return (
    <div className='mt-4 flex justify-between text-xs text-gray-500'>
      <p>{getTodosNumber(todosRemaining)} left</p>
      <ul className='flex space-x-1 items-center text-xs'>
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"} `}
          onClick={() => statusChangeHandler("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "Incomplete" && "font-bold"
          } `}
          onClick={() => statusChangeHandler("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"} `}
          onClick={() => statusChangeHandler("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => colorSelectHandler("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => colorSelectHandler("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => colorSelectHandler("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
