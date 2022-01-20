import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html, body,#root {
        height: 100%;
        width: 100%;
        font-family: "Roboto", sans-serif;
        background-color: #111213;
        color: #f1f3f9;;
    }
`;