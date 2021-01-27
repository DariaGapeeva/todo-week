import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import AddTodoForm from "../../AddTodo/AddTodoForm";
import Loader from "../../common/Loader";
import TodoItem from "../../TodoItem/TodoItem";
import TodoItemWeek from "./TodoItemWeek/TodoItemWeek";

const TaskList = styled.li`
  list-style-type: none;
  border: 1px solid green;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 20px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "Gainsboro" : "rgba(255, 228, 225)"};
  //   background-color: rgba(245, 245, 245);
`;

const DayTodo = (props) => {
  let array = props.todos.filter((item) => item.day === props.day);

  return (
    <Droppable droppableId={props.day}>
      {(provided, snapshot) => (
        <TaskList
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {props.loading && <Loader />}
          {array.length === 0
            ? "задач нет"
            : array.map((item, index) => (
                <TodoItem
                  key={item.id}
                  //   done={item.done}
                  //   task={item.task}
                  id={item.id}
                  index={props.todos.indexOf(item)}
                  number={index + 1}
                  todo={item}
                  deleteTask={props.deleteTask}
                />
              ))}
          <AddTodoForm
            addTask={props.addTask}
            day={props.day}
            index={array.length}
          />
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  );
};

export default DayTodo;
