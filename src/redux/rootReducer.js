import { combineReducers } from "redux";
import todoReducer from "./todos/todosReducers";
import filterReducer from "./filters/filterReducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
export default rootReducer;
