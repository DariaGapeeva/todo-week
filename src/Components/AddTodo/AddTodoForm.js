import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Textarea from "../common/Textarea";
import Button from "../common/Button";

const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddTodoForm = (props) => {
  const {
    register,

    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  const [submittedData] = useState({});

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
      <Textarea
        register={register({ required: true })}
        type="text"
        name="task"
        placeholder="Добавь задачу"
      />
      <ContainerButton>
        <Button color=" MediumSlateBlue">+</Button>
      </ContainerButton>
    </form>
  );
};

export default AddTodoForm;
