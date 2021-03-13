import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';
import Todo from './pages/Todo';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    

  }
  body{
    width:100%;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 100%;
  }
  a:visited {
    color:inherit;
  }
`;

export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  const [openLeft, setOpenLeft] = React.useState(true);
  const [openRight, setOpenRight] = React.useState(true);

  function handleDrawer1() {
    setOpenLeft(!openLeft);
  }

  function handleDrawer2() {
    setOpenLeft(!openRight);
  }

  return (
    <Router basename="/cra-ts/">
      <GlobalStyle />
      <AppBar handleDrawer1={handleDrawer1} />
      {openLeft && <Drawer handleDrawer1={handleDrawer1} isOpen={openLeft} />}
      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
