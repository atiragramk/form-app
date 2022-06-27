import { NavLink } from "react-router-dom";

import { StyledUl, StyledLi, StyledNav} from "./styled";

export const AppHeader = () => {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                  <NavLink 
                  className={({isActive}) => isActive && 'active'}
                  to="/">Home</NavLink>
                </StyledLi>
                <StyledLi>
                  <NavLink 
                  className={({isActive}) => isActive && 'active'}
                  to="/form">Form</NavLink>
                </StyledLi>
                <StyledLi>
                  <NavLink 
                  className={({isActive}) => isActive && 'active'}
                  to="/final-form">Final-Form</NavLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    )
}