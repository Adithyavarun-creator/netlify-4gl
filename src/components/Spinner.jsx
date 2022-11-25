import React from "react";
import { SpinnerContainer } from "../styles/SpinnerStyle";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </SpinnerContainer>
  );
};

export default Spinner;
