import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 15px;
  border-radius: 10px;
  border: 2px solid
    ${({ error }) => (error ? "rgb(255, 56, 56)" : "rgb(48, 151, 253)")};
  width: 250px;
  margin: 20px 0 5px 0;
  text-align: center;
  &:focus {
    outline: none;
    border-color: ${({ error }) =>
      error ? "rgb(255, 56, 56)" : "rgb(20, 63, 106)"};
  }
`;

export const StyledError = styled.div`
  font-size: 11px;
  color: red;
  position: absolute;
  margin-bottom: 5px;
`;

export const StyledLink = styled.a`
  background: ${({ view }) =>
    view
      ? "url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat"
      : "url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat"};
  position: absolute;
  top: 35px;
  right: 10px;
  display: inline-block;
  width: 20px;
  height: 20px;
`;
