import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QRCodePage from "./pages/QRCodePage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/qr-code" element={<QRCodePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
