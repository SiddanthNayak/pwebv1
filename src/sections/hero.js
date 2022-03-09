import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`

    margin: 0em auto;

    @media (min-width: 1200px){
        margin: 15em auto;
    }
    
    h1{
        margin-top: .25em;
        @media (min-width: 1200px){
            font-size: 80px;
            margin-bottom: 0.5em;
        }
    }
    .intro{
        color: var(--green);
        font-size: var(--fz-lg);
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
            <p>I am a Computer Science Engineering Graduate and I like to build Front-End for websites. 
                This is my Personal Portfolio Website I built to showcase my skills. Scroll down to know more about me.
            </p>
        </StyledHeroSection>
      
    )
  }
}

export default Hero