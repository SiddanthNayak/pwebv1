import { createGlobalStyle } from "styled-components";
import { variables } from "./theme";


export const GlobalStyle = createGlobalStyle`

${variables};

html,body{
    margin: 0;
    padding: 0;
    font-weight: 600;
}
*, *::after, *::before{
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    align-items: center;
    background: var(--navy);
    color: var(--slate);
    display: flex;
    font-family: var(--font-mono);
    font-size: 14px;
    /* height: 100vh; */
    justify-content: center;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

.StyledSection{
    margin: 2em;
    max-width: 600px;
}

.cardComponent{
    width: 100%;
    background-color: var(--light-navy);
    margin: 0em auto 1em auto;
    padding: 1em 2em;
    max-width: 320px;
}
.projectTitle{
    margin:0;
    font-size: large;
}
.heading{
      display: flex;
      align-items: center;
      font-family: var(--font-mono);
      width: 100%;
      white-space: nowrap;
      color: var(--green);

     &:after {
      content: '';
      /* display: block; */
      position: relative;
      top: 0px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
p{
    margin: 0px 0px 1.25em 0px;
    display: block;
    color: var(--white);
}
.projectSource{
    font-size: small;
    font-weight: 400;
}
a{
    text-decoration: none;
    color: var(--white);
}
a:hover{
    color: var(--green);
}
`;