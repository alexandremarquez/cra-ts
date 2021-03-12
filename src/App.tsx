import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppBar from './components/AppBar';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Users from './pages/Users';
import About from './pages/About';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function App() {
  const [openLeft, setOpenLeft] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(true);

  function handleDrawer1() {
    setOpenLeft(!openLeft);
  }

  function handleDrawer2() {
    setOpenLeft(!openRight);
  }

  return (
    <Router>
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
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
