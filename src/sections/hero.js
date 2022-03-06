import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`

    margin: 10em 2em;
    
    h1{
        margin-top: .25em;
    }
    .intro{
        color: var(--green);
        margin: 0em;
        line-height: 1.1;
        font-weight: 400;
    }
`;



class Hero extends Component {
  render() {
    return (
        <StyledHeroSection id="heroSection" className='StyledSection'>
            <p className='intro'>Hi, my name is</p>
            <h1 className = "hero">Siddanth Nayak</h1>
            <p>I am a Computer Science Engineering Gradtuate and I like to build Front-End for websites. 
                This is my Personal Portfolio Website I built to showcase my skills. Scroll down to know more about me.
            </p>
        </StyledHeroSection>
      
    )
  }
}

export default Hero