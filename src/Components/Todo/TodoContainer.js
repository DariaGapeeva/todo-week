import { connect } from "react-redux";
import Todo from "./Todo";
import {
  addTaskThunk,
  deleteTodoThunk,
  checkedTodoThunk,
} from "../../redux/todoReduser";

const mapStateToProps = (state) => {
  return {
    todos: state.todoList.todos,
    loadingButton: state.todoList.loadingButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task, day, index, done, array) =>
      dispatch(addTaskThunk(task, day, index, done, array)),
    deleteTask: (id, array) => dispatch(deleteTodoThunk(id, array)),
    checked: (id, done) => dispatch(checkedTodoThunk(id, done)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
