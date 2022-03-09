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
    height: 100%;
    justify-content: center;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    @media (max-width: 1200px){
      font-size: 14px;
    }
    overflow-x: hidden;
  }

.StyledSection{
    /* margin-right: 2em;
    margin-left: 2em; */
    scroll-behavior: smooth;
    transition: var(--transition);
    /* overflow-y: scroll; */
    height: 100%;
    max-width: 850px;
    @media(max-width: 1200px){
      max-width: 320px;
    }
    
}

.cardComponent{
    width: 100%;
    background-color: var(--light-navy);
    margin: 0em auto 1em auto;
    padding: 1em 2em;
    border-radius: var(--border-radius);
    @media (max-width: 1200px){
      max-width: 320px;
    }
}
.cardComponent:hover{
        cursor: pointer;
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transform: translateY(-7px);
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

      @media (max-width: 1200px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
      @media (min-width: 1200px){
        width: 700px;
      }
    }
  }
p{
    margin: 0px 0px 1.25em 0px;
    display: block;
    color: var(--white);
    font-weight: 400;
    font-family: var(--font-mono);
    line-height: 1.1;
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