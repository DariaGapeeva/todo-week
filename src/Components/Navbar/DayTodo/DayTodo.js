import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import AddTodoForm from "../../AddTodo/AddTodoForm";
import Loader from "../../common/Loader";
import TodoItem from "../../TodoItem/TodoItem";

const ProgressBar = styled.div`
  margin-bottom: 10px;
`;

const ProgressText = styled.div`
  margin-bottom: 7px;
  display: flex;
  justify-content: space-between;
`;

const ProgressLine = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(255, 228, 225);
  border-radius: 5px;
  border: 1px solid MediumPurple;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    display: block;
    height: 6px;
    background-color: DarkSlateBlue;
    border-radius: 5px;
    width: ${(props) => props.length}%;
  }
`;

const TaskList = styled.li`
  list-style-type: none;
  border: 1px solid MediumPurple;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 10px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "Gainsboro" : "rgba(255, 228, 225)"};
`;

const DayTodo = (props) => {
  let array = props.todos.filter((item) => item.day === props.day);
  let length =
    (array.filter((item) => item.done === true).length / array.length) * 100;

  return (
    <>
      <ProgressBar>
        <ProgressText>
          <span> Выполнено дел</span>
          <span>
            {" "}
            {array.filter((item) => item.done === true).length}/{array.length}
          </span>
        </ProgressText>
        <ProgressLine length={length}></ProgressLine>
      </ProgressBar>
      <AddTodoForm
        addTask={props.addTask}
        day={props.day}
        index={array.length}
      />

      <Droppable droppableId={props.day}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {" "}
            {props.loadingDay.isLoading &&
              props.loadingDay.day === props.day && <Loader />}
            {array.length === 0
              ? "задач нет"
              : array.map((item, index) => (
                  <TodoItem
                    key={item.id}
                    id={item.id}
                    index={props.todos.indexOf(item)}
                    number={index + 1}
                    todo={item}
                    deleteTask={props.deleteTask}
                    checked={props.checked}
                    day={props.day}
                  />
                ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </>
  );
};

export default DayTodo;
