import React from "react";
import DayTodoContainer from "./DayTodo/DayTodoContainer";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Loader from "./../common/Loader";
import { week } from "./../../utilities/functions";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex: 0 1 18%;
  margin: 0px 10px 0px 10px;
`;

const Navbar = ({ moveTaskInSameColumn, moveTaskInOtherColumn, loading }) => {
  const onDragStart = () => {};

  const onDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      moveTaskInSameColumn(
        source.index,
        destination.index,
        source.droppableId,
        draggableId
      );
    } else if (destination.droppableId !== source.droppableId) {
      moveTaskInOtherColumn(
        source.index,
        source.droppableId,
        destination.index,
        destination.droppableId,
        draggableId
      );
    }
  };

  return (
    <>
      {!loading ? (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <Content>
            {week.map((day) => (
              <Item key={day}>
                <h3> {day} </h3>
                <DayTodoContainer day={day} />
              </Item>
            ))}
          </Content>
        </DragDropContext>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Navbar;
