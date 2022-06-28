import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledWrapper = styled.nav`
  min-width: 300px;
  display: flex;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 20px auto;
  font-size: 18px;
  color: rgb(48, 151, 253);
  &.active {
    color: rgb(16 15 114);
  }
`;
