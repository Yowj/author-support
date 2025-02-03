import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTemplate from "./pages/CreateTemplate";
import EditTemplate from "./pages/EditTemplate";
import DeleteTemplate from "./pages/DeleteTemplate";
import BankLoginPage from "./pages/LoginPage";
import BankSignUpPage from './pages/SignUpPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<BankSignUpPage />} />
        <Route path="/" element={<BankLoginPage />} />
        <Route path="/templates/create" element={<CreateTemplate />} />
        <Route path="/templates/edit/:id" element={<EditTemplate />} />
        <Route path="/templates/delete/:id" element={<DeleteTemplate />} />
      </Routes>
    </>
  );
};

export default App;
