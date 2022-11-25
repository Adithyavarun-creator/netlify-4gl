import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QRCodePage from "./pages/QRCodePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/ThemeProvider";
import { GlobalStyles } from "./styles/GlobalStyles";
import Invoice from "./components/Invoice";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/qr-code" element={<QRCodePage />} />
            <Route path="/invoice" element={<Invoice />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
