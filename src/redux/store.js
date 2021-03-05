import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { todoReduser } from "./todoReduser";
import { authReducer } from "./authReduser";

let redusers = combineReducers({
  todoList: todoReduser,
  auth: authReducer,
});

let store = createStore(
  redusers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.store = store;

export default store;
