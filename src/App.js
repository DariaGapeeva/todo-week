import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import TodoContainer from "./Components/Todo/TodoContainer";
import styled from "styled-components";

const Wrapper = styled.div`
  //   display: flex;
  //   justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

// const Content = styled.div`
//   flex: 1 1 30%;
//   max-width: 30%;
//   padding: 0px 20px;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// const ContentMain = styled.div`
//   flex: 1 0 auto;
// `;
// const ContentBottom = styled.div`
//   flex: 0 0 auto;
//   margin-top: 10px;
//   margin-bottom: 20px;
// `;

const Navbar = styled.div`
  //   flex: 1 1 60%;
  //   max-width: 60%;
  //   display: flex;
  height: 100%;

  //   border: 1px solid green;
  background: rgb(34, 78, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 78, 195, 1) 0%,
    rgba(45, 253, 212, 1) 100%
  );
  padding: 15px;
`;

function App() {
  return (
    <Wrapper>
      {/* <Content>
        <ContentMain>
          <h1>Список дел</h1>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <TodoContainer day="Понедельник" />}
            />
            <Route
              path="/monday"
              render={() => <TodoContainer day="Понедельник" />}
            />
            <Route
              path="/tuesday"
              render={() => <TodoContainer day="Вторник" />}
            />
            <Route
              path="/wednesday"
              render={() => <TodoContainer day="Среда" />}
            />
            <Route
              path="/thursday"
              render={() => <TodoContainer day="Четверг" />}
            />
            <Route
              path="/friday"
              render={() => <TodoContainer day="Пятница" />}
            />
            <Route
              path="/saturday"
              render={() => <TodoContainer day="Суббота" />}
            />
            <Route
              path="/sunday"
              render={() => <TodoContainer day="Воскресенье" />}
            />
          </Switch>
        </ContentMain>
        <ContentBottom> * Перетаскивай дела между днями недели </ContentBottom>
      </Content> */}
      <Navbar>
        <NavbarContainer />
      </Navbar>
    </Wrapper>
  );
}

export default withRouter(App);
