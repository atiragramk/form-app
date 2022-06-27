import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Lato', sans-serif;
}
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(8, 8, 8);
  text-align: center;
`;
