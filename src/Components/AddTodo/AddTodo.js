import React from "react";
import { reduxForm, Field, reset } from "redux-form";

import { required } from "../../utilities/validators";
import { Input } from "../common/form";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: lavender;
`;

const AddTodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        type="text"
        name="task"
        validate={[required]}
        placeholder="Добавь задачу"
        autoFocus={true}
      />
      <StyledButton>Добавить</StyledButton>
    </form>
  );
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("addTodo"));
};

const AddTodoFormRedux = reduxForm({
  form: "addTodo",
  onSubmitSuccess: afterSubmit,
})(AddTodoForm);

const AddTodo = (props) => {
  const onSubmit = (formData) => {
    props.addTask(formData.task, props.day, false);
  };

  return (
    <div>
      <AddTodoFormRedux onSubmit={onSubmit} />
    </div>
  );
};

export default AddTodo;
