import React, { Component } from 'react'
import styled from 'styled-components'
import { email } from '../config';
const StyledContactSection = styled.section`
     margin: 10em auto;
`;

const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        margin-top: 0em;
    }
    
    .cta{
        border: 0.5px solid var(--green);
        text-align: center;
        color: var(--green);
        padding: 1em 2em;
        font-weight: 400;
        font-family: var(--font-mono);
        font-size: medium;
        background-color: var(--navy);
        border-radius: var(--border-radius);
        cursor: pointer;
    }
    .cta:hover{
        background-color: var(--green-tint);
        transition: var(--transition); 
    }
`;

class Contact extends Component {
  render() {
    return (
        <StyledContactSection id="contact" className='StyledSection'>
            <h2 className = "heading">Contact Me</h2>
            <StyledText>
                <h2>
                    Get in Touch!
                </h2>
                <p>
                    I am currently looking for opportunities in the role of a Front-End Developer. My inbox is always open.
                    Feel free to get in touch with me.
                </p>
                <a className="cta" href={`mailto:${email}`}>
                    Say Hello
                </a>
            </StyledText>
        </StyledContactSection>
      
    )
  }
}

export default Contact