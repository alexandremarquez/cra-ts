import React from 'react';
import { Container } from './styles';
import { H1 } from '../Typography';
import { Button } from '../Button';

export interface AppBarProps {
  handleDrawer1: () => void;
}
const AppBar: React.FC<AppBarProps> = ({ handleDrawer1 }: AppBarProps) => {
  return (
    <>
      <Container>
        <Button onClick={handleDrawer1}>Components</Button>
        <span>
          <H1>Appbar</H1>
        </span>
        <div>Login</div>
      </Container>
    </>
  );
};

export default AppBar;
