import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ForgotPassword from "./components/forgotPassword";
import ResetPassword from "./components/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
