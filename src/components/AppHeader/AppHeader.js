import { StyledNavLink, StyledWrapper } from "./styled";

export const AppHeader = () => {
  return (
    <StyledWrapper>
      <StyledNavLink className={({ isActive }) => isActive && "active"} to="/">
        Home
      </StyledNavLink>
      <StyledNavLink
        className={({ isActive }) => isActive && "active"}
        to="/form"
      >
        Form
      </StyledNavLink>
      <StyledNavLink
        className={({ isActive }) => isActive && "active"}
        to="/final-form"
      >
        Final-Form
      </StyledNavLink>
    </StyledWrapper>
  );
};
