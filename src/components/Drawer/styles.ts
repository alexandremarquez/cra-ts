import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 180px;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: #f2f2f2;
  overflow-x: hidden;
  padding-top: 70px;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 10px;
`;

export const Menu = styled.div`
  padding: 8px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;
  transition: 0.3s;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  font-size: 1.2em;
  font-weight: 400;
  line-height: 1.5em;

  &:hover {
    color: darkblue;
  }
`;
