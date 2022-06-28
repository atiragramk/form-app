import styled from "styled-components";

export const StyledInput = styled.input`
  margin: 20px 0 0 10px;
  padding: 8px;
  min-width: 100px;
  cursor: pointer;
  background-color: transparent;
  border: 2px, solid, rgb(150, 150, 150);
  border-style: double;
  border-radius: 5px;

  &:hover {
    background-color: rgb(105, 105, 105);
    color: rgb(255, 255, 255);
  }
  pointer-events:
  ${(({disabled}) => disabled && 'none')};
`;
