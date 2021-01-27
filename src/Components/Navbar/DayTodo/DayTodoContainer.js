import DayTodo from "./DayTodo";
import { connect } from "react-redux";
import React from "react";
import { addTaskThunk, deleteTodoThunk } from "../../../redux/todoReduser";

const DayTodoContainer = (props) => {
  return (
    <>
      <DayTodo
        todos={props.todos}
        day={props.day}
        addTask={props.addTask}
        deleteTask={props.deleteTask}
        loading={props.loading}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoList.todos,
    loading: state.todoList.loadingButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task, day, index, done) =>
      dispatch(addTaskThunk(task, day, index, done)),
    deleteTask: (id) => dispatch(deleteTodoThunk(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayTodoContainer);
