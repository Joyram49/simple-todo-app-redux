import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLED,
  CLEAR_COMPLETE,
  ALL_COMPLETE,
  COLOR_CHANGE,
} from "./actionTypes";

const initialState = [
  {
    id: 1,
    text: "Learn React JS",
    completed: false,
  },
  {
    id: 2,
    text: "Learn Redux",
    completed: false,
    color: "red",
  },
];

// helper function
const getNextElementId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: getNextElementId(state),
          text: action.payload.text,
          completed: false,
        },
      ];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case CLEAR_COMPLETE:
      return state.filter((todo) => !todo.completed);

    case ALL_COMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case COLOR_CHANGE:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });

    default:
      return state;
  }
};

export default todoReducer;
