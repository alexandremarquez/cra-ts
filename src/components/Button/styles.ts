import styled from 'styled-components';

export const Button = styled.button`
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 2px 6px;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &:hover {
    background-color: #116cbf; /* Green */
    color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

export const MenuBtn = styled.button`
  background: white;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #008cba; /* Green */
    color: white;
  }
`;
export const IconBtn = styled.button`
  color: black;
  border: none;
  cursor: pointer;
  &:hover {
    color: #008cba;
  }
`;
