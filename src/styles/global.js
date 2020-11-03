import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #111538;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, p, span, strong, body, input, button {
    font-size: 1rem;
    font-weight: 400;
    color: "#111538";
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    color: #111538;
    margin-bottom: 5vh;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;