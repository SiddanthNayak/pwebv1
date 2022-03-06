import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
    max-width: 900px;
`;

const StyledText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        text-align: center;
    }
    .cta{
        border: 2px solid var(--green);
        color: var(--green);
        padding: 1em 2em;
        font-size: large;
        background-color: var(--navy);
        border-radius: var(--border-radius);
        cursor: pointer;
    }
    .cta:hover{
        background-color: var(--green-tint);
    }
`;

class Contact extends Component {
  render() {
    return (
        <StyledAboutSection id="contact" className='StyledSection'>
            <h2 className = "heading">Contact Me</h2>
            <StyledText>
                <h2>
                    Get in Touch!
                </h2>
                <p>
                    I am currently looking for opportunities in the role of a Front-End Developer. My inbox is always open.
                    Feel free to get in touch with me.
                </p>
                <button className='cta'>Say Hello</button>
            </StyledText>
        </StyledAboutSection>
      
    )
  }
}

export default Contact