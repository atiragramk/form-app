import styled from "styled-components";

export const Nav = styled.nav`
    min-width: 300px
`

export const Ul = styled.ul`
  display: flex;
  padding: 0;
`;

export const Li = styled.li.attrs({classNames : 'link'})`
  list-style: none;
  margin: 20px auto;
  font-size: 18px;
  a {
    text-decoration: none;
    &:visited {
      color: rgb(48, 151, 253);
    }
    &:focus {
      color: rgb(20, 63, 106);
    }
  }
`;
