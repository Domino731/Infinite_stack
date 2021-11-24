import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    color: #293241;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  img {
    object-fit: cover;
  }
  input {
    border: none;
    background: transparent;
  }
  button {
    background: transparent;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
  }
`;
