import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmountPage from "./pages/AmountPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/amount-filled" element={<AmountPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
