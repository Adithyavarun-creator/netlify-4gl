import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}


body {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  font-family: "Secular One", sans-serif;
  scroll-behavior: smooth;
  background-image: url("https://images.unsplash.com/photo-1577553698923-17f1a80ce5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-size: cover;
  object-fit: fill;
  background-repeat: no-repeat;
}

`;
