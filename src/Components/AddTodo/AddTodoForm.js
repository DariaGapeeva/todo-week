import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../common/form";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: rgba(30, 144, 255);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px;
`;

const AddTodoForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { something: "anything" } });

  const [submittedData] = React.useState({});

  const onSubmit = (data) => {
    props.addTask(data.task, props.day, props.index, false);
  };
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        required
        type="text"
        label="task"
        placeholder="Добавь задачу"
        autoFocus={true}
      />
      <StyledButton>Добавить</StyledButton>
    </form>
  );
};

export default AddTodoForm;
