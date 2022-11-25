import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import QRCodePage from "./pages/QRCodePage";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/ThemeProvider";
import { GlobalStyles } from "./styles/GlobalStyles";

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
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
