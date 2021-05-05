import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
body {
  font-family: "Poppins", sans-serif;
  padding: 20px 30px;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}
`;
