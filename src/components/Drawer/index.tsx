import React from 'react';
import { Link } from 'react-router-dom';
import { MenuBtn } from '../Button';
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
      <H2>Pages</H2>
      <StyledLink onClick={handleDrawer1} to="/">
        Home
      </StyledLink>
      <StyledLink onClick={handleDrawer1} to="/todo">
        Todo
      </StyledLink>
      <StyledLink onClick={handleDrawer1} to="/users">
        Users
      </StyledLink>
      <StyledLink onClick={handleDrawer1} to="/about">
        About
      </StyledLink>
    </Container>
  );
};

export default Drawer;
