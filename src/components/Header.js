import React, { useState } from "react";
import DoubleTick from "../asset/img/double-tick.png";
import NotesImg from "../asset/img/notes.png";
import PlusImg from "../asset/img/plus.png";
import {
  addTodo,
  allComplete,
  clearComplete,
} from "../redux/todos/actionCreator";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const allCompleteHandler = () => {
    dispatch(allComplete());
  };

  const clearCompleteHandler = () => {
    dispatch(clearComplete());
  };

  return (
    <div>
      <form
        className='flex items-center bg-gray-100 px-4 py-4 rounded-md'
        onSubmit={(e) => addTodoHandler(e)}
      >
        <img src={NotesImg} className='w-6 h-6' alt='Add todo' />
        <input
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
          value={input}
          onChange={(e) => inputHandler(e)}
        />
        <button
          type='submit'
          className={`appearance-none w-8 h-8 bg-[url(${PlusImg})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li className='flex space-x-1 cursor-pointer'>
          <img className='w-4 h-4' src={DoubleTick} alt='Complete' />
          <span onClick={allCompleteHandler}>Complete All Tasks</span>
        </li>
        <li className='cursor-pointer' onClick={clearCompleteHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
