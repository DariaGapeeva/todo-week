import DayTodo from "./DayTodo";
import { connect } from "react-redux";
import React from "react";
import {
  addTaskThunk,
  deleteTodoThunk,
  checkedTodoThunk,
} from "../../../redux/todoReduser";

const DayTodoContainer = (props) => {
  return (
    <>
      <DayTodo
        todos={props.todos}
        day={props.day}
        addTask={props.addTask}
        deleteTask={props.deleteTask}
        loading={props.loading}
        loadingDay={props.loadingDay}
        checked={props.checked}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoList.todos,
    loading: state.todoList.loadingButton,
    loadingDay: state.todoList.loadingDay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task, day, index, done) =>
      dispatch(addTaskThunk(task, day, index, done)),
    deleteTask: (id, day) => dispatch(deleteTodoThunk(id, day)),
    checked: (id, done) => dispatch(checkedTodoThunk(id, done)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayTodoContainer);
