import { Link } from "react-router-dom";

import { Ul, Li, Nav} from "./AppHeader.styled";

export const AppHeader = () => {
    return (
        <Nav>
            <Ul>
                <Li>
                  <Link to="/">Home</Link>
                </Li>
                <Li>
                  <Link to="/form">Form</Link>
                </Li>
                <Li>
                  <Link to="/final-form">Final-Form</Link>
                </Li>
            </Ul>
        </Nav>
    )
}