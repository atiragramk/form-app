import styled from "styled-components";

export const StyledNav = styled.nav`
    min-width: 300px
`

export const StyledUl = styled.ul`
  display: flex;
  padding: 0;
`;

export const StyledLi = styled.li.attrs({classNames : 'active'})`
  list-style: none;
  margin: 20px auto;
  font-size: 18px;
  a {
    text-decoration: none;
    color: rgb(48, 151, 253);
    &.active {
      color:  rgb(16 15 114);
    }
  }
`;
