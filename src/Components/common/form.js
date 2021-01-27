import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const Box = styled.div`
  position: relative;

  width: 100%;
  margin: 10px 0px 10px 0px;
`;

const FormInput = styled(TextareaAutosize)`
  border: ${(props) =>
    !props.required ? "1px solid MediumPurple" : "1px solid red"};

  border-radius: 5px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  resize: none;
  outline: none;
`;

const Input = ({ label, register, required, ...props }) => {
  return (
    <Box required={required}>
      <FormInput name={label} ref={register({ required })} {...props} />
    </Box>
  );
};

export default Input;
