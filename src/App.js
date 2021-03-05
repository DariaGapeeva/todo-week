import React from "react";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import styled from "styled-components";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Auth from "./Components/Auth/Auth";

const Container = styled.div`
  padding: 15px;
  min-heigth: 100vh;
`;

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={NavbarContainer} />
      </Switch>
    </Container>
  );
}

export default App;
