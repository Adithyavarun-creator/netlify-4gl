import React from "react";
import { SpinnerContainer } from "../styles/SpinnerStyle";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </SpinnerContainer>
  );
};

export default Spinner;
