import styled from "styled-components";

export const StyledInput = styled.input.attrs({classNames: 'disabled'})`
  margin: 20px 0 0 10px;
  padding: 8px;
  min-width: 100px;
  cursor: pointer;
  background-color: transparent;
  border: 2px, solid, rgb(150, 150, 150);
  border-style: double;
  font-family: "Lato", sans-serif;
  border-radius: 5px;

  &:hover {
    background-color: rgb(105, 105, 105);
    color: rgb(255, 255, 255);
  }
  &.disabled {
    pointer-events: none;
  }
`;
