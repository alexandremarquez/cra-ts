import React from 'react';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { Container } from './styles';
import { H1 } from '../Typography';
import { IconBtn } from '../Button';

export interface AppBarProps {
  handleDrawer1: () => void;
}
const AppBar: React.FC<AppBarProps> = ({ handleDrawer1 }: AppBarProps) => {
  return (
    <Container>
      <IconBtn onClick={handleDrawer1}>
        <Menu size="28" />
      </IconBtn>
      <span>
        <H1>Appbar</H1>
      </span>
    </Container>
  );
};

export default AppBar;
