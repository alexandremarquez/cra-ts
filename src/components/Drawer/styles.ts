import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* 100% Full-height */
  width: 180px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 3; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #f0f5f5; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
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
`;
