import React from "react";
import { NavLink } from "react-router-dom";
import DayTodoContainer from "./DayTodo/DayTodoContainer";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Loader from "./../common/Loader";

// const LinkElem = styled(NavLink)`
//   text-decoration: none;
//   color: black;
//   font-weight: 600;
//   font-size: 1.3rem;
//   margin-bottom: 15px;
//   &:hover {
//     color: rgba(0, 0, 0, 0.7);
//   }
//   &.active {
//     color: rgba(0, 0, 0, 0.7);
//   }
// `;

const Content = styled.div`
  display: flex;
  //   justify-content: space-between;
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

    console.log("result", result);

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
            <Item>
              <h2> Понедельник </h2>
              <DayTodoContainer day="Понедельник" />
            </Item>
            <Item>
              <h2> Вторник </h2>
              <DayTodoContainer day="Вторник" />
            </Item>
            <Item>
              <h2> Среда </h2>
              <DayTodoContainer day="Среда" />
            </Item>
            <Item>
              <h2> Четверг </h2>
              <DayTodoContainer day="Четверг" />
            </Item>
            <Item>
              <h2> Пятница </h2>
              <DayTodoContainer day="Пятница" />
            </Item>
            <Item>
              <h2> Суббота </h2>
              <DayTodoContainer day="Суббота" />
            </Item>
            <Item>
              <h2> Воскресенье </h2>
              <DayTodoContainer day="Воскресенье" />
            </Item>
          </Content>
        </DragDropContext>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Navbar;
