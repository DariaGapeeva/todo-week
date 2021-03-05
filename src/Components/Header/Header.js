import React from "react";
import Button from "../common/Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContainerButton = styled.div`
  margin-right: 10px;
`;

const Header = (props) => {
  return (
    <Container>
      <ContainerButton>
        {" "}
        <Button color="#1E90FF">Sign in</Button>
      </ContainerButton>
      <ContainerButton>
        {" "}
        <Button color="#1E90FF">Sign up</Button>
      </ContainerButton>
    </Container>
  );
};

export default Header;
