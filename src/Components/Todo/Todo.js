import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";
import AddTodoForm from "../AddTodo/AddTodoForm";
import styled from "styled-components";
import Loader from "../common/Loader";

const List = styled.ul`
  padding: 0;
`;

const TaskNo = styled.div`
  margin-bottom: 10px;
`;

const Todo = (props) => {
  let array = props.todos.filter((item) => item.day === props.day);
  return (
    <div>
      <h3>{props.day} </h3>
      {props.loadingButton && <Loader />}
      <List>
        {array.length === 0 ? (
          <TaskNo>задач нет</TaskNo>
        ) : (
          array.map((item, index) => (
            <TodoItem
              key={item.id}
              number={index + 1}
              todo={item}
              deleteTask={props.deleteTask}
              checked={props.checked}
            />
          ))
        )}
      </List>

      <AddTodoForm
        addTask={props.addTask}
        day={props.day}
        index={array.length}
      />
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Todo;
