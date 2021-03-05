import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const Box = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

const FormInput = styled(TextareaAutosize)`
  border: 1px solid MediumPurple;
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  resize: none;
  outline: none;
`;

const Textarea = ({ label, register, ...props }) => {
  return (
    <Box>
      <FormInput name={label} ref={register} {...props} />
    </Box>
  );
};

export default Textarea;
