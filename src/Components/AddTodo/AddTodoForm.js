import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../common/form";

const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: MediumSlateBlue;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
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
      <ContainerButton>
        <StyledButton>+</StyledButton>
      </ContainerButton>
    </form>
  );
};

export default AddTodoForm;
