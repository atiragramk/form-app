import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FinalForm } from "./components/FinalForm/";
import { Form } from "./components/Form";
import { AppHeader } from "./components/AppHeader";

import "./app.scss";

export function App() {
  return (
    <div>
      <header className="app__header">
        <Router>
            <AppHeader/>
            <Routes>
                <Route path="form" element={<Form/>}/>
                <Route path="final-form" element={<FinalForm/>}/>
            </Routes>
        </Router>
      </header>
    </div>
  );
}
