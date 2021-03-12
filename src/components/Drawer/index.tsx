import React from 'react';
import { Link } from 'react-router-dom';
import { H1, H2 } from '../Typography';
import { Container, Menu, StyledLink } from './styles';

export interface DrawerProps {
  isOpen: boolean;
  handleDrawer1: () => void;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  handleDrawer1,
}: DrawerProps) => {
  return (
    <Container>
      <H1>Pages</H1>
      <StyledLink onClick={handleDrawer1} to="/">
        <H2>Home</H2>
      </StyledLink>
      <StyledLink onClick={handleDrawer1} to="/users">
        <H2>Users</H2>
      </StyledLink>
      <StyledLink onClick={handleDrawer1} to="/about">
        <H2>About</H2>
      </StyledLink>
      <H1>Components</H1>
      <H2>Sign In</H2>
    </Container>
  );
};

export default Drawer;
