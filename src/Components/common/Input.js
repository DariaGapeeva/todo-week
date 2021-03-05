import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  margin-bottom: 3px;
  padding: 0;
  display: block;
  font-weight: bold;
  color: black;
`;

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  padding: 7px;
  margin: 0 0 5px;
  outline: none;
  border: 1px solid thistle;
  border-radius: 5px;
  line-height: 30px;
  height: 30px;
  width: 100%;
  transition: all 0.3 ease-in-out;
`;

const Input = (props) => {
  const inputType = props.type || "text";

  const htmlFor = `${inputType} -${Math.random()}`;

  return (
    <Container>
      <StyledLabel htmlFor={htmlFor}> {props.label} </StyledLabel>
      <StyledInput
        type={inputType}
        onChange={props.onChange}
        name={props.name}
        ref={props.register}
      />
    </Container>
  );
};

export default Input;
