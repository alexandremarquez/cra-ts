import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    margin: 0.5em;
  }
  ul {
    margin: 2em;
    li {
      margin: 0.5em;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 2em;
`;

export const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em;
  margin: 0.1em;
`;

export const StyledInputSubmit = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5em;
  margin: 0.1em;
  background-color: lightblue;
  min-width: 60px;
`;
