import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: #fff;
  padding: 4px 6px;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
`;

const Button = (props) => {
  return (
    <StyledButton color={props.color} type={props.type} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
