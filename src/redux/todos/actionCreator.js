import {
  ADD_TODO,
  ALL_COMPLETE,
  CLEAR_COMPLETE,
  TOGGLED,
  COLOR_CHANGE,
  DELETE_TODO,
} from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: {
      text: todoText,
    },
  };
};

export const allComplete = () => {
  return {
    type: ALL_COMPLETE,
  };
};

export const clearComplete = () => {
  return {
    type: CLEAR_COMPLETE,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: {
      id: todoId,
    },
  };
};

export const colorChange = (todoId, color) => {
  return {
    type: COLOR_CHANGE,
    payload: {
      id: todoId,
      color: color,
    },
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: {
      id: todoId,
    },
  };
};
