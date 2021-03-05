import { useDispatch, useSelector } from "react-redux";
import {
  moveTaskInOtherColumnThunk,
  setTodosThunk,
  moveTaskInSameColumnThunk,
} from "../../redux/todoReduser";
import React, { useEffect } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  useEffect(() => {
    setTodos();
  }, []);

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.todoList.loading);

  const setTodos = () => dispatch(setTodosThunk());

  const moveTaskInSameColumn = (
    sourceIndex,
    destinationIndex,
    day,
    draggableId
  ) =>
    dispatch(
      moveTaskInSameColumnThunk(sourceIndex, destinationIndex, day, draggableId)
    );
  const moveTaskInOtherColumn = (
    sourceIndex,
    sourceId,
    destinationIndex,
    destinationId,
    draggableId
  ) =>
    dispatch(
      moveTaskInOtherColumnThunk(
        sourceIndex,
        sourceId,
        destinationIndex,
        destinationId,
        draggableId
      )
    );

  return (
    <>
      <Navbar
        moveTaskInSameColumn={moveTaskInSameColumn}
        moveTaskInOtherColumn={moveTaskInOtherColumn}
        loading={loading}
      />
    </>
  );
};

export default NavbarContainer;
