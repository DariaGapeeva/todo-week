import React from "react";
import styled from "styled-components";

const Box = styled.div`
  position: relative;
  border: ${(props) =>
    props.required ? "rgba(30, 144, 255)" : "1px solid red"};
  border-radius: 5px;
  //   padding: 15px;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

const FormInput = styled.input`
  border: rgba(30, 144, 255);
  border-radius: 5px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;

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
