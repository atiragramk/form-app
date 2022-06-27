import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FinalForm } from "./components/FinalForm/";
import { Form } from "./components/Form";
import { AppHeader } from "./components/AppHeader";
import { StyledHeader } from "./styled";

export function App() {
  return (
    <div>
      <StyledHeader>
        <Router>
            <AppHeader/>
            <Routes>
                <Route path="form" element={<Form/>}/>
                <Route path="final-form" element={<FinalForm/>}/>
            </Routes>
        </Router>
      </StyledHeader>
    </div>
  );
}
