import { connect } from "react-redux";
import {
  moveTaskInOtherColumnThunk,
  setTodosThunk,
  moveTaskInSameColumnThunk,
} from "../../redux/todoReduser";
import React, { useEffect } from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
  useEffect(() => {
    props.setTodos();
  }, []);

  return (
    <>
      <Navbar
        moveTaskInSameColumn={props.moveTaskInSameColumn}
        moveTaskInOtherColumn={props.moveTaskInOtherColumn}
        loading={props.loading}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.todoList.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    moveTaskInSameColumn: (sourceIndex, destinationIndex, day, draggableId) =>
      dispatch(
        moveTaskInSameColumnThunk(
          sourceIndex,
          destinationIndex,
          day,
          draggableId
        )
      ),
    moveTaskInOtherColumn: (
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
      ),
    setTodos: () => dispatch(setTodosThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
