import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid silver;
  padding: 3px;
  margin-bottom: 8px;
  border-radius: 5px;
  outline: none;
  background-color: ${(props) => (props.isDragging ? "AliceBlue" : "linen")};
`;

const Number = styled.span`
  margin-right: 0px;
`;

const Task = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const TodoItemWeek = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Number> {props.idTaskInDay}. </Number>
          <Task done={props.done}> {props.task} </Task>
        </Container>
      )}
    </Draggable>
  );
};

export default TodoItemWeek;
