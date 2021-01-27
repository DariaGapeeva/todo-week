import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Loader from "../common/Loader";

const Task = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const Item = styled.div`
  display: flex;
  font-size: 0.9rem;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid rgba(188, 143, 143);
  background-color: ${(props) =>
    props.isDragging ? "rgba(255, 250, 250)" : "rgba(255, 250, 250)"};
  border-radius: 5px;
  padding: 20px 5px 10px 5px;
  margin-bottom: 10px;
  position: relative;
`;

const Number = styled.span`
  margin-right: 5px;
`;

const Checkbox = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  border-radius: 5px;

  font-size: 1rem;
  color: crimson;
  font-weight: bold;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const TodoItem = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {props.loadingButton && <Loader />}
          <Number> {props.number}.</Number>
          <Task done={props.todo.done}>{props.todo.task}</Task>
          <Checkbox
            type="checkbox"
            checked={props.todo.done}
            onChange={() => props.checked(props.todo.id, !props.todo.done)}
          />

          <Button onClick={() => props.deleteTask(props.todo.id, props.day)}>
            &times;
          </Button>
        </Item>
      )}
    </Draggable>
  );
};

export default TodoItem;
