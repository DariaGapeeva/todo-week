import DayTodo from "./DayTodo";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  addTaskThunk,
  deleteTodoThunk,
  checkedTodoThunk,
} from "../../../redux/todoReduser";

const DayTodoContainer = ({ day }) => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoList.todos);
  const loadingDay = useSelector((state) => state.todoList.loadingDay);

  const addTask = (task, day, index, done) =>
    dispatch(addTaskThunk(task, day, index, done));
  const deleteTask = (id, day) => dispatch(deleteTodoThunk(id, day));
  const checked = (id, done) => dispatch(checkedTodoThunk(id, done));

  return (
    <>
      <DayTodo
        todos={todos}
        day={day}
        addTask={addTask}
        deleteTask={deleteTask}
        loadingDay={loadingDay}
        checked={checked}
      />
    </>
  );
};

export default DayTodoContainer;
